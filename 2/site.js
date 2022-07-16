var number_1 = "";
var number_2 = "";
var operator = "";
var output = "";
var result = 0;


function charachterSelector(input){
    if(operator == ""){
        number_1 += input.innerHTML;
        outputShower(number_1);
    }else{
        number_2 += input.innerHTML;
        outputShower(number_2);
    }

    
}

function operatorSelector(input){
    operator = input.innerHTML;
    outputShower();
}

function outputShower(input){
    print(number_1 + operator + number_2);
}

function clearOutput(){
    number_1 = "";
    number_2 = "";
    operator = "";
    output = "";
    result = 0;
    print(output);
}

function print(input){
    document.getElementById("output")
        .value = input;
}

function equal(){
    
    if(number_1 != "" && number_2 !=""){

        let IntNumber_1 = parseInt(number_1);
        let IntNumber_2 = parseInt(number_2);

        switch (operator){

            case "+":
                result = IntNumber_1 + IntNumber_2;
                break;
    
            case "-":
                result = IntNumber_1 - IntNumber_2;
                break;
    
            case "*":
                result = IntNumber_1 * IntNumber_2;
                break;
    
            case "÷":
                result = IntNumber_1 / IntNumber_2;
                break;
        }
    
        console.log(IntNumber_1);
        console.log(IntNumber_2);
        number_1 = result.toString();
        number_2 = "";
        operator = "";
        output = result.toString();
        print(result);
    }
}

