
document.getElementById('donet-now-3').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');
    const inputMoney3 = GetInputValueByid('input-for-student');

    if (mainbalance > 0 && inputMoney3 > 0) {
        const Newlowbalance3 = AfterDonetMoney(mainbalance, inputMoney3);
        document.getElementById('main-balance').innerText = Newlowbalance3;
        const StudentBalance = GetInputtextByid('student-balance');

        const NewStudentbalancefeni = totalMoney(StudentBalance, inputMoney3);
        document.getElementById('student-balance').innerText = NewStudentbalancefeni;
        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');
        // 
        
        const div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('rounded-xl')
        div.classList.add('py-5')
        div.classList.add('px-2')
        div.classList.add('mt-3')
        div.innerHTML=`
        <h1 class="lg:text-xl leaxand">${inputMoney3} Taka Donated for Flood at Noakhali, Bangladesh </h1>
        <p class="mt-4  text-xs lg:text-base px-4 font-semibold">Date :${new Date()}</p>
        `
        document.getElementById('transit-history').appendChild(div);
    }
    else {
        alert('You din not have enough money or minimum money for donet');
    
    }
})


document.getElementById('donet-now-2').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');
    const inputMoney2 = GetInputValueByid('input-for-feni-donet');

    if (mainbalance > 0 && inputMoney2 > 0) {
        const Newlowbalance2 = AfterDonetMoney(mainbalance, inputMoney2);
        document.getElementById('main-balance').innerText = Newlowbalance2;
        const FeniBalance = GetInputtextByid('feni-balance');

        const Newhighbalancefeni = totalMoney(FeniBalance, inputMoney2);
        document.getElementById('feni-balance').innerText = Newhighbalancefeni;
        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');
        
        const div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('rounded-xl')
        div.classList.add('py-5')
        div.classList.add('px-2')
        div.classList.add('mt-3')
        div.innerHTML=`
        <h1 class="lg:text-xl leaxand">${inputMoney2} Taka Donated for Flood at Noakhali, Bangladesh </h1>
        <p class="mt-4 font-semibold text-xs lg:text-base px-4">Date :${new Date()}</p>
        `
        document.getElementById('transit-history').appendChild(div);
    }
    else {
        alert('You din not have enough money or minimum money for donet');
        
    }
})


document.getElementById('donet-now').addEventListener('click', function (event) {
    event.preventDefault();
    const mainbalance = GetInputtextByid('main-balance');


    const inputMoney = GetInputValueByid('input-for-donet');

    console.log(mainbalance, inputMoney);
    
    if (mainbalance > 0 && inputMoney > 0) {


        const Newlowbalance = AfterDonetMoney(mainbalance, inputMoney);

        const noakhalibalace = GetInputtextByid('noyakhali-balance');

        document.getElementById('main-balance').innerText = Newlowbalance;

        const Newhighbalance = totalMoney(noakhalibalace, inputMoney);
        document.getElementById('noyakhali-balance').innerText = Newhighbalance;

        document.getElementById('congrets-sec').classList.remove('hidden')
        document.getElementById('sec-three').classList.add('blur-sm');
        document.getElementById('sec-one').classList.add('blur-sm');


        const div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('rounded-xl')
        div.classList.add('py-5')
        div.classList.add('px-2')
        div.classList.add('mt-3')
        div.innerHTML=`
        <h1 class="lg:text-xl leaxand">${inputMoney} Taka Donated for Flood at Noakhali, Bangladesh </h1>
        <p class="mt-4 font-semibold text-xs lg:text-base px-4">Date :${new Date()}</p>
        `
        document.getElementById('transit-history').appendChild(div);
       
        
       }

    
   
    else {
        alert('You din not have enough money or minimum money for donet');

    }

})


document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href= 'faq.html';

})
document.getElementById('home-btn').addEventListener('click',function(){
    window.location.href= 'index.html';

})