import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'kzoedum9', // Your Sanity project ID
  dataset: 'new_data',    // Your Sanity dataset name
  apiVersion: '2023-01-01', // API version you're using (can be any valid date)
  useCdn: true,// Set to false if statically generating pages, using ISR or tag-based revalidation
})
