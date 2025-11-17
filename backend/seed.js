import dotenv from 'dotenv';
import connectDB from './config/database.js';
import Profile from './models/Profile.js';
import Work from './models/Work.js';

// Load environment variables
dotenv.config();

// Sample data
const sampleProfile = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with experience in building modern web applications using React, Node.js, and MongoDB. Love creating clean, efficient, and user-friendly solutions.',
  profileImage: 'https://via.placeholder.com/400',
  email: 'your.email@example.com',
  phone: '+66 XX XXX XXXX',
  location: 'Bangkok, Thailand',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourusername',
    facebook: 'https://facebook.com/yourprofile'
  },
  education: [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      year: '2018 - 2022',
      description: 'Focused on software engineering and web development'
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      year: '2015 - 2018',
      description: 'Science and Mathematics program'
    }
  ],
  experience: [
    {
      position: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality products.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS']
    },
    {
      position: 'Frontend Developer Intern',
      company: 'Startup Company',
      period: '2021 - 2022',
      description: 'Built responsive user interfaces and implemented new features for the company website.',
      technologies: ['React', 'JavaScript', 'CSS', 'Git']
    }
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'VS Code']
    }
  ]
};

const sampleWorks = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    longDescription: 'Built a complete e-commerce solution with user authentication, product management, shopping cart functionality, and payment processing using Stripe.',
    thumbnail: 'https://via.placeholder.com/600x400',
    images: [
      'https://via.placeholder.com/800x600',
      'https://via.placeholder.com/800x600'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    order: 1
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    longDescription: 'Developed a task management system with drag-and-drop functionality, real-time collaboration, and team management features.',
    thumbnail: 'https://via.placeholder.com/600x400',
    images: [
      'https://via.placeholder.com/800x600'
    ],
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    featured: true,
    order: 2
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts and interactive maps.',
    longDescription: 'Created a weather application that displays current weather, 7-day forecasts, and interactive weather maps using OpenWeather API.',
    thumbnail: 'https://via.placeholder.com/600x400',
    images: [],
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather',
    featured: false,
    order: 3
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and SEO optimization.',
    longDescription: 'Built a blog platform with markdown editor, syntax highlighting, SEO optimization, and social sharing features.',
    thumbnail: 'https://via.placeholder.com/600x400',
    images: [],
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/blog',
    featured: false,
    order: 4
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website built with React and Tailwind CSS.',
    longDescription: 'Designed and developed this portfolio website to showcase my projects and skills using modern web technologies.',
    thumbnail: 'https://via.placeholder.com/600x400',
    images: [],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true,
    order: 5
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    console.log('🗑️  Clearing existing data...');
    await Profile.deleteMany({});
    await Work.deleteMany({});

    console.log('📝 Creating profile...');
    const profile = await Profile.create(sampleProfile);
    console.log('✅ Profile created:', profile.name);

    console.log('💼 Creating works...');
    const works = await Work.insertMany(sampleWorks);
    console.log(`✅ ${works.length} works created`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Profile: ${profile.name}`);
    console.log(`   - Education: ${profile.education.length} items`);
    console.log(`   - Experience: ${profile.experience.length} items`);
    console.log(`   - Skills: ${profile.skills.length} categories`);
    console.log(`   - Works: ${works.length} projects`);
    console.log('\n✨ You can now start the server and view your portfolio!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed
seedDatabase();
