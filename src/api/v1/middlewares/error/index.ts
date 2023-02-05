import type { NextFunction, Request, Response } from 'express'
import { CardsNotFoundError } from '../../errors/CardsNotFound'
import { UnableToGiveTipsError } from '../../errors/UnableToGiveTips'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof CardsNotFoundError) {
    return res.status(404).json({
      message: err.message,
    })
  }

  if (err instanceof UnableToGiveTipsError) {
    return res.status(503).json({
      message: err.message,
    })
  }

  res.status(500).send({
    message: 'Something wrong happened. Please, try again later.',
  })
}

export { errorHandler }
