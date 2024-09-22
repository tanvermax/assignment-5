
document.getElementById('donet-now-3').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');
    const inputMoney3 = GetInputValueByid('input-for-student');

    if (mainbalance > 0) {
        const Newlowbalance3 = AfterDonetMoney(mainbalance, inputMoney3);
        document.getElementById('main-balance').innerText = Newlowbalance3;
        const StudentBalance = GetInputtextByid('student-balance');

        const NewStudentbalancefeni = totalMoney(StudentBalance, inputMoney3);
        document.getElementById('student-balance').innerText = NewStudentbalancefeni;
        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');



    }

})


document.getElementById('donet-now-2').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');
    const inputMoney2 = GetInputValueByid('input-for-feni-donet');

    if (mainbalance > 0) {
        const Newlowbalance2 = AfterDonetMoney(mainbalance, inputMoney2);
        document.getElementById('main-balance').innerText = Newlowbalance2;
        const FeniBalance = GetInputtextByid('feni-balance');

        const Newhighbalancefeni = totalMoney(FeniBalance, inputMoney2);
        document.getElementById('feni-balance').innerText = Newhighbalancefeni;
        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');



    }

})


document.getElementById('donet-now').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');


    const inputMoney = GetInputValueByid('input-for-donet');
    const inputMoney3 = GetInputValueByid('input-for-student');
    console.log(mainbalance, inputMoney);




    if (mainbalance > 0) {
        // noyakhali money
        const Newlowbalance = AfterDonetMoney(mainbalance, inputMoney);

        const noakhalibalace = GetInputtextByid('noyakhali-balance');

        document.getElementById('main-balance').innerText = Newlowbalance;

        const Newhighbalance = totalMoney(noakhalibalace, inputMoney);
        document.getElementById('noyakhali-balance').innerText = Newhighbalance;

        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');


    }
    else {
        alert('You dinnt have enough money ');

    }

})