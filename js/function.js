

console.log('function button added');

function GetInputtextByid(id){
    const inputNum = document.getElementById(id).innerText;
    const makeinputnum = parseFloat(inputNum)
    return makeinputnum;
}

function GetInputValueByid(id){
    const inputNum = document.getElementById(id).value;
    const makeinputnum = parseFloat(inputNum)
    return makeinputnum;
}


function AfterDonetMoney(a,b){
    const c= a-b;
    return c;
}

function totalMoney(a,b){
    const c= a+b;
    return c;
}
