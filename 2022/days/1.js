export const day1 = (input) => {
  const items = input.split("\n")
  console.log(getGreatestItemSetTotalFromItems(items))
  console.log(getSumOfArr(getTopNItemTotalsFromItems(items, 3)))

}

const getGreatestItemSetTotalFromItems = (items) => {
  const arrOfItemSetTotals = getArrOfItemSetTotalsFromItems(items)
  let max = 0
  arrOfItemSetTotals.forEach(totalOfItemSet => {
    if (totalOfItemSet > max) max = totalOfItemSet
  });
  return max
}

const getTopNItemTotalsFromItems = (items, n) => {
  const arrOfItemSetTotals = getArrOfItemSetTotalsFromItems(items)
  const sortedArrOfItemSetTotals = arrOfItemSetTotals.sort((a, b) => b - a);
  return sortedArrOfItemSetTotals.slice(0, n);
}
const getSumOfArr = (arr) => {
  let total = 0
  arr.forEach(element => {
    total += element
  });
  return total
}

const getArrOfItemSetTotalsFromItems = (items) => {
  const arrOfItemSets = getArrOfItemSetsFromItems(items)
  return arrOfItemSets.map((itemSet) => getSumOfItemSet(itemSet))
}


const getArrOfItemSetsFromItems = (items) => {
  const itemSetsCSV = getItemSetsCSVFromItems(items)
  return itemSetsCSV.map((itemSetCSV) => getItemSetFromCSV(itemSetCSV))

}

const getSumOfItemSet = (itemSet) => {
  let total = 0
  itemSet.forEach(element => total += element);
  return total
}

const getItemSetByIndex = (items, index) => {
  return getItemSetFromCSV(getItemSetsCSVFromItems(items)[index])
}

const getItemSetFromCSV = (itemSetCSV) => {
  return itemSetCSV.split(',').map((item) => parseFloat(item))
}

const getItemSetsCSVFromItems = (items) => {
  const itemsCSV = items.join(',');
  return itemsCSV.split(',,');
}


