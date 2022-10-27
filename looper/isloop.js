'use strict';

const LinkedList = require("./linkedlist");

//Complete this algo
const isLoop = (linkedlist) => {
  const cache = {}
    function checkList(node){
  // if cache[node.value]? return true
    if(cache[node.value]) return true

    cache[node.value] = true


  if (node.next === null) return false

      return checkList(node.next)
    }
   return checkList(linkedlist.head)
};

// const isLoop = (linkedlist)=>{
//   if(!linkedlist.head) return false
//   return linkedlist.tail.next !== null

// }
/*

EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
