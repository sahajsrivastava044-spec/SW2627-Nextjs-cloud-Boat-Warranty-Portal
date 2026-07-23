import { productSchema, registerSchema, loginSchema, createRepairSchema, updateRepairSchema } from '../../lib/validations';

describe('Validations', () => {
    describe('productSchema', () => {
        test('validates correct product', () => {
            const data = {
                serialNumber: 'SN123',
                productName: 'Boat',
                purchaseDate: '2024-01-01',
                warrantyExpiry: '2025-01-01'
            };
            const result = productSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        test('fails on missing fields', () => {
            const data = { serialNumber: 'SN123' };
            const result = productSchema.safeParse(data);
            expect(result.success).toBe(false);
        });
    });

    describe('registerSchema', () => {
        test('validates correct user', () => {
            const data = {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                phone: '1234567890'
            };
            const result = registerSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        test('fails on short password', () => {
            const data = {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'short'
            };
            const result = registerSchema.safeParse(data);
            expect(result.success).toBe(false);
            expect(result.error.flatten().fieldErrors.password).toBeDefined();
        });
    });

    describe('createRepairSchema', () => {
        test('validates correct repair', () => {
            const data = {
                issue: 'Engine problem',
                repairStatus: 'PENDING',
                productId: 1,
                estimatedCompletion: '2024-12-31'
            };
            const result = createRepairSchema.safeParse(data);
            expect(result.success).toBe(true);
            // It should transform estimatedCompletion to ISO string if provided
            expect(result.data.estimatedCompletion).toBeDefined();
        });

        test('fails on invalid status', () => {
            const data = {
                issue: 'Engine problem',
                repairStatus: 'INVALID_STATUS',
                productId: 1
            };
            const result = createRepairSchema.safeParse(data);
            expect(result.success).toBe(false);
        });
    });
});
