/**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 3**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

//array con all'interno le img

const raccoltaImmagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

const contenitore = document.getElementsByClassName("raccolta");
console.log(contenitore);

for (let i = 0; i < raccoltaImmagini.length; i++) {
    const element = `<img src="${raccoltaImmagini[i]}" alt="">`
    console.log(element);
    contenitore.innerHTML += element;
};