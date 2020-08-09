function check(){
    var score = 0
    var q1_answer_1 = document.getElementById('q1-a1')
    var q1_answer_2 = document.getElementById('q1-a2')
    var q1_answer_3 = document.getElementById('q1-a3')
    var q1_answer_4 = document.getElementById('q1-a4')
    if (q1_answer_2.checked == true){
        score++
        alert("ques 1 is correct")
    }
    else{
      alert ("ques 1 is wrong")
    }
   
    var q2_answer_1 = document.getElementById('q2-a1')
    var q2_answer_2 = document.getElementById('q2-a2')
    var q2_answer_3 = document.getElementById('q2-a3')
    var q2_answer_4 = document.getElementById('q2-a4')
    if (q2_answer_2.checked == true){
        score++
        alert("ques 2 is correct")
    }
    else{
      alert ("ques 2 is wrong")
    }
   
    var q3_answer_1 = document.getElementById('q3-a1')
    var q3_answer_2 = document.getElementById('q3-a2')
    var q3_answer_3 = document.getElementById('q3-a3')
    var q3_answer_4 = document.getElementById('q3-a4')
    if (q3_answer_1.checked == true){
        score++
        alert("ques 3 is correct")
    }
    else{
      alert ("ques 3 is wrong")
    }

    alert("your score is " + score)
   
    

    
}