module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let zero=0;
  let odd=false;
  
  for(let i=0; i<arr.length; i++){
      let count = arr[i].match(/!/g).length;
      let numb = arr[i].match(/[0-9]/g).join('');
      if(numb % 2 == 0 && count == 2 || count == 1) odd=true;
        for(let j=numb; j>=count; j-=count){
          if (j % 5 == 0 ) zero++;
          if (j % 25 == 0) zero++;
          }
    }
      if (!odd) zero=0;
      return zero;
  }

  

