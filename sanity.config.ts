'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import { defineConfig } from 'sanity'
import StudioNavbar from './components/StudioNavbar'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import { myTheme } from './theme'
import Logo from './components/Logo'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  // title:'sanity_studi',
  // name:"sanity content studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio:{
    components:{
      logo:Logo ,
      navbar:StudioNavbar,
    }
  },
  theme:myTheme,
})
