window.onload = function () {
  let mainScreen = document.getElementById("screen");
  mainScreen.innerHTML = "請選擇<br>您要的種類";

  let Typica = document.getElementById("Typica");
  let espresso = document.getElementById("espresso");
  let liberica = document.getElementById("liberica");
  let Robusta = document.getElementById("Robusta");
  let brazil = document.getElementById("brazil");
  let mocha = document.getElementById("mocha");
  // let mocha = document.getElementById("mocha");

  let moneyask = document.getElementById("cash");
  let ok = document.getElementById("ok");
  let cancel = document.getElementById("cancel");

  const changeAmount = document.querySelector("#change-amount");

  Typica.addEventListener("click", () => {
    pickDrink("Typica");
  });
  espresso.addEventListener("click", () => {
    pickDrink("espresso");
  });
  liberica.addEventListener("click", () => {
    pickDrink("liberica");
  });
  Robusta.addEventListener("click", () => {
    pickDrink("Robusta");
  });
  brazil.addEventListener("click", () => {
    pickDrink("brazil");
  });
  mocha.addEventListener("click", () => {
    pickDrink("mocha");
  });
  // mocha.addEventListener("click", () => {
  //   pickDrink("mocha");
  // });
  ok.addEventListener("click", questionmoneyOk);

  const prices = {
    Typica: 150,
    espresso: 100,
    liberica: 120,
    Robusta: 130,
    brazil: 150,
    mocha: 150,
    // mocha: 18,
  };

  let chosen = null;

  const print = (s) => {
    mainScreen.innerHTML = s;
  };

  document.getElementById("cancel").onclick = function (e) {
    document.getElementById("cash").value = "";
  };

  function pickDrink(drink) {
    chosen = drink;
    print(`你選擇 ${drink}. <br>請支付 ${prices[drink]}元`);
  }

  function questionmoneyOk() {
    const insertedMoney = Number(moneyask.value);
    if (Number.isNaN(insertedMoney)) {
      return print("Insert a valid number, you moron");
    }
    // if (insertedMoney < prices[chosen]) {
    //   return print(
    //     `${insertedMoney}₴ is not enough. You need to pay ${prices[chosen]}₴`
    //   );
    // }
    // const change = insertedMoney - prices[chosen];
    // changeAmount.innerText = change > 0 ? change + '₴' : "No change";
    // print("感謝您的付款，<br>請填寫您的個人資料，<br>接下來為您出貨" );
  }
};