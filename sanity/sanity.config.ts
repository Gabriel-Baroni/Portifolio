/**
 * This configuration is used for the Sanity Studio that’s mounted on the /pages/studio/[[...index]].tsx route
 */

import { defineCliConfig as defineConfig } from 'sanity/cli'; // Fix import statement
import { visionTool } from '@sanity/vision';
import { schema } from './schema';
import { apiVersion, dataset, projectId } from './env';

export default defineConfig({
  api: {
    projectId,
    dataset,
  },
});
