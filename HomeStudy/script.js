var firstName = document.querySelector('#name');
var lastName = document.querySelector('#lastname');
var email = document.querySelector('#email');
var birthday = document.querySelector('#birthday');
var country = document.querySelector('#country');
var phone = document.querySelector('#phone');
var cardName = document.querySelector('#cardname');
var cardNumber = document.querySelector('#cardnumber');
var exp = document.querySelector('#exp');
var cvv = document.querySelector('#cvv');
var userName = document.querySelector('#username');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var eye = document.querySelector('#eye');

 //Αν πατηθει το κουμπι υποβολης χωρίς να έχουν συμπληρωθει τα
 //υποχρεωτικα πεδία, περιμεντε 2-3 δευτερολεπτακαι θα σας παει
 //στο πρωτο πεδιο που πρεπει να συμπληρωθει. Και γενικα περιμεντε
 //2-3 δευτερολεπτα.
function successfulSubmit(){
	alert('Η υποβολή της φόρμας εγγραφής ήταν επιτυχής!');
}


function firstNameCheck(){
	let letters = /^[A-Za-z]+$/;
	if(firstName.value === ''){
		firstName.setCustomValidity('Πρέπει να συμπληρώσετε το όνομά σας!');
		firstName.reportValidity();
	}
	else if(!firstName.value.match(letters)){
		firstName.setCustomValidity('Το όνομά σας πρέπει να περιέχει μόνο λατινικούς χαρακτήρες!');
		firstName.reportValidity();
	}
	else{
		firstName.setCustomValidity('');
        firstName.reportValidity();
	}
}

function lastNameCheck(){
	let letters = /^[A-Za-z]+$/;
	if(lastName.value === ''){
		lastName.setCustomValidity('Πρέπει να συμπληρώσετε το επώνυμό σας!');
		lastName.reportValidity();
	}
	else if(!lastName.value.match(letters)){
		lastName.setCustomValidity('Το επώνυμό σας πρέπει να περιέχει μόνο λατινικούς χαρακτήρες!');
		lastName.reportValidity();
	}
	else{
		lastName.setCustomValidity('');
        lastName.reportValidity();
	}
}

function emailCheck(){
	if(email.value === ''){
		email.setCustomValidity('Πρέπει να συμπληρώσετε το email σας!');
		email.reportValidity();
	}
	else{
		email.setCustomValidity('');
        email.reportValidity();
	}
}

function ageValidity(){
	let birth = new Date(birthday.value);
    let todayDate = new Date();
    let validDate = new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDay());
    if(birthday.value === ''){
    	birthday.setCustomValidity('Πρέπει να συμπληρώσετε την ημερομηνία γενεθλίων σας!');
    	birthday.reportValidity();
    }
    else if (validDate < birth) {
        birthday.setCustomValidity('Πρέπει να είσαι άνω των 18 για να εγγραφείς στην ιστοσελίδα μας!');
        birthday.reportValidity();
    }
    else {
        birthday.setCustomValidity('');
        birthday.reportValidity();
    }
}

function countryCheck(){
	if(country.value === ''){
		country.setCustomValidity('Πρέπει να συμπληρώσετε την χώρα σας!');
		country.reportValidity();
	}
	else{
		country.setCustomValidity('');
        country.reportValidity();
	}
}

function phoneCheck(){
	let numbers = /^[0-9]+$/;
	if(phone.value === ''){
    	phone.setCustomValidity('Πρέπει να συμπληρώσετε το κινητό σας τηλέφωνο!');
    	phone.reportValidity();
    }
    else if (!phone.value.match(numbers)) {
        phone.setCustomValidity('Το κινητό σας τηλέφωνο πρέπει να έχει μόνο αριθμούς!');
        phone.reportValidity();
    }
    else if (phone.value.toString().length != 10) {
        phone.setCustomValidity('Το κινητό σας τηλέφωνο πρέπει να έχει 10 ψηφία!');
        phone.reportValidity();
    }
    else {
        phone.setCustomValidity('');
        phone.reportValidity();
    }
}

function cardNameCheck(){
	let caps = /^[A-Z]{2,} [A-Z]{2,}$/;
	if(cardName.value === ''){
		cardName.setCustomValidity('Πρέπει να συμπληρώσετε το ονοματεπώνυμο του κατόχου της κάρτας!');
		cardName.reportValidity();
	}
	else if(!cardName.value.match(caps)){
		cardName.setCustomValidity('Το ονοματεπώνυμο του κατόχου της κάρτας πρέπει να περιέχει μόνο κεφαλαίους λατινικούς χαρακτήρες όπου το όνομα με το επώνυμο χωρίζονται με ένα κενό!');
		cardName.reportValidity();
	}
	else{
		cardName.setCustomValidity('');
        cardName.reportValidity();
	}
}

function cardNumberCheck(){
	let num = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
	if(cardNumber.value === ''){
		cardNumber.setCustomValidity('Πρέπει να συμπληρώσετε τον αριθμό της κάρτας σας!');
		cardNumber.reportValidity();
	}
	else if(!cardNumber.value.match(num)){
		cardNumber.setCustomValidity('Ο αριθμός κάρτας πρέπει να είναι της μορφής 1111-2222-3333-4444!');
		cardNumber.reportValidity();
	}
	else{
		cardNumber.setCustomValidity('');
        cardNumber.reportValidity();
	}
}

function expirationCheck(){
	let expDate = /^[0-1]{1}[1-9]{1}[/][0-9]{2}$/;
	if(exp.value === ''){
		exp.setCustomValidity('Πρέπει να συμπληρώσετε την ημερομηνία λήξης της κάρτας σας!');
		exp.reportValidity();
	}
	else if(!exp.value.match(expDate)){
		exp.setCustomValidity('Η ημερομηνία λήξης της κάρτας σας πρέπει να είναι της μορφής 12/22!');
		exp.reportValidity();
	}
	else{
		exp.setCustomValidity('');
        exp.reportValidity();
	}
}

function cvvCheck(){
	let threeDigits = /^[0-9]{3}$/;
	if(cvv.value === ''){
		cvv.setCustomValidity('Πρέπει να συμπληρώσετε τον αριθμό cvv της κάρτας σας!');
		cvv.reportValidity();
	}
	else if(!cvv.value.match(threeDigits)){
		cvv.setCustomValidity('Το cvv της κάρτας σας πρέπει να είναι ένας τριψήφιος αριθμός!');
		cvv.reportValidity();
	}
	else{
		cvv.setCustomValidity('');
        cvv.reportValidity();
	}
}

function userNameCheck(){
	if(userName.value === ''){
		userName.setCustomValidity('Πρέπει να συμπληρώσετε το username που επιθυμείτε να έχετε!');
		userName.reportValidity();
	}
	else{
		userName.setCustomValidity('');
        userName.reportValidity();
	}
}

function passwordValidity(){
	if(password.validity.valueMissing){
        password.setCustomValidity('Πρέπει να βάλετε κωδικό πρόσβασης!');
        password.reportValidity();
    }
	else if(password.validity.patternMismatch){
        password.setCustomValidity('Ο κωδικός δεν πληρεί τα απαραίτητα κριτήρια για να είναι αρκετά ισχυρός!');
        password.reportValidity();
    }
    else{
        password.setCustomValidity('');
        password.reportValidity();
    }
}

function passwordMatchCheck(){
	if(confirmPassword.validity.valueMissing){
        confirmPassword.setCustomValidity('Επιβεβαίωσε τον παραπάνω κωδικό!');
        confirmPassword.reportValidity();
    }
    else if(confirmPassword.value != password.value){
        confirmPassword.setCustomValidity("Ο κωδικός δεν ταιριάζει με τον κωδικό παραπάνω!");
        confirmPassword.reportValidity();
    }else{
        confirmPassword.setCustomValidity('');
        confirmPassword.reportValidity();
    }
}

//Πατώντας το ματάκι κάνει να φαινεται ή να μην φαίνεται ο κωδικός
//που πληκτρολογεί ο χρήστης. Αν δεν έχουν συπληρωυεί τα παραπάνω
//υποχρεωτικά πεδία και πατησει ο χργστης το ματάκι, η φορμα θα του υποδείξει
//να συμπληρώσει πρώτα ολα τα πεδία και μετα τον κωδικό.
function passwordVisibility(){
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	if (eye.src.match("./images/invisible.png")){
		eye.src ="./images/show.png";
	}else{
		eye.src ="./images/invisible.png";
	}
}

//Event Listeners

firstName.addEventListener('input', () => firstNameCheck());
firstName.addEventListener('invalid', () => firstNameCheck());

lastName.addEventListener('input', () => lastNameCheck());
lastName.addEventListener('invalid', () => lastNameCheck());

email.addEventListener('input', () => emailCheck());
email.addEventListener('invalid', () => emailCheck());

birthday.addEventListener('input', () => ageValidity());
birthday.addEventListener('invalid', () => ageValidity());

country.addEventListener('input', () => countryCheck());
country.addEventListener('invalid', () => countryCheck());

phone.addEventListener('input', () => phoneCheck());
phone.addEventListener('invalid', () => phoneCheck());

cardName.addEventListener('input', () => cardNameCheck());
cardName.addEventListener('invalid', () => cardNameCheck());

cardNumber.addEventListener('input', () => cardNumberCheck());
cardNumber.addEventListener('invalid', () => cardNumberCheck());

exp.addEventListener('input', () => expirationCheck());
exp.addEventListener('invalid', () => expirationCheck());

cvv.addEventListener('input', () => cvvCheck());
cvv.addEventListener('invalid', () => cvvCheck());

userName.addEventListener('input', () => userNameCheck());
userName.addEventListener('invalid', () => userNameCheck());

password.addEventListener('input', () => passwordValidity());
password.addEventListener('invalid', () => passwordValidity());

confirmPassword.addEventListener('input', () => passwordMatchCheck());
confirmPassword.addEventListener('invalid', () => passwordMatchCheck());