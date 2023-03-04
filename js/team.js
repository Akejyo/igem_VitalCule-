//页面box出现的动画
window.onload = function() {

    var timer = setInterval(appear, 1);
    var val1 = 0.01;

    var
        title = document.getElementById('title');

    function appear() {


        title.style.opacity = val1;
        val1 += 0.01;
        if (val1 >= 1.0) { //把setInterval关了
            clearInterval(timer);
        }
    }
    var modal1 = document.getElementById('Modal-1'),
        modal2 = document.getElementById('Modal-2'),
        modal3 = document.getElementById('Modal-3'),
        modal4 = document.getElementById('Modal-4'),
        modal5 = document.getElementById('Modal-5');
    var btn1 = document.getElementById("Btn-1"),
        btn2 = document.getElementById("Btn-2"),
        btn3 = document.getElementById("Btn-3"),
        btn4 = document.getElementById("Btn-4"),
        btn5 = document.getElementById("Btn-5");
    btn1.onclick = () => { modal1.style.display = 'block'; };
    btn2.onclick = () => { modal2.style.display = 'block'; };
    btn3.onclick = () => { modal3.style.display = 'block'; };
    btn4.onclick = () => { modal4.style.display = 'block'; };
    btn5.onclick = () => { modal5.style.display = 'block'; };

    window.onclick = (event) => {
        if (event.target == modal1) {
            modal1.style.display = "none";
        } else if (event.target == modal2) {
            modal2.style.display = "none";
        } else if (event.target == modal3) {
            modal3.style.display = "none";
        } else if (event.target == modal4) {
            modal4.style.display = "none";
        } else if (event.target == modal5) {
            modal5.style.display = "none";
        }
    }
}