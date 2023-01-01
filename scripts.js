let projects = [
    ['Project 1', "En 2019 j'ai été traquenardé pour bricoler des toriis pour Japan Impact. C'était la première fois que je bricolais sérieusement et consciencieusement du bois. J'ai passé la quasi totalité de ma semaine à apprendre à utiliser la défonceuse, la perceuse à colonne et les ciseaux à bois, c'était super ! Comme dans l'art Japonais, il n'y a ni vis ni clou, tout tient par emboitement !", 'pictures/toriis.jpg'],
];

for (let i = 0; i < 20; i++) {
    let j = i%projects.length;
    const top_div = document.createElement("div");
    top_div.className = "article"

    const title = document.createElement("h4");
    title.appendChild(document.createTextNode(projects[j][0]))
    top_div.appendChild(title)

    const description = document.createElement('p')
    description.appendChild(document.createTextNode(projects[j][1]))
    top_div.appendChild(description)

    const image = document.createElement('img')
    image.src = projects[j][2]
    top_div.appendChild(image)

    document.getElementById("projects").appendChild(top_div);
}
