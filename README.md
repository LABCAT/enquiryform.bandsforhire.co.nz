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
   nvm use 20
   wrangler login
   ```

### Deploying to Cloudflare Pages

1. **Build the application:**
   ```bash
   yarn run build
   ```

2. **Deploy using Wrangler:**
   ```bash
   nvm use 20
   wrangler pages deploy build
   ```

### Development Workflow

For local development and testing:

```bash
# Start development server
yarn start

# Build for production
yarn run build

# Deploy to staging
wrangler pages deploy build --project-name=booking-enquiries --branch=staging

# Deploy to production
wrangler pages deploy build --project-name=booking-enquiries
```

### Local Development

For local development, the standard Create React App commands work as expected:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
