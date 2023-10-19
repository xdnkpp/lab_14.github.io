function fun1() {
    let a = parseFloat(prompt("Введите первое чило:"));
    let b = parseFloat(prompt("Введите второе чило:"));
    function compareNumbers(a, b) {
        if (a > b) {
          window.alert(1);
        } else if (a === b) {
          window.alert(0);
        } else {
          window.alert(-1);
        }
      }
      let result = compareNumbers(a, b);
}

function fun2(backgroundColor, textColor, text) {
    const style = `color: ${textColor}; background-color: ${backgroundColor};`;
    document.write(`<p style="${style}">${text}</p>`);
  }
    
function fun3() {
    let length = parseFloat(prompt("Длина = "));
    let width = parseFloat(prompt("Ширина = "));
    function calculateArea(length, width) {
        if (width === null || width === '') {
          return length * length;
        } 
        else {
          return length * width;
        }
      }
  
    let result = calculateArea(length, width);
    window.alert(`${result}`)
  }

function fun4() {
    let n = parseFloat(prompt("Ввкдите первое число:"))
    let m = parseFloat(prompt("Ввкдите второе число:"))
    function getNumber(n, m) {
        if (n % 2 === 0 && m % 2 === 0) {
            return n * m;
          } else if (n % 2 !== 0 && m % 2 !== 0) {
            return n + m;
          } else {
            return m;
          }
    }
    let result = getNumber(n, m);
    window.alert(`${result}`)
}