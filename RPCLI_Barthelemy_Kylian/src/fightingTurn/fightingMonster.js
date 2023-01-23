import fightingMenu from "./fightingMenu.js"
import fightingRound from "./fightingRound.js"
import finishedGame from "../game/finishedGame.js"
import randomNumber from "../utils/randomNumber.js"
import mainChoice from "../choices/mainChoice.js"
import gameOver from "../menu/gameOver.js"

let victories = 0

const fightingMonster = async (livesPlayer, attackPlayer) => {
  let counter = 0
  let livesMonster = randomNumber(250, 50)
  let attackMonster = randomNumber(30, 5)
  await fightingMenu(livesMonster, attackMonster)

  while (livesMonster > 0 && livesPlayer > 0) {
    livesPlayer -= attackMonster
    livesMonster -= attackPlayer
    counter += 1
    await fightingRound(livesMonster, livesPlayer, counter)
  }

  if (livesPlayer > livesMonster) {
    await finishedGame("You WIN !")
    victories += 1
    await mainChoice(victories)
  }

  if (livesPlayer < livesMonster) {
    await finishedGame("Sorry you LOST !")
    await gameOver()
    console.log(`Number of victories : ${victories}`)
  }
}

export default fightingMonster
