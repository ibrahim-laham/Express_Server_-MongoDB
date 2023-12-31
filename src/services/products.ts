// product services
import Product, { ProductDocument } from "../models/Product";

const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getAllProductsService = async (): Promise<ProductDocument[]> => {
  return Product.find();
};

const getProductByTitleService = async (
  productTitle: string
): Promise<ProductDocument | {}> => {
  return Product.find({ title: productTitle });
};

const updateProductService = async (productId: string, updateValue: string) => {
  try {
   await Product.updateMany(
      { _id: productId },
      { $set: { title: updateValue } }
    );
  } catch (e) {
    console.log(e);
  }
};

const deleteProductByTitleService = async (productTitle: string) => {
  await Product.deleteMany({title: productTitle});
}

export default {
  createProductService,
  getProductByTitleService,
  getAllProductsService,
  updateProductService,
  deleteProductByTitleService,
};
