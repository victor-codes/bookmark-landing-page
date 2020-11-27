const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const tabCtrl1 = document.querySelector('.tabCtrl1');
const tabCtrl2 = document.querySelector('.tabCtrl2');
const tabCtrl3 = document.querySelector('.tabCtrl3');
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const hamOpen = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close');

closeNav.addEventListener('click', () => {
    document.querySelector('.mobile__navbar__container').style.display = 'none';
    document.querySelector('.mobile__navbar__color').style.fill = '#242A45';
    document.querySelector('.mobile__navbar__circle-color').style.fill = '#5267DF';
    document.querySelector('.transparent').style.fill = '#fff';
    hamOpen.style.display = 'block';
    closeNav.style.display = 'none';
    document.querySelector('header').style.background = '#ffffff';
})
hamOpen.addEventListener('click', () => {
    document.querySelector('.mobile__navbar__container').style.display = 'flex';
    document.querySelector('.mobile__navbar__color').style.fill = '#ffffff';
    document.querySelector('.mobile__navbar__circle-color').style.fill = '#ffffff';
    document.querySelector('.transparent').style.fill = 'rgba(47, 53, 79, 1)';
    closeNav.style.display = 'block';
    hamOpen.style.display = 'none';
    document.querySelector('header').style.background = 'rgba(47, 53, 79, 1)';
})

function tabCtrl(show, hide, hide1) {
    show.style.display = 'block';
    hide.style.display = 'none';
    hide1.style.display = 'none';
};

tabCtrl1.addEventListener('click', () => {
    document.getElementById('active1').classList.add('active');
    document.getElementById('active2').classList.remove('active');
    document.getElementById('active3').classList.remove('active');
    tabCtrl(tab1, tab2, tab3);
})

tabCtrl2.addEventListener('click', () => {
    tabCtrl(tab2, tab1, tab3);
    document.getElementById('active2').classList.add('active');
    document.getElementById('active1').classList.remove('active');
    document.getElementById('active3').classList.remove('active');
})

tabCtrl3.addEventListener('click', () => {
    tabCtrl(tab3, tab2, tab1);
    document.getElementById('active3').classList.add('active');
    document.getElementById('active2').classList.remove('active');
    document.getElementById('active1').classList.remove('active');
})

function errorMessage(log, message) {
    log.innerHTML = message;
    document.querySelector('.errorIcon').style.display = 'block';
    document.querySelector('.checkIcon').style.display = 'none';
    email.style.borderColor = "hsl(0, 94%, 66%)";
    log.classList.add('errorMessage');
    email.style.borderBottomLeftRadius = '0px';
    email.style.borderBottomRightRadius = '0px';
    log.style.opacity = "1";
}

function successMessage(log) {
    email.style.borderColor = "#85e89d";
    log.classList.remove('errorMessage');
    log.innerHTML = "";
    email.style.borderBottomLeftRadius = '4px';
    email.style.borderBottomRightRadius = '4px';
    document.querySelector('.errorIcon').style.display = 'none';
    document.querySelector('.checkIcon').style.display = 'block';
}

function emailValidator() {
    //Email is invalid or already taken
    var log = document.querySelector(".error");
    log.style.fontSize = "14px";
    log.style.color = "#ffffff";

    var test = email.value.trim();
    let match = /^[a-zA-Z][.](?=a-zA-Z)|\w+@([\w-]+\.)+[\w-]{2,4}$/;

    if (test.length < 1) {
        setTimeout(() => {
            errorMessage(log, "Enter a valid email.");
        }, 800);
    } else if (test.match(/\s/g)) {
        setTimeout(() => {
            errorMessage(log, "Email is invalid or already taken.");
        }, 800);
    } else if (test.match(match)) {
        setTimeout(() => {
            successMessage(log);
        }, 800);
        return true;
    } else {
        setTimeout(() => {
            errorMessage(log, "Email is invalid or already taken.");
        }, 800);
    }
}

submit.addEventListener("click", (e) => {
    if (emailValidator()) {
        submit.disabled = false;
    } else {
        e.preventDefault();
        emailValidator()
    }
});

email.addEventListener("input", () => { emailValidator(); });