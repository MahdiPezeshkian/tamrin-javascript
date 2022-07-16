var sendBtnOnclick = document.getElementById("send-btn");
sendBtnOnclick.addEventListener("click",sendMessage);



function sendMessage(){
    let message = document.getElementById("input-message").value;
    if(message != ""){
        creatSendMessageBubble(message);
    }
    
}
ش
function creatSendMessageBubble(messageInput){
    let msb = document.createElement("div");
    let txtNode = document.createTextNode(messageInput);
    let location = document.getElementById("message-body");

    msb.appendChild(txtNode);
    msb.className = "border w-50  p-2 shadow speech-bubble-send";
    location.appendChild(msb);

    setTimeout(creatRecivMessageBubble,1000)
}

function creatRecivMessageBubble(){
    let mrb = document.createElement("div");
    let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, minus?";
    let txtNode = document.createTextNode(text);
    let location = document.getElementById("message-body");

    mrb.appendChild(txtNode);
    mrb.className = "border w-50  p-2 shadow speech-bubble-recive";
    location.appendChild(mrb);
}