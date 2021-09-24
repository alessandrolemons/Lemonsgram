
var photo = document.querySelector('#ativar')
photo.addEventListener('click', function () {
    document.querySelector('.profile-shortcuts').classList.toggle('show');
})


var fechar = document.querySelector('#cancel')
fechar.addEventListener('click', function () {
    document.querySelector('.options').setAttribute('style', 'display:revert')
})

