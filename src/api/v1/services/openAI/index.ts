import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

export const openai = new OpenAIApi(configuration)

export const generateDeckTipsPrompt = (deck: string) => {
  return `Give tips to play with this Pokémon TCG deck.
 Deck:
 ${deck}
 Tips:
 `
}
