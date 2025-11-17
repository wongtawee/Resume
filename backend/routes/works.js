import express from 'express';
import { body } from 'express-validator';
import {
  getAllWorks,
  getWorkById,
  createWork,
  updateWork,
  deleteWork
} from '../controllers/worksController.js';

const router = express.Router();

// Validation rules
const workValidation = [
  body('title')
    .trim()
    .notEmpty().withMessage('Project title is required')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  
  body('description')
    .trim()
    .notEmpty().withMessage('Project description is required')
    .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
  
  body('longDescription')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Long description cannot exceed 2000 characters'),
  
  body('thumbnail')
    .optional()
    .trim(),
  
  body('images')
    .optional()
    .isArray().withMessage('Images must be an array'),
  
  body('technologies')
    .notEmpty().withMessage('Technologies are required')
    .isArray().withMessage('Technologies must be an array')
    .custom((value) => {
      if (value.length === 0) {
        throw new Error('At least one technology is required');
      }
      return true;
    }),
  
  body('liveUrl')
    .optional()
    .trim()
    .custom((value) => {
      if (value && !/^https?:\/\/.+/.test(value)) {
        throw new Error('Please provide a valid URL');
      }
      return true;
    }),
  
  body('githubUrl')
    .optional()
    .trim()
    .custom((value) => {
      if (value && !/^https?:\/\/.+/.test(value)) {
        throw new Error('Please provide a valid URL');
      }
      return true;
    }),
  
  body('featured')
    .optional()
    .isBoolean().withMessage('Featured must be a boolean'),
  
  body('order')
    .optional()
    .isInt({ min: 0 }).withMessage('Order must be a positive integer')
];

// Routes
router.get('/', getAllWorks);
router.get('/:id', getWorkById);
router.post('/', workValidation, createWork);
router.put('/:id', workValidation, updateWork);
router.delete('/:id', deleteWork);

export default router;
