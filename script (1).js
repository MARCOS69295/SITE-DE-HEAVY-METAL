// Seleciona todos os botões "curtir"
var likeButtons = document.querySelectorAll('.like-button');

// Adiciona um evento de clique para cada botão "curtir"
likeButtons.forEach(function(button) {
	button.addEventListener('click', function() {
		// Seleciona o elemento que exibe o número de curtidas
		var likesCount = this.parentNode.querySelector('.likes-count');
		
		// Obtém o número atual de curtidas
		var likes = parseInt(likesCount.innerText);

		// Incrementa o número de curtidas
		likes++;

		// Atualiza o texto que exibe o número de curtidas
		likesCount.innerText = likes + ' curtidas';

		// Desabilita o botão "curtir" após ser clicado
		this.disabled = true;
	});
});