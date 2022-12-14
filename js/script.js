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

/**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.*/

/**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.*/


//array con all'interno le img
const raccoltaImmagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

//creato una variabile che prende l'elemento html con la classe raccolta CSS
const contenitore = document.querySelector(".raccolta");
console.log(contenitore);

//ciclo FOR 
for (let i = 0; i < raccoltaImmagini.length; i++) {
    const element = `<img class="image" src="${raccoltaImmagini[i]}" alt="">`
    console.log(element);
    contenitore.innerHTML += element;
};

//prima immagine visibile in partenza 
    const immaginePartenza = document.getElementsByClassName("image");
    console.log(immaginePartenza);

    //BONUS2
    const thumPart = document.getElementsByClassName("th");


    let posizioneSlider = 0
    immaginePartenza[posizioneSlider].classList.add("visibile");

    //BONUS 2
    let opacity = 0;
    thumPart[opacity].classList.add("opa")
    

    const arrUp = document.querySelector(".up");
    const arrDown = document.querySelector(".down");

    //al click sulla freccia in avanti le immagini verranno cambiate fino a quando non sarà arrivata all'ultima ed il bottone non andraà più avanti
    arrUp.addEventListener("click", function () { 
        if (posizioneSlider < 4) {
        immaginePartenza[posizioneSlider].classList.remove("visibile");
        posizioneSlider++;
        immaginePartenza[posizioneSlider].classList.add("visibile")
        //BONUS 2
        thumPart[opacity].classList.remove("opa")
        opacity++;
        thumPart[opacity].classList.add("opa")
    
    //BONUS 1: Quando la posizione slider è uguale o maggiore di 4 ritornerà alla poszione 0   
    } else if (posizioneSlider >= 4) {
        immaginePartenza[posizioneSlider].classList.remove("visibile");
        posizioneSlider=0;
        immaginePartenza[posizioneSlider].classList.add("visibile")
        //BONUS 2
        thumPart[opacity].classList.remove("opa")
        opacity = 0;
        thumPart[opacity].classList.add("opa")
    }
});

    //al click sulla freccia in indietro le immagini verranno cambiate fino a quando non saremo arrivati alla prima immagine e quindi non potremo più andare indietro
    arrDown.addEventListener("click", function () { 
        if (posizioneSlider > 0) {
        immaginePartenza[posizioneSlider].classList.remove("visibile");
        posizioneSlider--;
        immaginePartenza[posizioneSlider].classList.add("visibile")
        // BONUS 2
        thumPart[opacity].classList.remove("opa")
        opacity--;
        thumPart[opacity].classList.add("opa")

    //BONUS 1: Quando la posizione slider è uguale o minore di 0 ritornerà alla poszione 4     
    } else if (posizioneSlider <= 0) {
        immaginePartenza[posizioneSlider].classList.remove("visibile");
        posizioneSlider = 4;
        immaginePartenza[posizioneSlider].classList.add("visibile")
        // BONUS 2
        thumPart[opacity].classList.remove("opa")
        opacity = 4;
        thumPart[opacity].classList.add("opa")
    }
});