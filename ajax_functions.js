
// Get JSON contents
function get_json() {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Codes to execute 
            let data = JSON.parse(xhr.responseText);
            let dataLength = data.blocks.length;
            let content = document.getElementsByClassName("inner-content");
            let tags = '';
            
            for(let i = 0; i < dataLength; i++) {
                tags += "<div class='section'>";
                    tags += "<button class='accordion'>";
                        tags += "<span class='heading'>" + data.blocks[i].heading + "</span>";
                        tags += "<i class='fa fa-angle-down'></i>";
                    tags += "</button>";
                // Hidden description
                    tags += "<div class='description'>";
                        tags += "<p>" + data.blocks[i].content + "</p>";
                    tags += "</div>";
                tags += "</div>"; // End div for section class
            }
            content[0].innerHTML = tags;
            start_accordion(); //Initialize the accordion to new elements
        }
    }
    xhr.open("GET", "accordion-data.json", true)
    xhr.send();
}