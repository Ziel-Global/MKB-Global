// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://6eafcc79588263b45fdfe23451a451d1@o4510458326417408.ingest.de.sentry.io/4510458368819280', // Replace with your DSN
  tracesSampleRate: 1.0, // Adjust this as needed
  // other options
});
