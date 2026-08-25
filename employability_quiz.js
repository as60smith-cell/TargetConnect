
function calculateScore() {
    let score = 0;

    const questions = ['q1','q2','q3','q4','q5'];

    for(let i = 0; i < questions.length; i++) {
        const answer = document.querySelector('input[name="' + questions[i] + '"]:checked');

        if(answer) {
            score += parseInt(answer.value);
        }
    }

    let feedback = "";

    if(score >= 4) {
        feedback = "<strong>Excellent!</strong> You have a strong understanding of employability and the actions that can help you succeed.";
    }
    else if(score >= 2) {
        feedback = "<strong>Good start!</strong> You understand some employability concepts. Continue exploring ways to gain skills, experience and professional connections.";
    }
    else {
        feedback = "<strong>Let's build your knowledge.</strong> Work through this pathway to learn how Heriot-Watt can support your employability journey.";
    }

    const resultDiv = document.getElementById('result');

    resultDiv.style.display = 'block';
    resultDiv.innerHTML =
        '<h3>Your Score: ' + score + '/5</h3>' +
        feedback;
}
