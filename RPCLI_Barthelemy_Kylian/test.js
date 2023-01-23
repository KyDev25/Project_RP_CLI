import { writeFile } from "node:fs/promises"
import { readFile } from "node:fs/promises"

const writeJSON = async (data) => {
  await writeFile("savedPlayer.json", JSON.stringify(data), {
    encoding: "utf-8",
  })
}

// const readJSON = async () => {
//   const content = await readFile("./savedPlayer.json", {
//     flag: "a+",
//     encoding: "utf-8",
//   })

//   return content
//     ? JSON.parse(content)
//     : {
//         victories: 0,
//         defeats: 0,
//     }
// }

const player = {}

player["victories"] = 0
player["defeats"] = 0

writeJSON(player)

const content = await readFile("./savedPlayer.json", {
  flag: "a+",
  encoding: "utf-8",
})

const parseJSON = JSON.parse(content)

console.log("Victories : " + parseJSON.victories)

// console.log(readJSON().victories)
