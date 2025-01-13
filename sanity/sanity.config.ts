/**
 * This configuration is used for the Sanity Studio that’s mounted on the /pages/studio/[[...index]].tsx route
 */

import { visionTool } from '@sanity/vision';
// No Sanity v2, não existe `defineConfig`
import { schema } from './schema';
import { apiVersion, dataset, projectId } from './env';

export default {
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // Vision permite consultas com GROQ
    visionTool({ defaultApiVersion: apiVersion }),
  ],
};
