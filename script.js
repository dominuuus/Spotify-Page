const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    //Pode ser criada a const URL que é o local de busca do arquivo e utilizar na fetch. A variável pode ser alterada quando os dados foram recebidos do back-end.
    //name_like (utilizado para a busca por termos parecidos)
    const urlApiArtist = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(urlApiArtist)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults() {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(Element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
})