//Перший спосіб
// const start = new Date().getTime();
// alert("saa")
// const end = new Date().getTime();
// console.log(`SecondWay: ${end - start}ms`);
//Другий спосіб
// let time = performance.now();
// console.log('fass')
// time = performance.now() - time;
// console.log('Время выполнения = ', time);
let arr
let time
let ourGraph = document.getElementById("ourGraph")
let ctx = ourGraph.getContext("2d")
ctx.width = 400
ctx.height = 400
ctx.lineWidth = 1
let X = []
let Y = []
let linesX = []
let linesY = []
$(document).ready(function (){
    buildGraph()
    //ctx.clearRect(0,0,ctx.width,ctx.height)
    $("#clear").click(()=>{
        $("#input").val("")
    })
    $("#random").click(()=>{
        let arrayLength = Number($("#arrayLength").val())
        if(!parseInt(arrayLength)){
            $("#arrayLength").val("Ви не ввели число(")
        }else {
            arr = Array(arrayLength).fill(0).map(() => Math.round(Math.random() * 1000000))
            $("#input").val(arr)
        }
    })
    $("#result").click(()=>{
        array = $("#input").val()
        if(!(array === undefined || array === "")){
            for(let i = 0;i < array.length;i++) {
                if (!(isFinite(array[i]) || array[i] === ",")) {
                    $("#input").val("Ви ввели массив для сортування не правильно(")
                    return
                }
            }
            arr = array.split(',')
            if(arr.length > 50000){
                $("#input").val("Максимальна кількість елементів - 50000(")
                return
            }
        }else{
            $("#input").val("Ви не ввели массив для сортування(")
            return
        }
        ctx.clearRect(0,0,ctx.width,ctx.height)
        arr = shakerSort(arr)
        $("#input").val(arr)
        console.log(arr)
        console.log(X)
        console.log(Y)
        linesX = X
        linesY = Y
        linesX = justShakerSort(linesX)
        linesY = justShakerSort(linesY).reverse()
        console.log(`Sorted ${linesX}`);
        console.log(`Sorted ${linesY}`);
        buildGraph()
    })

})
function justShakerSort(array)
{
    let count = 0
    let left = 0
    let right = array.length-1
    let optimum = 0
    while(left < right)
    {
        for(let i = left; i < right; i++)
        {
            count++
            if(array[i] > array[i+1])
            {
                let tmp = array[i]
                array[i] = array[i+1]
                array[i+1]=tmp
                optimum = i
            }
        }
        right=optimum
        for(let i = right; i > left; i--)
        {
            count++
            if(array[i-1] > array[i])
            {
                let tmp = array[i]
                array[i] = array[i-1]
                array[i-1]=tmp
                optimum = i
            }
        }
        left=optimum
    }
    return array
}
function shakerSort(array)
{
    time = performance.now()
    let count = 0
    let left = 0
    let right = array.length-1
    let optimum = 0
    while(left < right)
    {
        for(let i = left; i < right; i++)
        {
            count++
            if(array[i] > array[i+1])
            {
                let tmp = array[i]
                array[i] = array[i+1]
                array[i+1]=tmp
                optimum = i
            }
        }
        right=optimum
        for(let i = right; i > left; i--)
        {
            count++
            if(array[i-1] > array[i])
            {
                let tmp = array[i]
                array[i] = array[i-1]
                array[i-1]=tmp
                optimum = i
            }
        }
        left=optimum
    }
    time = performance.now() - time
    X.push(array.length/125+10)
    Y.push(390-time*0.4)
    $("#time").html(`Час виконання: ${time} мілісекунд`)
    return array
}

function fillTextArea(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        let result = reader.result
        if(!(result === undefined || result === "")){
            for(let i = 0;i < result.length;i++) {
                if (!(isFinite(result[i]) || result[i] === ",")) {
                    $("#input").val("Данні у файлі введено не правильно(")
                    return
                }
            }
            arr = result.split(',')
            $("#input").val(arr)
        }else{
            $("#input").val("Файл пустий(")
        }
    }
}
function buildGraph(){
    ctx.moveTo(0, 30)
    ctx.lineTo(10, 0)
    ctx.lineTo(10, 390)
    ctx.lineTo(400, 390)
    ctx.lineTo(370, 400)
    ctx.moveTo(10, 0)
    ctx.lineTo(20, 30)
    ctx.moveTo(400, 390)
    ctx.lineTo(370, 380)
    ctx.font = "20px serief"
    ctx.fillText("n", 380, 380)
    ctx.fillText("v", 20, 10)
    ctx.fillText("0", 0, 400)
    let value = 5
    for (let i = 40; i < 400; i+=40) {
        ctx.moveTo(i, 387.5)
        ctx.lineTo(i, 392.5)
        ctx.fillText(`${value}`, i-5, 385)
        value+=5
    }
    value = 900
    for (let i = 40; i < 400; i+=40) {
        ctx.moveTo(7.5, i)
        ctx.lineTo(12.5, i)
        ctx.fillText(`${value}`, 20, i)
        value-=100
    }
    ctx.stroke()
    for (let i = 0; i < X.length; i++) {
        ctx.beginPath()
        ctx.arc(X[i], Y[i], 3, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
    }
    ctx.moveTo(10,390)
    for (let i = 0; i < linesX.length; i++){
        ctx.lineTo(linesX[i],linesY[i])
    }
    ctx.stroke()
}