const btn = document.querySelector('.btn');
const input_num = document.querySelector('.cardnumber');
const input_amount = document.querySelector('.cardholder');

function check() {
    let total = 0;
    const num = input_num.value;
    const re = /\d{15}/;
    if (!re.test(num)) {
        alert('請輸入連續數字，至少15位。');
        input_num.value = '';
        return false;
    }

    const num_array = Array.from(num);
    // console.log(num_array);

    if ((num_array.length % 2) == 0) {
        num_array.forEach((num, i) => {
            if (i % 2 == 0) {
                let temp = num * 2;
                if (temp > 9) {
                    temp = temp - 9;
                }
                // console.log(i, temp);
                total += temp;
            } else {
                total += parseInt(num);
                // console.log(i, parseInt(num));
            }
        });
    } else {
        num_array.forEach((num, i) => {
            if ((i + 1) % 2 == 0) {
                let temp = num * 2;
                if (temp > 9) {
                    temp = temp - 9;
                }
                // console.log(i, temp);
                total += temp;
            } else {
                total += parseInt(num);
                // console.log(i, parseInt(num));
            }
        });
    }
    const check_num = parseInt(num_array[num_array.length - 1]);
    const sum = total - check_num;
    // console.log(check_num);
    // console.log(sum);
    if (10 - (sum % 10) == check_num) {
        alert('付款成功');
    } else {
        alert('驗證失敗');
    }
}
function clearNoNum(obj){  
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"數字"和"."以外的字元  
    obj.value = obj.value.replace(/^\./g,""); //驗證第一個字元是數字而不是  
    obj.value = obj.value.replace(/^00/g,""); //驗證前兩位不能同時為0
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一個. 清除多餘的  
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");  
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,'$1$2.$3');   
}  
function validateForm(form) {
    if (checkCreditCardNumber(form.cardNumber)) {
        alert("資料正確無誤，立刻送出表單！");
        form.submit();
        return (true);
    }
    alert("資料有誤，表單將不送出！");
    form.cardNumber.focus();
    return (false);
}



btn.addEventListener('click', check);