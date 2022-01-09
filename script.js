console.log('Hello')



const showAnswer = (question_id) => {
    var question_number = question_id.slice(-1);
    var answer_number = 'answer'+question_number;
    var image_number = 'arrow-img'+question_number;
    console.log('The answer number is: '+answer_number);
    element_shown = document.getElementById(answer_number);
    arrow_image = document.getElementById(image_number)
    if(element_shown.style.display == 'block'){
        element_shown.style.display = 'none';
        arrow_image.style.transform = 'rotate(360deg)';
    }else{
        for(let i = 1; i <= 5; i++){
            document.getElementById('answer'+i.toString()).style.display = 'none';
            document.getElementById('arrow-img'+i.toString()).style.transform = 'rotate(360deg)';
        }
        arrow_image.style.transform = 'rotate(180deg)';
        element_shown.style.display = 'block';
    }
    //document.getElementById(answer_number).style.display = 'block'
}