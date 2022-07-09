//Function to open demo links on button click
fbIcon = document.getElementById("social-facebook-icon");
instaIcon = document.getElementById("social-instagram-icon");
gmailIcon = document.getElementById("social-gmail-icon");
linkedinIcon = document.getElementById("social-linkedin-icon");

gmailIcon.addEventListener('click', function() {
    window.location.href = "mailto:dhillongagan562@gmail.com";
});

linkedinIcon.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/gagandeep-singh-fgs/" );
});


document.getElementById('projectbtn__weatherdeck').addEventListener('click', function() {
    window.open("https://weatherdeck.netlify.app/" );
});


document.getElementById('projectbtn__dietworkoutgen').addEventListener('click', function() {
    window.open("https://dietworkoutgen.netlify.app/" );
});