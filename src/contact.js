function contact(){
    const content = document.getElementById('content');
    content.textContent='';
    const container = document.createElement('div');
    container.classList.add('container'); 
    const text = document.createElement('h2');
    const text2 = document.createElement('p');
    const text3 = document.createElement('p'); 
    text.textContent = "Contact us";
    text2.textContent = 'Phone: 123 456 789';
    text3.textContent = 'Denham Garden New York US ';

    container.append(text, text2, text3);

    content.append(container);
}
export default contact;