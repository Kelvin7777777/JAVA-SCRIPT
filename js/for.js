{
    const numbers =[ 56,78, 89, 90]
    function getsum(array) {
        sum = 0
        for(let i in numbers){ 
            sum= sum + array[i]
        }
         return sum
            
        
    }
    console.log(getsum(numbers))

    function getmaximum(numbers) {
        let max = numbers[0];
            for(let i in numbers) {
                if ( numbers[i]>max)
                    max=numbers[i]
                
            }
            return max
           

}
console.log(getmaximum(max))
} 
// function getmaximum(numbers) {
//     let max = numbers[0];
//         for(let i in numbers) {
//             if ( numbers[i]>max)
//                 max=numbers[i]
//             return max
//         }
//         console.log(getmaximum(max))

    

    
