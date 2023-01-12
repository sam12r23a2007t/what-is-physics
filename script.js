// hamburger icon
// change content from navbar

document.getElementById('home').style.display = "block"
document.getElementById('physicians').style.display = "none"
document.getElementById('branches').style.display = "none"
document.getElementById('modern').style.display = "none"
document.getElementById('history').style.display = "none"

document.getElementById('nav-id-home').addEventListener('click', ()=>{
    document.getElementById('home').style.display = "block"
    document.getElementById('physicians').style.display = "none"
    document.getElementById('branches').style.display = "none"
    document.getElementById('modern').style.display = "none"
    document.getElementById('history').style.display = "none"
})
document.getElementById('nav-id-physicians').addEventListener('click', ()=>{
    document.getElementById('home').style.display = "none"
    document.getElementById('physicians').style.display = "block"
    document.getElementById('branches').style.display = "none"
    document.getElementById('modern').style.display = "none"
    document.getElementById('history').style.display = "none"
})
document.getElementById('nav-id-branches').addEventListener('click', ()=>{
    document.getElementById('home').style.display = "none"
    document.getElementById('physicians').style.display = "none"
    document.getElementById('branches').style.display = "block"
    document.getElementById('modern').style.display = "none"
    document.getElementById('history').style.display = "none"
})
document.getElementById('nav-id-modern').addEventListener('click', ()=>{
    document.getElementById('home').style.display = "none"
    document.getElementById('physicians').style.display = "none"
    document.getElementById('branches').style.display = "none"
    document.getElementById('modern').style.display = "block"
    document.getElementById('history').style.display = "none"
})
document.getElementById('nav-id-history').addEventListener('click', ()=>{
    document.getElementById('home').style.display = "none"
    document.getElementById('physicians').style.display = "none"
    document.getElementById('branches').style.display = "none"
    document.getElementById('modern').style.display = "none"
    document.getElementById('history').style.display = "block"
})