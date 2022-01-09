console.log('Hello')



const showAnswer = (question_id) => {
    for(let i = 1; i <= 5; i++){
        document.getElementById('answer'+i.toString()).style.display = 'none';
    }
    var question_number = question_id.slice(-1);
    var answer_number = 'answer'+question_number
    console.log('The answer number is: '+answer_number)
    element_shown = document.getElementById(answer_number)
    if(element_shown.style.display == 'block'){
        element_shown.style.display = 'none';
    }else{
        element_shown.style.display = 'block';
    }
    //document.getElementById(answer_number).style.display = 'block'
}