let button = document.querySelector('#sumitBtn');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let lastName = document.querySelector('#lastName');
let name = document.querySelector('#name');
let form = document.querySelector('#form')
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let errIcon = document.querySelectorAll('.errorIcon');
//button.click = true; 
let click = true; 

let namePrint = document.querySelector('#namePrint');
let lasNamePrint = document.querySelector('#lastNamePrint');
let emailPrint = document.querySelector('#emailPrint');
let passwordPrint = document.querySelector('#passwordPrint');



function validadFormulario (ev) {
    ev.preventDefault();
    if(click === true){
        click = false;
        if(name.value && password.value && email.value && lastName.value != "" ){
            if(emailRegex.test(email.value)){
                console.log('paso');
                console.log('email valido');
                this.submit();
                window.open("html/successRegister.html","_parent")
            } else {
                let errE = document.createElement('p');
                emailPrint.append(errE);
                errIcon[2].classList.add('d-block');
                email.value = 'email@example/com';
                email.style.color = 'hsl(0, 100%, 74%)';
                errE.innerHTML = `looks like this is not an ${email.name}`;
                setTimeout(() => {
                    emailPrint.removeChild(errE);
                    errIcon[2].classList.remove('d-block');
                    email.value = 'email@example/com';
                    click = true;
                },1500);
                console.log('email no valido');
                return
            }
            
        } else {
            //console.log('campo vacio')
            if(name.value.length === 0){
                //debugger
                console.log(`${name.name} no puede estar vacio`);
                let errN = document.createElement('p'); 
                namePrint.append(errN);
                errIcon[0].classList.add('d-block');
                name.placeholder = '';
                errN.innerHTML = `${name.name} no puede estar vacio`;
                setTimeout(() => {
                    namePrint.removeChild(errN);
                    errIcon[0].classList.remove('d-block');
                    name.placeholder = 'First Name';
                    click = true;
                },1500);  
                
            } else if (lastName.value.length === 0) {
                console.log(`${lastName.name} no puede estar vacio`);
                let errL = document.createElement('p');
                lasNamePrint.append(errL);
                errIcon[1].classList.add('d-block');
                lastName.placeholder = ''
                errL.innerHTML = `${lastName.name} no puede estar vacio`;
               
                setTimeout(() => {
                    lasNamePrint.removeChild(errL);
                    errIcon[1].classList.remove('d-block');
                    lastName.placeholder = 'Last Name';
                    click = true;
                },1500); 
            } else if (email.value.length === 0) {
                console.log(`${email.name} no puede estar vacio`);
                let errE = document.createElement('p');
                emailPrint.append(errE);
                errIcon[2].classList.add('d-block');
                email.placeholder = '';
                errE.innerHTML = `${email.name} no puede estar vacio`;
                setTimeout(() => {
                    emailPrint.removeChild(errE);
                    errIcon[2].classList.remove('d-block');
                    email.placeholder = 'Email Address'
                    click = true;
                },1500);
                
            } else if(password.value.length === 0){
                console.log(`${password.name} no puede estar vacio`);
                let errP = document.createElement('p');
                passwordPrint.append(errP);
                errIcon[3].classList.add('d-block');
                password.placeholder = '';
                errP.innerHTML = `${password.name} no puede estar vacio`; 
                setTimeout(() => {
                    passwordPrint.removeChild(errP);
                    errIcon[3].classList.remove('d-block');
                    password.placeholder = 'Password'
                    click = true;
                },1500);
            } else {
                console.log('campo vacios');
                click = true;
            }
            
        }
        
    } else {
        return console.log('return');
    }

}



document.addEventListener("DOMContentLoaded",function() {
        form.addEventListener('submit', validadFormulario);
});


