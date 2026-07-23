import prisma from '../__mocks__/prisma';
import * as userRepository from '../../repositories/user.repository';

describe('User Repository', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('findUserByEmail calls prisma.user.findUnique', async () => {
        const mockUser = { id: 1, email: 'test@test.com' };
        prisma.user.findUnique.mockResolvedValue(mockUser);

        const result = await userRepository.findUserByEmail('test@test.com');

        expect(prisma.user.findUnique).toHaveBeenCalledWith({
            where: { email: 'test@test.com' }
        });
        expect(result).toEqual(mockUser);
    });

    test('findUserByEmailOrPhone calls prisma.user.findFirst', async () => {
        const mockUser = { id: 1, email: 'test@test.com' };
        prisma.user.findFirst.mockResolvedValue(mockUser);

        const result = await userRepository.findUserByEmailOrPhone('test@test.com');

        expect(prisma.user.findFirst).toHaveBeenCalledWith({
            where: {
                OR: [
                    { email: 'test@test.com' },
                    { phone: 'test@test.com' }
                ]
            }
        });
        expect(result).toEqual(mockUser);
    });

    test('findUserByEmailOrPhone returns null if identifier is not provided', async () => {
        const result = await userRepository.findUserByEmailOrPhone();
        expect(result).toBeNull();
        expect(prisma.user.findFirst).not.toHaveBeenCalled();
    });

    test('findUserById calls prisma.user.findUnique', async () => {
        const mockUser = { id: 1 };
        prisma.user.findUnique.mockResolvedValue(mockUser);

        const result = await userRepository.findUserById(1);

        expect(prisma.user.findUnique).toHaveBeenCalledWith({
            where: { id: 1 }
        });
        expect(result).toEqual(mockUser);
    });

    test('createUser calls prisma.user.create', async () => {
        const mockData = { email: 'test@test.com', name: 'Test' };
        const mockUser = { id: 1, ...mockData };
        prisma.user.create.mockResolvedValue(mockUser);

        const result = await userRepository.createUser(mockData);

        expect(prisma.user.create).toHaveBeenCalledWith({
            data: mockData
        });
        expect(result).toEqual(mockUser);
    });
});
