const weights = {
    'One': 10,
    'Two': 10,
    'Three': 10,
    'Four': 1,
    'Five': 1,
    'Six': 1
  };
  
  let myArr = [];
  for (var key in weights) {
    for (let num = weights[key]; num != 0; --num) {
      myArr.push(key);
    };
  };
  
  function randomDice(myArr) {
    return myArr[Math.floor(Math.random() * myArr.length)];
  };
  
  randomDice(myArr);