document.getElementById('histor-btn').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('histor-btn').classList.add('bg-[#B4F461]');
    document.getElementById('histor-btn').classList.add('border-none');
    document.getElementById('histor-btn').classList.add('text-black');
    document.getElementById('sec-three').classList.add('hidden');
    document.getElementById('donation-btn').classList.add('bg-white');
    document.getElementById('donation-btn').classList.remove('border-none');
    document.getElementById('transic-sec').classList.remove('hidden');

    // document.getElementById('donation-btn').classList.add('border-1');
    
    
})

document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('histor-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('histor-btn').classList.remove('border-none');
    document.getElementById('histor-btn').classList.remove('text-black');
    document.getElementById('sec-three').classList.remove('hidden');
    document.getElementById('donation-btn').classList.remove('bg-white');
    // document.getElementById('donation-btn').classList.remove('border-1');
    
    
})


document.getElementById('close-btn').addEventListener('click',function(){
    document.getElementById('congrets-sec').classList.add('hidden')
        document.getElementById('sec-three').classList.remove('blur-sm');
        document.getElementById('sec-one').classList.remove('blur-sm');
})


