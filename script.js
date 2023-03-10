function calcularNumerologia(str) {
    const nome = document.getElementById("nome").value.toLowerCase();
    const tabelaCaldeia = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 8,
      g: 3,
      h: 5,
      i: 1,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 7,
      p: 8,
      q: 1,
      r: 2,
      s: 3,
      t: 4,
      u: 6,
      v: 6,
      w: 6,
      x: 5,
      y: 1,
      z: 7,
    };
    
    let soma = 0;
    for (let index = 0; index < nome.length; index++) {
      if (tabelaCaldeia[nome[index]]) {
        soma += tabelaCaldeia[nome[index]];
      }
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor numerológico do seu nome é ${soma}.`;

    return resultado
  }
  