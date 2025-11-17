import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  // Project Information
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  longDescription: {
    type: String,
    trim: true,
    maxlength: [2000, 'Long description cannot exceed 2000 characters'],
    default: ''
  },
  
  // Images
  thumbnail: {
    type: String,
    trim: true,
    default: ''
  },
  images: [{
    type: String,
    trim: true
  }],
  
  // Technologies Used
  technologies: [{
    type: String,
    required: [true, 'At least one technology is required'],
    trim: true
  }],
  
  // Project Links
  liveUrl: {
    type: String,
    trim: true,
    default: '',
    validate: {
      validator: function(v) {
        if (!v) return true; // Allow empty string
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL'
    }
  },
  githubUrl: {
    type: String,
    trim: true,
    default: '',
    validate: {
      validator: function(v) {
        if (!v) return true; // Allow empty string
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL'
    }
  },
  
  // Display Options
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
workSchema.index({ featured: -1, order: 1 });
workSchema.index({ createdAt: -1 });
workSchema.index({ title: 'text', description: 'text' }); // Text search

// Virtual for project URL
workSchema.virtual('projectUrl').get(function() {
  return `/works/${this._id}`;
});

// Method to get featured projects
workSchema.statics.getFeatured = function() {
  return this.find({ featured: true }).sort({ order: 1, createdAt: -1 });
};

// Method to get all projects sorted
workSchema.statics.getAllSorted = function() {
  return this.find().sort({ order: 1, createdAt: -1 });
};

// Pre-save middleware to ensure at least one technology
workSchema.pre('save', function(next) {
  if (this.technologies.length === 0) {
    next(new Error('At least one technology is required'));
  }
  next();
});

const Work = mongoose.model('Work', workSchema);

export default Work;
