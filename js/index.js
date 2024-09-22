
// const mainbalance = getInputBalance('main-balance');
// console.log(mainbalance);
console.log('index button added');


document.getElementById('donet-now').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');
    const inputMoney = GetInputValueByid('input-for-donet');
    console.log(mainbalance, inputMoney);




    if (mainbalance > 0) {
        const Newlowbalance = AfterDonetMoney(mainbalance, inputMoney);
        // console.log(Newlowbalance);
        const noakhalibalace = GetInputtextByid('noyakhali-balance');
        // console.log(noakhalibalace);
        document.getElementById('main-balance').innerText = Newlowbalance;
        const Newhighbalance = totalMoney(noakhalibalace, inputMoney)
        // console.log(Newhighbalance);
        document.getElementById('noyakhali-balance').innerText = Newhighbalance;
        
    }
    else {
        alert('You dinnt have enough money ');

    }

})