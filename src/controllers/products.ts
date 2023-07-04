// product controller
import {Request, Response} from "express";

import productServices from "../services/products";
import Product from "../models/Product";

export const createProduct =  async (req: Request, res: Response) => {
  const productInfo = new Product({
    title: req.body.title,
    price: req.body.price,
  })
  const product = await productServices.createProductService(productInfo);

  res.status(200).json(product)
} 

export const getProduct = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "get product",
  })
}