import { POST as RegisterPOST } from '../../app/api/auth/register/route';
import { POST as LoginPOST } from '../../app/api/auth/login/route';
import * as authService from '../../services/auth.service';

jest.mock('../../services/auth.service');

describe('Auth API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /api/auth/register', () => {
        test('returns 201 on successful registration', async () => {
            const validPayload = {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                confirmPassword: 'password123'
            };
            
            authService.registration.mockResolvedValue({ id: 1, name: 'John Doe', email: 'john@example.com' });
            
            const req = new Request('http://localhost/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(validPayload)
            });
            
            const res = await RegisterPOST(req);
            expect(res.status).toBe(201);
            
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data.id).toBe(1);
        });

        test('returns 400 on validation error', async () => {
            const invalidPayload = { email: 'invalid' }; // missing required fields
            
            const req = new Request('http://localhost/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(invalidPayload)
            });
            
            const res = await RegisterPOST(req);
            expect(res.status).toBe(400);
            
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Validation failed");
        });
    });

    describe('POST /api/auth/login', () => {
        test('returns 200 on successful login', async () => {
            const validPayload = {
                email: 'john@example.com',
                password: 'password123'
            };
            
            authService.loginUser.mockResolvedValue({ id: 1, name: 'John Doe', email: 'john@example.com' });
            
            const req = new Request('http://localhost/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(validPayload)
            });
            
            const res = await LoginPOST(req);
            expect(res.status).toBe(200);
            
            const body = await res.json();
            expect(body.success).toBe(true);
            expect(body.data.id).toBe(1);
        });

        test('returns 401 on login failure', async () => {
            const validPayload = {
                email: 'john@example.com',
                password: 'wrongpassword'
            };
            
            authService.loginUser.mockRejectedValue(new Error('Invalid password or email'));
            
            const req = new Request('http://localhost/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(validPayload)
            });
            
            const res = await LoginPOST(req);
            expect(res.status).toBe(401);
            
            const body = await res.json();
            expect(body.success).toBe(false);
            expect(body.message).toBe("Invalid password or email");
        });
    });
});
