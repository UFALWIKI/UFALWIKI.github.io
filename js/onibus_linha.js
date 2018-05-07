window.onload = function () {
	
	linha = parseInt(prompt("Digite seu linha de onibus", ""))
	
	if(linha == 607) {
		window.location.href = "mobilidade/607.html";
	} else {
		alert("Linha de onibus não cadastrada!");
		test = prompt("Digite 1 para digitar novamente e outro valor para sair");
		if(test == '1'){
			location.reload();
		} else {
			window.location.href = "index.html";
		}
	}
}



