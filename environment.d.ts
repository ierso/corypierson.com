declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_PROJECT_ID: string
      NEXT_PUBLIC_SANITY_DATASET: string
      RESEND_API_KEY: string
      RESEND_FROM: string
      RESEND_TO: string
    }
  }
}

export {}
