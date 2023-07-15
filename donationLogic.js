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

//Chage Page to display an overview of the Donation
document.querySelector("form").onsubmit = function displayOverview (){
  const VariantSelector = document.getElementById("VariantSelector");
  const ClothTypeSelector = document.getElementById("ClothTypeSelector");
  const AgeSelector = document.getElementById("AgeSelector");
  const LocationSelector = document.getElementById("LocationSelector");
  const Street = document.getElementById("Street");
  const Housenumber = document.getElementById("Housenumber");
  const City = document.getElementById("City");
  const PLZ = document.getElementById("PLZ");

  alert(PLZ.value.slice(0, 2));
  if(PLZ.value.slice(0,2)!==17){
    alert("Die Abholadresse liegt auserhalb unseres Einzugsgebietes");
    return false;
  }

  document.getElementById("genral").classList.add('d-none');
  document.getElementById("address").classList.add('d-none');
  document.getElementById("submit").classList.add('d-none');

  document.getElementById("donationOverview").classList.remove('d-none');
  document.getElementById("SelectedVariant").innerText = VariantSelector.options[VariantSelector.selectedIndex].text;
  document.getElementById("SelectedClothType").innerText = ClothTypeSelector.options[ClothTypeSelector.selectedIndex].text;
  document.getElementById("SelectedAge").innerText = AgeSelector.options[AgeSelector.selectedIndex].text;
  document.getElementById("SelectedLocation").innerText = LocationSelector.options[LocationSelector.selectedIndex].text;

  if(VariantSelector.value==="1"){
    document.getElementById("enteredStreet").innerText = Street.value;
    document.getElementById("enteredHuosenumber").innerText = Housenumber.value;
    document.getElementById("enteredCity").innerText = City.value;
    document.getElementById("enteredPLZ").innerText = PLZ.value;
  }else{
    const addressRows = document.querySelectorAll('.address');
    for(row of addressRows){
      row.classList.add('d-none')
    }
  }
  return false;
}