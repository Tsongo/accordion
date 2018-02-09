function start_accordion() {
    let accordion = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {

            // Reset unclicked siblings
            for (var i = 0; i < accordion.length; i++) {
                if (this !== accordion[i] ) {
                    accordion[i].classList.remove("clicked");
                    accordion[i].getElementsByTagName("i")[0].classList.remove("fa-angle-up");
                    accordion[i].getElementsByTagName("i")[0].classList.add("fa-angle-down");
                    accordion[i].nextElementSibling.style.maxHeight = "";
                }
            }
            
            // Toggle classes
            this.classList.toggle("clicked");
            var icon = this.getElementsByTagName("i")[0]; 
            icon.classList.toggle("fa-angle-down");
            icon.classList.toggle("fa-angle-up");
            
            // Contents animation using maxHeight
            var description = this.nextElementSibling;
            if (description.style.maxHeight) {
                description.style.maxHeight = "";
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
            }
        });
    }
};