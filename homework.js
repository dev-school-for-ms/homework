const readline = require('readline');

// stdin, stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 여기 아래 함수를 수정해보세요!!
function helloWorld(arg) {
    return arg + " ";
}

// 이하는 냅두기
rl.on('line', function (line) {// scanf
    input = [line];
}).on('close',function(){ // printf
    str = input[0];
    let result = helloWorld(str);
    console.log(result);
});
