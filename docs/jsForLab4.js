$("input[type=submit]").click(function (){
    let a = $("#input1").val()
    let b = $("#input2").val()
    if((parseInt(a)&&parseInt(b)/* || a == 0 || b == 0*/)){
        if(a <= b) {
            let fa = Math.tan(1.5 * a) - 2.3 * a
            let fb = Math.tan(1.5 * b) - 2.3 * b
            console.log(fa);
            console.log(fb);
            if (fa * fb < 0) {
                $("#answer").html("За умовою має бути f(a)*f(b)>0. Змініть a та b")
            } else {
                let k = 0
                a = parseInt(a)
                b = parseInt(b)
                let x = (b+a)/2
                console.log(x);
                let y = Math.tan(1.5 * x) - 2.3 * x
                console.log(y);
                while(true){
                    if(Math.abs(y-x)<0.01||true){
                        x = y
                        break
                    }else {
                        x = y
                        y = Math.tan(1.5 * x) - 2.3 * x
                        console.log(y);
                        console.log(x);
                        k++
                    }
                }
                console.log(y);
                y = y.toFixed(2)
                $("#answer").html(`Відповідь: ${y}`)
            }
        }
        else {
            $("#answer").html("Ліва границя має бути більшою за праву(")
        }
    }else{
        $("#answer").html("Ви ввели не число(")
    }
})
