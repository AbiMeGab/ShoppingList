let btn = document.getElementById("Agregarbtn");
let nom = document.getElementById("Name");
let cant = document.getElementById("Number");

    

btn.addEventListener ("click", function (event){
    event.preventDefault();
    
    function precio() {         
        let max = (100)
        let min = (15)
        return (Math.random() * (max - min + 1) + min);
      }

    let numb = parseFloat(cant.value);
    let total = (numb) * (precio);
    console.log();

    total.innerHTML += `<tr>
    <th scope="row" id="cantidad">${cant}</th>
    <td id="product">${nom}</td>
    <td id="uprice">${precio}</td>
    <td id="subt">${total}</td>
    </tr>` 
  });
    
      // console.log(precio());

    // res.innerHTML = resultado;

// function resultado {
//     let precio = Math.random(100)

// }