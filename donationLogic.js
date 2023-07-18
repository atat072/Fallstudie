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

  if(PLZ.value.slice(0,2)!=="17"&&VariantSelector.value==="1"){
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
//go back to form
function displayForm(){
  document.getElementById("genral").classList.remove('d-none');
  document.getElementById("address").classList.remove('d-none');
  document.getElementById("submit").classList.remove('d-none');
  document.getElementById("donationOverview").classList.add('d-none');
  changeVisablityAddress();
}
//trasmit data
async function sendDonationInfo(){
  const VariantSelector = document.getElementById("VariantSelector");
  const ClothTypeSelector = document.getElementById("ClothTypeSelector");
  const AgeSelector = document.getElementById("AgeSelector");
  const LocationSelector = document.getElementById("LocationSelector");
  const Street = document.getElementById("Street");
  const Housenumber = document.getElementById("Housenumber");
  const City = document.getElementById("City");
  const PLZ = document.getElementById("PLZ");

  if(VariantSelector.value==="1"){
    //replace donation.json with Server URL
    let donation = new Donation(ClothTypeSelector.options[ClothTypeSelector.selectedIndex].text,AgeSelector.options[AgeSelector.selectedIndex].text,LocationSelector.options[LocationSelector.selectedIndex].text,Street.value,Housenumber.value,City.value,PLZ.value);
    fetch("donation.json",{
      method: "POST",
      body: JSON.stringify(donation)
    })
  }else{
    let donation = new Donation(ClothTypeSelector.options[ClothTypeSelector.selectedIndex].text,AgeSelector.options[AgeSelector.selectedIndex].text,LocationSelector.options[LocationSelector.selectedIndex].text,null,null,null,null);
    fetch("donation.json",{
      method: "POST",
      body: JSON.stringify(donation)
    })
  }
  alert("Spende erfolgreich");
}
//Donation class
class Donation{
  clothType;
  age;
  location;
  address;

  constructor(clothType, age, location, street, housenumber, city, plz){
    this.clothType=clothType;
    this.age=age;
    this.location=location;
    this.address=[street,housenumber,city,plz];
  }
}