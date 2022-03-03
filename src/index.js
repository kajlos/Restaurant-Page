import'./style.css';
import homeButton from './home.js'
import contactButton from './contact';
import menuButton from './menu';

function firsLoad(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    const headerText = document.createElement('h1');
    const footerText = document.createElement('p');
    const home = document.createElement('button');
    const menu= document.createElement('button');
    const contact = document.createElement('button');
    const headerLinks = document.createElement('div');
    const gitImage = new Image;
    const link = document.createElement('a');
    gitImage.src = './GitHub-logo.svg';
    gitImage.classList.add('git');
    link.href='https://github.com/kajlos';
    link.appendChild(gitImage);
    home.textContent='Home';
    home.onclick= homeButton;
    menu.textContent='Menu';
    menu.onclick = menuButton;
    contact.textContent='Contact';
    contact.onclick = contactButton;
    headerLinks.append(home,menu,contact)
    footerText.textContent = 'Created by kajlos';
    headerText.textContent = 'Restaurant';
    header.append(headerText, headerLinks);
    footer.append(footerText, link);
    body.insertBefore(header, body.firstChild);
    body.append(footer);
    homeButton();
}
firsLoad();