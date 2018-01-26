
// Get JSON contents
function get_json() {
    var req = new XMLHttpRequest();
        
    req.open("GET", "accordion-data.json", true)
    req.setRequestHeader("Content-type", "application/json", true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.responseText);
            var heading = document.getElementsByClassName("accordion");
            var content = document.getElementsByClassName("description");
            var data_length = data.blocks.length;
                
            for(var i=0; i < data_length; i++) {
                heading[i].getElementsByClassName("heading")[0].innerHTML = data.blocks[i].heading;
                content[i].getElementsByTagName('p')[0].innerHTML = data.blocks[i].content;
            }
        }
    }
    req.send(null);
}