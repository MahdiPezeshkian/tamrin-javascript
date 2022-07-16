


function clearInput(){
    document.getElementById("inputName").value = null;
    document.getElementById("InputFamily").value = null;
}


function printFullName(){
    let name = document.getElementById("inputName");
    let family = document.getElementById("InputFamily");
    print(name.value + " " + family.value);
}


function print(input){
    document.getElementById("output")
        .innerHTML = input;
}

