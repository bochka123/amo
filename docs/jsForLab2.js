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
$(document).ready(function (){
    let graph_x2 = document.getElementById("graph_x^2")
    let ctx1 = graph_x2.getContext("2d")
    ctx1.width = 100
    ctx1.height = 100
    ctx1.moveTo(134.75, 0)
    ctx1.lineTo(134.75, 269.5)
    ctx1.lineTo(269.5, 100)
    ctx1.stroke()
    let arr
    $("#random").click(()=>{
        arr = Array(6000).fill(0).map(()=>Math.random())
        $("#input").val(arr)
    })
    $("#result").click(()=>{
        arr = shakerSort(arr)
        $("#input").val(arr)
        console.log(arr);
    })

})
function shakerSort(array)
{
    let time = performance.now();
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
    time = performance.now() - time;
    console.log(`Час виконання = ${time}`);
    return array
}