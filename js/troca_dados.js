window.onload = function () {
	nome = prompt("Digite seu nome", "");
	idade = parseInt(prompt("Digite sua idade", ""));
	curso = prompt("Digite seu curso", "");
	if(curso.toUpperCase() == ("CIÊNCIA DA COMPUTAÇÃO")) {
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



