import { Configuration, OpenAIApi } from 'openai'
import { z } from 'zod'
import { CardSchema } from '../../middlewares/validation/schemas/tips'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

type Card = z.infer<typeof CardSchema>

type CardWithCount = Pick<Card, 'name'> & {
  count: number
}

export const openai = new OpenAIApi(configuration)

const getCardsCount = (cards: Card[]) =>
  cards.reduce<CardWithCount[]>((acc, curr) => {
    const cardIndex = acc.findIndex(({ name }) => name === curr.name)

    if (cardIndex > -1) {
      const { count, name } = acc[cardIndex]
      const newCount = count + 1
      acc[cardIndex] = { name, count: newCount }

      return acc
    }

    acc.push({
      name: curr.name,
      count: 1,
    })

    return acc
  }, [])

const createDeckString = (deck: Card[]) => {
  const pokemonCards = deck.filter(({ type }) => type === 'Pokémon')
  const energyCards = deck.filter(({ type }) => type === 'Energy')
  const trainerCards = deck.filter(({ type }) => type === 'Trainer')

  const countedPokemonCards = getCardsCount(pokemonCards)
  const countedEnergyCards = getCardsCount(energyCards)
  const countedTrainerCards = getCardsCount(trainerCards)

  let deckString = ''

  deckString += `Pokémon - ${pokemonCards.length}\n`

  deckString += countedPokemonCards.reduce((acc, { name, count }) => {
    acc += `${count} ${name}\n`
    return acc
  }, '')

  deckString += `\nTrainer Cards - ${trainerCards.length}\n`

  deckString += countedTrainerCards.reduce((acc, { name, count }) => {
    acc += `${count} ${name}\n`
    return acc
  }, '')

  deckString += `\nEnergy - ${countedEnergyCards.length}\n`

  deckString += countedEnergyCards.reduce((acc, { name, count }) => {
    acc += `${count} ${name}\n`
    return acc
  }, '')

  return deckString
}

export const generateDeckTipsPrompt = (deck: Card[]) => {
  const deckString = createDeckString(deck)

  return `Give tips to play with this Pokémon TCG deck.
 Deck:
 ${deckString}
 Tips:
 `
}
