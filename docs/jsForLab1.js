$(document).ready(()=>{
    $("#linearButton").click(()=>{
        let a = $("#linearInput1").val()
        let b = $("#linearInput2").val()
        let c = $("#linearInput3").val()
        if(parseInt(a)&&parseInt(b)&&parseInt(c)){
            let Y1 = (Math.sqrt(a+b)/(c+2*b)) + (Math.sin(a)/Math.sqrt(Math.pow(a, 2)-Math.pow(b, 2)))
            if(!isNaN(Y1)){
                if(isFinite(Y1)) {
                    $("#answer").html(`Відповідь: ${Y1}`)
                }
                else {
                    $("#answer").html("Вийшло ділення на нуль. Спробуйте знову")
                }
            }else {
                $("#answer").html("Вийшов корінь із від'ємного числа. Спробуйте знову")
            }
        }else{
            $("#answer").html("Ви ввели не число(")
        }
        $("#linearInput1").val("")
        $("#linearInput2").val("")
        $("#linearInput3").val("")
    })
})