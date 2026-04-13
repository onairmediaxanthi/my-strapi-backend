const { createStrapi } = require('@strapi/strapi');

const app = createStrapi({
  distDir: './dist',
  serveAdminPanel: true,
});

app.start().catch((error) => {
  console.error('Failed to start Strapi:', error);
  process.exit(1);
});