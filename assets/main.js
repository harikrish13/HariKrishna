let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*='+ id +']').classList.add('active');
            });
        };
    });
};




// Skills

const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills-active')
            })

            target.classList.add('skills-active')

            tabs.forEach(tab =>{
                tab.classList.remove('skills-active')
        })

        tab.classList.add('skills-active')
      })
    })


let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work-item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))



document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work-btn")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".port-popup").classList.toggle("open");
}

document.querySelector(".port-popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumb img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".port-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".port-popup-body").innerHTML = portfolioItem.querySelector(".port-item-details").innerHTML;
}

// Service

const modalViews =document.querySelectorAll('.services-modal'),
      modelBtns =document.querySelectorAll('.services-btn'),
      modalClose =document.querySelectorAll('.services_modal-close')

let modal  = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
} 


modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener("click", ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})



const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("Email");
const mess = document.getElementById("message");
function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
    Message: ${mess.value}`;

    Email.send({
        SecureToken: "5eeebb78-535e-4fb8-9bb2-46a658c57b34",
        To : 'hari262002@gmail.com',
        From : "hari262002@gmail.com",
        Subject : "Enquiry",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value !=""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })
        item.addEventListener("keyup",() => {
            if (item.value !==""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}


function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-text.email");

    if (!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value !=""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Can't be blank";
        }
    }

    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error")
    && !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }  
});