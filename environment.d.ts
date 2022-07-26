declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_PROJECT_ID: string
      NEXT_PUBLIC_SANITY_DATASET: string
      SANITY_API_TOKEN: string
      SANITY_PREVIEW_SECRET?: string
      SANITY_STUDIO_REVALIDATE_SECRET?: string
      SENDGRID_API_KEY: string
    }
  }
}

export {}
