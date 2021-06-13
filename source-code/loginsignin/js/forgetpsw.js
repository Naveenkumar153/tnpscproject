// selector

const form     = document.querySelector('#form');
const email    = document.querySelector('#email');



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

    checkRequired([email]);
    validateEmail(email);
};


 form.addEventListener('click',submitForm)