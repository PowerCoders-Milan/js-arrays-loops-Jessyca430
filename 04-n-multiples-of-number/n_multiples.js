// function declaration
function multiplesOf(number){
    let multiples = number[0];
    for (let i = 0; i< number.length; i++){
        if(number[i] % multiples === 0){
            multiples = number [i];
        }
    }
    return multiples;
}
console.log(multiplesOf([2, 4, 6, 8, 10, 12, 14, 16, 18, 20],  2));