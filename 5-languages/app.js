let inputMessage = prompt("Choose the language (RU, EN, DE):")

result = inputMessage.toUpperCase() === "RU" ? "Привет" :
         inputMessage.toUpperCase() === "EN" ? "Hello" :
         inputMessage.toUpperCase() === "DE" ? "Gutten tag!" :
         "Selected language is not avaliable!"

alert(result)