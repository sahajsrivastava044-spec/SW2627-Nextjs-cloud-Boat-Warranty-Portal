import * as productsService from '../../services/products.service';
import * as productRepository from '../../repositories/product.repository';

jest.mock('../../repositories/product.repository');

describe('Products Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getAllProducts calls repository', async () => {
        productRepository.findAllProducts.mockResolvedValue([{ id: 1 }]);
        const result = await productsService.getAllProducts();
        expect(productRepository.findAllProducts).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1 }]);
    });

    describe('addProduct', () => {
        test('throws error if product already exists', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue({ id: 1 });
            await expect(productsService.addProduct({ serialNumber: 'SN123' }))
                .rejects.toThrow("Product already exists");
        });

        test('creates product with parsed dates', async () => {
            productRepository.findProductBySerialNumber.mockResolvedValue(null);
            const mockProduct = { id: 1 };
            productRepository.createProduct.mockResolvedValue(mockProduct);

            const result = await productsService.addProduct({
                serialNumber: 'SN123',
                purchaseDate: '2024-01-01',
                warrantyExpiry: '2025-01-01'
            });

            expect(productRepository.createProduct).toHaveBeenCalledWith({
                serialNumber: 'SN123',
                purchaseDate: new Date('2024-01-01'),
                warrantyExpiry: new Date('2025-01-01')
            });
            expect(result).toEqual(mockProduct);
        });
    });

    describe('getProductById', () => {
        test('throws error if product not found', async () => {
            productRepository.findProductById.mockResolvedValue(null);
            await expect(productsService.getProductById(1))
                .rejects.toThrow("Product not found");
        });

        test('returns product', async () => {
            const mockProduct = { id: 1 };
            productRepository.findProductById.mockResolvedValue(mockProduct);
            const result = await productsService.getProductById(1);
            expect(result).toEqual(mockProduct);
        });
    });

    describe('updateExistingProduct', () => {
        test('throws error if product not found', async () => {
            productRepository.findProductById.mockResolvedValue(null);
            await expect(productsService.updateExistingProduct(1, {}))
                .rejects.toThrow("Product not found");
        });

        test('updates product', async () => {
            productRepository.findProductById.mockResolvedValue({ id: 1 });
            const mockUpdated = { id: 1, name: 'Updated' };
            productRepository.updateProduct.mockResolvedValue(mockUpdated);
            const result = await productsService.updateExistingProduct(1, { name: 'Updated' });
            expect(productRepository.updateProduct).toHaveBeenCalledWith(1, { name: 'Updated' });
            expect(result).toEqual(mockUpdated);
        });
    });

    describe('deleteExisitingProduct', () => {
        test('throws error if product does not exist', async () => {
            productRepository.findProductById.mockResolvedValue(null);
            await expect(productsService.deleteExisitingProduct(1))
                .rejects.toThrow("Product does not exist");
        });

        test('deletes product', async () => {
            productRepository.findProductById.mockResolvedValue({ id: 1 });
            const mockDeleted = { id: 1 };
            productRepository.deleteProduct.mockResolvedValue(mockDeleted);
            const result = await productsService.deleteExisitingProduct(1);
            expect(productRepository.deleteProduct).toHaveBeenCalledWith(1);
            expect(result).toEqual(mockDeleted);
        });
    });
});
