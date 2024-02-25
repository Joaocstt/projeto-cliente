const buttons = document.querySelectorAll('#imagens li');
const imagens = document.querySelector('#imagem-produto');

buttons.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        
        buttons.forEach((btn) => {
            btn.querySelector('.color').classList.remove('selected');
        });

        const button = e.target

        const id = button.getAttribute("id");

        button.querySelector('.color').classList.add('selected');

        imagens.classList.add('mudanca')
        imagens.setAttribute("src", `carteira_${id}.jpg`)
    })
})