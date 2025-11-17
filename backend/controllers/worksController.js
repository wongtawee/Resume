import Work from '../models/Work.js';
import { validationResult } from 'express-validator';

/**
 * @desc    Get all works
 * @route   GET /api/works
 * @access  Public
 */
export const getAllWorks = async (req, res) => {
  try {
    const { featured } = req.query;
    
    let works;
    if (featured === 'true') {
      works = await Work.getFeatured();
    } else {
      works = await Work.getAllSorted();
    }

    res.status(200).json({
      success: true,
      count: works.length,
      data: works
    });
  } catch (error) {
    console.error('Error in getAllWorks:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching works',
      error: error.message
    });
  }
};

/**
 * @desc    Get single work by ID
 * @route   GET /api/works/:id
 * @access  Public
 */
export const getWorkById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const work = await Work.findById(id);
    
    if (!work) {
      return res.status(404).json({
        success: false,
        message: 'Work not found'
      });
    }

    res.status(200).json({
      success: true,
      data: work
    });
  } catch (error) {
    console.error('Error in getWorkById:', error);
    
    // Handle cast errors (invalid ID)
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid work ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error fetching work',
      error: error.message
    });
  }
};

/**
 * @desc    Create new work
 * @route   POST /api/works
 * @access  Private (Admin only - for now public for setup)
 */
export const createWork = async (req, res) => {
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

    // Create new work
    const work = await Work.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Work created successfully',
      data: work
    });
  } catch (error) {
    console.error('Error in createWork:', error);
    
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
      message: 'Error creating work',
      error: error.message
    });
  }
};

/**
 * @desc    Update work
 * @route   PUT /api/works/:id
 * @access  Private (Admin only - for now public for setup)
 */
export const updateWork = async (req, res) => {
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

    // Find and update work
    const work = await Work.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true, // Return updated document
        runValidators: true // Run model validators
      }
    );

    if (!work) {
      return res.status(404).json({
        success: false,
        message: 'Work not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Work updated successfully',
      data: work
    });
  } catch (error) {
    console.error('Error in updateWork:', error);
    
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
        message: 'Invalid work ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating work',
      error: error.message
    });
  }
};

/**
 * @desc    Delete work
 * @route   DELETE /api/works/:id
 * @access  Private (Admin only - for now public for setup)
 */
export const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;

    const work = await Work.findByIdAndDelete(id);

    if (!work) {
      return res.status(404).json({
        success: false,
        message: 'Work not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Work deleted successfully',
      data: {}
    });
  } catch (error) {
    console.error('Error in deleteWork:', error);
    
    // Handle cast errors (invalid ID)
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid work ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error deleting work',
      error: error.message
    });
  }
};
