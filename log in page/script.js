const loginId = [];


function myFunction(){
    event.preventDefault();
    const textInput = document.querySelector('.inputText').value
    
    const passInput = document.querySelector('.inputPass').value 

const id = {
    username: textInput,
    password: passInput,
}
loginId.push(id);
}

