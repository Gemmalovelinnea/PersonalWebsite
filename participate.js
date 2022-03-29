function checkName(control) {
    if (control.value == "") {
        alert("請填寫姓名")
        return (false);
    }
    return (true);
}

function checkEmail(email) {
    index = email.indexOf('@', 0);
    if (email.length == 0) {
        alert("請輸入電子郵件地址！");
        return (false);
    } else if (index == -1) {
        alert("錯誤：必須包含「@」。");
        return (false);
    } else if (index == 0) {
        alert("錯誤：「@」之前不可為空。");
        return (false);
    } else if (index == email.length - 1) {
        alert("錯誤：「@」之後不可為空。");
        return (false);
    } else
        return (true);
}
function isNumericValidate(s) {
    // var validChars = new Array("0123456789");
    // 宣告一個陣列，並把 0 - 9 裝進去
    var validChars = new Array(10);
    // 把引數 s 的每個數字用迴圈分別比較陣列，
    for (var i = 0; i <= 9; i++) {
        validChars[i] = i;
    }
    // 如果全部都是數字則回傳對的，否則則是錯的
    for (let i = 0; i < s.length; i++) {
        const found = validChars.find(c => c == s[i]);
        if (found === undefined) {
            return false;
        }
    }
    return true;
}
function isHeadTwoValidate(number) {
    return number[0] == 0 && number[1] == 9;
}

function checkContactNumber(contactNumber) {
    if (contactNumber.value.length != 10) {
        alert("請輸入正確手機號碼")
        return (false);
    } else if (!isNumericValidate(contactNumber.value)) {
        alert("手機號碼只能為數字！");
        return (false);
    } else if (!isHeadTwoValidate(contactNumber.value)) {
        alert("手機只能09開頭")
        return (false);
    } else
        return (true);
}

function checkGender(control) {
    for (i = 0; i < control.length; i++) {
        if (control[i].checked)
            return (true);
    }
    alert("請勾選性別")
}

function checkVolunteer(control) {
    for (j = 0; j < control.length; j++) {
        if (control[j].checked)
            return (true);
    }
    alert("請勾選有興趣志工")
}

function validForm(form) {
    if (!checkName(form.person)) return;
    if (!checkEmail(form.email.value)) return;
    if (!checkContactNumber(form.contact_number)) return;
    if (!checkGender(form.gender)) return;
    if (!checkVolunteer(form.volunteer)) return;
    document.participate_form.submit();
}

function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    let currentTime = Date.now();
    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('currentlyDonationAmount');
let text2 = document.getElementById('currentlyVolunteerQuantity');

const load = () => {
    animate(text1, 0, 300, 2000);
    animate(text2, 0, 100, 2000);
}