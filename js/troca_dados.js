function le_curso(){
	nome = document.getElementById('nome').innerHTML.value;
	idade = document.getElementById("idade").innerHTML.value;
	curso = document.getElementById("curso").innerHTML.value;
	msg = "Dados:\n" + nome + '\n' + idade + '\n' + curso;
	alert(msg);
}