let button = document.querySelector('#sumitBtn');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let lastName = document.querySelector('#lastName');
let name = document.querySelector('#name');
let form = document.querySelector('#form')
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//button.click = true; 
let click = true; 

document.addEventListener("DOMContentLoaded",function() {
    //debugger

        form.addEventListener('submit', validadFormulario);
       console.log(form)
   
});


function validadFormulario (ev) {
  //button.click = true;
  //debugger
    ev.preventDefault();
    if(click === true){
        //console.log(click)
        click = false;
        if(name.value && password.value && email.value && lastName.value != "" ){
            if(emailRegex.test(email.value)){
                console.log('paso')
                console.log('email valido')
            } else {
                console.log('email no valido')
                return
            }
            
        } else {
            console.log('campo vacios')
       
            return
        }
        //this.submit();
       
    
    } else {
        setTimeout(() => {
            console.log('muchos click')
            click = true;
        },1000);
        
    }

}

