import "colors"

const welcome = () => {
  console.clear()
  console.log(
    `
+ ------------------------------ +
|            Welcome             |
+ ------------------------------ +
`.red +
      `
1. Start game
2. Exit game
`.blue
  )

  process.stdout.write("Your choice (1-2): ")
}

export default welcome
