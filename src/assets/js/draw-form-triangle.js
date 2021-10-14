function drawTriangle() {
    var formElem = document.getElementById('form-feedback');
    var canvas = document.getElementById('triangle');

    if (formElem !== undefined && canvas !== undefined) {
        var width = formElem.clientWidth;

        if (width !== undefined) {
            canvas.setAttribute('width', width + 'px');

            var height = Math.ceil(width / 6);
            canvas.setAttribute('height', Math.ceil(width / 6) + 'px');

            var context = canvas.getContext('2d');

            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(width, 0);
            context.lineTo(width / 2, height - 10);
            context.lineTo(0, 0);

            context.closePath();
            context.shadowColor = "rgba(0, 0, 0, 0.06)";
            context.shadowBlur = 7;
            context.shadowOffsetX = 2;
            context.shadowOffsetY = 5;
            context.fillStyle = "rgba(256, 256, 256, 1)";
            context.fill();
        }
    }
}

document.addEventListener('DOMContentLoaded', drawTriangle);
window.addEventListener('resize', drawTriangle);