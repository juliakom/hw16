import css from './styles/style.css';

const container = document.querySelector('.container');

let count = [];
let num = 10;
for (let i = 1; i <= num; i++) {
	count.push(i);
}

fetch (`https://rickandmortyapi.com/api/character/${count}`)
.then(res => res.json())
.then(res => {
	res.forEach(el => createCard(el));
})
.catch(error => {
	console.log('ERROR!!!')
})	


function createCard(data) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = data.name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
  cardStatusP.classList.add('live-status-text');

	const cardStatusPText = document.createTextNode(data.status);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

  if (data.status === "Dead") {
    cardLiveStatus.classList.add('dead');
	};

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(data.location.name);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = data.image;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}

const checkboxMale = document.getElementById("male");
const checkboxFemale = document.getElementById("female");
const checkboxAlive = document.getElementById("alive");
const checkboxDead = document.getElementById("dead");

const tabsBtn = document.querySelectorAll('.checkbox-container');
tabsBtn.forEach(function(item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		tabsBtn.forEach(function(item) {
			item.classList.remove('active');
		})
		currentBtn.classList.add('active');
	});
});


checkboxMale.addEventListener('click', function () {
	fetch (`https://rickandmortyapi.com/api/character/${count}`)
	.then(res => res.json())
	.then(document.querySelector('.container').innerHTML = '')
	.then(res => {
		res.forEach(el => {
			if(el.gender === 'Male') {
				createCard(el);
			}
		});
	})
	.catch(error => {
		console.log('ERROR!!!')
	})	
})

checkboxFemale.addEventListener('click', function () {
	fetch (`https://rickandmortyapi.com/api/character/${count}`)
	.then(res => res.json())
	.then(document.querySelector('.container').innerHTML = '')
	.then(res => {
		res.forEach(el => {
			if(el.gender === 'Female') {
				createCard(el);
			}
		});
	})
	.catch(error => {
		console.log('ERROR!!!')
	})	
})

checkboxAlive.addEventListener('click', function () {
	fetch (`https://rickandmortyapi.com/api/character/${count}`)
	.then(res => res.json())
	.then(document.querySelector('.container').innerHTML = '')
	.then(res => {
		res.forEach(el => {
			if(el.status === 'Alive') {
				createCard(el);
			}
		});
	})
	.catch(error => {
		console.log('ERROR!!!')
	})	
})

checkboxDead.addEventListener('click', function () {
	fetch (`https://rickandmortyapi.com/api/character/${count}`)
	.then(res => res.json())
	.then(document.querySelector('.container').innerHTML = '')
	.then(res => {
		res.forEach(el => {
			if(el.status === 'Dead') {
				createCard(el);
			}
		});
	})
	.catch(error => {
		console.log('ERROR!!!')
	})	
})


