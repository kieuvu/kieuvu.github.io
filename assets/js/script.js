class Flashcard {
    constructor(data) {
        this.checkTTS();
        this.data = data;
        this.isPlaying = false;
        this.cardIndex = 0;
        this.synth = window.speechSynthesis;
        this.imgSection = document.getElementById("image");
        this.prevButton = document.getElementById("navigation_prev");
        this.nextButton = document.getElementById("navigation_next");
        this.currentCard = document.getElementById("current_card");
        this.questionButton = document.getElementById("audio_question");
        this.answerButton = document.getElementById("audio_answer");
        this.toast = Swal.mixin({
            toast: true,
            position: "center",
            timer: 3000,
            showConfirmButton: false,
        });
        this.renderCard();
        this.questionButton.addEventListener("click", this.sayQuestion.bind(this));
        this.answerButton.addEventListener("click", this.sayAnswer.bind(this));
        this.prevButton.addEventListener("click", this.prevCard.bind(this));
        this.nextButton.addEventListener("click", this.nextCard.bind(this));
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

const flashcard = new Flashcard(data);