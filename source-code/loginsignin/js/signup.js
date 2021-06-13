// selector

const form2     = document.querySelector('#form2');
const email2    = document.querySelector('#email2');
const password2 = document.querySelector('#password2');

// showError 
  function showError(input,message){
      let formControl           = input.parentElement;
          formControl.className = 'input-group error';
      let small                 = formControl.querySelector('small');
          small.innerText       = message;
  }
//   showSucess
  function showSuccess(input){
    let formControl           = input.parentElement;
        formControl.className = 'input-group success';
  }

//  email validation
    function validateEmail(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.toLowerCase().trim())){
            showSuccess(input);
        }else{
            showError(input,'Email not valid');
        }
    }

    // first letter capital
    function getRefactor(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }


    function checkLength(input,min,max){
        if(input.value.length < min){
            showError(input,`Password must be ${min} characters`);
        }else if(input.value.length > max){
            showError(input,`Password less than ${max} characters`);
        }else{
            showSuccess(input);
        }
    }

       // check input 
       function checkRequired(inputArr){
        inputArr.forEach( function(input) {
            if(input.value.trim() === ''){
                showError(input,`${getRefactor(input)} is required`);
            }else{
                showSuccess(input);
            }
        });
    }

function submitForm(e) {
    e.preventDefault();

    checkRequired([password2,email2]);
    checkLength(password2,6,16);
    validateEmail(email2);
};


 form2.addEventListener('click',submitForm)