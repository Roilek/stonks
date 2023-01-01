let projects = [
    ['Project 1', 'Description 1', 'pictures/akula-left.png'],
    ['Project 2', 'Description 2', 'pictures/akula-right.png'],
    ['Project 3', 'Description 3', 'pictures/pompes-a-sirops.jpg']
];

for (let i = 0; i < projects.length; i++) {
    const top_div = document.createElement("div");

    const title = document.createElement("h1");
    title.appendChild(document.createTextNode(projects[i][0]))
    top_div.appendChild(title)

    const description = document.createElement('p')
    description.appendChild(document.createTextNode(projects[i][1]))
    top_div.appendChild(description)

    const image = document.createElement('img')
    image.src = projects[i][2]
    top_div.appendChild(image)

    document.getElementById("projects").appendChild(top_div);
}
