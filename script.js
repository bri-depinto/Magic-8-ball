function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'display text-danger'
        document.getElementById('response-image').src = 'BAD IMAGE'
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }
    
    const randomNumber = Math.floor(Math.random()*8);
    let answer, image, color;

    switch(randomNumber){
        case 0:
            answer = "yes";
            image = "yes.png" //change this;
            color = "text-success";
            break;
        case 1:
            answer = "no";
            image = "yes.png" //change this;
            color = "text-danger";
            break;
        case 2:
            answer = "maybe";
            image = "yes.png" //change this;
            color = "text-info";
            break;
        case 3:
            answer = "very doubtful";
            image = "yes.png" //change this;
            color = "text-warning";
            break;
        case 4:
            answer = "as I see it yes";
            image = "yes.png" //change this;
            color = "text-sucess";
            break;
        case 5:
            answer = "most likley";
            image = "yes.png" //change this;
            color = "text-success";
            break;
        case 6:
            answer = "ask again";
            image = "yes.png" //change this;
            color = "text-dark";
            break;
        case 7:
            answer = "outlook good";
            image = "yes.png" //change this;
            color = "text-success";
            break;
        default:
            break;

    }


const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;

document.getElementById('response-image').src = `$(image)`;

}
