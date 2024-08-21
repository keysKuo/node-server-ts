import express from 'express';
import catchAsync from '../utils/catchAsync';
import AuthController from '../controllers/auth.controller';
const router = express.Router();

router.post('/signUp', catchAsync(AuthController.signUp));

export default router;