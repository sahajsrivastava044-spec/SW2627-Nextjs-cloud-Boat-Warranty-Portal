// Global test setup
// Mock Prisma
jest.mock('@/lib/prisma', () => require('./__mocks__/prisma'));

// Mock Auth
jest.mock('@/lib/auth', () => require('./__mocks__/auth'));

// Mock Storage
jest.mock('@/lib/storage', () => require('./__mocks__/storage'));

// Mock Logger
jest.mock('@/lib/logger', () => require('./__mocks__/logger'));

// Clear all mocks before each test
beforeEach(() => {
    jest.clearAllMocks();
});
