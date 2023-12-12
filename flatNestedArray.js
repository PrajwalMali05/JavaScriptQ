const flattenArray = (nestedArray) => { 
    return nestedArray.flat(Infinity); 
    //Array.prototype.flat(depth)  
  };

  console.log(flattenArray([1,[2,[3,[4]]]]))