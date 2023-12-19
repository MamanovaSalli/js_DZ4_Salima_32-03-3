const button = document.querySelector('.wrapper')

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    })
})


const personsWrap = document.querySelector('.wrapper')

button.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "peopls.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.onload = () => {
        const persons = JSON.parse(request.response)
        persons.forEach((person) => {
            const personsCard = document.createElement('div')
            personsCard.setAttribute('class', 'personsCard')

            const nameTag = document.createElement('p')
            nameTag.setAttribute('class', 'personName')
            nameTag.innerText = person.name

            const ageTag = document.createElement('span')
            ageTag.setAttribute('class', 'personAge')
            ageTag.innerText = person.age

            if (person.photo) {
                const imgTag = document.createElement('img')
                imgTag.setAttribute('src', person.photo)
                personsCard.append(imgTag)
            }

            personsCard.append(nameTag, ageTag)
            personsWrap.append(personsCard)
        })
    }
}
