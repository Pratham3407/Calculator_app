document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    function handleClick(e) {
        let buttonText = e.target.innerText;
        
        if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            display.value = '';
        } else {
            display.value += buttonText;
        }
    }
});
