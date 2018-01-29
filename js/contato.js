
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUAy28lbIBWvWDBwsLrvcvNU59JJl6eVU",
    authDomain: "contact-form-469d6.firebaseapp.com",
    databaseURL: "https://contact-form-469d6.firebaseio.com",
    projectId: "contact-form-469d6",
    storageBucket: "",
    messagingSenderId: "651614796584"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    message:message
  });
}