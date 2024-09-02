const firebaseConfig = {
    apiKey: "AIzaSyBePV4JagGOXBUvb9t8TcQLGdvznELTauQ",
    authDomain: "lau-portfolio.firebaseapp.com",
    databaseURL: "https://lau-portfolio-default-rtdb.firebaseio.com",
    projectId: "lau-portfolio",
    storageBucket: "lau-portfolio.appspot.com",
    messagingSenderId: "504992965143",
    appId: "1:504992965143:web:a9663e36625060a3a6f252"
};

// For smooth scrolling animation //
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => observer.observe(element));

const inputs = document.querySelectorAll('.clear');


// For showing and hiding message contaier //

const message = document.querySelector('.message_container_fixed');
const button_show_message = document.getElementById('show_message');
const close_message = document.getElementById('close_message');


button_show_message.addEventListener('click', function() {
    message.classList.add('show_hidden_message') 
   
});

close_message.addEventListener('click', function() {
    message.classList.remove('show_hidden_message')
    inputs[0].value = ''
    inputs[1].value = ''
    inputs[2].value = ''
});


firebase.initializeApp(firebaseConfig)
const messages_form = firebase.database().ref('messages');

send_message.addEventListener('click', function(){
    let newMessage_form = messages_form.push(); 

    const fullname = document.getElementById('name').value;
    const gmail = document.getElementById('gmail').value;
    const message_text = document.getElementById('message_text').value;


    if(fullname == '' || gmail == '' || message_text == '') {
       
    }
    else {
        newMessage_form.set({
            full_name: fullname,
            email: gmail,
            messages_content: message_text
        });
        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    }
});

function viewVid(args) {
    args == 'yl' ? location.href = 'pages/ytlibrary.html' : null
    args == 'sy' ? location.href = 'pages/synthesis.html' : null
}
