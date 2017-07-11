
var sentence = ["The", "walrus", "danced", "Through", "the", "trees", "In", "the", "moon-light"];

function addExcitement (theWordArray) {
    let commaKiller = "";
    for(let word = 0; word < theWordArray.length; word++){
        commaKiller+=" "+theWordArray[word];
        console.log(commaKiller);
        }
}
addExcitement(sentence);


function addExcited (theWordArray){
let commaKiller = ""; 
for (let word = 0; word < theWordArray.length; word++){
    commaKiller+=" "+ theWordArray[word];
    if(((word + 1) % 3) === 0) {
        commaKiller+="!";
        }
    console.log(commaKiller);
    }
}

// Invoke the function and pass in the array
addExcited(sentence);

function soExcited (theWordArray){
let commaKiller = ""; 
for (let word = 0; word < theWordArray.length; word++){
    commaKiller+=" "+ theWordArray[word];
    if(((word + 1) % 3) === 0) {
        for (let adder = 0; adder < word/3; adder++){
        commaKiller+="!";
        }
    }
    console.log(commaKiller);
}
}

soExcited(sentence);