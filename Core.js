//các biến
let inputmemory = "";//bộ nhớ input (dùng xong xóa)
let input1 = 0;//toán hạng 1, sau lần đầu thì input 1 được coi như output
let input2;//toán hạng 2
let iffirstime = 0;// check xem đây có phải lần đầu input hay không
let operatorinuse;// operator đang dùng


// funcion nhập đầu vào (inputmemmory)
function inputnumber(number) {
    document.getElementById("out").innerHTML = "";
    switch (number) {
        case 10:
            number = "-";// số âm
            inputmemory = number + inputmemory;
            break;
        case 11:
            number = ".";//số float
        default:
            number = number + "";
            inputmemory = inputmemory + number;
    }
    document.getElementById("out").innerText = inputmemory;
}



//function lưu trữ và xử lý input:
function calculator(operator) {
    if (iffirstime === 0) {
        iffirstime = 1;
        operatorinuse = operator;
        document.getElementById("out").innerHTML = "";
        input1 = parseFloat(inputmemory);
        inputmemory = "";
    }
    else {
        input2 = parseFloat(inputmemory);
        switch (operatorinuse) {
            case 1:
                input1 = input1 + input2;
                break;
            case 2:
                input1 = input1 - input2;
                break;
            case 3:
                input1 = input1 * input2;
                break;
            case 4:
                input1 = input1 / input2;
                break;
            case 5:
                input1 = input1 % input2;
                break;
            case 6:
                input1 = input1;
                break;
            default:
                input1 = inputmemory;
        }
        operatorinuse = operator;
        inputmemory = "";
        document.getElementById("out").innerHTML = input1;
    }
}




// các chức năng khác (màu bạc)
    function other(f) {
        switch (f) {
            case 1 :
                document.getElementById("out").innerHTML = "0";
                input1 = 0;
                input2 = 0;
                inputmemory = "";
                operatorinuse = 0;
                iffirstime = 0;
                break;
            case 2 :
                inputmemory = "";
                document.getElementById("out").innerHTML = "";
                break;
        }
    }




