var canvas = document.getElementById('canvas');
canvas.width = 500;
            canvas.height= 500;
        var ctx = canvas.getContext('2d');

function star(x, y) {
    ctx.beginPath();
        ctx.lineTo(x + 10,y + 85);
        ctx.lineTo(x + 85,y + 75)
        ctx.lineTo(x + 110,y + 10)
        ctx.lineTo(x + 135, y + 75)
        ctx.lineTo(x + 210, y + 85)
        ctx.lineTo(x + 160, y + 125)
        ctx.lineTo(x + 170, y + 190)
        ctx.lineTo(x + 110,y + 150)
        ctx.lineTo(x + 50,y + 190)
        ctx.lineTo(x + 60,y + 125)
        ctx.closePath();
        ctx.fill();
        ctx.stroke()
}
        function info() {
    var name = document.getElementById('name').value;
    var bdate = document.getElementById('birthdate').value;

 
    
    let show = `happy birthday ${name}! on ${bdate}!`;
    return show
}

function display(){
    let show = info()
    ctx.fillText(show, 0, 200);
}


        function displaystar(){

            ctx.fillStyle = '#c8b7dc';
            star(0, 0);
            
        }
        function Card(){
    info()
    display()
displaystar()
    ctx.stroke()
}