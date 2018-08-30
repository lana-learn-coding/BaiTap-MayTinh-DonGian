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
    if (iffirstime === 1){document.getElementById("operand2").innerHTML = inputmemory;}//hiện operand2
    document.getElementById("out").innerText = inputmemory;
}


//function lưu trữ và xử lý input:
function calculator(operator) {//bảng hiện Operator
    document.getElementById("operand1").innerHTML = input1;//hiện operand1
    for (a1 = 0; a1 < 5;) {
        a1++;
        a1 = a1 + "";
        b1 = parseInt(document.getElementById(a1).id);
        c1 = document.getElementById(a1).value;
        if (b1 === operatorinuse) {
            document.getElementById("operator").innerText = c1;
        }
    }
    //xử lý cho lần nhập đầu tiên:
    if (iffirstime === 0) {
        iffirstime = 1;
        operatorinuse = operator;
        document.getElementById("out").innerHTML = "";
        input1 = parseFloat(inputmemory);
        inputmemory = "";
        if (operator === 6) {
            document.getElementById("out").innerHTML = input1;
        }
    }
    //xử lý cho các lần nhập tiếp theo:
    else {
        if (inputmemory === "") {
            inputmemory = input2;
        }
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
                break;
            default:
                input1 = inputmemory;
        }
        operatorinuse = operator;
        inputmemory = "";
        document.getElementById("out").innerHTML = input1;
        for (a2 = 0; a2 < 6;) {//bảng hiện OperatorInUse
            a2++;
            a2 = a2 + "";
            b2 = parseInt(document.getElementById(a2).id);
            c2 = document.getElementById(a2).value;
            if (b2 === operatorinuse) {
                document.getElementById("operatorinuse").innerText = c2;
            }
        }
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





