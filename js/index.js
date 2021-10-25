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
        reponse:["Oui","Non"],
        coefficient: [10,0]
    },
    {
        libelle : "Fatigue musculaire",
        question: "Souffrez vous d'une fatigue",
        reponse:["Oui","Non"],
        coefficient:[10,0]
    },
    {
        libelle : "Perte d'odorat",
        question: "Avez vous perdu votre odorat?",
        reponse:["Oui","Non","Je ne suis pas sûre"],
        coefficient:[10,0,5]
    },
    {
        libelle : "Maux de gorge",
        question: "Avez vous des maux de gorge ?",
        reponse: ["Oui","Non","Parfois"],
        coefficient:[5,0,3]
    },
    {
        libelle : "Maux de tête",
        question: "Avez vous des maux de tête ?",
        reponse: ["Oui","Non","Parfois"],
        coefficient:[5,0,3]
    },
    {
        libelle : "Diarrhée",
        question: "Avez vous de la diarrhée ?",
        reponse: ["Oui","Non"],
        coefficient:[5,0]
    },
    {
        libelle : "Difficulté de respirer",
        question: "Avez vous des difficulté de respirer ?",
        reponse: ["Oui","Non","Je suis sûre"],
        coefficient:[15,0,5]
    },
    {
        libelle : "Perte d'élocution ou de motricité",
        question: "Avez vous perdu votre capacité d'élocution?",
        reponse: ["Oui","Non"],
        coefficient:[15,0]
    },
    {
        libelle : "Douleur au niveau de la poitrine",
        question: "Avez vous des douleurs au niveau de votre poitrine?",
        reponse: ["Oui","Non","Parfois"],
        coefficient:[15,0,5]
    }
]
window.onload = function () {
    // Recueil des variables
    const maxTemp = 38.9
    const minTemp = 35.5
    var compteurReponsePossible=0
    var i = 1
    var btn = document.querySelector('.btn')
    var resultBtn = document.querySelector('.resultBtn')
    var questionLabel =document.querySelector(".questionLabel")
    var question = document.querySelector(".question")
    var footerBloc = document.querySelector(".footerBloc")
    var radioInput 
    var score = 0 
    let findChecked = 0 
    var getLibelleTable =[]
    var checkedResponse = []
    var questionNumber = document.querySelector("#questionNumber") 
    //fonction permettan de savoir le numero de la question
    function numeroDequestion() {
        return i +" / "+ (questionnaire.length-1)
    }
    //fonction qui permet d'ajouter de nouveaux 
    function addElements(valeurChamp) {
        //Ajout de la div radioAndLabel
        var radioAndLabel = document.createElement('div')
        //ajout de la classe radioAndLabel
        radioAndLabel.classList.add("radioAndLabel")
        //Ajout du div contenant le Input
        var radioContainer = document.createElement('div')
        //Ajout de la classe radioContainer
        radioContainer.classList.add("radioContainer")
        //Ajout du champ input
        radioInput = document.createElement('input')
        radioInput.setAttribute("type","radio")
        radioInput.setAttribute("name","reponseUser")
        radioInput.setAttribute("value",valeurChamp)
        radioInput.setAttribute("id",valeurChamp)
        //Ajout du div contenant la question
        var labelContainer = document.createElement('div')
        labelContainer.classList.add('labelContainer')
        labelContainer.setAttribute("style", "color:white");
        //Ajout du label de la question
        var libelleQuestion = document.createElement('label')
        libelleQuestion.setAttribute("for",valeurChamp)
        libelleQuestion.innerHTML = valeurChamp
        //Ajout de tous les elements
        labelContainer.appendChild(libelleQuestion)
        radioAndLabel.appendChild(radioContainer)
        radioContainer.appendChild(radioInput)
        radioAndLabel.appendChild(labelContainer)
        footerBloc.appendChild(radioAndLabel)
    }
    // Demande de la temperature corporelle
    questionnaire[0].reponse = window.prompt(questionnaire[0].libelle+"\n"+questionnaire[0].question) 
    // test de la temperature
    if (questionnaire[0].reponse>= minTemp && questionnaire[0].reponse<= maxTemp) {
        // Ajout de la temperature dans le tableau de reponse du user
        getLibelleTable.push(questionnaire[0].libelle)
        checkedResponse.push(questionnaire[0].reponse)
        // Ajout de la question suivante
        questionLabel.innerHTML = questionnaire[i].libelle
        question.innerHTML = questionnaire[i].question
        //Ajout des reponses possibles
        for(compteurReponsePossible = 0; compteurReponsePossible < questionnaire[1].reponse.length; compteurReponsePossible++){
            addElements(questionnaire[1].reponse[compteurReponsePossible])
        }
        // demandez les questions
            //Au clic sur le boutton suivant
            questionNumber.innerHTML = numeroDequestion()
                btn.onclick = function () {
                    var reponsePossible = document.getElementsByName('reponseUser')
                    // console.log(reponsePossible);
                    for (findChecked = 0; findChecked < reponsePossible.length; findChecked++) {
                        if (reponsePossible[findChecked].checked) {
                            checkedResponse.push(questionnaire[i].reponse[findChecked])
                            score = score + questionnaire[i].coefficient[findChecked]
                        }    
                    }
                    if (i< questionnaire.length+1) {
                        questionLabel.innerHTML = questionnaire[i+1].libelle
                        question.innerHTML = questionnaire[i+1].question 
                        footerBloc.innerHTML = ""
                        for(compteurReponsePossible = 0; compteurReponsePossible < questionnaire[i+1].reponse.length; compteurReponsePossible++){
                            addElements(questionnaire[i+1].reponse[compteurReponsePossible])
                        }
                        getLibelleTable.push(questionnaire[i].libelle)
                        localStorage.setItem("listeDesQuestions",getLibelleTable)
                        
                    }else{
                        questionLabel.innerHTML = questionnaire[i].libelle
                        question.innerHTML = questionnaire[i].question
                        footerBloc.innerHTML = ""
                        for(compteurReponsePossible = 0; compteurReponsePossible < questionnaire[i].reponse.length; compteurReponsePossible++){
                            addElements(questionnaire[i].reponse[compteurReponsePossible])
                        }
                        btn.setAttribute("style","display:none")
                        questionNumber.setAttribute("style","display:none")
                        resultBtn.setAttribute("style","display:block")
                        console.log(checkedResponse+" "+ score);
                        localStorage.setItem("score",score)
                        localStorage.setItem("reponses",checkedResponse)
                    }
                    i++
                     questionNumber.innerHTML = numeroDequestion()
                }
             
    }
     else if(questionnaire[i].reponse > maxTemp){
        alert("Allez à l' hopital car votre température dépasse la normale ")
    }else if (questionnaire[i].reponse < maxTemp) {
        alert("Allez à l' hopital car votre température  a baissé la normale ")
      }
      resultBtn.onclick = function () {
        document.location.href="resultat.html"
    }
}
