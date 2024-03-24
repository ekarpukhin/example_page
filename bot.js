let keys = ["hello", "ciao", "bonjour", "hola"];
let ans = ["hey", "privet", "hi"]

function is_key(str){
    let b = false;
    for(let key of keys){
        if (str.search(key)!=-1) {b=true;}
    }
    return b;
}

function process(){
    let str = document.getElementById('chat-input').value;
    if(str!==''){
        send_message(str, 1);
        if(is_key(str)){
            send_message(ans[Math.floor(Math.random()*ans.length)], 2);
        }
    }
    str = '';
}

function send_message(message, who) {
    var chatContainer = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.classList.add("chat-message" + who);
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// let input = document.getElementById("chat-input");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("chat-send-button").click();
//   }
// });
