console.log("Js file loaded!");
document.body.style.border = "10px solid";

const changeSignInDescription = document?.querySelector('p.my-bupa-sign-in-description');
if (changeSignInDescription) {
	changeSignInDescription.textContent = 'This description is updated from external js file!';
}
