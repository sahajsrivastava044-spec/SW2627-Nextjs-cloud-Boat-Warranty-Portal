import { GET } from '../../app/api/admin/notifications/route';
import * as repairRepository from '../../repositories/repair.repository';

jest.mock('../../repositories/repair.repository');

describe('Admin Notifications API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/admin/notifications', () => {
        test('returns 200 and notifications mapped correctly', async () => {
            const mockRepairs = [
                {
                    id: 1,
                    issue: 'Broken screen',
                    repairStatus: 'PENDING',
                    createdAt: new Date(),
                    product: { productName: 'Boat 1', serialNumber: 'SN1' }
                },
                {
                    id: 2,
                    issue: 'Battery issue',
                    repairStatus: 'COMPLETED',
                    createdAt: new Date(),
                    product: { productName: 'Boat 2', serialNumber: 'SN2' }
                }
            ];
            
            repairRepository.getRecentRepairs.mockResolvedValue(mockRepairs);
            repairRepository.countPendingRepairs.mockResolvedValue(1);

            const req = new Request('http://localhost/api/admin/notifications');
            const res = await GET(req);
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.pendingCount).toBe(1);
            expect(body.totalCount).toBe(2);
            expect(body.data[0].context).toBe('warning'); // because PENDING
            expect(body.data[1].context).toBe('success'); // because COMPLETED
        });

        test('returns 500 on error', async () => {
            repairRepository.getRecentRepairs.mockRejectedValue(new Error('DB error'));
            
            const req = new Request('http://localhost/api/admin/notifications');
            const res = await GET(req);
            
            expect(res.status).toBe(500);
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Failed to fetch notifications");
        });
    });
});
