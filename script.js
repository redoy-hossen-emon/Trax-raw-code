var backTop = document.querySelector('.backTop');
const header = document.querySelector('header');

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 400) {
        backTop.style.opacity = "1"
    }
    else if (document.documentElement.scrollTop <= 400) {
        backTop.style.opacity = "0"
    }
    // console.log(document.documentElement.scrollTop)


    if (document.documentElement.scrollTop >= 10) {
        header.classList.add('menu-bg')

    } else if (document.documentElement.scrollTop < 10)
        header.classList.remove('menu-bg')

})
// Get all slide selector buttons
const slideSelectors = document.querySelectorAll('.slideSelector span');




slideSelectors.forEach((btn) => {
    btn.addEventListener("click", function () {
        // Remove active class from all slides selectors
        slideSelectors.forEach(e => { e.classList.remove('b-Bottom') })

        // Get the clicked button's number
        const slideNo = btn.innerText.trim();

        this.classList.add('b-Bottom')
        // Add active class to the matching slide
        let translatevalue = (slideNo - 1) * 100;



        document.querySelector('.slideWrap').style.transform = `translateX(-${translatevalue}vw)`


    });
});



const eftFoot = document.querySelector('.eftFoot span').innerText = new Date().getFullYear()


// manu clik handling in mobile veiw 
const threeDotIcon = document.querySelector(".threeDotIcon");
const manuList = document.querySelector(".manuList");

// Toggle menu on icon click
threeDotIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    manuList.classList.toggle('menuHeight');
    threeDotIcon.classList.toggle('xpand');
});

// Close menu on click outside or on a menu item
document.addEventListener('click', function (event) {
    const clickedOutsideMenu = !manuList.contains(event.target);
    const clickedOutsideIcon = !threeDotIcon.contains(event.target);
    const clickedMenuItem = event.target.closest('.manuList li'); // Adjust selector if needed

    if ((clickedOutsideMenu && clickedOutsideIcon) || clickedMenuItem) {
        manuList.classList.remove('menuHeight');
        threeDotIcon.classList.remove('xpand');
    }
});

