function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question');
if (question === null){
    document.getElementById('response-text'). innerText ='Please ask a question!'
    document.getElementById('response-text'). classList ='display text-danger'
    document.getElementById('response-image'). src = 'BAD IMAGE'

}
}