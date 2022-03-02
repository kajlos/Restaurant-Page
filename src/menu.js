function menu(){
    const content = document.getElementById('content');
    content.textContent='';
    const text = document.createElement('p');
    text.textContent = "menu";
    content.append(text);
}
export default menu;