//function nhập và xử lý số đưa ra màn hình:
let inputmemory = "";
let input1;
let input2;
let output;

function inputnumber(number) {
    document.getElementById("out").innerHTML = "";
    number = number + "";
    inputmemory = inputmemory + number;
    document.getElementById("out").innerText = inputmemory;
}


//function lưu trữ, Xử lý toán tử và tính toán:
let operatormemory = "nothing";//bộ nhớ toán tử ( dùng khi bấm toán tử khác thay vì bấm dấu '=' )
let operatorinuse;// toán tử đang sử dụng (dùng khi bấm dấu bằng)

function calculator(cal) {
    // dành cho người lười bấm dấu "=":
    if (operatormemory === "nothing") {
        operatormemory = cal;
        operatorinuse = cal;
        console.log(cal);
        console.log(operatorinuse);
        console.log(operatormemory);
        input1 = parseInt(inputmemory);
        inputmemory = "";
        document.getElementById("out").innerHTML = "";
    } else {
        input2 = parseInt(inputmemory);
        inputmemory = "";
        console.log(cal);
        console.log(operatorinuse);
        console.log(operatormemory);
        switch (operatormemory) {
            case 1:
                output = input1 + input2;
                break;
            case 2:
                output = input1 - input2;
                break;
            case 3:
                output = input1 * input2;
                break;
            case 4:
                output = input1 / input2;
                break;
            default:
                output = inputmemory;
        }
        input1 = output;//cập nhật toán hạng 1
        operatormemory = cal;//cập nhật bộ nhớ dấu
        operatorinuse = cal;
        document.getElementById("out").innerHTML = output;
    }
}


//dấu "="
function equalto() {
    input2 = parseInt(inputmemory);
    switch (operatorinuse) {
        case 1:
            output = input1 + input2;
            break;
        case 2:
            output = input1 - input2;
            break;
        case 3:
            output = input1 * input2;
            break;
        case 4:
            output = input1 / input2;
            break;
        default:
            output = inputmemory;
    }
    operatormemory = "nothing";
    inputmemory = output;
    document.getElementById("out").innerHTML = output;

}





