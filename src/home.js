function home(){
    const content = document.getElementById('content');
    content.textContent='';
    const text = document.createElement('p');
    text.textContent = "Best restaurant";
    content.append(text);
}
export default home;