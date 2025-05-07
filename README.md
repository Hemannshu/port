# Personal Portfolio Website

A modern, responsive, and visually appealing personal portfolio website built with React. Showcases my skills, projects, experience, education, hackathons, and more, with support for dark mode, animated backgrounds, and a floating menu.

## 🚀 Features
- **Responsive Design:** Looks great on all devices (desktop, tablet, mobile)
- **Dark Mode:** Toggle between light and dark themes
- **Animated SVG Blobs:** Next-gen animated background
- **Floating Menu:** Quick access to Home, Resume, LinkedIn, GitHub, and dark mode toggle
- **Section Highlights:**
  - Hero, About, Skills (3D & flat), Projects, Experience, Education, Hackathons, Contact
  - Consistent pill-shaped badges and card layouts
- **Glassmorphism & Modern UI:** Soft borders, glassy cards, and unified color palette
- **Accessible & Fast:** Keyboard navigation, semantic HTML, and optimized assets

## 🛠️ Tech Stack
- **Frontend:** React, CSS Modules
- **3D/Animation:** @react-three/fiber, SVG, CSS animations
- **Icons:** Devicon, SVG

## 📁 Folder Structure
```
public/
  assets/           # All images and logos
  illustrations/    # About section illustrations
  ...
src/
  components/       # All React components (Hero, About, Projects, etc.)
  App.js            # Main app entry
  index.js          # ReactDOM entry
  index.css         # Global styles and CSS variables
  ...
```

## 🖥️ Local Setup
1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🖌️ Customization
- **Images:** Place your images/logos in `public/assets/` and update references in components.
- **Content:** Edit the data in `src/components/Projects.js`, `Experience.js`, `Education.js`, etc.
- **Colors & Styles:** Tweak CSS variables in `src/index.css` and section styles in each component's CSS file.
- **Social Links:** Update URLs in `FloatingMenu.js`.

## 📦 Build for Production
```bash
npm run build
# or
yarn build
```
The optimized build will be in the `build/` folder.

## 📝 License
This project is open source and free to use for personal and educational purposes.

---

**Made with ❤️ by Himanshu Sharma** 
