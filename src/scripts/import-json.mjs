import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables
dotenv.config();

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function importJsonData() {
  try {
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

    // Import each document into Sanity
    for (const doc of data) {
      console.log(`Importing: ${doc.name || 'Unnamed document'}`);
      const result = await client.create(doc);
      console.log(`Successfully imported: ${result._id}`);
    }

    console.log('All data imported successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import function
importJsonData();
