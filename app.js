//set initial count
let count = 0

//Select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

//Searching in all our buttons
btns.forEach( (btn) => {
    //Checking the click event in our buttons
    btn.addEventListener('click', (e) => {
        // With the classes we are getting the type of button
        const styles = e.currentTarget.classList
        if(styles.contains('decrease') ){
            count--
        } else if(styles.contains('increase') ){
            count++
        } else if(styles.contains('reset') ){
            count = 0
        }

        if(count > 0){
            value.style.color = '#27AE60'
        }else if (count < 0){
            value.style.color = '#FF5964'
        } else value.style.color = 'white'

        value.textContent = count 
    })
} )