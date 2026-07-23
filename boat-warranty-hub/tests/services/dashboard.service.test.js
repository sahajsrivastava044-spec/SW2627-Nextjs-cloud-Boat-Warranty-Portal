import * as dashboardService from '../../services/dashboard.service';
import * as productRepository from '../../repositories/product.repository';
import * as repairRepository from '../../repositories/repair.repository';

jest.mock('../../repositories/product.repository');
jest.mock('../../repositories/repair.repository');

describe('Dashboard Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getDashboardStats aggregates counts correctly', async () => {
        productRepository.countProducts.mockResolvedValue(100);
        productRepository.countActiveProducts.mockResolvedValue(80);
        productRepository.countExpiredProducts.mockResolvedValue(20);
        
        repairRepository.countRepairs.mockResolvedValue(50);
        repairRepository.countPendingRepairs.mockResolvedValue(5);
        repairRepository.countCompletedRepairs.mockResolvedValue(45);

        const result = await dashboardService.getDashboardStats();

        expect(result).toEqual({
            totalProducts: 100,
            activeWarranties: 80,
            expiredWarranties: 20,
            totalRepairs: 50,
            pendingRepairs: 5,
            completedRepairs: 45
        });

        expect(productRepository.countProducts).toHaveBeenCalled();
        expect(repairRepository.countRepairs).toHaveBeenCalled();
    });
});
