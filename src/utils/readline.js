import rl from "readline/promises"

const readLine = rl.createInterface({
    input : process.stdin,
    output : process.stdout
})

export default readLine