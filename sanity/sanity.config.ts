/**
 * This configuration is used for the Sanity Studio that’s mounted on the /pages/studio/[[...index]].tsx route
 */

import { defineConfig } from 'sanity'; // Fix import statement
import { visionTool } from '@sanity/vision';
import { schema } from './schema';
import { apiVersion, dataset, projectId } from './env';

export default defineConfig({ // Wrap with defineConfig
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // Vision permite consultas com GROQ
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
