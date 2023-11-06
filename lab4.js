let inp = document.getElementById("inpipi")
let pp =document.getElementById("pp")

inp.addEventListener("input", e => {
    console.log();
    let final = (inp.value * 0.15) + parseInt(inp.value) ;

    pp.innerHTML = `the result = ${final}` ;
  });