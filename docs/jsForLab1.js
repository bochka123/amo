$(document).ready(()=>{
    $("#linearButton").click(()=>{
        let a = Math.round($("#input1").val())
        let b = Math.round($("#input2").val())
        let c = Math.round($("#input3").val())
        if(parseInt(a)&&parseInt(b)&&parseInt(c)){
            let Y1 = (Math.sqrt(a+b)/(c+2*b)) + (Math.sin(a)/Math.sqrt(a**2-b**2))
            if(!isNaN(Y1)){
                if(isFinite(Y1)) {
                    $("#answer1").html(`Відповідь: ${Y1}`)
                }
                else {
                    $("#answer1").html("Вийшло ділення на нуль. Спробуйте знову")
                }
            }else {
                $("#answer1").html("Вийшов корінь із від'ємного числа. Спробуйте знову")
            }
        }else{
            $("#answer1").html("Ви ввели не число(")
        }
        $("#input1").val("")
        $("#input2").val("")
        $("#input3").val("")
    })
    $("#ramifiedButton").click(()=>{
        let n = Math.round($("#input4").val())
        let r = Math.round($("#input5").val())
        if(parseInt(r)&&parseInt(n)) {
            if(n >= 0 && r >= 0 && n-r>0) {
                let condition = factorial(n) / factorial(r) * factorial(n - r)
                let y
                if (condition > 2345) {
                    y = factorial(n) / factorial(n - r)
                } else {
                    y = n ** r / factorial(n - r)
                }
                $("#answer2").html(`Відповідь: ${y}`)
            }else {
                $("#answer2").html("Факторіал може бути лише з додатнього числа(")
            }
        }else {
            $("#answer2").html("Ви ввели не число(")
        }
        $("#input4").val("")
        $("#input5").val("")
    })
    $("#loopButton").click(()=>{
        let sum = 0
        let product = 1
        for (let i = 1; i <= 5; i++){
            sum += i**3
        }
        for (let i = 1; i <= 5; i++){
            product *= i**6
        }
        let f = sum/product

        $("#answer3").html(`Відповідь: ${sum} / ${product} = ${f}`)
    })
})
function factorial(num){
    if (num < 0) {
        console.error("Variable num can't be negative")
        $("#answer2").html("Факторіал може бути лише з додатнього числа")
        return 0
    }else if(num === 0){
        return 1
    }else{
        let answer = 1
        for (let i = 1; i <= num; i++) {
            answer *= i
        }
        return answer
    }
}
function fillInputs(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        let result = reader.result
        let result2 = result.split(' ')
        for (let i = 0; i < result2.length; i++){
            $(`#input${i+1}`).val(result2[i])
        }
        console.log(result2)
    }
}