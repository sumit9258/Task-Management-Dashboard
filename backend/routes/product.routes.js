import express from "express";
import { 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProduct, 
  getAllProducts 
} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

//http://localhost:3000/api/product POST
router.post('/', authMiddleware, upload.single('image'), createProduct);
//http://localhost:3000/api/product/:id PUT
router.put('/:id', authMiddleware, upload.single('image'), updateProduct);
//http://localhost:3000/api/product/:id DELETE
router.delete('/:id', authMiddleware, deleteProduct);
//http://localhost:3000/api/product/:id GET
router.get('/:id', getProduct);
//http://localhost:3000/api/product GET
router.get('/', getAllProducts);

export default router;