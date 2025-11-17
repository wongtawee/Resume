import Profile from '../models/Profile.js';
import { validationResult } from 'express-validator';

/**
 * @desc    Get profile
 * @route   GET /api/profile
 * @access  Public
 */
export const getProfile = async (req, res) => {
  try {
    // Get the first (and should be only) profile
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Error in getProfile:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching profile',
      error: error.message
    });
  }
};

/**
 * @desc    Create profile
 * @route   POST /api/profile
 * @access  Private (Admin only - for now public for setup)
 */
export const createProfile = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Check if profile already exists
    const existingProfile = await Profile.findOne();
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: 'Profile already exists. Use PUT to update.'
      });
    }

    // Create new profile
    const profile = await Profile.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: profile
    });
  } catch (error) {
    console.error('Error in createProfile:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating profile',
      error: error.message
    });
  }
};

/**
 * @desc    Update profile
 * @route   PUT /api/profile/:id
 * @access  Private (Admin only - for now public for setup)
 */
export const updateProfile = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;

    // Find and update profile
    const profile = await Profile.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true, // Return updated document
        runValidators: true // Run model validators
      }
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: profile
    });
  } catch (error) {
    console.error('Error in updateProfile:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages
      });
    }

    // Handle cast errors (invalid ID)
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid profile ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating profile',
      error: error.message
    });
  }
};
