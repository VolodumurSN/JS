/* document.querySelector('.wrapper').addEventListener('click', function (event) {  // or for id => getElementById 
    let tagName = event.target.tagName.toLowerCase() // name of tag in lower case (div, li ...)
    //event.target => where was click?

    if(tagName === 'p'){
        event.target.style.color = 'blue'
    }
}) */