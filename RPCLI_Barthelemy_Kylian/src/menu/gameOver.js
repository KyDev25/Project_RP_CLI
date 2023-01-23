import "colors"

const gameOver = () => {
  console.clear()
  console.log(
    `
+ ------------------------------ +
|           Game over            |
+ ------------------------------ +
`.red +
      `
END OF GAME !
`.blue
  )
}

export default gameOver
