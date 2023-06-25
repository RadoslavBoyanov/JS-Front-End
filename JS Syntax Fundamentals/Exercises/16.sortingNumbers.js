function solve(array) {
    array.sort(function (a, b) {
      return a - b;
    });
    let outpuArray = [];
    let bonusIndex = 0;
    for (let index = 0; index < array.length; index++) {
      if (bonusIndex % 2 == 0) {
        let value = array.shift();
        outpuArray.push(value);
      } else {
        let value = array.pop();
        outpuArray.push(value);
      }
      bonusIndex++;
      index--;
    }
    return outpuArray;
  }

  solve([1,65, 3, 52, 48, 63, 31, 3, 18, 56])