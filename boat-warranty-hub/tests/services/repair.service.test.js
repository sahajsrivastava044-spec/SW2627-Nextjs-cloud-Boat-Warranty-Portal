import * as repairService from '../../services/repair.service';
import * as productRepository from '../../repositories/product.repository';
import * as repairRepository from '../../repositories/repair.repository';

jest.mock('../../repositories/product.repository');
jest.mock('../../repositories/repair.repository');

describe('Repair Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addRepair', () => {
        test('throws error if product does not exist', async () => {
            productRepository.findProductById.mockResolvedValue(null);
            await expect(repairService.addRepair({ productId: 1 }))
                .rejects.toThrow("Product does not exist");
        });

        test('throws error if product is inactive', async () => {
            productRepository.findProductById.mockResolvedValue({ id: 1, isActive: false });
            await expect(repairService.addRepair({ productId: 1 }))
                .rejects.toThrow("Cannot create repair for an inactive product.");
        });

        test('creates repair if product is active', async () => {
            productRepository.findProductById.mockResolvedValue({ id: 1, isActive: true });
            const mockRepair = { id: 1 };
            repairRepository.createRepair.mockResolvedValue(mockRepair);
            const result = await repairService.addRepair({ productId: 1, issue: 'Broken' });
            expect(repairRepository.createRepair).toHaveBeenCalledWith({ productId: 1, issue: 'Broken' });
            expect(result).toEqual(mockRepair);
        });
    });

    test('getRepairById calls repository', async () => {
        repairRepository.findRepairById.mockResolvedValue({ id: 1 });
        const result = await repairService.getRepairById(1);
        expect(repairRepository.findRepairById).toHaveBeenCalledWith(1);
        expect(result).toEqual({ id: 1 });
    });

    test('getRepairsByProductId calls repository', async () => {
        repairRepository.findRepairByProductId.mockResolvedValue([{ id: 1 }]);
        const result = await repairService.getRepairsByProductId(1);
        expect(repairRepository.findRepairByProductId).toHaveBeenCalledWith(1);
        expect(result).toEqual([{ id: 1 }]);
    });

    test('editRepair calls repository', async () => {
        repairRepository.updateRepair.mockResolvedValue({ id: 1 });
        const result = await repairService.editRepair(1, { status: 'COMPLETED' });
        expect(repairRepository.updateRepair).toHaveBeenCalledWith(1, { status: 'COMPLETED' });
        expect(result).toEqual({ id: 1 });
    });

    test('removeRepair calls repository', async () => {
        repairRepository.deleteRepair.mockResolvedValue({ id: 1 });
        const result = await repairService.removeRepair(1);
        expect(repairRepository.deleteRepair).toHaveBeenCalledWith(1);
        expect(result).toEqual({ id: 1 });
    });
});
