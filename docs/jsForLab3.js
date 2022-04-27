function calculateDividedDifferences(x, y, k) {
    let result = 0;
    for (let j = 0; j <= k; j++) {
        let mul = 1;
        for (let i = 0; i <= k; i++) {
            if (j !== i) {
                mul *= (x[j] - x[i]);
            }
        }
        result += y[j] / mul;
    }
    return result;
}
function createNewPolynomial(x, y){
    let divDiff = []
    for(let i = 1; i < x.length; i++){
        divDiff.push(calculateDividedDifferences(x, y, i))
    }
    function newtonPolynomial(val){
        let result = y[0]
        for(let k = 1; k < y.length; k++){
            let mul = 1
            for(let j = 0; j < k; j++){
                mul *= val - x[j]
            }
            result+= divDiff[k-1]*mul
        }
        return result
    }
    return newtonPolynomial
}
function givenFunction(x){
    return (x**3)-(3**x)
}
function generateArray(min, max, step){
    let array = []
    for (let i = min; i <= max; i+=step){
        i = Math.round(i*10)/10
        array.push(i)
    }
    return array
}
let x = generateArray(0, 3, 0.3)
let y = []
for (let i of x){
    y.push(givenFunction(i))
}
console.log(x);
console.log(y);

const myFunctionData = {
    labels: x,
    datasets: [{
        label: 'Графік заданої функції',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: y,
    }]
};

const myFunctionConfig = {
    type: 'line',
    data: myFunctionData,
    options: {}
};
const myFunctionChart = new Chart(
    document.getElementById('myFunction'),
    myFunctionConfig
);
let sinx = generateArray(0, 2*Math.PI, 2*Math.PI/10)
let siny = []
for (let i of sinx){
    siny.push(Math.sin(i))
}
console.log(sinx);
console.log(siny);

const sinData = {
    labels: sinx,
    datasets: [{
        label: 'Графік функції sin(x)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: siny,
    }]
};

const sinConfig = {
    type: 'line',
    data: sinData,
    options: {}
};
const sinChart = new Chart(
    document.getElementById('sin'),
    sinConfig
);

let myFunctionInterpolate = createNewPolynomial(x, y)
let yInterpolated = []
for(let i of x) {
    yInterpolated.push(myFunctionInterpolate(i))
}
console.log(yInterpolated);
const myFunctionInterpolatedData = {
    labels: x,
    datasets: [{
        label: 'Інтерполяція заданої функції',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: yInterpolated,
    }]
};

const myFunctionInterpolatedConfig = {
    type: 'line',
    data: myFunctionInterpolatedData,
    options: {}
};
const myFunctionInterpolatedChart = new Chart(
    document.getElementById('myFunctionInterpolated'),
    myFunctionInterpolatedConfig
);
let sinInterpolate = createNewPolynomial(sinx, siny)
let sinyInterpolated = []
for(let i of sinx) {
    sinyInterpolated.push(sinInterpolate(i))
}
console.log(sinyInterpolated);
const sinInterpolatedData = {
    labels: sinx,
    datasets: [{
        label: 'Інтерполяція функції sin(x)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: sinyInterpolated,
    }]
};

const sinInterpolatedConfig = {
    type: 'line',
    data: sinInterpolatedData,
    options: {}
};
const sinInterpolatedChart = new Chart(
    document.getElementById('sinInterpolated'),
    sinInterpolatedConfig
);
let yError = []
for (let i = 0; i < x.length; i++){
    yError.push(y[i]-yInterpolated[i])
}
const myFunctionErrorData = {
    labels: x,
    datasets: [{
        label: 'Похибка заданої функції',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: yError,
    }]
};

const myFunctionErrorConfig = {
    type: 'line',
    data: myFunctionErrorData,
    options: {}
};
const myFunctionErrorChart = new Chart(
    document.getElementById('myFunctionError'),
    myFunctionErrorConfig
);
let sinError = []
for (let i = 0; i < sinx.length; i++){
    sinError.push(siny[i]-sinyInterpolated[i])
}

const sinErrorData = {
    labels: sinx,
    datasets: [{
        label: 'Похибка функці sin(x)   ',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: sinError,
    }]
};

const sinErrorConfig = {
    type: 'line',
    data: sinErrorData,
    options: {}
};
const sinErrorChart = new Chart(
    document.getElementById('sinError'),
    sinErrorConfig
);