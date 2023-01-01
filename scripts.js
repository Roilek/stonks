let projects = [
    ['Project 1', 'Description 1', 'pictures/akula-left.png'],
    ['Project 2', 'Description 2', 'pictures/akula-right.png'],
    ['Project 3', 'Description 3', 'pictures/pompes-a-sirops.jpg']
];

for (let i = 0; i < 20; i++) {
    j = i%projects.length;
    const top_div = document.createElement("div");

    const title = document.createElement("h1");
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
