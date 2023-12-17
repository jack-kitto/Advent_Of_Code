const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const WIN = "WIN"
const LOSE = "LOSE"
const DRAW = "DRAW"
const movePoints = new Map()
const outcomePoints = new Map()
const yourMoves = new Map()
const opponentsMoves = new Map()
const losingMove = new Map()
const winningMove = new Map()

outcomePoints.set(WIN, 6)
outcomePoints.set(LOSE, 0)
outcomePoints.set(DRAW, 3)

winningMove.set(SCISSORS, ROCK)
winningMove.set(ROCK, PAPER)
winningMove.set(PAPER, SCISSORS)

losingMove.set(ROCK, SCISSORS)
losingMove.set(PAPER, ROCK)
losingMove.set(SCISSORS, PAPER)


yourMoves.set("X", ROCK)
yourMoves.set("Y", PAPER)
yourMoves.set("Z", SCISSORS)

opponentsMoves.set("A", ROCK)
opponentsMoves.set("B", PAPER)
opponentsMoves.set("C", SCISSORS)

movePoints.set(ROCK, 1)
movePoints.set(PAPER, 2)
movePoints.set(SCISSORS, 3)




export const day2 = (input) => {
  console.log("!!!!!!!!!!!!!!!! DAY 2 !!!!!!!!!!!!!!!!!!!")
  // console.log(getScoreFromRound(getArrOfRoundsFromInput(input)[0]))
  const rounds = getArrOfRoundsFromInput(input)
  let scores = []
  rounds.forEach(round => {
    scores.push(getScoreFromRound(round))
  })
  console.log(getSumOfScores(scores))
}

const getSumOfScores = (scores) => scores.reduce((a, b) => a + b, 0)
const getYourMoveFromRound = (round) => {
  const opponentMove = opponentsMoves.get(round.opponentsMove)
  if (round.yourMove == 'X') return losingMove.get(opponentMove)
  if (round.yourMove == 'Y') return opponentMove
  if (round.yourMove == 'Z') return winningMove.get(opponentMove)
}

const getScoreFromRound = (round) => {
  const yourMove = yourMoves.get(round.yourMove)
  if (!yourMove) return 0
  const opponentsMove = opponentsMoves.get(round.opponentsMove)
  if (opponentsMove == '') return 0
  const valueOfYourMove = getValueOfYourMove(getYourMoveFromRound(round))
  const valueOfOutcome = getScoreForOutcomeOfRound(round)
  console.log("``````````````````````````````````````````````````")
  console.log("round", round)
  console.log("yourMove       ", yourMove)
  console.log("opponentsMove  ", opponentsMove)
  console.log("valueOfYourMove", valueOfYourMove)
  console.log("valueOfOutcome ", valueOfOutcome)
  return valueOfYourMove + valueOfOutcome
}

const getScoreForOutcomeOfRound = (round) => {
  // const yourMove = yourMoves.get(round.yourMove)
  // const opponentsMove = opponentsMoves.get(round.opponentsMove)
  // const theMoveThatLoses = losingMove.get(yourMove)
  // if (opponentsMove == theMoveThatLoses) {
  //   return outcomePoints.get(WIN)
  // }
  // else if (yourMove == opponentsMove) {
  //   return outcomePoints.get(DRAW)
  // }
  // return outcomePoints.get(LOSE)
  if (round.yourMove == 'X') return outcomePoints.get(LOSE)
  if (round.yourMove == 'Y') return outcomePoints.get(DRAW)
  if (round.yourMove == 'Z') return outcomePoints.get(WIN)
}

const getValueOfYourMove = (yourMove) => {
  switch (yourMove) {
    case ROCK:
      return movePoints.get(ROCK)
    case PAPER:
      return movePoints.get(PAPER)
    case SCISSORS:
      return movePoints.get(SCISSORS)
  }
  return 0
}

const getArrOfRoundsFromInput = (input) => {
  const arrOfLines = input.split('\n');
  return arrOfLines.map((line) => getRoundFromLineOfInput(line))
}

const getRoundFromLineOfInput = (line) => {
  return {
    opponentsMove: line.split(" ")[0],
    yourMove: line.split(" ")[1]
  }
}



