import * as warrantyService from '../../services/warranty.service';
import * as productRepository from '../../repositories/product.repository';

jest.mock('../../repositories/product.repository');

describe('Warranty Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('verifyWarranty', () => {
        test('returns null if product not found', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue(null);
            const result = await warrantyService.verifyWarranty('SN123');
            expect(result).toBeNull();
        });

        test('returns INACTIVE if product is inactive', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue({
                id: 1, serialNumber: 'SN123', isActive: false
            });
            const result = await warrantyService.verifyWarranty('SN123');
            expect(result.warrantyStatus).toBe('INACTIVE');
        });

        test('returns EXPIRED if product warranty is passed', async () => {
            const pastDate = new Date();
            pastDate.setFullYear(pastDate.getFullYear() - 1);
            productRepository.findProductBySerialNumber.mockResolvedValue({
                id: 1, serialNumber: 'SN123', isActive: true, warrantyExpiry: pastDate
            });
            const result = await warrantyService.verifyWarranty('SN123');
            expect(result.warrantyStatus).toBe('EXPIRED');
        });

        test('returns ACTIVE if product warranty is in future', async () => {
            const futureDate = new Date();
            futureDate.setFullYear(futureDate.getFullYear() + 1);
            productRepository.findProductBySerialNumber.mockResolvedValue({
                id: 1, serialNumber: 'SN123', isActive: true, warrantyExpiry: futureDate
            });
            const result = await warrantyService.verifyWarranty('SN123');
            expect(result.warrantyStatus).toBe('ACTIVE');
        });
    });

    describe('getWarrantyDetails', () => {
        test('returns null if product not found', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue(null);
            const result = await warrantyService.getWarrantyDetails('SN123');
            expect(result).toBeNull();
        });

        test('returns correct details including repair aggregates', async () => {
            const futureDate = new Date();
            futureDate.setFullYear(futureDate.getFullYear() + 1);
            
            productRepository.findProductBySerialNumber.mockResolvedValue({
                id: 1, serialNumber: 'SN123', isActive: true, warrantyExpiry: futureDate,
                repairs: [
                    { repairDate: new Date('2024-01-02'), repairStatus: 'PENDING' },
                    { repairDate: new Date('2024-01-01'), repairStatus: 'COMPLETED' }
                ]
            });

            const result = await warrantyService.getWarrantyDetails('SN123');
            
            expect(result.warrantyStatus).toBe('ACTIVE');
            expect(result.totalRepairs).toBe(2);
            expect(result.openRepairs).toBe(1);
            expect(result.lastRepairStatus).toBe('PENDING'); // because '2024-01-02' is newer
        });

        test('handles products with no repairs', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue({
                id: 1, serialNumber: 'SN123', isActive: true, warrantyExpiry: new Date()
            });

            const result = await warrantyService.getWarrantyDetails('SN123');
            expect(result.totalRepairs).toBe(0);
            expect(result.openRepairs).toBe(0);
            expect(result.lastRepairDate).toBeNull();
        });
    });
});
