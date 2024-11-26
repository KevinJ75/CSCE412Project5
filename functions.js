function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const fileName = element.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newfileName = "";
    if(fileName == "landingstyle.css") newfileName = "landingstyle2.css";
    else newfileName = "landingstyle.css";
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    if(fileName !== null){
        element.setAttribute("href", newfileName);
        // TASK 2
        // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
        // hint: localStorage.setItem(name, value)
        localStorage.setItem("stylesheet", newfileName);
    }
    
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const fileName = localStorage.getItem("stylesheet");
    // 2 (b) get html style element by ID
    const element = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    element.setAttribute("href", fileName);
}


