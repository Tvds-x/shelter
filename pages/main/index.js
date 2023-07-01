// console.log('100/100\nI Страница Main (60)\n1.Проверка верстки +7\n+ Верстка страницы валидная\n+ Логотип в хедере состоит из текстовых элементов\n+ Страница содержит ровно один элемент <h1>\n+ Добавлен favicon\n2. Вёрстка соответствует макету +35\n+ блок <header>\n+ блок Not only \n+ блок About\n+ блок Our Friends\n+ блок Help\n+ блок In addition\n+ блок <footer>\n3. Требования к css +6\n+ Для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) \n+ При уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине \n+ Фоновый цвет тянется на всю ширину страницы \n4. Интерактивность элементов +12\n+ Элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны\n+ каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки \n+ плавная прокрутка по якорям \n+ выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main \n+ выполнена интерактивность ссылок и кнопок. \n+ обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы \nII Страница Pets (40)\n1. Проверка верстки +7\n\n+ Верстка страницы валидная\n+ Логотип в хедере состоит из текстовых элементов \n+ Страница содержит ровно один элемент <h1> \n+ Добавлен favicon\n2. Вёрстка соответствует макету +15\n+ Блок <header>\n+ Блок Our Friends\n+ Блок <footer>\n3. Требования к css +4\n\n+ При уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине \n+ Фоновый цвет тянется на всю ширину страницы\nИнтерактивность элементов +14\n+ Элемент Our pets в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны\n+ Доступные кнопки пагинации (вправо) активны, недоступные (влево) - неактивны (disabled)\n+ Каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки\n+ Плавная прокрутка по якорям\n+ Выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Pets\n+ Выполнена интерактивность ссылок и кнопок.\n+ Обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы')

const petsData = [
  {
    "id": 1,
    "name": "Jennifer",
    "img": "../../assets/images/pets-hight500/modal/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 2,
    "name": "Sophia",
    "img": "../../assets/images/pets-hight500/modal/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 3,
    "name": "Woody",
    "img": "../../assets/images/pets-hight500/modal/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": 4,
    "name": "Scarlett",
    "img": "../../assets/images/pets-hight500/modal/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 5,
    "name": "Katrine",
    "img": "../../assets/images/pets-hight500/modal/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 6,
    "name": "Timmy",
    "img": "../../assets/images/pets-hight500/modal/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  { 
    "id": 7,
    "name": "Freddie",
    "img": "../../assets/images/pets-hight500/modal/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 8,
    "name": "Charly",
    "img": "../../assets/images/pets-hight500/modal/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

console.log(petsData[1]);


const BODY = document.querySelector("body");
const WRAPPER = document.querySelector(".wrapper");
const CARD = document.querySelectorAll('.card')
const BLACKOUT = document.querySelector(".blackout");
const BURGER_ICON = document.querySelector(".hamburger");
const BURGER_MENU = document.querySelector(".burger-menu")
const MENU_LINKS = document.querySelectorAll(".burger-menu__links > li");

let MODAL = document.querySelector(".modal-wrapper");
let MODAL_BUTTON = document.querySelector(".modal_button");



console.log('fine')



// -------- Burger-menu --------

function burgerOpenClose () {
  BURGER_ICON.classList.toggle('rotate')
  BURGER_MENU.classList.toggle('open')
  BLACKOUT.classList.toggle('visible')
  BODY.classList.toggle('no-scroll')
}



BLACKOUT.addEventListener("click",() => { burgerOpenClose() })
BURGER_ICON.addEventListener("click",() => { burgerOpenClose() });

MENU_LINKS.forEach(function(link) {
  link.addEventListener("click",() => {
    burgerOpenClose()
  })
})


// -------- Modal window --------

function generateModal(obj){
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");

  const modalButton = document.createElement("div");
  modalButton.classList.add("modal_button");

  const modalClose = document.createElement("img");
  modalClose.src = '../../assets/images/Close.svg';
  modalClose.alt = 'Close';
  modalClose.classList.add("modal_close-icon");

  modalButton.appendChild(modalClose);

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal_window");

  const modalImg = document.createElement("img");
  modalImg.src = obj.img;
  modalImg.alt = obj.name;
  modalImg.classList.add("modal_img")

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal_content")

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal_header");

  const modalTitle = document.createElement("h3");
  modalTitle.innerText = obj.name;
  modalTitle.classList.add("modal_title");
  
  const modalSubTitle = document.createElement("h3");
  modalSubTitle.innerText = `${obj.type} - ${obj.breed}`;
  modalSubTitle.classList.add("modal_subtitle");

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalSubTitle);

  const modalDescription = document.createElement("h5");
  modalDescription.innerText = obj.description;
  modalDescription.classList.add("modal_text");

  const modalInfo = document.createElement("div");
  modalInfo.classList.add("modal_info");

  const modalList = document.createElement("ul");
  modalList.classList.add("modal_list");

  const modalAge = document.createElement("li");
  modalAge.innerHTML = `<span class="modal_span">Age:</span> ${obj.age}`;
  modalAge.classList.add("modal_list_item")

  const modalInoculations = document.createElement("li");
  modalInoculations.innerHTML = `<span class="modal_span">Inoculations:</span> ${obj.inoculations.join(', ')}`;
  modalInoculations.classList.add("modal_list_item")

  const modalDiseases = document.createElement("li");
  modalDiseases.innerHTML = `<span class="modal_span">Diseases:</span> ${obj.diseases.join(', ')}`;
  modalDiseases.classList.add("modal_list_item")

  const modalParasites = document.createElement("li");
  modalParasites.innerHTML = `<span class="modal_span">Parasites:</span> ${obj.parasites.join(', ')}`;
  modalParasites.classList.add("modal_list_item")

  modalList.appendChild(modalAge);
  modalList.appendChild(modalInoculations);
  modalList.appendChild(modalDiseases);
  modalList.appendChild(modalParasites);

  modalInfo.appendChild(modalList);
  
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalDescription);
  modalContent.appendChild(modalInfo);

  modalWindow.appendChild(modalImg);
  modalWindow.appendChild(modalContent);

  modalWrapper.appendChild(modalButton);
  modalWrapper.appendChild(modalWindow);
      
  return modalWrapper;
}

function modalOpenClose(){
  MODAL.classList.toggle('modal_visible');
  BODY.classList.toggle('no-scroll');  
  }






// fetch("../../assets/pets.json")
//   .then((res) => res.json())
//   .then((petsData) => {   

    CARD.forEach(function(card) {
      card.addEventListener('click', () => {
        let petName = card.querySelector('p.card_title').innerHTML;
        petsData.forEach((pet) => {
          if (petName === pet.name) {
            MODAL.replaceWith(generateModal(pet));
            MODAL = document.querySelector(".modal-wrapper");
            MODAL_BUTTON = document.querySelector(".modal_button");
            }
        });

        modalOpenClose();

        MODAL_BUTTON.addEventListener('click',()=>{ modalOpenClose() })
        
        MODAL.addEventListener('click',(event)=>{
            if (event.target === MODAL){ modalOpenClose() }
        })


      });
    });    
// })

// -------- Slider --------

const SLIDER = document.querySelector(".slider_cards");
const sliderRight = document.querySelector("#button_right");
const sliderLeft = document.querySelector("#button_left");

function generateSlider(count){

  function generateNextArr(count){
    while (nextArr.length < count){
      num = Math.floor(Math.random() * 8) + 1;
      if(!nextArr.includes(num) && !currArr.includes(num)){
        nextArr.push(num)
      }
    }
    return nextArr
  }

  let pastArr = [];
  let currArr = [];
  let nextArr = [];
  
  function init(count){
    generateNextArr(count);

    //move nextArr to currArr
    currArr = [].concat(nextArr);
    nextArr = [];
    generateNextArr(count);

    
    //move currArr to pastArr
    pastArr = [].concat(currArr);
    currArr = [];

    //move nextArr to curr.Arr
    currArr = [].concat(nextArr);
    nextArr = [];
    generateNextArr(count);
  }

  init(count)
  console.log(pastArr,currArr,nextArr);

  
  function forward(count){

    pastArr = [];
    
    pastArr = [].concat(currArr);
    currArr = [];

    currArr = [].concat(nextArr);
    nextArr = [];

    generateNextArr(count);

  }

  function backward(count){

    pastArr = [];
    
    pastArr = [].concat(currArr);
    currArr = [];

    currArr = [].concat(nextArr);
    nextArr = [];

    generateNextArr(count);

  }


  function changeToBackward(count){
    temporaryArr = []
    temporaryArr = [].concat(pastArr);
    
    pastArr = [];
    pastArr = [].concat(currArr);

    currArr = [];
    currArr = [].concat(temporaryArr);


    nextArr = [];

    generateNextArr(count);
  }

  function changeToForward(count){
    temporaryArr = []
    temporaryArr = [].concat(pastArr);
    
    pastArr = [];
    pastArr = [].concat(currArr);

    currArr = [];
    currArr = [].concat(temporaryArr);


    nextArr = [];

    generateNextArr(count);
  }




  function generateCard(id){
  const card = document.createElement("div");
  card.classList.add("card")

  const cardImg = document.createElement("img");
  cardImg.src = petsData[id-1].img;
  cardImg.alt = petsData[id-1].name;
  cardImg.classList.add("card_img")

  const cardTitle = document.createElement("p");
  cardTitle.innerText = petsData[id-1].name;
  cardTitle.classList.add("card_title");

  const cardButton = document.createElement("button");
  cardButton.innerText = "Learn more";

  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardButton);
  return card
  }

  console.log(generateCard(3));

  const moveLeft = () => {
    SLIDER.classList.add("transition-left");


  }
  const moveRight = () => {
    SLIDER.classList.add("transition-right");


  }

  sliderLeft.addEventListener('click',moveLeft);
  sliderRight.addEventListener('click',moveRight);


  SLIDER.addEventListener("animationend",(event)=>{
    if(event.animationName === 'move-right'){
      SLIDER.classList.remove("transition-right");

    }else{
      SLIDER.classList.remove("transition-left");
    }

  })



}

generateSlider(3)