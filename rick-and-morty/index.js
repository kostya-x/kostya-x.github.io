let currentPage = 1;

const $wrapper = document.createElement('div');
$wrapper.classList.add('wrapper');
document.body.prepend($wrapper);

const $cardHolder = document.createElement('div');
$cardHolder.classList.add('card-holder');
$wrapper.appendChild($cardHolder);

function drawCharacterInfo($characterCardInfo, key, value) {
  const $characterCardInfoList = document.createElement('li');
  $characterCardInfo.appendChild($characterCardInfoList);

  const $characterCardInfoKey = document.createElement('span');
  $characterCardInfoKey.classList.add('character-card__info-key');
  $characterCardInfoKey.innerText = key;
  $characterCardInfoList.appendChild($characterCardInfoKey);

  const $characterCardInfoValue = document.createElement('span');
  $characterCardInfoValue.classList.add('character-card__info-value');
  $characterCardInfoValue.innerText = value;
  $characterCardInfoList.appendChild($characterCardInfoValue);
}

function drawCards(img, name, description) {
  const $characterCard = document.createElement('div');
  $characterCard.classList.add('character-card');
  $cardHolder.appendChild($characterCard);

  const $characterCardHeader = document.createElement('div');
  $characterCardHeader.classList.add('character-card__header');
  $characterCard.appendChild($characterCardHeader);

  const $characterCardImgHolder = document.createElement('div');
  $characterCardImgHolder.classList.add('character-card__img-holder');
  $characterCardHeader.appendChild($characterCardImgHolder);

  const $characterCardImg = document.createElement('img');
  $characterCardImg.setAttribute('src', img);
  $characterCardImg.setAttribute('alt', name);
  $characterCardImgHolder.appendChild($characterCardImg);

  const $characterCardTitle = document.createElement('div');
  $characterCardTitle.classList.add('character-card__title');
  $characterCardHeader.appendChild($characterCardTitle);

  const $characterCardCharacterName = document.createElement('h2');
  $characterCardCharacterName.classList.add('character-card__character-name');
  $characterCardCharacterName.innerText = name;
  $characterCardTitle.appendChild($characterCardCharacterName);

  const $characterCardCharacterDescription = document.createElement('p');
  $characterCardCharacterDescription.classList.add('character-card__character-description');
  $characterCardCharacterDescription.innerText = description;
  $characterCardTitle.appendChild($characterCardCharacterDescription);

  const $characterCardInfo = document.createElement('ul');
  $characterCardInfo.classList.add('character-card__info');
  $characterCard.appendChild($characterCardInfo);

  return $characterCardInfo;
}

function addPreloader() {
  const $preloader = document.createElement('img');
  $preloader.classList.add('preloader');
  $preloader.setAttribute('src', 'giphy.gif');
  $preloader.setAttribute('alt', 'Loading');
  $wrapper.appendChild($preloader);
}

function deletePreloader() {
  const $preloader = document.querySelector('.preloader');
  $preloader.remove();
}

function getData() {
  addPreloader();
  const dataAPI = fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`, { method: 'GET' });

  dataAPI
    .then(response => response.json())
    .then(data => {
      const {info} = data;
      const {results} = data;

      results.forEach(item => {
        const currentYear = new Date().getFullYear();
        // eslint-disable-next-line no-magic-numbers
        const created = currentYear - (item.created).slice(0, 4);
        const description = `id: ${item.id} - created ${created} years ago`;
        const parent = drawCards(item.image, item.name, description);
        drawCharacterInfo(parent, 'STATUS', item.status);
        drawCharacterInfo(parent, 'SPECIES', item.species);
        drawCharacterInfo(parent, 'GENDER', item.gender);
        drawCharacterInfo(parent, 'ORIGIN', item.origin.name);
        drawCharacterInfo(parent, 'LAST LOCATION', item.location.name);
      });

      if (currentPage === info.pages) {
        const btn = document.querySelector('.add-character-card__button');
        btn.setAttribute('disabled', 'true');
      }
      deletePreloader();
    });
}

function drawAddButton() {
  const $addCharacterCard = document.createElement('div');
  $addCharacterCard.classList.add('add-character-card');
  $wrapper.appendChild($addCharacterCard);

  const $addCharacterCardButton = document.createElement('button');
  $addCharacterCardButton.classList.add('add-character-card__button');
  $addCharacterCardButton.innerText = 'Add one more character';
  $addCharacterCard.appendChild($addCharacterCardButton);
  $addCharacterCardButton.addEventListener('click', () => {
    currentPage++;
    getData();
  });
}

getData();
drawAddButton();