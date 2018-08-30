//các biến
let inputmemory = "";//bộ nhớ input (dùng xong xóa)
let input1;//toán hạng 1
let input2;//toán hạng 2
let output;// kết quả
let operatorcheck = 0;//check xem có đang sử dụng operator nào không
let operatorinuse;// toán tử đang sử dụng


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


//function lưu trữ và phân bố xử lý input:
function calculator(cal) {
    // dành cho người lười bấm dấu "=":
    if (operatorcheck === 0) {
        operatorcheck = 1;
        operatorinuse = cal;
        input1 = parseFloat(inputmemory);
        inputmemory = "";
        document.getElementById("out").innerHTML = "";
    } else {
        input2 = parseFloat(inputmemory);
        switch (cal) {
            case 6:
                switchcalculation();
                operatorinuse = 0;
                operatorcheck = 0;
                inputmemory = output;
                break;
            default:
                switchcalculation();
                inputmemory = "";
                input1 = output;//cập nhật toán hạng 1
                operatorinuse = cal;
        }
        document.getElementById("out").innerHTML = output;
    }
}

//tính toán
function switchcalculation() {
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
        case 5:
            output = input1 % input2;
            break;
        default:
            output = inputmemory;
    }
}


// các chức năng khác (màu bạc)
function other(f) {
    switch (f) {
        case 1 :
            document.getElementById("out").innerHTML = "0";
            operatorinuse = 0;
            operatorcheck = 0;
            output = 0;
            input1 = 0;
            input2 = 0;
            inputmemory = "";
            break;
        case 2 :
            inputmemory = "";
            document.getElementById("out").innerHTML = "";
            break;


    }

}





