const display = document.querySelector("#display")
const btns = document.querySelectorAll(".button")


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = ""
                break
            case 'C':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,-1)
                }
                break
            case "=":
                try{display.innerText = eval(display.innerText)}
                catch{
                    display.innerText="ERROR!"
                }
                display.innerText = eval(display.innerText)
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})