const questions = [{
    id: 1,
    title: "Jak się nazywasz?",
    type: "text",
},
{
    id: 2,
    title: "Ile masz lat?",
    type: "text",
},
{
    id: 3,
    title: "Podaj swój wzrost (cm) ",
    type: "text",
},
{
    id: 4,
    title: "Podaj swoją wagę (kg) ",
    type: "text",
},
{
    id: 5,
    title: "Jaki rodzaj pracy wykonujesz",
    type: "selection",
    options: [
        "siedząca",
        "stojąca",
        "fizyczna",
        "?",
    ]
},
{
    id: 6,
    title: "Ile godzin dziennie poświęcasz pracy?",
    type: "selection",
    options: [
        "2-3 h",
        "4-6 h",
        "8-10 h",
        "?",
    ]
},
{
    id: 7,
    title: "Ile godzin dziennie poświęcasz na relaks?",
    type: "selection",
    options: [
        "1-2 h",
        "2-4 h",
        "6-8 h",
        "?",
    ]
},
{
    id: 8,
    title: "Jak często się ruszasz?",
    type: "selection",
    options: [
        "Codziennie",
        "Co kilka dni",
        "Kilka razy w miesiącu",
        "?",
    ]
},
{
    id: 9,
    title: "Jaki rodzaj aktywności fizycznej wykonujesz najczęściej?",
    type: "selection",
    options: [
        "Spacer",
        "Rower",
        "Bieganie",
        "Siłownia",
        "?",
    ]
},
{
    id: 10,
    title: "Jak często sięgasz po alkohol?",
    type: "selection",
    options: [
        "Nie piję",
        "Raz w tygodniu",
        "1-2x w tygodniu",
        "Kilka razy w miesiącu",
        "Codziennie piwo/ 1 lampka wina/ 1 drink",
        "?",
    ]
},
{
    id: 11,
    title: "Czy palisz papierosy?",
    type: "selection",
    options: [
        "Palę codziennie",
        "Palę okazyjnie",
        "Nie palę",
    ]
},
{
    id: 12,
    title: "Jak dużo pijesz kawy dziennie?",
    type: "selection",
    options: [
        "Nie piję",
        "1 filiżanka dziennie",
        "2-3 filiżanki dziennie",
        "Powyżej 3 filiżanek dziennie",
    ]
},
{
    id: 13,
    title: "Jak określisz jakość swojego snu?",
    type: "selection",
    options: [
        "Śpię za mało",
        "Mam trudności z zaśnięciem",
        "Często budzę się w nocy",
        "Żadne z wymienionych",
    ]
},
{
    id: 14,
    title: "Ile godzin dziennie śpisz?",
    type: "selection",
    options: [
        "<3 h",
        "3-5 h",
        "6-7 h",
        "8-9 h",
        "Więcej",
    ]
},
{
    id: 15,
    title: "Jak określisz poziom swojej energii?",
    type: "selection",
    options: [
        "Często odczuwam senność",
        "Nie mam siły na codzienne aktywności",
        "Mam siłę na wszystkie codzienne aktywności",
        "Jestem wulkanem aktywności",
    ]
},
{
    id: 16,
    title: "Czy chorujesz na coś przewlekle?",
    type: "selection2",
    options: [
        "Niedoczynność tarczycy",
        "Nadczynność tarczycy",
        "Hashimoto",
        "Celiakia",
        "PCOS",
        "Insulinooporność",
        "Nadciśnienie",
        "Miażdżyca",
        "Anemia",
        "Zespół Jelita Drażliwego (IBS)",
        "Osteoporoza",
        "Stłuczenie wątroby",
        "?",
    ]
},
{
    id: 17,
    title: "Czy masz alergie lub nietolerancje pokarmowe?",
    type: "selection2",
    options: [
        "Mleko",
        "Gluten",
        "Laktoza",
        "Orzechy",
        "Soja",
    ]
},
{
    id: 18,
    title: "Zaznacz stwierdzenia dotyczące ciebie:",
    type: "selection2",
    options: [
        "Mam częste dolegliwości ze strony przewodu pokarmowego (wzdęcia, bóle brzucha)",
        "Zdarzają mi się biegunki",
        "Zdarzają mi się zaparcia",
        "Mam naprzemiennie biegunki i zaparcia",
        "?",
    ]
},
{
    id: 19,
    title: "Czy przyjmujesz leki?",
    type: "selection",
    options: [
        "Tak",
        "Nie",
    ]
},
{
    id: 20,
    title: "Zaznacz produkty, których nie jadasz:",
    type: "selection2",
    options: [
        "Jajka",
        "Nabiał",
        "Produkty pełnoziarniste",
        "Orzechy/ nasiona/ pestki",
        "Mięso",
        "Ryby",
        "Owoce morza",
        "Rośliny strączkowe",
        "Żadne z wymienionych",
    ]
},
]

const surveyForm = document.getElementById("xd")

questions.forEach(question =>{
    const container = document.createElement('div')
    container.className = "my-4"
    container.id = "Pytanie" + question.id
    const title = document.createElement('h4')
    title.innerHTML = "Pytanie " + question.id

    const realGQuestion = document.createElement('p')
    realGQuestion.className = "lead"
    realGQuestion.innerHTML = question.title

    container.appendChild(title)
    container.appendChild(realGQuestion)

    switch(question.type){
        case "text":
            const textAnsw = document.createElement('input')
            textAnsw.setAttribute("type", "text")
            textAnsw.className = "form-control"
            textAnsw.name = "Pytanie" + question.id
            container.appendChild(textAnsw)
            break;
        case "selection":
            for(let i = 0; i < question.options.length; i++){
                if (!(i == question.options.length-1 && question.options[i] == "?")){
                var inputContainer = document.createElement("div")
                inputContainer.className = "form-check"
                
                const selection = document.createElement('input')
                selection.setAttribute("type", "radio")
                selection.setAttribute("onClick", "disableText("+question.id+", "+question.id + i+");")
                selection.className = "form-check-input"
                selection.id = "Pytanie" + question.id + i
                selection.name = "Pytanie" + question.id
                selection.value = question.options[i]
                

                const label = document.createElement('label')
                label.setAttribute('for', "Pytanie" + question.id + i)
                label.className = "form-check-label"
                label.innerHTML = question.options[i]
                
                
                inputContainer.appendChild(selection)
                inputContainer.appendChild(label)

                container.appendChild(inputContainer)
                }
                else{
                    var inputGroup = document.createElement("div")
                    inputGroup.className = "input-group"

                    var inputGroupText = document.createElement("div")
                    inputGroupText.className = "input-group-text"
                    inputGroup.appendChild(inputGroupText)

                    const radioAnsw = document.createElement('input')
                    radioAnsw.setAttribute("type", "radio")
                    radioAnsw.className = "form-check-input mt-0"
                    radioAnsw.name =  "Pytanie" + question.id
                    inputGroupText.appendChild(radioAnsw)
                    
                    var inputContainer = document.createElement("div")

                    const textAnsw = document.createElement("input")
                    textAnsw.setAttribute("type", "text")
                    textAnsw.setAttribute("placeholder", "Inna odpowiedź")
                    textAnsw.setAttribute("onClick", "console.log('xd')")
                    textAnsw.className = "form-control"
                    textAnsw.name = "Pytanie" + question.id
                    textAnsw.value = ""
                    textAnsw.id = "Pytanie" + question.id + "text"
                    inputGroup.appendChild(textAnsw)
                    
                    container.appendChild(inputGroup)
                }
            }
            break;
        case "selection2":
            for(let i = 0; i < question.options.length; i++){
                if (!(i == question.options.length-1 && question.options[i] == "?")){
                var inputContainer = document.createElement("div")
                inputContainer.className = "form-check"
                    
                const selection2 = document.createElement('input')
                selection2.setAttribute("type", "checkbox")
                selection2.setAttribute("onClick", "disableText("+question.id+", "+question.id + i+");")
                selection2.className = "form-check-input"
                selection2.id = "Pytanie" + question.id + i
                selection2.name = "Pytanie" + question.id
                selection2.value = question.options[i]
                    
    
                const label = document.createElement('label')
                label.setAttribute('for', "Pytanie" + question.id + i)
                label.className = "form-check-label"
                label.innerHTML = question.options[i]
                    
                    
                inputContainer.appendChild(selection2)
                inputContainer.appendChild(label)
    
                container.appendChild(inputContainer)
                }
                else{
                    var inputGroup = document.createElement("div")
                    inputGroup.className = "input-group"
    
                    var inputGroupText = document.createElement("div")
                    inputGroupText.className = "input-group-text"
                    inputGroup.appendChild(inputGroupText)
    
                    const checkboxAnsw = document.createElement('input')
                    checkboxAnsw.setAttribute("type", "checkbox")
                    checkboxAnsw.className = "form-check-input mt-0"
                    checkboxAnsw.name =  "Pytanie" + question.id
                    inputGroupText.appendChild(checkboxAnsw)
                        
                    var inputContainer = document.createElement("div")
    
                    const textAnsw = document.createElement("input")
                    textAnsw.setAttribute("type", "text")
                    textAnsw.setAttribute("placeholder", "Inna odpowiedź")
                    textAnsw.className = "form-control"
                    textAnsw.name = "Pytanie" + question.id
                    inputGroup.appendChild(textAnsw)
                        
                    container.appendChild(inputGroup)
                }
            }
            break;
    }
    
    surveyForm.appendChild(container)
})

function disableText(text, radio){
    let textElement = document.getElementById("Pytanie" + text + "text")
    let radioElement = document.getElementById("Pytanie" + radio)
    if(textElement.getAttribute("disabled")) {
        textElement.removeAttribute("disabled")
        radioElement.checked = false
    }else{
        textElement.setAttribute("disabled", "true")
    }
}




