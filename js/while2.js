
{
    const arr =[89, 90, 70, 65, 30, 56]
    let x = 0
    while( x < arr.length){
        console.log(x)
        x++
    }
      
}

{
    const numbers = [89, 90, 70, 65, 30, 56]
    function getSum(arr) {
        let sum = 0
        let x = 0
        while (x < arr.length) {
            sum = sum + arr[0]
            x++
         }
         return sum

        
    }
    console.log(getSum(numbers))
}