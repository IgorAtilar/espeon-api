import { z } from 'zod'

export const CardSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: 'The card name should be a string.',
        required_error: 'The card name is required.',
      })
      .trim(),
    type: z.enum(['Energy', 'Pokémon', 'Trainer'], {
      invalid_type_error: 'The card type should be a string.',
      required_error: 'The card type is required.',
    }),
  })
  .strip()

export const GetTipsBodySchema = z.object({
  deck: z.array(CardSchema, {
    invalid_type_error: 'The deck should be an array of cards.',
    required_error: 'The deck is required.',
  }),
})

export const GetTipsSchema = z
  .object(
    {
      body: GetTipsBodySchema,
    },
    {
      invalid_type_error: 'The body value should be an object.',
      required_error: 'The deck array is required.',
    }
  )
  .strip()
