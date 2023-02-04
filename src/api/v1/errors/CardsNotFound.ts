export class CardsNotFoundError extends Error {
  constructor() {
    super(`We couldn't find any card with this name.`)
    this.name = 'CardsNotFoundError'
  }
}
