import express from 'express';
import { body } from 'express-validator';
import {
  getProfile,
  createProfile,
  updateProfile
} from '../controllers/profileController.js';

const router = express.Router();

// Validation rules
const profileValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  
  body('title')
    .trim()
    .notEmpty().withMessage('Professional title is required')
    .isLength({ max: 150 }).withMessage('Title cannot exceed 150 characters'),
  
  body('bio')
    .trim()
    .notEmpty().withMessage('Bio is required')
    .isLength({ max: 1000 }).withMessage('Bio cannot exceed 1000 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('profileImage')
    .optional()
    .trim(),
  
  body('phone')
    .optional()
    .trim(),
  
  body('location')
    .optional()
    .trim(),
  
  body('socialLinks.github')
    .optional()
    .trim(),
  
  body('socialLinks.linkedin')
    .optional()
    .trim(),
  
  body('socialLinks.twitter')
    .optional()
    .trim(),
  
  body('socialLinks.facebook')
    .optional()
    .trim(),
  
  body('education')
    .optional()
    .isArray().withMessage('Education must be an array'),
  
  body('education.*.degree')
    .if(body('education').exists())
    .trim()
    .notEmpty().withMessage('Degree is required'),
  
  body('education.*.institution')
    .if(body('education').exists())
    .trim()
    .notEmpty().withMessage('Institution is required'),
  
  body('education.*.year')
    .if(body('education').exists())
    .trim()
    .notEmpty().withMessage('Year is required'),
  
  body('experience')
    .optional()
    .isArray().withMessage('Experience must be an array'),
  
  body('experience.*.position')
    .if(body('experience').exists())
    .trim()
    .notEmpty().withMessage('Position is required'),
  
  body('experience.*.company')
    .if(body('experience').exists())
    .trim()
    .notEmpty().withMessage('Company is required'),
  
  body('experience.*.period')
    .if(body('experience').exists())
    .trim()
    .notEmpty().withMessage('Period is required'),
  
  body('skills')
    .optional()
    .isArray().withMessage('Skills must be an array'),
  
  body('skills.*.category')
    .if(body('skills').exists())
    .trim()
    .notEmpty().withMessage('Skill category is required'),
  
  body('skills.*.items')
    .if(body('skills').exists())
    .isArray().withMessage('Skill items must be an array')
    .notEmpty().withMessage('At least one skill item is required')
];

// Routes
router.get('/', getProfile);
router.post('/', profileValidation, createProfile);
router.put('/:id', profileValidation, updateProfile);

export default router;
