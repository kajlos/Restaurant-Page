function home(){
    const content = document.getElementById('content');
    content.textContent='';
    const container = document.createElement('div');
    container.classList.add('container'); 
    const text = document.createElement('h2');
    const text2 = document.createElement('p');
    const text3 = document.createElement('p');
    text2.textContent = 'Made with passion';
    text3.textContent = 'Order online or with us';
    text.textContent = "Best restaurant";
    container.append(text, text2, text3);

    content.append(container);
}
export default home;