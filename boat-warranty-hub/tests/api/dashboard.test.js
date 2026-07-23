import { GET } from '../../app/api/dashboard/stats/route';
import * as dashboardService from '../../services/dashboard.service';

jest.mock('../../services/dashboard.service');

describe('Dashboard API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/dashboard/stats', () => {
        test('returns 200 and stats', async () => {
            const mockStats = { totalProducts: 100, activeWarranties: 80 };
            dashboardService.getDashboardStats.mockResolvedValue(mockStats);
            
            const req = new Request('http://localhost/api/dashboard/stats');
            const res = await GET(req);
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data).toEqual(mockStats);
        });

        test('returns 500 on error', async () => {
            dashboardService.getDashboardStats.mockRejectedValue(new Error('DB Error'));
            
            const req = new Request('http://localhost/api/dashboard/stats');
            const res = await GET(req);
            
            expect(res.status).toBe(500);
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Failed to fetch dashboard statistics");
        });
    });
});
