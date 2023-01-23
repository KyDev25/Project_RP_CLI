const fightingRound = (livesMonster, livesPlayer, counter) => {
  console.log(
    `
+ ------------------------------ +
            Round ${counter}
+ ------------------------------ +
`.red +
      `
You attack Monster ! (Monster ${livesMonster}HP)
Monster attack you ! (You ${livesPlayer}HP)
`
  )
}

export default fightingRound
