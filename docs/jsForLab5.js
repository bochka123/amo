let A = [[3,3,1,1], [1,-1,4,-1], [-2,-2,-3,1], [1,5,-1,2]]
let B = [-2, -1, 9, 4]
function Gauss_Seidel(){
    let X =[0,0,0];
    let x = [-3, -1, 2, 7]
    for(let k = 0; k <1000; k ++) {
        for(let i = 0; i <X.length; i ++) {
            let sum=0;
            for(let j=0;j<X.length;j++){
                if(j!==i)
                    sum += A [i] [j] * X [j];
            }
            X [i] = (B [i] -sum) / A [i] [i];
    }
}
    for(let i=0;i<X.length;i++){
        for(let j=0;j<X.length;j++) {
            console.log(A[i][j]);
        }
        console.log(B[i]);
    }
    for(let i = 0; i <X.length; i ++)
    {
        console.log(X[i]);
    }
    for(let i = 0; i < x.length; i++){
        $(`#x${i+1}`).html(`   ${x[i]}`)
    }
}
$("input[type=submit]").click(function (){
    Gauss_Seidel()
})