# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup Vite, Tailwind

* setup vite project
```bash
  npm create vite@latest my-project
  cd my-project
  npm i
```

__Tailwind CSS:__  __[Tailwind Docs](https://tailwindcss.com/docs/)__
* setup tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

* Add the Tailwind directives to your index.css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins:[],  
}
```
## Deployed Link: 
https://to-desktop-frontend-3946zshlz-ammars-projects-34b4f39f.vercel.app
## Author [@syedammarali73](https://www.github.com/syedammarali73)

