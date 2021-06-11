window.addEventListener ("load", () => {
    const canvas = document.getElementById ("canvas");
    const ctx = canvas.getContext ('2d');

    var paint = false;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    function startpaint () {
        paint = true;
    }

    function stoppaint () {
        paint = false;
        ctx.beginPath ();
    }

    function draw (e) {
        if (!paint) return;

        ctx.lineWidth = "20";
        ctx.lineCap = "round";
        ctx.lineTo (e.clientX, e.clientY);
        ctx.stroke ();

        ctx.moveTo (e.clientX, e.clientY);
    }


    canvas.addEventListener ("mousedown", startpaint);
    canvas.addEventListener ("mouseup", stoppaint);
    canvas.addEventListener ("mousemove", draw);
});