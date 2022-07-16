function validaotor(){
    let name = document.forms["form1"]["inputName"];
    let family = document.forms["form1"]["inputFamily"];

    if(name.value == "" && family.value == ""){
        alert("لطفا اطلاعات را به طور کامل وارد کنید.");
        return false;
    }if(name.value == ""){
        alert("واد کردن نام الزامی است");
        return false;
    }else if(family.value == ""){
        alert("واد کردن نام حانوادگی الزامی است");
        return false;
    }else return true;
}


