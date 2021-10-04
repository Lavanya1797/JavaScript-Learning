'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');  // . should be used only in queryselector
    overlay.classList.remove('hidden');
};
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i=0; i<btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click',openModal); // here we doesn't call function like openModal() instead we simply declared it hence this func is executed only click event happened otherwise it will automatically executed bfr click event
    btnCloseModal.addEventListener('click',closeModal);
    overlay.addEventListener('click',closeModal);
    
document.addEventListener('keydown',function(e){    // can enter any name as argument instead of e
   
    if(e.key=='Escape' && !modal.classList.contains('hidden')){      //in Escape 'E' should be in caps       // e.key means e property in obj key ie.,keyboard
        closeModal();
    }
    });