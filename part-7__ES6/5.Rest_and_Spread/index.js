const $form = document.querySelector('form')

$form.addEventListener('submit', event => {

    event.preventDefault()

    const title = $form.title.value
    const text = $form.text.value
    
    saveForm(title, text)

})


/* 
function saveForm(data) {     //or function saveForm({title, text})
    const {title, text} = data      //delete
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text
    }

    console.log('Form data: ', formData)
}
 */


/* 
// Spread 
function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data
    }

    console.log('Form data: ', formData)
}
 */


//Rest
function saveForm(...args) {
    const [title, text] = args
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text
    }

    console.log('Form data: ', formData)
}
