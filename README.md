# Creator Share Tanzania

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts.

## Directus CMS Integration

This project includes integration with [Directus](https://directus.io/), a headless CMS that provides a flexible backend for managing content.

### Setting Up Directus

1. Create a Directus Cloud account at [directus.cloud](https://directus.cloud/) or set up a self-hosted instance.
2. Create a new project in Directus.
3. Set up the following collections in your Directus project:
   - `pages`: For dynamic page content
     - Required fields: `title` (the slug will be generated from the title if not provided)
     - Optional fields: `slug`, `content`, `status`, `featured_image`, `meta_description`, `tags`
4. Choose an authentication method:
   - **Option 1 (Recommended)**: Create an API token with read access to your content.
   - **Option 2**: Use your Directus email and password (less secure, but easier for development).
5. Copy the `.env.local.example` file to `.env.local` and update the values with your Directus credentials:
   ```
   # For API token authentication (recommended)
   NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.directus.cloud
   DIRECTUS_API_TOKEN=your_directus_api_token_here
   
   # OR for email/password authentication
   NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.directus.cloud
   DIRECTUS_EMAIL=your_directus_email@example.com
   DIRECTUS_PASSWORD=your_directus_password
   ```

### Using Directus Content

Once configured, the site will fetch content from Directus and display it in the following ways:

- Dynamic pages are available at `/directus/[slug]`
- The navigation menu includes a "Directus" dropdown that lists all available pages
- Content is automatically formatted and styled to match the site design

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables for Deployment

When deploying to Vercel or another hosting platform, make sure to set the following environment variables:

- `NEXT_PUBLIC_DIRECTUS_URL`: Your Directus instance URL
- Authentication (choose one option):
  - Option 1: `DIRECTUS_API_TOKEN`: Your Directus API token (recommended for production)
  - Option 2: `DIRECTUS_EMAIL` and `DIRECTUS_PASSWORD`: Your Directus credentials
