import type { NextFunction, Request, Response } from 'express'
import { CardsNotFoundError } from '../../errors/CardsNotFound'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof CardsNotFoundError) {
    return res.status(404).json({
      message: err.message,
    })
  }

  res.status(500).send({
    message: 'Something wrong happened. Please, try again later.',
  })
}

export { errorHandler }
