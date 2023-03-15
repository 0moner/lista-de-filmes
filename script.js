var getBtn = document.querySelector("form button"),
ulFilmes = document.getElementById("ulFilmes");

var adicionarFilme = [];
var adicionarImg = [];
var adicionarLink = [];

var sobreFilmes = [	"Homem-Aranha: Sem Volta para Casa",
"Deus Não Está Morto",
"Vingadores: Guerra Infinita",
"Homem-Aranha: Longe de Casa",
"Godzilla vs. Kong",
"Harry Potter e as Relíquias da Morte: Parte 2",
"Dragon Ball Super: Super Hero",
"Gato de Botas 2: O Último Pedido"];

var imgFilmes = [
	"https://sm.ign.com/ign_pt/screenshot/default/spider-man-no-way-home-tom-holland-poster-691x1024_u682.jpg",
	"https://m.media-amazon.com/images/M/MV5BMjEwNDQ3MzYyOV5BMl5BanBnXkFtZTgwNDE0ODM3MDE@._V1_FMjpg_UX1000_.jpg",
	"https://cdn.awsli.com.br/600x700/1610/1610163/produto/177685208/poster-os-vingadores-guerra-infinita-b-8210dc20.jpg",
	"https://th.bing.com/th/id/OIP.kQHM65LZs42_AqYXIyZf-AHaK4?w=186&h=273&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.yTOqdszq4xijhQJoIdSoGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://upload.wikimedia.org/wikipedia/pt/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg",
	"https://http2.mlstatic.com/D_NQ_NP_918248-MLM48576297334_122021-O.jpg",
	"http://www.cinesystem.com.br/filmes/images/poster/gato-de-botas-2-o-ultimo-pedido.jpg"
];

var linkFilmes = [ "https://youtu.be/ae6w0-kZ3-M", //Homem-Aranha: Sem Volta para Casa
"https://www.youtube.com/watch?v=LXnS4OaZD30", // Deus Não Está Morto
"https://youtu.be/4jGRyEa2jhE", // Vingadores Guerra Infinita
"https://youtu.be/MqQdHaBtvGs", // Homem-Aranha Longe de casa
"https://youtu.be/kIET9yMABD8", // Godzilla vs Kong
"https://www.youtube.com/watch?v=XS3fRKaapKY", // Harry Potter e as Relíquias da Morte
"https://www.youtube.com/watch?v=HNY3rlgfxvA", // Dragon Ball Super Hero
"https://www.youtube.com/watch?v=sLk94T-hS78"  // Gato de Botas 2
];

for (var i = 0; i < linkFilmes.length; i++) {
  uFilmes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">
  <a href="${linkFilmes [i]}" target="_blank"><img src="${imgFilmes[i]}"></a><label>${sobreFilmes[i]}</label></li>`
}

function adicionar() {
  var nome = document.getElementById("filmeTitle");
  var img = document.getElementById("filmeImg");
  var url = document.getElementById("filmeUrl");
  
  //Verifica se já existe a url/imagem na array
  if ([nome.value, img.value, url.value].every((elementValue) => elementValue !== "")) {
    if (adicionarLink.indexOf(url.value) == -1 && adicionarImg.indexOf(img.value) == -1) {
      var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDel" onclick="remover()">
      <img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button>
      <a href="${url.value}" target="_blank"> <img src="${img.value}" onerror="removerImg()"></a><label>${nome.value}</label></li>`
      
      uFilmes.innerHTML += elemento;

      adicionarLink.push(url.value);
      adicionarImg.push(img.value); 
    } else {
        alert("Esta url/imagem já existe!"); }} else {
        alert("Preencha todos os campos!"); }

  nome.value = "";
  url.value = "";
  img.value = "";

  };

// remover url e imagens do filme

function remover() {
var target = event.currentTarget;
var li = target.parentElement;
var ul = li.parentElement;
var url = li.children[1].href;
var img = li.children[1].firstChild.src;
adicionarLink.splice(adicionarLink.indexOf(url), 1);
adicionarImg.splice(adicionarImg.indexOf(img), 1);
ul.removeChild(li);

};

function removerImg() {
	var ul = event.currentTarget.parentElement.parentElement.parentElement;
	var li = event.currentTarget.parentElement.parentElement;
	ul.removeChild(li);

	adicionarLink.splice(adicionarLink.indexOf(url), 1);
  adicionarImg.splice(adicionarImg.indexOf(img), 1);
	alert("Coloque uma imagem válida!");

};

function mostrarTexto() {
	var target = event.currentTarget;

	target.lastChild.style.opacity = "1";

	if (target.firstChild.id == "btnDel") {
	target.firstChild.style.opacity = "1";
	}};

function ocultarTexto() {
	var target = event.currentTarget;

	target.lastChild.style.opacity = "0";

	if (target.firstChild.id == "btnDel") {
	target.firstChild.style.opacity = "0";
	}};

getBtn.addEventListener("click", function(e) {
  e.preventDefault();

});
