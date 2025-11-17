// ข้อมูลส่วนตัวของคุณ - แก้ไขตรงนี้ได้เลย
export const profileData = {
  name: 'Wongtawee Jantawee',
  title: 'Full Stack Developer',
  bio: 'Aspiring software developer with practical experience gained through internship and self-initiated projects. Committed to continuous learning and delivering meaningful results in a team environment. Seeking an opportunity to apply and expand my skills in a professional setting.',
  profileImage: 'https://placehold.co/400x400/3b82f6/ffffff?text=Profile',
  
  // ข้อมูลติดต่อ
  contact: {
    email: 'your.email@example.com',
    phone: '+66 XX XXX XXXX',
    location: 'Bangkok, Thailand',
  },
  
  // Social Links
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourusername',
    facebook: 'https://facebook.com/yourprofile'
  },
  
  // การศึกษา
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
  
  // ประสบการณ์ทำงาน
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
  
  // ทักษะ
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

// ผลงาน/โปรเจค
export const worksData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    thumbnail: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Task+Manager',
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts and interactive maps.',
    thumbnail: 'https://placehold.co/600x400/06b6d4/ffffff?text=Weather+App',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather',
    featured: false
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and SEO optimization.',
    thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Blog+Platform',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/blog',
    featured: false
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'This portfolio website built with React and Tailwind CSS.',
    thumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=Portfolio',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true
  }
];
