// Selectores globales
const pregunta = document.querySelector('.pregunta')
const contenedorPreguntas = document.querySelector('.contenedor-faq')


const listaPreguntas = [
    {
        id: 1,
        titulo: 'How many team members can I invite?',
        contenido: `You can invite up to 2 additional users on the Free plan. There is no limit on 
        team members for the Premium plan.`
    },
    {
        id: 2,
        titulo: 'What is the maximum file upload size?',
        contenido: `No more than 2GB. All files in your account must fit your allotted storage space.`
    },
    {
        id: 3,
        titulo: 'How do I reset my password?',
        contenido: `Click “Forgot password” from the login page or “Change password” from your profile page.
        A reset link will be emailed to you.`
    },
    {
        id: 4,
        titulo: 'Can I cancel my subscription?',
        contenido: `Yes! Send us a message and we’ll process your request no questions asked.`
    },
    {
        id: 5,
        titulo: 'Do you provide additional support?',
        contenido: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    generarPreguntas()
})

function generarPreguntas(){
    // Generar Preguntas
    listaPreguntas.forEach(function(pregunta){
        const cardDiv = document.createElement('DIV')
        cardDiv.classList.add('card-faq')

        const divPregunta = document.createElement('DIV')
        divPregunta.classList.add('pregunta')

        const tituloPregunta = document.createElement('P')
        tituloPregunta.classList.add('pregunta-titulo')
        tituloPregunta.id = 'pregunta'
        tituloPregunta.textContent = `${pregunta.titulo}`

        const imgPregunta = document.createElement('IMG')
        imgPregunta.classList.add('arrow')
        imgPregunta.src = 'images/icon-arrow-down.svg'
        imgPregunta.alt = 'icon-arrow-down'

        const divRespuesta = document.createElement('DIV')
        divPregunta.classList.add('respuesta')

        const contenidoRespuesta = document.createElement('P')
        contenidoRespuesta.classList.add('respuesta-contenido')
        contenidoRespuesta.textContent = `${pregunta.contenido}`

        divPregunta.appendChild(tituloPregunta)
        divPregunta.appendChild(imgPregunta)

        divRespuesta.appendChild(contenidoRespuesta)

        cardDiv.appendChild(divPregunta)
        cardDiv.appendChild(divRespuesta)

        contenedorPreguntas.appendChild(cardDiv)
    })
    seleccionarPreguntas()
}

function seleccionarPreguntas(){
    const preguntasAll = document.querySelectorAll('.card-faq')
    preguntasAll.forEach(pregunta => {
        pregunta.addEventListener('click', (e) => {
            if(pregunta.children[1].children[0].classList.contains('activo')){
                pregunta.children[1].children[0].classList.remove('activo')
                pregunta.children[0].children[0].classList.remove('negrita')
                pregunta.children[0].children[1].classList.remove('up')
                return;
            }
            pregunta.children[1].children[0].classList.add('activo')
            pregunta.children[0].children[0].classList.add('negrita')
            pregunta.children[0].children[1].classList.add('up')

            preguntasAll.forEach(pregunta2 => {
                if(pregunta !== pregunta2){
                    pregunta2.children[1].children[0].classList.remove('activo')
                    pregunta2.children[0].children[0].classList.remove('negrita')
                    pregunta2.children[0].children[1].classList.remove('up')
                }else{
                    pregunta2.children[1].children[0].classList.add('activo')
                    pregunta2.children[0].children[0].classList.add('negrita')
                    pregunta2.children[0].children[1].classList.add('up')
                }
            })
        })
    })
}