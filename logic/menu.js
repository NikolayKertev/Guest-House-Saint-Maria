const menuWrapper = document.getElementById('menu-wrapper');
const phoneNav = document.getElementById('phone-nav');

menuWrapper.addEventListener('click', (e) => {
    openMenu();
})

function openMenu() {
    if (phoneNav.classList.contains("shown")) {
        phoneNav.classList.add("hidden");
        phoneNav.classList.remove("shown");
    }
    else {
        phoneNav.classList.add("shown");
        phoneNav.classList.remove("hidden");
    }    
}