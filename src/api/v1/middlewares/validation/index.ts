import type { Request, Response, NextFunction } from 'express'
import { ZodError, ZodSchema } from 'zod'
import { mapZodErrorToErrorMessage } from './helpers'

export const validate =
  <P = any, B = any, Q = any>(schema: ZodSchema) =>
  (req: Request<P, any, B, Q>, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        return res.status(400).send({
          message: mapZodErrorToErrorMessage(err),
        })
      }
    }
  }
