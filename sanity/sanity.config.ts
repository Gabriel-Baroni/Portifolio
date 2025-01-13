/**
 * This configuration is used for the Sanity Studio that’s mounted on the /pages/studio/[[...index]].tsx route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity'; // Correct import for Studio configuration
import { structureTool } from 'sanity/structure';

// Vá para https://www.sanity.io/docs/api-versioning para aprender como funciona o versionamento de API
import { apiVersion, dataset, projectId } from './env';
import { schema } from './schema';

export default defineConfig({
  basePath: '/Users/gdepa/OneDrive/Documentos/Projetos/portifolio/sanity',
  projectId,
  dataset,
  // Adicione e edite o esquema de conteúdo na pasta './sanity/schema'
  schema,
  plugins: [
    structureTool(),
    // Vision é uma ferramenta que permite consultar seu conteúdo com GROQ no estúdio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});