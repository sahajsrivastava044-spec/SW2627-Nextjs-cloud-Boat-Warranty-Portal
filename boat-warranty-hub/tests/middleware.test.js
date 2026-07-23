import { middleware } from '../middleware';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

jest.mock('next-auth/jwt');

describe('Middleware', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const createRequest = (pathname, method = 'GET') => {
        return new NextRequest(`http://localhost${pathname}`, { method });
    };

    test('allows public routes', async () => {
        const req = createRequest('/api/auth/login');
        const res = await middleware(req);
        expect(res).toBeDefined();
        expect(getToken).not.toHaveBeenCalled();
    });

    test('returns 401 if no token on protected route', async () => {
        getToken.mockResolvedValue(null);
        const req = createRequest('/api/dashboard');
        
        const res = await middleware(req);
        
        expect(res.status).toBe(401);
        const body = await res.json();
        expect(body.success).toBe(false);
    });

    test('returns 403 if admin route and user is not admin', async () => {
        getToken.mockResolvedValue({ role: 'USER' });
        const req = createRequest('/api/dashboard');
        
        const res = await middleware(req);
        
        expect(res.status).toBe(403);
        const body = await res.json();
        expect(body.success).toBe(false);
    });

    test('allows admin route if user is admin', async () => {
        getToken.mockResolvedValue({ role: 'ADMIN' });
        const req = createRequest('/api/dashboard');
        
        const res = await middleware(req);
        
        expect(res).toBeDefined();
    });

    test('allows normal protected route if user is authenticated', async () => {
        // e.g. GET /api/products is not in ADMIN_ONLY_ROUTES with GET method
        getToken.mockResolvedValue({ role: 'USER' });
        const req = createRequest('/api/products', 'GET');
        
        const res = await middleware(req);
        
        expect(res).toBeDefined();
    });
});
