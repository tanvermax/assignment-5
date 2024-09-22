document.getElementById('histor-btn').addEventListener('click',function(){
    document.getElementById('histor-btn').classList.add('bg-[#B4F461]');
    document.getElementById('histor-btn').classList.add('border-none');
    document.getElementById('histor-btn').classList.add('text-black');
    document.getElementById('sec-three').classList.add('hidden');
    document.getElementById('donation-btn').classList.add('bg-white');
    document.getElementById('donation-btn').classList.remove('border-none');
    document.getElementById('donation-btn').classList.add('border-1');
    console.log('himy pio');
    
})

document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('histor-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('histor-btn').classList.remove('border-none');
    document.getElementById('histor-btn').classList.remove('text-black');
    document.getElementById('sec-three').classList.remove('hidden');
    document.getElementById('donation-btn').classList.remove('bg-white');
    console.log('himy pio');
    
})


document.getElementById('close-btn').addEventListener('click',function(){
    document.getElementById('congrets-sec').classList.add('hidden')
        document.getElementById('sec-three').classList.remove('blur-sm');
        document.getElementById('sec-one').classList.remove('blur-sm');
})