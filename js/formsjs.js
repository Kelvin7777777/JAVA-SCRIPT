{
    function validateInput(){
        let myInput= document.getElementById("numb");
        let user_value= myInput.value

        if(isNaN(user_value) || !(user_value >=1 && user_value > 10)) {
            alert("Wrong Input")
        } else {
            alert("Correct")
        }
    }
    function changetoUppercase() {
        let myinput= document.getElementById("numb")
        myinput.value= myinput.value.toUpperCase()
    }
}