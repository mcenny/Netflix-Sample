function rotateIcon(iconElementId){
    document.getElementById(iconElementId).style.transform = 'rotate(45deg)';
}

function reverseRotateIcon(iconElementId){
    document.getElementById(iconElementId).style.transform = 'rotate(90deg)';
}

function expandAnswer(answerElementId, iconElementId){
    rotateIcon(iconElementId);
    document.getElementById(answerElementId).style.maxHeight = '100%'; 
    document.getElementById(answerElementId).style.paddingTop = '18px';
    document.getElementById(answerElementId).style.paddingBottom = '18px';
    clickState = false;
}

function collapseAnser(answerElementId, iconElementId){
    reverseRotateIcon(iconElementId);
    document.getElementById(answerElementId).style.maxHeight = '0';
    document.getElementById(answerElementId).style.paddingTop = '0';
    document.getElementById(answerElementId).style.paddingBottom = '0';
    clickState = true;
}

let clickState = true;
document.querySelector('#questionOneIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionOneIcon').onclick = expandAnswer('answerOne', 'questionOneIcon')
    }
    else{
    document.getElementById('questionOneIcon').onclick = collapseAnser('answerOne', 'questionOneIcon')
    }
});

document.querySelector('#questionTwoIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionTwoIcon').onclick = expandAnswer('answerTwo', 'questionTwoIcon')
    }
    else{
    document.getElementById('questionTwoIcon').onclick = collapseAnser('answerTwo', 'questionTwoIcon')
    }
});

document.querySelector('#questionThreeIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionThreeIcon').onclick = expandAnswer('answerThree', 'questionThreeIcon')
    }
    else{
    document.getElementById('questionThreeIcon').onclick = collapseAnser('answerThree', 'questionThreeIcon')
    }
});

document.querySelector('#questionFourIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionFourIcon').onclick = expandAnswer('answerFour', 'questionFourIcon')
    }
    else{
    document.getElementById('questionFourIcon').onclick = collapseAnser('answerFour', 'questionFourIcon')
    }
});

document.querySelector('#questionFiveIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionFiveIcon').onclick = expandAnswer('answerFive', 'questionFiveIcon')
    }
    else{
    document.getElementById('questionFiveIcon').onclick = collapseAnser('answerFive', 'questionFiveIcon')
    }
});

document.querySelector('#questionSixIcon').addEventListener('click', function(){
    if(clickState == true){
        document.getElementById('questionSixIcon').onclick = expandAnswer('answerSix', 'questionSixIcon')
    }
    else{
    document.getElementById('questionSixIcon').onclick = collapseAnser('answerSix', 'questionSixIcon')
    }
});