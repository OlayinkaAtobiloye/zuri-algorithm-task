function convertFahrToCelsius(Fahr) {
    let value = JSON.stringify(Fahr, space=null)
  if (typeof Fahr == "number" || Fahr instanceof Number) {
    return ((Fahr - 32) * (5 / 9)).toFixed(4);
  } else if (Array.isArray(Fahr)) {
    return value + " is not a valid number but a/an array";
  } else if (Number(Fahr) == Fahr) {
    return ((Fahr - 32) * (5 / 9)).toFixed(4);
  } else {
    
    return value + ' is not a valid number but a/an ' + typeof Fahr;
    
  }
}

function checkYuGiOh(n){
    try{
        array = new Array(Number(n))
    for (let index = 1; index < array.length + 1; index++) {
        if (index % 2 == 0 && index % 3 == 0 && index % 5 == 0){
            array[index - 1] = ('yu-gi-oh');
            }
            
        else if (index % 2 == 0 && index % 3 == 0){
            array[index - 1] = 'yu-gi'}
            else if (index % 2 == 0 && index % 5 == 0){
                array[index - 1] = 'yu-oh'}
        else if (index % 3 == 0 && index % 5 == 0){
            array[index - 1] = 'gi-oh'
        }
        else if (index % 2 == 0){
            array[index - 1] = 'yu'
        }
        else if (index % 3 == 0){
            array[index - 1] = 'gi'
        }
        else if (index % 5 == 0){
            array[index - 1] = 'oh'
        }
        else{
            array[index - 1] = index
        }
    }}
    catch{
        return 'invalid parameter:' + JSON.stringify(n);
    }

        console.log(array)
        return JSON.stringify(array)
        
    
}
