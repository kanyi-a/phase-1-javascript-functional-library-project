//myEach

const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
  const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
  }
  //myMap
  const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
  
    return newArr;
  }
  //myReduce
  const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  //myFind
  const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
  }
  //myFilter
  const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
  }
  //mySize
  const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  //myFirst array
  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  //myLast array
  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  //mySortBy array
  
  const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }
  const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
     
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  //object function
  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
  