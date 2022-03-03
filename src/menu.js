function pizza(image,name,description){
    this.image = image;
    this.name=name;
    this.description=description;
}

function menu(){
    const pizzas=[
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
        new pizza('./p1.png','Peperoni','Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'),
    ];
    const content = document.getElementById('content');
    content.textContent='';
    const container = document.createElement('div');
    container.classList.add('container'); 
    const containerGrid = document.createElement('div');
    containerGrid.classList.add('containerGrid');
    const text = document.createElement('h2');

    text.textContent = "Menu";    
    container.append(text);
    container.append(containerGrid);
    pizzas.forEach(e=>{
        const div = document.createElement('div');
        div.classList.add('gridElement');
        const image = new Image;
        const name = document.createElement('p');
        const description =document.createElement('p');
        name.textContent = e.name;
        description.textContent = e.description;
        image.src = e.image;
        image.alt = e.name;
        image.classList.add('gridImage');
        div.append(image,name,description);
        containerGrid.append(div);
    })


    content.append(container);
}
export default menu;