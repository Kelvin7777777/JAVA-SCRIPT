// function changetoHelloWorld() {
//     let mychange= document.getElementById("shout")

//     mychange.onclick = mychange.onclick.apply()("HELLO WORLD");

// }
{
    document.getElementById("shout").addEventListener("click", function() {
        document.getElementById("outputText").textContent = "Hello, World!";
    });
}