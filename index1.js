
SummPositive( [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ] );

function SummPositive( numbers ) {
    var negatives = [];
    var sum = 0;
  
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0) {
        negatives.push(numbers[i]);
      }else{
        sum += numbers[i];
      }
    }
  
    console.log(negatives);
  
    return sum;
  }
  
