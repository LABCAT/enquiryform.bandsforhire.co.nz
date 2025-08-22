# Booking Enquiries

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

This application is configured for deployment on [Cloudflare Pages](https://pages.cloudflare.com/) using the Wrangler CLI.

### Prerequisites

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

### Deploying to Cloudflare Pages

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy using Wrangler:**
   ```bash
   wrangler pages deploy build
   ```

3. **For production deployment with a project name:**
   ```bash
   wrangler pages deploy build --project-name=booking-enquiries
   ```

### Setting up Continuous Deployment

To enable automatic deployments on git push:

1. **Create a Cloudflare Pages project:**
   ```bash
   wrangler pages project create booking-enquiries
   ```

2. **Connect your GitHub repository:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Select your project
   - Go to Settings → Git integration
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `build`
     - Root directory: `/`

### Environment Variables

Set environment variables for your deployment:

```bash
# Set environment variables
wrangler pages secret put MY_API_KEY

# Or set them in the Cloudflare Dashboard
# Go to your project → Settings → Environment variables
```

### Custom Domain Setup

To use a custom domain (e.g., `booking-enquiries.labcat.nz`):

1. **Add custom domain via CLI:**
   ```bash
   wrangler pages domain add booking-enquiries.labcat.nz
   ```

2. **Or via Dashboard:**
   - Go to your project → Custom domains
   - Add your custom domain
   - Update DNS settings to point to Cloudflare Pages

### Development Workflow

For local development and testing:

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to staging
wrangler pages deploy build --project-name=booking-enquiries --branch=staging

# Deploy to production
wrangler pages deploy build --project-name=booking-enquiries
```

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
