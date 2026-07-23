import { GET, POST } from '../../app/api/products/route';
import { GET as GET_ID, PUT as PUT_ID, DELETE as DELETE_ID } from '../../app/api/products/[id]/route';
import * as productsService from '../../services/products.service';

jest.mock('../../services/products.service');

describe('Products API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/products', () => {
        test('returns 200 and products', async () => {
            productsService.getAllProducts.mockResolvedValue([{ id: 1, name: 'Boat' }]);
            
            const req = new Request('http://localhost/api/products');
            const res = await GET(req);
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body).toEqual([{ id: 1, name: 'Boat' }]);
        });

        test('returns 500 on error', async () => {
            productsService.getAllProducts.mockRejectedValue(new Error('DB Error'));
            
            const req = new Request('http://localhost/api/products');
            const res = await GET(req);
            
            expect(res.status).toBe(500);
            const body = await res.json();
            expect(body.error).toBe("Failed to fetch products");
        });
    });

    describe('POST /api/products', () => {
        const validPayload = {
            serialNumber: 'SN123',
            productName: 'Boat',
            purchaseDate: '2024-01-01T00:00:00.000Z',
            warrantyExpiry: '2025-01-01T00:00:00.000Z'
        };

        test('returns 201 on success', async () => {
            productsService.addProduct.mockResolvedValue({ id: 1, ...validPayload });
            
            const req = new Request('http://localhost/api/products', {
                method: 'POST',
                body: JSON.stringify(validPayload)
            });
            const res = await POST(req);
            
            expect(res.status).toBe(201);
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data).toHaveProperty('id');
        });

        test('returns 400 on validation failure', async () => {
            const req = new Request('http://localhost/api/products', {
                method: 'POST',
                body: JSON.stringify({}) // missing fields
            });
            const res = await POST(req);
            
            expect(res.status).toBe(400);
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Validation failed");
        });
    });

    describe('GET /api/products/[id]', () => {
        test('returns 200 and product', async () => {
            productsService.getProductById.mockResolvedValue({ id: 1, name: 'Boat' });
            
            const req = new Request('http://localhost/api/products/1');
            const res = await GET_ID(req, { params: Promise.resolve({ id: '1' }) });
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data).toEqual({ id: 1, name: 'Boat' });
        });
    });

    describe('PUT /api/products/[id]', () => {
        test('returns 200 and updated product', async () => {
            productsService.updateExistingProduct.mockResolvedValue({ id: 1, name: 'Updated Boat' });
            
            const req = new Request('http://localhost/api/products/1', {
                method: 'PUT',
                body: JSON.stringify({ name: 'Updated Boat' })
            });
            const res = await PUT_ID(req, { params: Promise.resolve({ id: '1' }) });
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data.name).toBe('Updated Boat');
        });
    });

    describe('DELETE /api/products/[id]', () => {
        test('returns 200 on success', async () => {
            productsService.deleteExisitingProduct.mockResolvedValue({ id: 1 });
            
            const req = new Request('http://localhost/api/products/1', { method: 'DELETE' });
            const res = await DELETE_ID(req, { params: Promise.resolve({ id: '1' }) });
            
            expect(res.status).toBe(200);
            const body = await res.json();
            expect(body.success).toBe(true);
        });
    });
});
