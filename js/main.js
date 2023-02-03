'use strict'
// MOSTRAR FORMULARIO:
// const addForm = document.querySelector ('.js-new-form');
// addForm.classList.remove ('collapsed');


// Listado: Mostrar gatitos desde JS + Mejora como se guarda la información + string upperCase

const list = document.querySelector ('.js-list');

const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';

const kittenOne = `<li class="card">
<article>
    <img class="card_img" src= "${kittenImageOne}"/>
    <h3 class="card_title"> ${kittenNameOne.toUpperCase()}</h3>
    <h4 class="card_race"> ${kittenRaceOne}</h3>
    <p class="card_description">${kittenDescOne}</p>;
</article>
</li>`;


const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRaceTwo = 'Sphynx';

const kittenTwo = `<li class="card">
          <img class="card_img" src="${kittenImageTwo}" alt="sphynx-cat" />
          <h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
          <h4 class="card_race">${kittenRaceTwo}</h4>
          <p class="card_description">
            ${kittenDescTwo}
          </p>
        </li>`;


const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceThree = 'Maine Coon';

const kittenThree =`<li class="card">
        <img class="card_img" src="${kittenImageThree}" alt="maine-coon-cat" />
        <h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
        <h4 class="card_race">${kittenRaceThree}</h4>
        <p class="card_description">${kittenDescThree}</p>
    </li>`;

list.innerHTML = `${kittenOne} ${kittenTwo} ${kittenThree}`;


//  FILTRAR: Búsqueda por descripción

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

if(kittenDescOne.includes(descrSearchText)) {
  list.innerHTML = kittenOne;
}

if(kittenDescTwo.includes(descrSearchText) ) {
  list.innerHTML = kittenTwo;
}

if(kittenDescThree.includes(descrSearchText) ) {
  list.innerHTML = kittenThree;
}





