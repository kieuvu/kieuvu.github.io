// Web API
const synth = window.speechSynthesis;

// DOM
const imgSection = document.getElementById("image");
const prevButton = document.getElementById("navigation_prev");
const nextButton = document.getElementById("navigation_next");
const currentCard = document.getElementById("current_card");
const questionButton = document.getElementById("audio_question");
const answerButton = document.getElementById("audio_answer");

// Handle
let cardIndex = 0;

window.onload = () => {
    renderCard();
};

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    timer: 3000,
    showConfirmButton: false,
});

const speak = (text, text_vi) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7;
    synth.speak(utterance);

    Toast.fire({
        title: text_vi
    });

    utterance.addEventListener('start', () => {
        Swal.stopTimer;
    });

    utterance.addEventListener('end', () => {
        Swal.resumeTimer;
    });
};

const renderCard = () => {
    currentCard.innerText = data[cardIndex].id;
    imgSection.innerHTML = `
        <img src="${data[cardIndex].img}"/>
    `;
};

const sayQuestion = () => {
    speak(data[cardIndex].ques, data[cardIndex].ques_vi);
};

const sayAnswer = () => {
    speak(data[cardIndex].answ, data[cardIndex].answ_vi);
};

const nextCard = () => {
    cardIndex = (cardIndex == data.length - 1) ? 0 : ++cardIndex;
    renderCard();
};

const prevCard = () => {
    cardIndex = (cardIndex == 0) ? data.length - 1 : --cardIndex;
    renderCard();
};