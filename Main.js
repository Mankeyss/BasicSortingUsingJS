const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doneList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let currObj = 0;
let currObjIndex = 0;
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  shuffle(list) 
  console.log(list)

  while (list.toString() != doneList.toString()) {
    currObj = Math.floor(Math.random() * 10);
    if(list[currObj] != currObj+1) {
      console.log("Changed " + (currObj + 1) + "!");
      list[currObj] = currObj+1
      console.log(list);
    } 
    
    if(list.toString() == doneList.toString()) {
        console.log("Done!");
        console.log("----COMPARE----")
        console.log("List:");
        console.log(list);
        console.log("\nAs it should be:")
        console.log(doneList)
    }
}