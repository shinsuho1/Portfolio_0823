// slider(article)
const slider = document.querySelector("#slider");

// title(h1,h2)
const title = document.querySelector("#title");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let enableClick = true;

init();

next.addEventListener("click", (e) => {
    e.preventDefault();

    if (enableClick) {
        nextSlide();
        nextSlide_title();
        enableClick = false;
    }
    
});

prev.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (enableClick) {
        prevSlide();
        prevSlide_title();
        enableClick = false
    }
});







function init() {
    slider.style.left = "-100%";
    slider.prepend(slider.lastElementChild);

    title.style.left = "-100%";
    title.prepend(title.lastElementChild);
}

function nextSlide() {
    new Anim(slider, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.append(slider.firstElementChild);
            enableClick = true;
        }
    });
}

function nextSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.append(title.firstElementChild);
            enableClick = true;
        }
    });
}

function prevSlide() {
    new Anim(slider, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.prepend(slider.lastElementChild);
            enableClick = true;
        }
    }); 
}

function prevSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.prepend(title.lastElementChild);
            enableClick = true;
        }
    }); 
}
