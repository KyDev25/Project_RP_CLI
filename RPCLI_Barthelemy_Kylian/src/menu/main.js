import "colors"

const main = (livesPlayer, attackPlayer, victories = 0) => {
  console.clear()
  console.log(
    `
+ ------------------------------ +
|           Main menu            |
+ ------------------------------ +
`.red +
      `
Attack -> ${attackPlayer}
Lives  -> ${livesPlayer}
Victories -> ${victories}
`.green +
      `
1. Fight
2. Exit
`.blue
  )

  process.stdout.write("Your choice (1-2): ")
}

export default main
