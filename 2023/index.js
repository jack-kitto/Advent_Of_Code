import { day1 } from './days/index.js'
import fs from 'fs'

const executeDay = ({ dayName, dayFunc }) => {
  const data = fs.readFileSync(`./data/${dayName}`, 'utf8')
  dayFunc(data)
}

executeDay({ dayName: "day1", dayFunc: day1 })
