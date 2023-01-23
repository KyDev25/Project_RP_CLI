import { createInterface } from "node:readline/promises"
import mainChoice from "./mainChoice.js"
import gameOver from "../menu/gameOver.js"
import welcome from "../menu/welcome.js"

const welcomeChoice = async () => {
  const choiceWelcome = await createInterface({
    input: process.stdin,
  })

  await welcome()
  const answer = Number.parseInt(await choiceWelcome.question(""))
  await choiceWelcome.close()

  switch (answer) {
    case 1:
      await mainChoice()

      break

    case 2:
      await gameOver()

      break

    default:
      await welcomeChoice()

      break
  }
}

export default welcomeChoice
