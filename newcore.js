
//biến
    let inputmemory = "";// bộ nhớ toán hạng
    let operatormemory;// bộ nhớ toán tử
    let input1 = 0;//toán hạng 1, (có thể là output)
    let input2 = 0;//toán hạng 2
    let firstime = 1;// lần đầu ??
    let twotimeback = 0;

//function nhập toán hạng
    function inputnumber(number) {
        document.getElementById("out").innerHTML = "";
        switch (number) {
            case 10:
                if (inputmemory === "") {
                    inputmemory = 0;
                }
                inputmemory = parseFloat(inputmemory);
                number = -1;// số âm
                inputmemory = number * inputmemory;
                inputmemory = inputmemory + "";
                document.getElementById("out").innerText = inputmemory;
                break;
            case 11:
                number = ".";//số float
            default:
                number = number + "";// số int
                inputmemory = inputmemory + number;
                document.getElementById("out").innerText = inputmemory;
        }
        if (firstime === 0) {// phân chia toán hạng
            input2 = parseFloat(inputmemory);
            document.getElementById("operand2").innerHTML = input2;
        } else {
            input1 = parseFloat(inputmemory);
            document.getElementById("operand1").innerHTML = input1;
        }

    }


//function Xử lý
    function calculator(operator) {

        inputmemory = "";
        document.getElementById("operand1").innerHTML = input1;
        //xử lý với lần nhập đầu tiên
        if (firstime === 1) {
            firstime = 0;
            operatormemory = operator;
            document.getElementById("out").innerText = "";
            for (let o = 0; o < 5;) {
                o++;
                o = o + "";
                let b = parseInt(document.getElementById(o).id);
                let c = document.getElementById(o).value;
                if (b === operatormemory) {
                    document.getElementById("operatorinuse").innerText = c;
                    twotimeback = b;
                }
            }
//xử lý với các lần tiếp theo
        } else {
            for (let o = 0; o < 5;) {
                o++;
                o = o + "";
                let b = parseInt(document.getElementById(o).id);
                let c = document.getElementById(o).value;
                if (b === operator) {
                    document.getElementById("operatorinuse").innerText = c;
                    twotimeback = b;
                }
            }
            document.getElementById("operand1").innerHTML = input1;
            // tính toán nè
            switch (operatormemory) {
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
                    if (operator === 6) {
                        console.log(twotimeback);
                        switch (twotimeback) {
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
                        }
                    }
                    break;
                default:
                    input1 = 0;
            }
            operatormemory = operator;
            document.getElementById("out").innerHTML = input1;
        }
    }

// chuc nang khác
    function other(f) {
        switch (f) {
            case 1 :
                document.getElementById("out").innerHTML = "0";
                input1 = 0;
                input2 = 0;
                inputmemory = "";
                operatormemory = 0;
                firstime = 1;
                twotimeback = 0;
                break;
            case 2 :
                inputmemory = "";
                document.getElementById("out").innerHTML = "";
                break;
        }
    }


//phụ
    alert("máy tính thế hệ mới made by TN ver4.0");