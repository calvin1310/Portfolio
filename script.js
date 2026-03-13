// apparition au scroll

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

document.querySelectorAll("section").forEach(section=>{
observer.observe(section)
})


// effet machine à écrire dans le hero

const text = "Etudiant passionné par la technologie et l'informatique";
let index = 0;

function typeEffect(){

if(index < text.length){
document.querySelector(".hero p").textContent += text.charAt(index)
index++
setTimeout(typeEffect,50)
}

}

document.querySelector(".hero p").textContent = ""
typeEffect()


// curseur lumineux

const cursor = document.createElement("div")

cursor.style.width="12px"
cursor.style.height="12px"
cursor.style.borderRadius="50%"
cursor.style.position="fixed"
cursor.style.background="#38bdf8"
cursor.style.pointerEvents="none"
cursor.style.boxShadow="0 0 15px #38bdf8"

document.body.appendChild(cursor)

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

// Copier l'email au clic
const emailContainer = document.getElementById("email");

emailContainer.addEventListener("click", () => {
  const email = document.querySelector(".email-text").textContent;
  navigator.clipboard.writeText(email).then(() => {
    // Affiche un petit message temporaire
    const msg = document.createElement("span");
    msg.textContent = "Copié !";
    msg.style.color = "#00cfff";
    msg.style.marginLeft = "10px";
    msg.style.fontWeight = "bold";
    emailContainer.appendChild(msg);
    setTimeout(() => msg.remove(), 1500);
  });
});