# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features beautiful animations and a clean design to showcase your work and skills.

## ✨ Features

- 🎨 Modern and clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight (static site - no backend needed)
- 🎭 Beautiful UI with gradient effects and hover animations
- 🌈 Customizable color schemes
- 📝 Easy to update - just edit one data file

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd resume/frontend
```

2. Install dependencies

```bash
npm install
```

3. Update your personal information
   Edit `src/data/profileData.js` with your own information:

- Personal details (name, title, bio)
- Contact information
- Social media links
- Education history
- Work experience
- Skills
- Projects/Portfolio

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Update Your Information

All your personal data is stored in one file: `frontend/src/data/profileData.js`

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... more fields
};
```

### Change Colors

Edit `frontend/src/index.css` to customize the color scheme:

```css
:root {
  --color-primary: #3b82f6; /* Change primary color */
  --color-secondary: #8b5cf6; /* Change secondary color */
  /* ... more colors */
}
```

### Add Your Own Images

Replace the placeholder images in `profileData.js` with your own:

- Profile image
- Project thumbnails

You can use:

- Local images in `frontend/public/images/`
- External URLs (e.g., from your own hosting)

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be in `frontend/dist/` directory.

## 🚀 Deployment

This is a static site and can be deployed to:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set build command: `cd frontend && npm run build`
4. Set output directory: `frontend/dist`
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Set build command: `cd frontend && npm run build`
4. Set publish directory: `frontend/dist`
5. Deploy!

### GitHub Pages

```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## 📦 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Routing:** React Router

## 📄 Project Structure

```
frontend/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   │   ├── contact/     # Contact page components
│   │   ├── home/        # Home page components
│   │   ├── layout/      # Layout components (Header)
│   │   ├── resume/      # Resume page components
│   │   └── work/        # Work/Projects page components
│   ├── data/            # Your personal data
│   │   └── profileData.js  # ⭐ Edit this file!
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json
```

## 🎨 Pages

- **Home** - Hero section with your introduction
- **Resume** - Education, experience, and skills
- **Work** - Portfolio/projects showcase
- **Contact** - Contact information and social links

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 💡 Tips

1. **Images**: Use optimized images for better performance
2. **SEO**: Update the `index.html` title and meta tags
3. **Analytics**: Add Google Analytics or similar in `index.html`
4. **Custom Domain**: Configure your custom domain in your hosting provider

## 🐛 Issues?

If you encounter any issues, please check:

1. Node.js version (should be 18+)
2. All dependencies are installed
3. You're running commands from the correct directory

---

Made with ❤️ using React and Tailwind CSS
