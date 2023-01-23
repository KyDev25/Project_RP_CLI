import { createInterface } from "node:readline/promises"
import randomNumber from "../utils/randomNumber.js"
import fightingMonster from "../fightingTurn/fightingMonster.js"
import main from "../menu/main.js"
import gameOver from "../menu/gameOver.js"

const mainChoice = async (victories) => {
  const choiceMain = await createInterface({
    input: process.stdin,
  })

  let livesPlayer = randomNumber(150, 50)
  let attackPlayer = randomNumber(35, 10)

  main(livesPlayer, attackPlayer, victories)
  const answer = Number.parseInt(await choiceMain.question(""))
  await choiceMain.close()

  switch (answer) {
    case 1:
      await fightingMonster(livesPlayer, attackPlayer)

      break

    case 2:
      await gameOver()

      break

    default:
      await mainChoice()

      break
  }
}

export default mainChoice
