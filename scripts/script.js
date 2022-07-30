const body = document.querySelector('body');
const gallery = document.querySelector("#gallery");
const cardTemplate = document.querySelector('#card');  
const popupTemplate = document.querySelector('#popup');

let images = [  // можно ли только с js забрать массив из папки?
    'cat1',
    'cat2',
    'cat3',
    'cat4',
    'cat5'  
];
    images.forEach((item, index) =>{
        const cloneCard = cardTemplate.content.cloneNode('true');
        let newImg = cloneCard.querySelector('.img');
        let figCap = cloneCard.querySelector('.title');
        newImg.id = item; 
        newImg.src = `./thumb/${item}.jpg`;                  

        switch(index){
            case 0: 
            { 
            let text = newImg.alt = 'Васька делает селфи';
            figCap.textContent = text;            
            }
            break;

            case 1: 
            {
            let text = newImg.alt = 'Васька балдеет в отпуске';                       
            figCap.textContent = text;
            }                
            break;

            case 2: 
            {
            let text = newImg.alt = 'Васька своровал и хитрит';
            figCap.textContent = text;
            }
            break;

            case 3: 
            {
            let text = newImg.alt = 'Васька превратился в тёщу';
            figCap.textContent = text;
            }
            break;

            case 4: 
            {
            let text = newImg.alt = 'Васька после Нового года';
            figCap.textContent = text;
            }                       
            break;
        }
            gallery.appendChild(cloneCard);           
    })

   function popup (event) {

    if(event.target.nodeName != 'IMG') return;
    const image = event.target;
    const clonePopup = popupTemplate.content.cloneNode('true');
    const imgPopup = clonePopup.querySelector('.imgPopup');
    const imgBox = clonePopup.querySelector('#imgBox');
    const figCapPopup = clonePopup.querySelector('.imgPopup_title');
    const btnClosePopup = clonePopup.querySelector('.darkbox');
    

    imgPopup.src = `./img/${image.id}.jpg`;
    figCapPopup.textContent = image.alt;

    body.appendChild(clonePopup);  

    function closePopup () {

        let i = 0, step = 10, tick = 40;

        const a = () => { 
            if( i < step) {
            i++;
            btnClosePopup.style.opacity = 1 - i/step;
            imgBox.style.opacity = 1 - i/step;
            setTimeout(a, tick)
            }else{
            btnClosePopup.style.opacity = 1 - i/step;	
            btnClosePopup.remove();  // удаление второго слоя popUpFrame
            imgBox.remove(); // удаление первого слоя popUp				
            }
        }
        a();
        
    }

   btnClosePopup.addEventListener('click', closePopup); // обработчик на закрытие

}

    gallery.addEventListener('click', popup); // обработчик на открытие
    


