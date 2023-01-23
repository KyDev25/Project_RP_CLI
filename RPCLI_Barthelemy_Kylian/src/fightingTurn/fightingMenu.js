import { createInterface } from "node:readline/promises"
import randomNumber from "../utils/randomNumber.js"

const listMonsters = [
  "A Wizard",
  "A Werewolf",
  "A Scientist",
  "A Vampire",
  "A Giant",
]

const fightingMenu = async (livesMonster, attackMonster) => {
  console.clear()
  const finished = await createInterface({
    input: process.stdin,
  })
  const listMonstersLength = listMonsters.length - 1
  const nameMonster = listMonsters[randomNumber(listMonstersLength, 1)]
  console.log(
    `
+ ------------------------------ +
|            Fighting            |
+ ------------------------------ +
`.red +
      `
${nameMonster} Monster attack you !
`.blue +
      `
Attack -> ${attackMonster}
Lives  -> ${livesMonster}
`.green
  )
  process.stdout.write("\nPress ENTER for fight: ")
  await finished.question("")
  await finished.close()
}

export default fightingMenu
