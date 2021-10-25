window.onload = function(){
    var resultTest = document.querySelector("#resultTest")
        // Affichage des reponses de l'utlisateur et decision de la plateforme
        var liste = localStorage.getItem('listeDesQuestions')
        var listeReponse = localStorage.getItem('reponses')
        var totalScore = localStorage.getItem('score')
        var spanForResponse
        var reponse 
        var addBreakLine
        liste = liste.split(',')
        listeReponse = listeReponse.split(',')
        for (let i = 0; i < liste.length; i++) {
            reponse =document.createElement('div')
            reponse.classList.add('alignmentElement')
            addBreakLine=document.createElement('br')
            reponse.innerHTML = liste[i]+ " : "
            spanForResponse = document.createElement('span')
            spanForResponse.classList.add("redColor")
            spanForResponse.innerHTML = listeReponse[i]
            reponse.appendChild(spanForResponse)
            resultTest.appendChild(reponse)
            resultTest.appendChild(addBreakLine)
            resultTest.appendChild(addBreakLine)
        
        }
        if (totalScore>=45) {
            var message = document.createElement('div')
            message.setAttribute("style","font-style: italic")
            message.setAttribute("style","color: red")
            message.innerHTML="Appelez immediatement le 1515 ou le 800 00 50 50"
            resultTest.appendChild(message)
        } else {
            var message = document.createElement('div')
            message.setAttribute("style","font-style: italic")
            message.setAttribute("style","color: green")
            message.innerHTML="Vous semblez être bien portant(e)"
            resultTest.appendChild(message)
        }

}