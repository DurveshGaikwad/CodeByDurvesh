// Check on youtube!
const firebaseConfig = {
    apiKey: "AIzaSyDC26tVK8XE1iEcWGvj9JV2KMUQDoWWk-I",
    authDomain: "codebydurvesh.firebaseapp.com",
    databaseURL: "https://codebydurvesh-default-rtdb.firebaseio.com",
    projectId: "codebydurvesh",
    storageBucket: "codebydurvesh.appspot.com",
    messagingSenderId: "1073486025834",
    appId: "1:1073486025834:web:aa9aab41c3bfcaed22e613",
    measurementId: "G-MXFLHT590Y"
};

firebase.initializeApp(firebaseConfig)

var feedbackFormDB = firebase.database().ref("feedbackForm")

document.getElementById("feedbackForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var message = getElementVal("message");

    saveMessage(message);

    document.getElementById("feedbackForm").reset()

    swal("Sent Successfully!", "", "success");
}

const saveMessage = (message) => {
    var newfeedbackForm = feedbackFormDB.push();

    newfeedbackForm.set({
        message : message,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value
  }

