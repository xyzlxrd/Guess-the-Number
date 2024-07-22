//variáveis
let computerNumber
let userNumbers = []
let maxguesses = 10
let attempts = 0
let max2 = 9

//gera o numero aleatório
function init(){
   computerNumber = Math.floor(Math.random() * 100 + 1)
   console.log(computerNumber)
}

//numero de tentativas
function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    //trava o numero em 100
    document.getElementById('inputBox').addEventListener('input', function (e) {
        var value = parseInt(e.target.value);
        if (value > 100) {
            e.target.value = 100;
        }
    });


    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
    //Resultado das tentativas
    if (attempts < maxguesses){
        if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too high!!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your guess is too low!!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!! You is a genius of  M A T H..'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')    
        }
    }

    else if (attempts = max2){
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')    
    }
}

//NEWGAME

function newGame(){
    window.location.reload()
}
