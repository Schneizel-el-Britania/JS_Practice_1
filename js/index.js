const mergeQueues = (firstQueue, secondQueue) => {
  const resultQueue = new Queue();
  const queueLength = firstQueue.size > secondQueue.size ? firstQueue.size : secondQueue.size;

  for(let i = 0; i < queueLength; i++){
    if(firstQueue[i] !== undefined) {resultQueue.push(firstQueue[i]);}
    if(secondQueue[i] !== undefined) {resultQueue.push(secondQueue[i]);}
  }

  return resultQueue;
}


const fQueue = new Queue(2, 3, 5, 46, 2, 11, 87, 10);
const sQueue = new Queue(534, 22, 6577, 20);
console.log(mergeQueues(fQueue, sQueue));


