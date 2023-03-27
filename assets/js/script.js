class Flashcard {
    constructor(data) {
        this.data = data;
        this.isPlaying = false;
        this.cardIndex = 0;
        this.synth = window.speechSynthesis;
        this.imgSection = null;
        this.prevButton = null;
        this.nextButton = null;
        this.currentCard = null;
        this.questionButton = null;
        this.answerButton = null;
        this.toast = null;
    }

    start() {
        this.checkTTS();
        this.renderCard();
        this.loadDomEvt();
    }

    checkTTS() {
        if (!window.SpeechSynthesisUtterance) {
            Swal.fire({
                icon: "error",
                title: "Speech synthesis is not supported in your device or your browser",
            });
            this.questionButton.disabled = true;
            this.answerButton.disabled = true;
            this.prevButton.disabled = true;
            this.nextButton.disabled = true;
        }
    }

    setToast(toast) {
        this.toast = toast;
        return this;
    }

    setDom(imgSection, prevButton, nextButton, currentCard, questionButton, answerButton) {
        this.imgSection = imgSection;
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.currentCard = currentCard;
        this.questionButton = questionButton;
        this.answerButton = answerButton;
        return this;
    }

    loadDomEvt() {
        this.questionButton.addEventListener("click", this.sayQuestion.bind(this));
        this.answerButton.addEventListener("click", this.sayAnswer.bind(this));
        this.prevButton.addEventListener("click", this.prevCard.bind(this));
        this.nextButton.addEventListener("click", this.nextCard.bind(this));
    }

    speak(text, text_vi) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.7;
        this.synth.speak(utterance);

        this.toast.fire({
            title: text_vi,
        });

        utterance.addEventListener("start", () => {
            this.isPlaying = true;
            Swal.stopTimer;
        });

        utterance.addEventListener("end", () => {
            this.isPlaying = false;
            Swal.resumeTimer;
        });
    }

    renderCard() {
        this.currentCard.innerText = this.data[this.cardIndex].id;
        this.imgSection.innerHTML = `<img src="${this.data[this.cardIndex].img}"/>`;
    }

    sayQuestion() {
        !this.isPlaying && this.speak(this.data[this.cardIndex].ques, this.data[this.cardIndex].ques_vi);
    }

    sayAnswer() {
        !this.isPlaying && this.speak(this.data[this.cardIndex].answ, this.data[this.cardIndex].answ_vi);
    }

    nextCard() {
        this.cardIndex = (this.cardIndex == this.data.length - 1) ? 0 : ++this.cardIndex;
        this.renderCard();
    }

    prevCard() {
        this.cardIndex = (this.cardIndex == 0) ? this.data.length - 1 : --this.cardIndex;
        this.renderCard();
    }
}

new Flashcard(data).setToast(Swal.mixin({
    toast: true,
    position: "center",
    timer: 3000,
    showConfirmButton: false,
})).setDom(
    document.getElementById("image"),
    document.getElementById("navigation_prev"),
    document.getElementById("navigation_next"),
    document.getElementById("current_card"),
    document.getElementById("audio_question"),
    document.getElementById("audio_answer")
).start();