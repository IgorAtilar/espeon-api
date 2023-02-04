import { z } from 'zod'

export const GetCardsQuerySchema = z.object({
  page: z.coerce
    .number({
      invalid_type_error: 'The page param need to be a number.',
      required_error: 'The page param is required.',
    })
    .min(1, {
      message: 'The page param need to be bigger than 0.',
    }),
  pageSize: z.coerce
    .number({
      invalid_type_error: 'The pageSize param need to be a number.',
      required_error: 'The pageSize param is required.',
    })
    .min(1, {
      message: 'The pageSize param need to be bigger than 0.',
    }),
})

export const GetCardsParamsSchema = z.object({
  name: z.string().trim(),
})

export const GetCardsSchema = z
  .object({
    query: GetCardsQuerySchema,
    params: GetCardsParamsSchema,
  })
  .strip()
