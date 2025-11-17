import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  title: {
    type: String,
    required: [true, 'Professional title is required'],
    trim: true,
    maxlength: [150, 'Title cannot exceed 150 characters']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    trim: true,
    maxlength: [1000, 'Bio cannot exceed 1000 characters']
  },
  profileImage: {
    type: String,
    trim: true,
    default: ''
  },
  
  // Contact Information
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  location: {
    type: String,
    trim: true,
    default: ''
  },
  
  // Social Links
  socialLinks: {
    github: {
      type: String,
      trim: true,
      default: ''
    },
    linkedin: {
      type: String,
      trim: true,
      default: ''
    },
    twitter: {
      type: String,
      trim: true,
      default: ''
    },
    facebook: {
      type: String,
      trim: true,
      default: ''
    }
  },
  
  // Education History
  education: [{
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
      trim: true
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    }
  }],
  
  // Work Experience
  experience: [{
    position: {
      type: String,
      required: [true, 'Position is required'],
      trim: true
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    technologies: [{
      type: String,
      trim: true
    }]
  }],
  
  // Skills
  skills: [{
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      trim: true
    },
    items: [{
      type: String,
      required: [true, 'Skill item is required'],
      trim: true
    }]
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
profileSchema.index({ email: 1 });
profileSchema.index({ createdAt: -1 });

// Virtual for full profile URL (if needed)
profileSchema.virtual('profileUrl').get(function() {
  return `/profile/${this._id}`;
});

// Method to get public profile (exclude sensitive data if any)
profileSchema.methods.getPublicProfile = function() {
  const profile = this.toObject();
  // Add any filtering logic here if needed
  return profile;
};

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
