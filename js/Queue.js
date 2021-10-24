class Queue{
  constructor(...args){
    this._head = 0;
    this._tail = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size(){
    return this._tail-this._head;
  }

  push(value){
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  unshift(){
    if(this.size){
      const deItem = this[this._head];
      delete this[this._head++];
      return deItem;
    }
  }
}
