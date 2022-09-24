let order = document.querySelector(".orderP");
let divOrderDiv = document.querySelector(".divOrderDiv");
let sum = document.querySelector(".sum");

const table = document.querySelector('#table');
table.onclick = function (e) {
    let target = e.target;
    if (target.tagName = 'a') {
        let title = target.closest('div').querySelector('h4').textContent;
        let title1 = target.closest('div').querySelector('.spanPrice').textContent;

        divOrderDiv = document.createElement('div');
        divOrderDiv.classList.add("divOrderDiv");
        order.append(divOrderDiv);

        orderDel = document.createElement("img");
        orderDel.classList.add("orderDel");
        orderDel.setAttribute("src", "del.png");
        orderDel.setAttribute("alt", "delete-text");
        divOrderDiv.append(orderDel);

        orderName = document.createElement('span');
        orderName.classList.add("orderName");
        divOrderDiv.append(orderName);
        orderName.append(title);

        // orderAmount = document.createElement('input');
        // orderAmount.classList.add("orderAmount");
        // orderAmount.setAttribute("min", "1");
        // orderAmount.setAttribute("max", "10");
        // orderAmount.setAttribute("type", "number");
        // orderAmount.setAttribute("value", "1");
        // divOrderDiv.append(orderAmount);
        // console.log(orderAmount.value)

        orderPrice = document.createElement('span');
        orderPrice.classList.add("orderPrice");
        divOrderDiv.append(orderPrice);
        orderPrice.append(title1);

        let suma = 0;
        let qwe = document.querySelectorAll(".orderPrice");
        for (let i of qwe) {
            suma += Number(i.textContent);
            console.log(suma);
        }
        sum.textContent = '';
        // sum.append(suma);
        sum.insertAdjacentHTML('afterBegin', `Сума : ` + `${suma}`);
    }
    orderDel.addEventListener("click", remove);
    function remove() {
        divOrderDiv.remove();
    }
}