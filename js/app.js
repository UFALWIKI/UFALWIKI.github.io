function valor_almoco() {
	quantidade = parseInt(prompt("Insira a quantidade de almocos",""))

	total =  parseInt(3 * quantidade)

	alert("O total a pagar é de : R$ "+total+" reais" )

	alert("Voce tem direito a consumir o almoço, o qual possui prato principal, suco, sobremesa e conta também com opções para pessoas vegetarianas, para informações detalhadas sobre o cardápio diário acessar o Instagram e seguir o perfil da Ufal nas redes sociais")

	/* colocar link das midias da UFAL do instagram*/
}

function impressao() {	
	dinheiro = parseFloat(prompt("Insira a quantidade de páginas a imprimir:",""))

	resultado = parseFloat(dinheiro * 0.20) 

	encadernar = (prompt("Insira 1 se desejar encadernar",''))

	alert("O valor a pagar pelas impressões é de :R$ "+resultado+" reais") 

	if (encadernar == 1)
	{
		resultado = resultado + 2

		alert("O valor total é de: R$ "+resultado+" reais")
	}

	/* colocar comentario sobre principais lugares de xerox*/
}

function jantar() {	
	valor = parseInt(prompt("Insira 1 para Sopa ou 2 para cafe regional:",""))

	if (valor == 1)	{
		alert("O valor total a pagar e de 1 real")

		alert("Voce tem direito a consumir Sopa e Torradas, para informações detalhadas sobre o cardápio diário acessar o Instagram e seguir o perfil da Ufal nas redes sociais")

		/* colocar link das midias da UFAL do instagram*/
	}

	else if (valor == 2) {
		alert("O valor total a pagar e de 3 real")

		alert("Voce tem direito a consumir o café regional, para mais informações confira o cardapio do dia, para informações detalhadas sobre o cardápio diário acessar o Instagram e seguir o perfil da Ufal nas redes sociais")
	}
}

function quantidade_passagem() {	
	dinheiro = parseInt(prompt("Insira a quantidade de dinheiro a recargar:",""))
	resultado =  parseInt(dinheiro / 1.825) // o preço da passagem esta por 3,65 mas estudantes pagam meia
	alert("Você conseguirá aproximadamente:"+resultado+" passagens") // coloquei as passagens em inteiro mesmo que tenha um resto de dinheiro
}

function xerox() {	
	dinheiro = parseFloat(prompt("Insira a quantidade de páginas a tirar xerox:",""))

	resultado = parseFloat(dinheiro * 0.12) 

	encadernar = (prompt("Insira 1 se desejar encadernar",''))

	alert("O valor a pagar pelas xerox é de :R$ "+resultado+" reais") 

	if (encadernar == 1) {
		resultado = resultado + 2

		alert("O valor total é de: R$ "+resultado+" reais")
	}

	/* colocar comentario sobre principais lugares de xerox*/
}

function deci_bin(bin) {
	decimal = parseInt(prompt("Digite um número decimal inteiro a ser convertido", ""));
	while(decimal > 2){
		bin += parseInt(decimal % 2);
		decimal /= 2;
	}
	bin += parseInt(decimal % 2);
	bin += parseInt(decimal / 2);
	alert(bin.split('').reverse().join(''));
}
