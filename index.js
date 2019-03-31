const breakOut = [2, 2, 2, 2, 2, 5, 2 ,2]
let changeValue = 4

for (let i = 0; i < breakOut.length; i++) {
  if (breakOut[i] !== 2) {
changeValue = breakOut[i]
    break
  } 
}
