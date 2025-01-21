import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Hackathon-3-Q2',

  projectId: 'kzoedum9',
  dataset: 'new_data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
