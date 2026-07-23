import { GET } from '../../app/api/warranty/[serial]/route';
import * as warrantyService from '../../services/warranty.service';

jest.mock('../../services/warranty.service');

describe('Warranty API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/warranty/[serial]', () => {
        test('returns 200 and details', async () => {
            warrantyService.getWarrantyDetails.mockResolvedValue({ id: 1, serialNumber: 'SN123', warrantyStatus: 'ACTIVE' });
            
            const req = new Request('http://localhost/api/warranty/SN123');
            const res = await GET(req, { params: Promise.resolve({ serial: 'SN123' }) });
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.warrantyStatus).toBe('ACTIVE');
            expect(body.id).toBe(1);
        });

        test('returns 404 if not found', async () => {
            warrantyService.getWarrantyDetails.mockResolvedValue(null);
            
            const req = new Request('http://localhost/api/warranty/SN123');
            const res = await GET(req, { params: Promise.resolve({ serial: 'SN123' }) });
            
            expect(res.status).toBe(404);
            const body = await res.json();
            expect(body.message).toBe("Product not found");
        });
    });
});
