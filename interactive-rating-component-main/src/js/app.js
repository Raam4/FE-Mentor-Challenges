var selected;

function selectBtn(score){
    selected = score;
    var btns = document.querySelectorAll('#btns > button');
    btns.forEach( (btn, index) => {
        if(score-1 != index){
            btn.classList.remove('bg-orange', 'text-white');
            btn.classList.add('bg-darkBlue', 'text-mediumGrey');
        }else{
            btn.classList.remove('bg-darkBlue', 'text-mediumGrey');
            btn.classList.add('bg-orange', 'text-white');
        }
    });
}

function submit(){
    document.querySelector('#score').toggleAttribute('hidden');
    document.querySelector('#thanks').toggleAttribute('hidden');
    document.querySelector('#selection').textContent += `You selected ${selected} out of 5`
}