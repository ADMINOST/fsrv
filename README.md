# Trillion FSRV Website

A professional Tesla-style website for Trillion FSRV, a startup specializing in self-recharging electric vehicles.

## 🚀 Live Demo
- **Demo Site**: https://afnttkbc.manus.space
- **Your GitHub Pages Site**: Will be available at `https://YOUR_USERNAME.github.io/trillion-fsrv-website/`

## ✨ Features

- **Tesla-Inspired Design**: Clean, minimalist aesthetic with premium feel
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Custom Branding**: Professional logo and visual identity for Trillion FSRV
- **Interactive Sections**: Technology showcase, vehicle lineup, company information
- **Modern Tech Stack**: Built with React, Tailwind CSS, and Vite
- **Self-Recharging Focus**: Unique positioning around unlimited range technology

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
trillion-fsrv-website/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   └── ui/         # UI components (shadcn/ui)
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles and custom CSS
│   └── main.jsx        # Application entry point
├── public/             # Public assets
├── .github/
│   └── workflows/      # GitHub Actions for deployment
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/trillion-fsrv-website.git
cd trillion-fsrv-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://YOUR_USERNAME.github.io/trillion-fsrv-website/`

### Manual Deployment
```bash
npm run build
# Upload the dist/ folder contents to your hosting provider
```

## 🎨 Customization

### Updating Content
- Edit `src/App.jsx` to modify page content
- Update images in `src/assets/`
- Modify styles in `src/App.css`

### Changing Colors
The color scheme is defined in `src/App.css` using CSS custom properties:
- `--primary`: Deep Electric Blue (#0066CC)
- `--accent`: Bright Green (#00FF88)

### Adding New Sections
1. Create new components in `src/components/`
2. Import and use them in `src/App.jsx`
3. Add corresponding styles in `src/App.css`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, please check the [GitHub Deployment Guide](github-deployment-guide.md) or open an issue in this repository.

---

**Built with ❤️ for Trillion FSRV - The Future of Self-Recharging Electric Vehicles**

