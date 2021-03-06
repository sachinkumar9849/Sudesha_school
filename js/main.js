var preloader = document.getElementById('loading');

function myFunction() {
    preloader.style.display = 'none';

}
var $slide = $(".slide")
    .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true
    })
    .on({
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
            $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
        },
        afterChange: function() {
            $(".preve-slide", this).removeClass("preve-slide　slide-animation");
        }
    });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");


///////////////////////////// SLIDER END

// MENU START
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// MENU END

// SEARCH START
$(function() {
    $('#search-menu').removeClass('toggled');

    $('#search-icon').click(function(e) {
        e.stopPropagation();
        $('#search-menu').toggleClass('toggled');
        $("#popup-search").focus();
    });

    $('#search-menu input').click(function(e) {
        e.stopPropagation();
    });

    $('#search-menu, body').click(function() {
        $('#search-menu').removeClass('toggled');
    });
});
// SEARCH END
$(".slick_testimonial").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

});

// NAVE SCROOL


$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});


// NOTICE POPUP START 

$(document).ready(function() {
    $('#myModal').modal('show');
});
// NOTICE POPUP END

// MILESTONE START
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

//MILESTONE END

//ABOUT READ MORE START

// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
class readMore {
    constructor() {
        this.content = '.readmore__content';
        this.buttonToggle = '.readmore__toggle';
    }

    bootstrap() {
        this.setNodes();
        this.init();
        this.addEventListeners();
    }

    setNodes() {
        this.nodes = {
            contentToggle: document.querySelector(this.content)
        };

        this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
    }

    init() {
        const { contentToggle } = this.nodes;

        this.stateContent = contentToggle.innerHTML;

        contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
    }

    addEventListeners() {
        this.buttonToggle.addEventListener('click', this.onClick.bind(this))
    }

    onClick(event) {
        const targetEvent = event.currentTarget;
        const { contentToggle } = this.nodes

        if (targetEvent.getAttribute('aria-checked') === 'true') {
            targetEvent.setAttribute('aria-checked', 'false')
            contentToggle.innerHTML = this.stateContent;
            this.buttonToggle.innerHTML = 'Show less'

        } else {
            targetEvent.setAttribute('aria-checked', 'true')
            contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`
            this.buttonToggle.innerHTML = 'Read More'
        }
    }
}


const initReadMore = new readMore();
initReadMore.bootstrap()
    //ABOUT READ MORE END