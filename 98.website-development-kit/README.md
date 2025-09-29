# Professional Website Development Kit

A comprehensive starter kit for building high-quality websites with React, Vite, and Tailwind CSS v4. Based on the successful Fundo Patronos website architecture.

## 🚀 Quick Start

```bash
# Clone or copy this kit to your project directory
cp -r website-development-kit my-new-website
cd my-new-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Kit Structure

```
website-development-kit/
├── README.md                    # This file
├── SETUP_GUIDE.md              # Detailed setup instructions
├── COMPONENT_LIBRARY.md        # Component usage guide
├── starter-template/           # Clean starter template
├── base-components/            # Reusable components library
├── config-files/               # Configuration templates
└── documentation/              # Additional guides
```

## 🛠 Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4.1** - Latest utility-first CSS framework
- **Tailwind CSS Plus** - Premium components (optional)
- **React Router v7** - Client-side routing
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons
- **Inter Font** - Professional typography
- **ESLint** - Code linting and formatting

## ✨ Features

### Core Infrastructure
- ⚡️ Lightning-fast Vite development server
- 🎨 Tailwind CSS v4 with custom configuration
- 🔧 Modern PostCSS setup
- 📱 Mobile-first responsive design
- ♿️ Accessibility-focused components
- 🔍 SEO-ready structure

### Component Library
- 🏠 **Layout Components**: Navbar, Footer, Hero sections
- 📄 **Content Components**: Features, Stats, Testimonials, FAQ
- 🎯 **Interactive Components**: CTAs, Forms, Modals
- 🧭 **Navigation**: Flyout menus, Mobile navigation
- 📊 **Data Display**: Timelines, Grids, Cards
- 🎨 **Visual Components**: LogoClouds, Image galleries

### Development Experience
- 🔥 Hot module replacement
- 📝 TypeScript ready (optional)
- 🧪 Testing setup ready
- 📦 Optimized build process
- 🚀 Vercel deployment configuration
- 📚 Comprehensive documentation

## 🎯 Perfect For

- **Corporate Websites** - Professional business sites
- **Non-profit Organizations** - Mission-driven websites
- **Educational Institutions** - University and school sites
- **SaaS Landing Pages** - Product marketing sites
- **Portfolio Websites** - Personal and agency portfolios
- **E-commerce** - Online stores and catalogs

## 📖 Usage Guides

1. **[Setup Guide](SETUP_GUIDE.md)** - Complete setup instructions
2. **[Component Library](COMPONENT_LIBRARY.md)** - Component usage and customization
3. **[Deployment Guide](documentation/DEPLOYMENT.md)** - Deploy to Vercel, Netlify, etc.
4. **[Customization Guide](documentation/CUSTOMIZATION.md)** - Branding and theming
5. **[Best Practices](documentation/BEST_PRACTICES.md)** - Development guidelines

## 🎨 Design System

### Typography
- **Primary Font**: Inter (included)
- **Hierarchy**: Consistent heading and text sizes
- **Responsive**: Mobile-optimized typography scales

### Color System
- **Flexible Theming**: Easy brand color customization
- **Gradient Support**: Modern gradient backgrounds
- **Dark Mode Ready**: Built-in dark mode support

### Components
- **Mobile-First**: All components responsive by default
- **Accessible**: ARIA labels and semantic HTML
- **Customizable**: Easy theme and style modifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm or yarn package manager
- Modern web browser for development

### Installation Options

#### Option 1: Use Template (Recommended)
```bash
# Copy the starter template
cp -r website-development-kit/starter-template my-project
cd my-project
npm install
npm run dev
```

#### Option 2: Manual Setup
```bash
# Create new directory
mkdir my-project && cd my-project

# Copy configuration files
cp website-development-kit/config-files/* .

# Copy base components
cp -r website-development-kit/base-components/src .

# Install dependencies
npm install

# Start development
npm run dev
```

## 📝 Customization

### Brand Colors
Edit `tailwind.config.js` to customize your brand colors:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-light-color',
        500: '#your-main-color',
        900: '#your-dark-color',
      }
    }
  }
}
```

### Typography
Update font configuration in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['YourFont', 'Inter', 'system-ui', 'sans-serif'],
}
```

### Components
All components are fully customizable. See [Component Library](COMPONENT_LIBRARY.md) for details.

## 🤝 Claude Code Integration

This kit is optimized for use with Claude Code:

### Setup Commands
```bash
# Quick project initialization
npm create vite@latest my-project -- --template react
cd my-project
# Then copy kit files and follow setup guide
```

### Claude Code Instructions
When working with Claude Code on your project:

1. **Reference the Component Library**: Always check `COMPONENT_LIBRARY.md` for available components
2. **Follow Kit Patterns**: Use established patterns from base components
3. **Maintain Consistency**: Follow typography and color system guidelines
4. **Use Documentation**: Reference guides for common tasks

### Project Structure for Claude
```
my-project/
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── layouts/            # Layout components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── assets/             # Images, icons, etc.
├── public/                 # Static assets
├── COMPONENT_LIBRARY.md    # Component reference
└── tailwind.config.js      # Theme configuration
```

## 🛡 Best Practices

### Performance
- **Lazy Loading**: Components and images
- **Code Splitting**: Route-based splitting
- **Asset Optimization**: SVGs and image compression
- **Bundle Analysis**: Regular bundle size monitoring

### SEO
- **Meta Tags**: Proper head configuration
- **Semantic HTML**: Meaningful HTML structure
- **Image Alt Text**: Descriptive image attributes
- **URL Structure**: Clean, descriptive URLs

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant colors
- **Focus Management**: Proper focus indicators

## 🔧 Maintenance

### Updates
- **Dependencies**: Regular security updates
- **Tailwind CSS**: Stay current with latest version
- **React**: Upgrade when stable versions release
- **Component Library**: Add new components as needed

### Documentation
- **Keep Updated**: Document new components and changes
- **Examples**: Provide usage examples for custom components
- **Changelog**: Track significant changes and updates

## 📞 Support

For questions and support when using this kit with Claude Code:

1. **Check Documentation**: Start with the included guides
2. **Component Library**: Reference available components
3. **Claude Code**: Ask Claude for specific implementation help
4. **Best Practices**: Follow established patterns from successful projects

## 📄 License

This kit is based on the successful Fundo Patronos website and is provided as a development template. Customize and use for your projects.

---

**Built with ❤️ for professional website development**

Start building amazing websites with this proven foundation!