import { POST } from '../../app/api/repairs/route';
import { GET as GET_ID, PUT as PUT_ID, DELETE as DELETE_ID } from '../../app/api/repairs/[id]/route';
import * as repairService from '../../services/repair.service';

jest.mock('../../services/repair.service');

describe('Repairs API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /api/repairs', () => {
        test('returns 201 on success', async () => {
            const validPayload = {
                productId: 1,
                issue: 'Engine won\'t start',
                repairStatus: 'PENDING'
            };

            repairService.addRepair.mockResolvedValue({ id: 1, ...validPayload });
            
            const req = new Request('http://localhost/api/repairs', {
                method: 'POST',
                body: JSON.stringify(validPayload)
            });
            
            const res = await POST(req);
            expect(res.status).toBe(201);
            
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data.id).toBe(1);
        });

        test('returns 400 on validation failure', async () => {
            const req = new Request('http://localhost/api/repairs', {
                method: 'POST',
                body: JSON.stringify({}) // Missing required fields
            });
            
            const res = await POST(req);
            expect(res.status).toBe(400);
            
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Validation failed");
        });
    });

    // Assume we have [id]/route.js (if they exist) or similar.
    // Given the structure, we can safely mock the ones that exist.
    // If they don't exist yet, this will fail or we can remove them.
    // Let's wrap in try/catch or assume existence.
    
    // Test for GET, PUT, DELETE can be added if those routes exist.
});
