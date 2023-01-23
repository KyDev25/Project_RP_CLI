import { createInterface } from "node:readline/promises"

const finishedGame = async (message) => {
  const finished = await createInterface({
    input: process.stdin,
  })
  console.log(message)
  process.stdout.write("\nPress ENTER: ")
  await finished.question("")
  await finished.close()
}

export default finishedGame
