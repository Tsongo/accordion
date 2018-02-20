// Add event listeners to each accordion
function addAccordionEvents() {
    
    let accordion = document.getElementsByClassName("accordion");
    for (let i=0; i < accordion.length; i++) {
        
        // Add Events
        let btn = accordion[i].firstChild;
        btn.addEventListener("click", () => {
            
            // Reset siblings
            for (var i = 0; i < accordion.length; i++) {
                siblings = accordion[i].firstChild;
                // if button is not a sibling node, reset siblings
                if (btn !== siblings ) { 
                    let icon = siblings.getElementsByTagName('i')[0];
                    siblings.classList.remove("active");
                    icon.classList.remove("fa-angle-up");
                    icon.classList.add("fa-angle-down");
                    siblings.nextSibling.style.maxHeight = "";
                }
                //else let it flow normally
            }
 
            // Toggle Classes
            btn.classList.toggle('active');
            // Toggle Icon
            let icon = btn.getElementsByTagName('i')[0];
            icon.classList.toggle('fa-angle-down');
            icon.classList.toggle('fa-angle-up');
            
            // Show description with CSS animation
            let desc = btn.nextSibling;
            if (desc.style.maxHeight) {
                desc.style.maxHeight = null; //reset
            } else {
                desc.style.maxHeight = desc.scrollHeight + "px";
            }   
        })
    }
};

// Create accordion dynamically
function createAccordion() {
    
    // Get JSON contents for accordion
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            
            let data = JSON.parse(xhr.responseText);
            let dataLength = data.blocks.length;
            let content = document.getElementById("main");
            let tags = '';
            
            // Create element tags
            for(let i = 0; i < dataLength; i++) {
                tags += "<div class='accordion'>";
                    tags += "<button type='button'>";
                        tags += "<span class='heading'>" + data.blocks[i].heading + "</span>";
                        tags += "<i class='fa fa-angle-down'></i>";
                    tags += "</button>";
                // Hidden description
                    tags += "<div class='description'>";
                        tags += "<p>" + data.blocks[i].content + "</p>";
                    tags += "</div>";
                tags += "</div>"; // End div for section class
            }
            content.innerHTML = tags;
            addAccordionEvents();
        }
    }
    xhr.open("GET", "accordion-data.json", true)
    xhr.send();
}