# Deployment Guide

## Build Configuration

This Next.js project is configured for **standalone mode** deployment with automatic asset copying.

### Build Process

The build process automatically:
1. Compiles Next.js application (`next build`)
2. Copies static assets to `.next/standalone/.next/static`
3. Copies public folder to `.next/standalone/public`

### Required Files

All deployment files are located in `.next/standalone/`:

```
.next/standalone/
├── server.js              # Server entry point
├── package.json           # Production dependencies manifest
├── .env                   # Environment variables
├── .next/                 # Next.js build output
│   ├── static/           # Static assets (CSS, JS, images)
│   └── server/           # Server-side code
├── public/               # Public static files
└── node_modules/         # Production dependencies
```

## Deployment Steps

### 1. Build the Project

```bash
npm run build
```

This will:
- Create optimized production build
- Generate standalone deployment package
- Copy all necessary assets

### 2. Validate Build

```bash
npm run validate
```

This checks that all required files are present before deployment.

### 3. Deploy

The deployment directory is: `.next/standalone/`

**For Bolt.new or similar platforms:**
- The `.bolt/ignore` file controls what's excluded from deployment
- Build outputs (`.next/`) are NOT ignored and should be deployed
- Node modules in standalone are included (required for production)

**Server Configuration:**
- Entry point: `server.js`
- Port: Set via `PORT` environment variable (default: 3000)
- Node version: 18+ recommended

### 4. Start Production Server

```bash
cd .next/standalone
node server.js
```

## Environment Variables

Required environment variables (in `.env`):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Email configuration for nodemailer

## Troubleshooting

### "No such file or directory" Error

If you encounter missing file errors:

1. Ensure build completed successfully
2. Run validation: `npm run validate`
3. Check that `.bolt/ignore` is not excluding build files
4. Verify post-build script ran (look for "Post-build process completed" message)

### Missing Static Assets

If static assets (CSS, JS, images) are missing:

1. Check `.next/standalone/.next/static` exists
2. Run build again: `npm run build`
3. Verify post-build script output

### Missing Public Files

If public files (logos, images) are missing:

1. Check `.next/standalone/public` exists
2. Ensure public folder has correct permissions
3. Run build again

## Build Scripts

- `npm run build` - Build and prepare deployment package
- `npm run validate` - Verify build integrity
- `npm run start` - Start development server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check

## Support

For deployment issues related to error ID: `cf29ed3cff024dc8aa902b60ff4e796b:iqeLh9V2u4G77gtU:59233721:7107864`

All build files are now properly configured and validated. The project is ready for deployment.
