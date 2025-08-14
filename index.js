
let myform1=document.getElementById('myfrom');
myform1.addEventListener('submit',function(event){
    event.preventDefault();
});

let ErrorMessageEl=document.getElementById('ErrorMsg');
let nameEl=document.getElementById('name');
    nameEl.addEventListener('blur',function(event){
        if(nameEl.value ===''){
            ErrorMessageEl.textContent='Required*'
        }else{
            ErrorMessageEl.textContent='';
        }
    });


    let PhoneEl=document.getElementById('phoneError');
let PhoneNumEl=document.getElementById('phone');
    PhoneNumEl.addEventListener('blur',function(event){
        if(nameEl.value ===''){
            PhoneEl.textContent='Required*'
        }else{
            PhoneEl.textContent='';
        }
    });



    let MailEl=document.getElementById('mailError');
let MailIdEl=document.getElementById('phone');
    MailIdEl.addEventListener('blur',function(event){
        if(nameEl.value ===''){
            MailEl.textContent='Required*'
        }else{
            MailEl.textContent='';
        }
    });


    let PasswardErrorEl=document.getElementById('passwardError');
let PasswardEl=document.getElementById('phone');
    PasswardEl.addEventListener('blur',function(event){
        if(nameEl.value ===''){
            PasswardErrorEl.textContent='Required*'
        }else{
            PasswardErrorEl.textContent='';
        }
    });




