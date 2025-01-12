import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Vá para https://www.sanity.io/docs/api-versioning para aprender como funciona o versionamento de API
import { apiVersion, dataset, projectId } from './env';
import { schema } from './schema';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Adicione e edite o esquema de conteúdo na pasta './sanity/schema'
  schema,
  plugins: [
    deskTool(),
    // Vision é uma ferramenta que permite consultar seu conteúdo com GROQ no estúdio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});