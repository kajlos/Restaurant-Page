function contact(){
    const content = document.getElementById('content');
    content.textContent='';
    const text = document.createElement('p');
    text.textContent = "Contact";
    content.append(text);
}
export default contact;