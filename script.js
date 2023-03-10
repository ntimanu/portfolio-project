const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('hidden');
});
const articalFirst = document.querySelector('.first');
const openButton = document.querySelector('.first-button');
openButton.addEventListener('click', () => {
  const mainpopup = document.createElement('div');
  mainpopup.className = 'main-popup';
  const popupcontainer = document.createElement('div');
  popupcontainer.className = 'popup-container';
  popupcontainer.innerHTML = `<article class="firstp">
  
  <div class="header-bar">
  <h2 class="tonicp">Tonic</h2>
  <button class="close-button2">&times;</button>
  </div>
  <div class="framep">
    <p class="canopyp">Canopy</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt1p" />
    <p class="backendp">Back End Dev</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt2p" />
    <p class="yearp">2015</p>
  </div>
  <div class="imagep">
  <img src="img/js1SnapshootPortfolio.png" alt="tonic image" width="1108px" height="586px" />
  </div>
  <p class="text2p">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </p>
  <div class="listcontainer">
  <ul class="listp1">
          <li class="htmlp" id="htmltxtp">html</li>
          <li class="cssp" id="csstxtp">css</li>
          <li class="jsp" id="jstxtp">javaScript</li>
        </ul>
  <ul class="listp2">
          <li class="githubp" id="githubtxtp">github</li>
          <li class="rubyp" id="rubytxtp">ruby</li>
          <li class="bootstrapsp" id="bootstrapstxtp">Bootstraps</li>
        </ul>
        <img src="img/jsVector4.png" alt="vector separator" class="jsvectorp">
        <button class="first-button1" type="button" id="messagep">See live</button>
        <button class="first-button2" type="button" id="messagep">See Source</button>
        </div>
</article>
<div id='overlay'></div.`;
  articalFirst.appendChild(popupcontainer);
  articalFirst.appendChild(mainpopup);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    articalFirst.removeChild(popupcontainer);
    articalFirst.removeChild(mainpopup);
  });
});

/**
 second card
 */

const articalSecond = document.querySelector('.stories');
const openButton2 = document.querySelector('.second-button');
openButton2.addEventListener('click', () => {
  const mainpopup = document.createElement('div');
  mainpopup.className = 'main-popup';
  const popupcontainer = document.createElement('div');
  popupcontainer.className = 'popup-container';
  popupcontainer.innerHTML = `<article class="firstp">
  
  <div class="header-bar">
  <h2 class="tonicp">Tonic</h2>
  <button class="close-button2">&times;</button>
  </div>
  <div class="framep">
    <p class="canopyp">Canopy</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt1p" />
    <p class="backendp">Back End Dev</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt2p" />
    <p class="yearp">2015</p>
  </div>
  <div class="imagep">
  <img src="img/js1SnapshootPortfolio.png" alt="tonic image" width="1108px" height="586px" />
  </div>
  <p class="text2p">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </p>
  <div class="listcontainer">
  <ul class="listp1">
          <li class="htmlp" id="htmltxtp">html</li>
          <li class="cssp" id="csstxtp">css</li>
          <li class="jsp" id="jstxtp">javaScript</li>
        </ul>
  <ul class="listp2">
          <li class="githubp" id="githubtxtp">github</li>
          <li class="rubyp" id="rubytxtp">ruby</li>
          <li class="bootstrapsp" id="bootstrapstxtp">Bootstraps</li>
        </ul>
        <img src="img/jsVector4.png" alt="vector separator" class="jsvectorp">
        <button class="first-button1" type="button" id="messagep">See live</button>
        <button class="first-button2" type="button" id="messagep">See Source</button>
        </div>
</article>
<div id='overlay'></div.`;
  articalSecond.appendChild(popupcontainer);
  articalSecond.appendChild(mainpopup);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    articalSecond.removeChild(popupcontainer);
    articalSecond.removeChild(mainpopup);
  });
});
// 3rd card

const articalThird = document.querySelector('.first');
const openButton3 = document.querySelector('.third-button');
openButton3.addEventListener('click', () => {
  console.log('clicked');
  const mainpopup = document.createElement('div');
  mainpopup.className = 'main-popup';
  const popupcontainer = document.createElement('div');
  popupcontainer.className = 'popup-container';
  popupcontainer.innerHTML = `<article class="firstp">
  
  <div class="header-bar">
  <h2 class="tonicp">Tonic</h2>
  <button class="close-button2">&times;</button>
  </div>
  <div class="framep">
    <p class="canopyp">Canopy</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt1p" />
    <p class="backendp">Back End Dev</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt2p" />
    <p class="yearp">2015</p>
  </div>
  <div class="imagep">
  <img src="img/js1SnapshootPortfolio.png" alt="tonic image" width="1108px" height="586px" />
  </div>
  <p class="text2p">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </p>
  <div class="listcontainer">
  <ul class="listp1">
          <li class="htmlp" id="htmltxtp">html</li>
          <li class="cssp" id="csstxtp">css</li>
          <li class="jsp" id="jstxtp">javaScript</li>
        </ul>
  <ul class="listp2">
          <li class="githubp" id="githubtxtp">github</li>
          <li class="rubyp" id="rubytxtp">ruby</li>
          <li class="bootstrapsp" id="bootstrapstxtp">Bootstraps</li>
        </ul>
        <img src="img/jsVector4.png" alt="vector separator" class="jsvectorp">
        <button class="first-button1" type="button" id="messagep">See live</button>
        <button class="first-button2" type="button" id="messagep">See Source</button>
        </div>
</article>
<div id='overlay'></div.`;
  articalThird.appendChild(popupcontainer);
  articalThird.appendChild(mainpopup);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    articalThird.removeChild(popupcontainer);
    articalThird.removeChild(mainpopup);
  });
});

// 4th card

const articalfourth = document.querySelector('.stories');
const openButton4 = document.querySelector('.fourth-button');
openButton4.addEventListener('click', () => {
  const mainpopup = document.createElement('div');
  mainpopup.className = 'main-popup';
  const popupcontainer = document.createElement('div');
  popupcontainer.className = 'popup-container';
  popupcontainer.innerHTML = `<article class="firstp">
  
  <div class="header-bar">
  <h2 class="tonicp">Tonic</h2>
  <button class="close-button2">&times;</button>
  </div>
  <div class="framep">
    <p class="canopyp">Canopy</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt1p" />
    <p class="backendp">Back End Dev</p>
    <img src="img/jsCounter.png" alt="dolt1" class="dolt2p" />
    <p class="yearp">2015</p>
  </div>
  <div class="imagep">
  <img src="img/js1SnapshootPortfolio.png" alt="tonic image" width="1108px" height="586px" />
  </div>
  <p class="text2p">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </p>
  <div class="listcontainer">
  <ul class="listp1">
          <li class="htmlp" id="htmltxtp">html</li>
          <li class="cssp" id="csstxtp">css</li>
          <li class="jsp" id="jstxtp">javaScript</li>
        </ul>
  <ul class="listp2">
          <li class="githubp" id="githubtxtp">github</li>
          <li class="rubyp" id="rubytxtp">ruby</li>
          <li class="bootstrapsp" id="bootstrapstxtp">Bootstraps</li>
        </ul>
        <img src="img/jsVector4.png" alt="vector separator" class="jsvectorp">
        <button class="first-button1" type="button" id="messagep">See live</button>
        <button class="first-button2" type="button" id="messagep">See Source</button>
        </div>
</article>
<div id='overlay'></div.`;
  articalfourth.appendChild(popupcontainer);
  articalfourth.appendChild(mainpopup);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    articalfourth.removeChild(popupcontainer);
    articalfourth.removeChild(mainpopup);
  });
});
// Contact form validation

const contactForm = document.getElementById('form-id');
const contactEmail = document.getElementById('email-id');
const contactError = document.getElementById('errormessage');

contactForm.addEventListener('submit', (event) => {
  if (contactEmail.value.toLowerCase() !== contactEmail.value) {
    event.preventDefault();
    contactError.innerText = 'please type your email in lowercase. form not submitted';
  }
});

// storage

const formName = document.getElementById('form-name');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('input', () => {
  const formData = {
    name: formName.value,
    email: contactEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(formData));
});
function showData() {
  const userData = JSON.parse(localStorage.getItem('contactForm'));
  if (userData) {
    formName.value = userData.name;
    contactEmail.value = userData.email;
    formMessage.value = userData.message;
  }
}
showData();