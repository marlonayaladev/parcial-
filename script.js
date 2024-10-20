const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('lanzar').addEventListener('click', lanzar);

function lanzar() {
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    const angulo = parseFloat(document.getElementById('angulo').value) * (Math.PI / 180);
    const g = 9.81; //gravedaaaaaaad

    let t = 0;
    const dt = 0.1; //intervalo de time
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    const x0 = 0; //posición inicial en x
    const y0 = canvas.height; //posición inicial en y

    const proyectil = setInterval(() => {
        const x = x0 + velocidad * Math.cos(angulo) * t;
        const y = y0 - (velocidad * Math.sin(angulo) * t - 0.5 * g * t * t);

        if (y < 0) {
            clearInterval(proyectil);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height); //Limpiar pantalla 
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();

        t += dt;
    }, dt * 1000);
}
