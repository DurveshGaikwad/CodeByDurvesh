// Check on youtube
const firebaseConfig = {
    apiKey: "AIzaSyDC26tVK8XE1iEcWGvj9JV2KMUQDoWWk-I",
    authDomain: "codebydurvesh.firebaseapp.com",
    databaseURL: "https://codebydurvesh-default-rtdb.firebaseio.com",
    projectId: "codebydurvesh",
    storageBucket: "codebydurvesh.appspot.com",
    messagingSenderId: "1073486025834",
    appId: "1:1073486025834:web:31333d7bd348dc5f22e613",
    measurementId: "G-XQFYCK5J6W"
};

firebase.initializeApp(firebaseConfig)

var contactFormDB = firebase.database().ref("contactForm")

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal("name");
    var number = getElementVal("phone_number");
    var message = getElementVal("message");

    saveMessage(name, number, message);

    document.getElementById("contactForm").reset()

    swal("Sent Successfully!", "", "success");
}

const saveMessage = (name, number, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        number : number,
        message : message,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value
  }

