const navbar = document.querySelector('.navbar')
fetch('../navbar.html')
.then(res => res.text())
.then(data => {
    navbar.innerHTML = data
})