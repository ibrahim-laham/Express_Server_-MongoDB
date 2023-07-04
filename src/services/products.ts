// product services
import {ProductDocument} from "../models/Product";

const createProductService = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save();
}

export default {createProductService};