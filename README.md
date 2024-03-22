# Travel Blog Website using React

Creating a Travel Blog Website using React JS is a better way to learn how to manage state, passing props and render data dynamically

 - Website: https://www.geeksforgeeks.org/travel-blog-website-using-react/

- Initial command: ` npm create vite@latest client -- --template react`

- Add this config in `vite.config.js`:
```javascript
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
```

- Create the file `.prettierrc.json` in root:
```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "printWidth": 120
}
```