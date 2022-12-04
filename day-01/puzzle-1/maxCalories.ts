import { readFileSync } from 'fs';

const maxCalories = () => {
    const input : Array<string> = readFileSync('./input.txt', 'utf-8').split("\n\n");

    let inputGroups : Array<string[]> = []
    input.forEach(group => {
        inputGroups.push(group.split("\n"))
    })

    let caloriesPerElf : Array<number> = []
    inputGroups.forEach(elfX => {
        let sum = 0
        elfX.forEach(x => {
            sum += Number(x)
        })

        caloriesPerElf.push(sum)
    })

    const maxCaloriesInGroup = Math.max(...caloriesPerElf)

    return {caloriesPerElf, maxCaloriesInGroup};
}

const topThreeSum = (caloriesPerElf: number[]) => {
    let topThree = caloriesPerElf.sort((a, b) => b - a ).splice(0, 3)
    let sumTopThree = topThree.reduce((a, b) => a + b, 0)
    
    return sumTopThree
}



const {caloriesPerElf, maxCaloriesInGroup} = maxCalories()
const topThreeCaloriesSum = topThreeSum(caloriesPerElf)

console.log("First puzzle's answer: ", maxCaloriesInGroup)
console.log("Second puzzle's answer: ", topThreeCaloriesSum)
