function le_curso(){
	link = location.search;
	dados = link.split('?')[1];
	i = 1;
	while(dados[i] != '=') {
		i++;
	}
	nome = '';
	i++;
	while(dados[i] != '&') {
		nome += dados[i];
		i++;
	}
	alert(nome)
	idade = '';
	while(dados[i] != '='){
		i++;
	}
	i++
	while(dados[i] != '&') {
		idade += dados[i];
		i++;
	}
	alert(idade);
}