let projects = [
    ['Toriis', "En 2019 j'ai été traquenardé pour bricoler des toriis pour Japan Impact. <br>C'était la première fois que je bricolais sérieusement et consciencieusement du bois.<br>J'ai passé la quasi totalité de ma semaine à apprendre à utiliser la défonceuse, la perceuse à colonne et les ciseaux à bois, c'était super !<br>Comme dans l'art Japonais, il n'y a ni vis ni clou, tout tient par emboitement !<br>", 'pictures/toriis.jpg'],
];

for (let i = 0; i < 20; i++) {
    let j = i%projects.length;
    const top_div = document.createElement("div");
    top_div.className = "article"
    document.getElementById("projects").appendChild(top_div);

    const title = document.createElement("h4");
    title.appendChild(document.createTextNode(projects[j][0]))
    top_div.appendChild(title)

    const description = document.createElement('p')
    // description.appendChild(document.createTextNode(projects[j][1]))
    top_div.appendChild(description)
    description.insertAdjacentHTML("afterbegin", projects[j][1]);

    const image = document.createElement('img')
    image.src = projects[j][2]
    image.id = projects[j][0]
    top_div.appendChild(image)

}
