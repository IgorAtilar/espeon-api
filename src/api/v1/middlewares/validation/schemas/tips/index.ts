import { z } from 'zod'

export const GetTipsBodySchema = z.object({
  deck: z
    .string({
      invalid_type_error: 'The deck value need to be a string.',
      required_error: 'The deck value is required.',
    })
    .trim(),
})

export const GetTipsSchema = z
  .object(
    {
      body: GetTipsBodySchema,
    },
    {
      invalid_type_error: 'The body value should be a object.',
      required_error: 'You need to send a deck.',
    }
  )
  .strip()
