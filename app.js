const app = document.querySelector('#app')
const modeBtn = document.querySelector('#mode')
const expBox = document.querySelector('.expression')
const resultBox = document.querySelector('.result')
const allNumpadBtns = document.querySelectorAll('.numpad .btn')

let expressions = ''

allNumpadBtns.forEach(btn => {
    btn.onclick = () => {        
        if (btn.classList.contains('clear')) {
            expBox.textContent = '0'
            resultBox.textContent = '0'
            expressions = ''
        } else if (btn.classList.contains('equal')) {
            try {
                resultBox.textContent = eval(expBox.textContent.replaceAll('x', '*'))
                expressions = ''
            } catch (err) {
                resultBox.textContent = 'Syntax Error'
            }
        } else {
            expressions += btn.textContent
            expBox.textContent = expressions
        }
    }
})

// For Dark Mode
modeBtn.onclick = () => {
    app.classList.toggle('dark')
}