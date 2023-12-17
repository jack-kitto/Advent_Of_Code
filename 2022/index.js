import { day1, day2, day3 } from './days/index.js'
import fetch from 'node-fetch'
import fs from 'fs'

const executeDay = ({ dayName, dayFunc }) => {
  const data = fs.readFileSync(`./data/${dayName}`, 'utf8')
  dayFunc(data)
}

// executeDay({ dayName: "day1", dayFunc: day1 })
// executeDay({ dayName: "day2", dayFunc: day2 })
executeDay({ dayName: "day3", dayFunc: day3 })
