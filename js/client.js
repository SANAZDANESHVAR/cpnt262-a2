// import animals module
import { animals } from './animals.js';

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = '';

// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
const gallery = document.querySelector('.gallery');



// Loop through `animals` array using `array.forEach()`. 
animals.forEach(function (animal) {

  outputHTML +=
    `<figure class="card">
      <img src = ${animal.path} alt = 'Lorem Picsum: ${animal.title}' ${Object.keys(animal)} = ${Object.values(animal)} ${Object.keys(animal)} = ${Object.values(animal)}>


      <figcaption><h1>${animal.title}</h1><p>${animal.credit}</p><a href=${animal.url}><h4> Link</h4> </a></figcaption>
     </figure>`;


  // Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
  gallery.innerHTML = outputHTML;
})