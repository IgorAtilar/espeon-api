export class UnableToGiveTipsError extends Error {
  constructor() {
    super(`Sorry, but I need to think more to give you the best tips :( Please, try again later.`)
    this.name = 'UnabelToGiveTipsError'
  }
}
