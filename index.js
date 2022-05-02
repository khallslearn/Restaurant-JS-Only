const main = document.getElementById("content");
const header = document.createElement('header'); 
const section = document.createElement('section');  
const footer = document.createElement('footer');
const uL = document.createElement('ul');
const div = document.createElement('div');
const h1 = document.createElement('h1'); 
const h4 = document.createElement('h4');
const image = document.createElement('img');



//*** Builds Header */

   
function loadHeader(text) {
    const anchor = document.createElement('a');
    const list = document.createElement('li');

        anchor.innerHTML = text
        anchor.href = ""
        list.appendChild(anchor)
        
        
      
        uL.appendChild(list);

        header.appendChild(uL);

        main.appendChild(header);
      
        
    console.log("hello");
    }
   
//** Header executed */
loadHeader("Home");
loadHeader("Menu");
loadHeader("About");
loadHeader("Contact");


//** Builds Body */
function loadSection(){
    h1.innerHTML = "Chips"
    image.src = "OIP.jpg"
    image.id = "Big"
    h4.innerHTML = "We only sell Chips"

    section.appendChild(h1)
    section.appendChild(image)
    section.appendChild(h4)

    main.appendChild(section)

}

/**Execute Body */
loadSection()

//**Footer */

function loadFooter(){
const location = document.createElement('h2')
location.innerHTML = "Location"
footer.appendChild(location);
main.appendChild(footer)
}

//* Footer Executed */
loadFooter();

function createList(text) {
    const list = document.createElement('li');
    list.innerHTML = text;

  }
