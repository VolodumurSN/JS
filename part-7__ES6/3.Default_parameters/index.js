/* 
//  Old method
const createPost = (title, text, date) => {

    // old method to get default parametr for date
    date = date || new Date().toLocaleDateString()

    return{
        title: title,
        text: text,
        date: date
    }
}

const post = createPost('Who I am?', 'I am robot')


console.log(post) //{ title:'Who I am?', text:'I am robot', date:'2019-12-25'}
 */



//  New method(ES6)

const createPost = (title, text = 'not a robot', date = new Date().toLocaleDateString()) => {
    
    return{title,text,date}     // and short(ES6) without repeat
}

const post = createPost('Who I am?', 'I am robot')


console.log(post)       // { title: 'Who I am?', text: 'I am robot', date: '2019-12-25' }
