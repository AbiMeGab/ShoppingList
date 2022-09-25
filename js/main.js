let btn = document.getElementById("Agregarbtn");
let nom = document.getElementById("Name");
let cant = document.getElementById("Number");
let SpanTotal = document.getElementById("ShowTotal");
let counter = document.getElementById("counterProducts");
let TotalFinal = 0;
let contador = 0;


function precio() {
  let max = (100)
  let min = (15)
  return ((Math.random() * (max - min + 1) + min).toFixed(2));
}

function ValidarNombre(){
  if(nom.value.length >=3){
    nom.classList.remove("is-invalid");
    nom.classList.add("is-valid");
    return true;
  }else{
    nom.classList.remove("is-valid");
    nom.classList.add("is-invalid");
    return false;
    //check = false;
  }
}

function ValidarCantidad(){
  if(cant.value.length >=1){
    cant.classList.remove("is-invalid");
    cant.classList.add("is-valid");
    return true;
  }else{
    cant.classList.remove("is-valid");
    cant.classList.add("is-invalid");
    return false;
    //check = false;
  }
}

btn.addEventListener ("click", function (event){
    event.preventDefault();
    if (ValidarNombre() &&ValidarCantidad()) {
      console.log(nom.value);
      console.log(cant.value);
      let preciol = precio();
      let Subtotal = (cant.value * preciol).toFixed(2);
      TotalFinal += parseFloat(Subtotal);
      total.innerHTML += `<tr>
      <th scope="row" id="cantidad">${cant.value}</th>
      <td id="product">${nom.value}</td>
      <td id="uprice"><strong>$</strong> ${preciol}</td>
      <td id="subt"><strong>$</strong> ${Subtotal}</td>
      </tr>`
      contador++;
      counter.innerText = contador;
      SpanTotal.innerHTML=`<strong>\$</strong> ${TotalFinal.toFixed(2)}`; 
      nom.value="";
      cant.value="";
      nom.classList.remove("is-invalid");
      nom.classList.remove("is-valid");
      cant.classList.remove("is-invalid");
      cant.classList.remove("is-valid");
    } else {

    }

  });