let computerGuess;
let userGuess=[];
let userNumberUpdate=document.getElementById('textArea');

const init = () => {
    computerGuess = Number(Math.floor(Math.random()*100));
    // alert(computerGuess)

    document.getElementById("newGame").style.display="none";
    document.getElementById("gameArea").style.display="none";

};

init();

const startGame=()=>{

    document.getElementById("maincontainer").style.display="none";
    document.getElementById("gameArea").style.display="block";


}



// new game start
const newGameStart=()=>{
    document.getElementById("newGame").style.display="block";
    userNumberUpdate.setAttribute('disabled',true);
}

// reload

const newReloadGame=()=>{
    window.location.reload();
};

const compareGuess=()=>{
    const userValue=Number(document.getElementById("textArea").value);
    userGuess=[...userGuess,userValue];
    document.getElementById('previous').innerHTML=userGuess;
if(userGuess.length<passvalue){
    if(userValue>computerGuess){
        document.getElementById("suggestions").innerHTML="Your Number high😲";
        userNumberUpdate.value="";
    }
    else if(userValue<computerGuess){
        document.getElementById("suggestions").innerHTML="Your Number low😟";
        userNumberUpdate.value="";
        
   
    }
    else{
        document.getElementById("suggestions").innerHTML="Congratulation you win😀";
        userNumberUpdate.value="";
        newGameStart();

    }
}
else{
    if(userValue>computerGuess){
        document.getElementById("suggestions").innerHTML=`You Loose! Computer Guess is ${ computerGuess}`;
        userNumberUpdate.value="";
        newGameStart();
    }
    else if(userValue<computerGuess){
        document.getElementById("suggestions").innerHTML=`You Loose! Computer Guess is ${ computerGuess}`;
        userNumberUpdate.value="";
        newGameStart();
        
   
    }
    else{
        document.getElementById("suggestions").innerHTML="Congratulation you win😀";
        userNumberUpdate.value="";
        newGameStart();

    }

}

    document.getElementById('attempt').innerHTML=userGuess.length;
}

const easyLevel=()=>{
    passvalue=10;
    startGame();
}

const hardLevel=()=>{
    passvalue=5;
    startGame();
}
