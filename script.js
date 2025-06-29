// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelector('section');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');

//             })
//         }
        
//     });
// }

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     navbar.classList.toggle('active')
// }

// phone section
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Contact form
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Email"]').value.trim();
  const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
  const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }


  alert("Thank you! Your message has been sent.");
  this.reset(); 
});

// Email sending

// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   emailjs.sendForm("service_smejsya", "template_ux4m82k"
// ,  this)
//     .then(() => {
//       alert("Message sent successfully!");
//       this.reset();
//     }, (error) => {
//       console.error("FAILED...", error);
//       alert("Message failed to send. Please try again later.");
//     });
// });

