const data = [
    {
        "id": 1,
        "ques": "Where are you from ?",
        "answ": "I'm from VietNam",
        "img": "/assets/img/card/1.png",
        "ques_vi": "Bạn đến từ đâu ?",
        "answ_vi": "Tôi đến từ Việt Nam"
    },
    {
        "id": 2,
        "ques": "How are you ?",
        "answ": "I'm happy",
        "img": "/assets/img/card/2.png",
        "ques_vi": "Bạn thấy thế nào ?",
        "answ_vi": "Tôi thấy hạnh phúc"
    },
    {
        "id": 3,
        "ques": "What do you like ?",
        "answ": "I like chicken",
        "img": "/assets/img/card/3.png",
        "ques_vi": "Bạn thích gì ?",
        "answ_vi": "Tôi thích gà"
    },
    {
        "id": 4,
        "ques": "What animal say 'Meow meow' ?",
        "answ": "It's a cat",
        "img": "/assets/img/card/4.png",
        "ques_vi": "Con vật nào kêu meomeo ?",
        "answ_vi": "Đó là con mèo"
    },
    {
        "id": 5,
        "ques": "What number is it ?",
        "answ": "It's number one",
        "img": "/assets/img/card/5.png",
        "ques_vi": "Đây là số mấy ?",
        "answ_vi": "Đây là số 1"
    },
    {
        "id": 6,
        "ques": "What is it ?",
        "answ": "It's crayon",
        "img": "/assets/img/card/6.png",
        "ques_vi": "Đây là cái gì ?",
        "answ_vi": "Đây là bút màu"
    },
    {
        "id": 7,
        "ques": "What can you do ?",
        "answ": "I can swim",
        "img": "/assets/img/card/7.png",
        "ques_vi": "Bạn có thể làm gì ?",
        "answ_vi": "Tôi có thể bơi"
    },
    {
        "id": 8,
        "ques": "What game is it ?",
        "answ": "It's soccer",
        "img": "/assets/img/card/8.png",
        "ques_vi": "Đây là trò chơi gì ?",
        "answ_vi": "Đây là bóng đá"
    },
    {
        "id": 9,
        "ques": "What color is it ?",
        "answ": "It's red",
        "img": "/assets/img/card/9.png",
        "ques_vi": "Đây là màu gì ?",
        "answ_vi": "Đây là màu đỏ"
    },
    {
        "id": 10,
        "ques": "What fruit is it ?",
        "answ": "It's an apple",
        "img": "/assets/img/card/10.png",
        "ques_vi": "Đây là quả gì ?",
        "answ_vi": "Đây là quả táo"
    },
    {
        "id": 11,
        "ques": "What is it ?",
        "answ": "It's a nose",
        "img": "/assets/img/card/11.png",
        "ques_vi": "Đây là cái gì ?",
        "answ_vi": "Đây là cái mũi"
    },
    {
        "id": 12,
        "ques": "What can you do ?",
        "answ": "I can jump",
        "img": "/assets/img/card/12.png",
        "ques_vi": "Bạn có thể làm gì ?",
        "answ_vi": "Tôi có thể nhảy"
    },
    {
        "id": 13,
        "ques": "What food is this ?",
        "answ": "It's French fries",
        "img": "/assets/img/card/13.png",
        "ques_vi": "Đây là món gì ?",
        "answ_vi": "Đây là khoai tây chiên"
    },
    {
        "id": 14,
        "ques": "What is it ?",
        "answ": "It's a coat",
        "img": "/assets/img/card/14.png",
        "ques_vi": "Đây là cái gì ?",
        "answ_vi": "Đây là cái áo"
    },
    {
        "id": 15,
        "ques": "How are you ?",
        "answ": "I'm hungry",
        "img": "/assets/img/card/15.png",
        "ques_vi": "bạn thấy thế nào ?",
        "answ_vi": "Tôi thấy đói"
    },
    {
        "id": 16,
        "ques": "What color is it ?",
        "answ": "It's black",
        "img": "/assets/img/card/16.png",
        "ques_vi": "Đây là màu gì ?",
        "answ_vi": "Đây là màu đen"
    },
    {
        "id": 17,
        "ques": "What can you do ?",
        "answ": "I can dance",
        "img": "/assets/img/card/17.png",
        "ques_vi": "Bạn có thể làm gì ?",
        "answ_vi": "Tôi có thể múa"
    },
    {
        "id": 18,
        "ques": "Who is this ?",
        "answ": "This is Flamingo",
        "img": "/assets/img/card/18.png",
        "ques_vi": "Đây là con gì ?",
        "answ_vi": "Đây là con hồng hạc"
    },
    {
        "id": 19,
        "ques": "What shape is it ?",
        "answ": "It's a circle",
        "img": "/assets/img/card/19.png",
        "ques_vi": "Đây là hình gì ?",
        "answ_vi": "Đây là hình tròn"
    },
    {
        "id": 20,
        "ques": "What drink is it ?",
        "answ": "It's milk",
        "img": "/assets/img/card/20.png",
        "ques_vi": "Đây là đồ uống gì ?",
        "answ_vi": "Đây là sữa"
    },
    {
        "id": 21,
        "ques": "What can you do ?",
        "answ": "I can sing",
        "img": "/assets/img/card/21.png",
        "ques_vi": "Bạn có thể làm gì ?",
        "answ_vi": "Tôi có thể hát"
    },
    {
        "id": 22,
        "ques": "When it's cold ?",
        "answ": "I wear gloves",
        "img": "/assets/img/card/22.png",
        "ques_vi": "Khi lạnh ?",
        "answ_vi": "Tôi đeo găng tay"
    },
    {
        "id": 23,
        "ques": "What is she wearing ?",
        "answ": "She is wearing a crown and a necklace",
        "img": "/assets/img/card/23.png",
        "ques_vi": "Cô ấy đang đeo gì ?",
        "answ_vi": "Cô ấy đang đeo vương miện và vòng cổ"
    },
    {
        "id": 24,
        "ques": "What are there ?",
        "answ": "There are toes",
        "img": "/assets/img/card/24.png",
        "ques_vi": "Đây là gì ?",
        "answ_vi": "Đây là ngón chân"
    },
    {
        "id": 25,
        "ques": "What do you like ?",
        "answ": "I like pho",
        "img": "/assets/img/card/25.png",
        "ques_vi": "Bạn thích gì ?",
        "answ_vi": "Tôi thích phở"
    },
    {
        "id": 26,
        "ques": "Where is it ?",
        "answ": "It's classroom",
        "img": "/assets/img/card/26.png",
        "ques_vi": "Đây là đâu ?",
        "answ_vi": "Đây là lớp học"
    }
];