import { haikuForTheme } from "./haiku"

export async function onClickGenerate(): Promise<void> {
  // Get the OpenAI api key
  const keyField = document.querySelector("#openai-key") as HTMLInputElement
  const openAIKey = keyField?.value
  if (!openAIKey) {
    alert("Please enter your OpenAI API key in the settings")
    return
  }

  // Get the theme
  const themeField = document.querySelector("#theme") as HTMLTextAreaElement
  const theme = themeField?.value
  if (!theme) {
    alert("Please enter a theme")
    return
  }

  const modelField = document.querySelector("#model") as HTMLSelectElement
  const model = modelField.value

  const modeField = document.querySelector("#mode") as HTMLSelectElement
  const mode = modeField.value

  const haiku = await haikuForTheme(openAIKey, model, mode, theme)

  // HTML escape the haiku
  const escapedHaiku = haiku.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  // Replace newlines with <br>
  const haikuWithBreaks = escapedHaiku.replace(/\n/g, "<br>")
  // Set the haiku in the output field
  const outputField = document.querySelector("#haiku")
  if (!outputField) {
    throw new Error("no output field")
  }
  outputField.innerHTML = haikuWithBreaks
}