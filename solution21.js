
//7KYU PODIUM PROBLEM

function podium(blocks){
if(blocks == 7) return [2, 4, 1]
let second = Math.ceil(blocks / 3)
return [second, second + 1, blocks - second * 2 - 1]
}