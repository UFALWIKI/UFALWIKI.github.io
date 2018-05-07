window.onload = function () {
	
	linha = parseInt(prompt("Digite seu linha de onibus", ""))
	
	if(linha == 607) {
		window.location.href = "ciencia_computacao/ciencia_computacao.html";
	} else {
		alert("Curso não cadastrado!");
		test = prompt("Digite 1 para digitar novamente e outro valor para sair");
		if(test == '1'){
			location.reload();
		} else {
			window.location.href = "index.html";
		}
	}
}



