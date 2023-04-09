import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai"

export async function haikuForTheme(apiKey: string, model: string, mode: string, theme: string): Promise<string> {
  const messages: ChatCompletionRequestMessage[] = [
    {
      "role": "user",
      "content": "Your task is to write haiku based on the theme provided.",
    },
    {
      "role": "user",
      "content": "You should write ONLY the haiku, not any other text.",
    }, {
      "role": "user",
      "content": messageForMode(mode),
    }, {
      "role": "user",
      "content": "Theme: " + exampleThemeForMode(mode),
    }, {
      "role": "assistant",
      "content": exampleHaikuForMode(mode),
    }, {
      "role": "user",
      "content": "Theme: " + theme,
    }
  ]
  const configuration = new Configuration({ apiKey })
  const openai = new OpenAIApi(configuration)
  const response = await openai.createChatCompletion({ model, messages })
  return response.data.choices[0]?.message?.content || "<error generating haiku>"
}

function messageForMode(mode: string): string {
  switch (mode) {
    case "loose":
      return "The haiku need not fit the exact 5-7-5 syllable pattern, but it should be relatively close. It should be three lines, with the second line longer than the other two."
    case "strict":
      return "The haiku must fit the exact 5-7-5 syllable pattern and should be exactly three lines."
    case "traditional":
      return "The haiku must be in the style of a traditional Japanese haiku, e.g. by Matsuo Bashou, which has been translated to English." +
        "It must be three lines, but it typically will not fit the 5-7-5 syllable pattern. It should be in the present tense, and should not" +
        "use the words 'I' or 'you'. It must include a seasonal reference."
    default:
      throw new Error("unknown mode")
  }
}

function exampleThemeForMode(mode: string): string {
  switch (mode) {
    case "loose":
      return "love of one's pet"
    case "strict":
      return "love of one's pet"
    case "traditional":
      return "the peace that follows the end of conflict"
    default:
      throw new Error("unknown mode")
  }
}

function exampleHaikuForMode(mode: string): string {
  switch (mode) {
    case "loose":
      return "Little cat\nPaws padding up the stairs to play\nCuddly and warm"
    case "strict":
      return "Fuzzy little friend\nPurrs and chirps reward my love\nNap time in the sun"
    case "traditional":
      return "The summer grasses\nAll that remains\nOf warriors' dreams"
    default:
      throw new Error("unknown mode")
  }
}