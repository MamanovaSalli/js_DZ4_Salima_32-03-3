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
//
// const persons = [
//     {
//         "name": "Mulan",
//         "age": 25
//     },
//     {
//         "name": "Mushu",
//         "age": 120
//     },
//     {
//         "name": "Li Shang",
//         "age": 30
//     },
//     {
//         "name": "Fa Zu",
//         "age": 65
//     },
//     {
//         "name": "Fa Li",
//         "age": 55
//     },
//     {
//         "name": "Grandma Fa",
//         "age": 79
//     },
//     {
//         "name": "Yo",
//         "age": 25
//     },
//     {
//         "name": "Ling",
//         "age": 26
//     },
//     {
//         "name": "Cheng Pa",
//         "age": 26
//     },
//     {
//         "name": "Khan",
//         "age": 40
//     }
// ]

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
