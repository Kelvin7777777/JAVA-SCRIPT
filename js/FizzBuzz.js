{
    function fizzbuzz(n) {
        for (let i = 0; i <= n; i++) {
            if (( i % 3 === 0) && ( i % 7 === 0)) {
                console.log("fizzbuzz")
                }
         else if ( i % 3 === 0)  {
            console.log("buzz")
         }
         else if (i % 7 === 0) {
            console.log("fizz")
         }
         else {
            console.log(i)
            
         }
            
        }
        
    }
    fizzbuzz(21)
}