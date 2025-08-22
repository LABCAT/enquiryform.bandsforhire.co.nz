# Booking Enquiries

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

This application is configured for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

### Deploying to Cloudflare Pages

1. **Fork or clone this repository** to your GitHub account

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your GitHub repository

3. **Configure build settings:**
   - **Framework preset:** Create React App
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** `/` (leave empty)
   - **Node.js version:** 18 (or higher)

4. **Environment variables (if needed):**
   - Add any required environment variables in the Cloudflare Pages dashboard
   - Common variables might include API keys or configuration values

5. **Deploy:**
   - Click "Save and Deploy"
   - Cloudflare Pages will automatically build and deploy your application
   - Each push to the main branch will trigger a new deployment

### Custom Domain Setup

To use a custom domain (e.g., `booking-enquiries.labcat.nz`):

1. In your Cloudflare Pages project dashboard, go to "Custom domains"
2. Add your custom domain
3. Update your DNS settings to point to Cloudflare Pages
4. The CNAME file in the `public/` directory will be automatically handled

### Local Development

For local development, the standard Create React App commands work as expected:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
