import { z } from 'zod'
import type { NextFunction, Request, Response } from 'express'
import { GetTipsBodySchema, GetTipsSchema } from '../../middlewares/validation/schemas/tips'
import { generateDeckTipsPrompt, openai } from '../../services/openAI'
import { UnableToGiveTipsError } from '../../errors/UnableToGiveTips'

type GetTipsBody = z.infer<typeof GetTipsBodySchema>

export const getTips = async (
  req: Request<any, any, GetTipsBody, any>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = GetTipsSchema.parse(req)
    const { deck } = body

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generateDeckTipsPrompt(deck),
      suffix: '\n',
      temperature: 0.7,
      max_tokens: 248,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const tips = completion.data.choices[0].text ?? ''

    const hasTips = tips.length > 0

    if (!hasTips) {
      throw new UnableToGiveTipsError()
    }

    res.status(200).json({ tips })
  } catch (error) {
    next(error)
  }
}
