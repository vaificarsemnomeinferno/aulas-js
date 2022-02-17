const resultado = document.getElementById('resultado');

function gerarNumerosMegaSena() {
  resultado.style.display = 'flex';
  resultado.innerHTML = '';

  resultado.innerHTML += "<div class='teste'><p>1</p></div>";
  resultado.innerHTML += "<div class='teste'><p>18</p></div>";
  resultado.innerHTML += "<div class='teste'><p>26</p></div>";
  resultado.innerHTML += "<div class='teste'><p>37</p></div>";
  resultado.innerHTML += "<div class='teste'><p>52</p></div>";
  resultado.innerHTML += "<div class='teste'><p>60</p></div>";
}