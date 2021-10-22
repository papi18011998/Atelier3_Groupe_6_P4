var questionnaire =[
    {
        libelle : "Température",
        question: "Quelle est votre température corporelle ?",
        reponse: 0,
        coefficient: 10
    },
    {
        libelle : "Toux et rhume",
        question: "Souffrez d'un rhume ou de toux ?",
        reponse: "",
        coefficient: 10
    },
    {
        libelle : "Fatigue musculaire",
        question: "Souffrez vous d'une fatigue",
        reponse: "",
        coefficient:10
    },
    {
        libelle : "Perte d'odorat",
        question: "Avez vous perdu votre odorat?",
        reponse: "",
        coefficient:10
    },
    {
        libelle : "Maux de gorge",
        question: "Avez vous des maux de gorge ?",
        reponse: "",
        coefficient:5
    },
    {
        libelle : "Maux de tête",
        question: "Avez vous des maux de tête ?",
        reponse: "",
        coefficient:5
    },
    {
        libelle : "Diarrhée",
        question: "Avez vous de la diarrhée ?",
        reponse: "",
        coefficient:5
    },
    {
        libelle : "Difficulté de respirer",
        question: "Avez vous des difficulté de respirer ?",
        reponse: "",
        coefficient:15
    },
    {
        libelle : "Perte d'élocution ou de motricité",
        question: "Avez vous perdu votre capacité d'élocution?",
        reponse: "",
        coefficient:15
    },
    {
        libelle : "Douleur au niveau de la poitrine",
        question: "Avez vous des douleurs au niveau de votre poitrine?",
        reponse: "",
        coefficient:15
    }
]
window.onload = function () {
    // Recueil des variables
    var btn = document.querySelector('.btn')
    var questionLabel =document.querySelector(".questionLabel")
    var question = document.querySelector(".question")
    var reponseInput = document.querySelector("#reponseInput")
    var score = 0 
    questionLabel.innerHTML = questionnaire[0].libelle
    question.innerHTML = questionnaire[0].question
    //Test de la temperature


}