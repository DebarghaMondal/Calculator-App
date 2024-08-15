let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Replace percentage operation to calculate (a % b) as (a * b / 100)
                string = string.replace(/(\d+)\s*%\s*(\d+)/g, (match, p1, p2) => (p1 * p2 / 100));
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            string += ' % ';
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});



