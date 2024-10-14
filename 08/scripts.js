// Homework

// Hacer una pantalla web que contenga un teclado numerico y una barra encima de los numero como si fuese una 
// calculadar "pero no es una calculadora, ya que solo sera presentar cada numero presionado", que al presinar cada tecla "numero" se vaya reflejando en 
// la barra, y que contenga dos botones extra, uno para borrar el ultimo numero presionado y otro para borrarlo todo.

const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');
const maxDigits = 12;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnPressed = btn.textContent;

        if (btn.id === 'ac') {
            screen.textContent = '0';
            return
        }

        if (btn.id === 'delete') {
            if (screen.textContent.length === 1) {
                screen.textContent = '0';
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return
        }

        if (screen.textContent.length < maxDigits) {
            if (screen.textContent === '0') {
                screen.textContent = btnPressed;
            } else {
                screen.textContent += btnPressed;
            }
        }
    })
})