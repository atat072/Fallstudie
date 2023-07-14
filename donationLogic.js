//form validtion
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

//hiding/showing address section
function changeVisablityAddress (){
  const Selector = document.querySelector('#VariantSelector');
  const addressSection = document.querySelector('#address');

  if(Selector.value==="1"){
    addressSection.classList.remove('d-none');
    document.getElementById("Street").toggleAttribute("required", true);
    document.getElementById("Housenumber").toggleAttribute("required", true);
    document.getElementById("City").toggleAttribute("required", true);
    document.getElementById("PLZ").toggleAttribute("required", true);
  }else{
    addressSection.classList.add('d-none');
    document.getElementById("Street").toggleAttribute("required", false);
    document.getElementById("Housenumber").toggleAttribute("required", false);
    document.getElementById("City").toggleAttribute("required", false);
    document.getElementById("PLZ").toggleAttribute("required", false);
  }
}