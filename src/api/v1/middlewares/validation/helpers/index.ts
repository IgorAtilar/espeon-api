import { ZodError } from 'zod'

export const mapZodErrorToErrorMessage = (error: ZodError) => {
  return error.issues[0].message
}
