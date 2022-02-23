let total_item = 1,
  old_val,
  new_val = "GBP";

// Currency Conversion Constant
let curr = {
  INR: {
    INR: 1,
    USD: 0.013,
    GBP: 0.0099,
    JPY: 1.54,
  },
  USD: {
    INR: 74.64,
    USD: 1,
    GBP: 0.73,
    JPY: 115.01,
  },
  GBP: {
    INR: 101.49,
    USD: 1.36,
    GBP: 1,
    JPY: 156.57,
  },
  JPY: {
    INR: 0.65,
    USD: 0.0087,
    GBP: 0.0064,
    JPY: 1,
  },
};

function CalculateAmount(id) {
  if (id[0] == "q") num = id.substring(9);
  else if (id[0] == "r") num = id.substring(5);

  let quantity = document.getElementById("quantity_" + num);
  let rate = document.getElementById("rate_" + num);
  // console.log(quantity);

  document.getElementById("amount_" + num).innerHTML = (
    quantity.value * rate.value
  ).toFixed(2);

  CalculateTotal();
}
function CalculateTotal() {
  var sub_total = 0;
  for (i = 1; i <= total_item; i++) {
    var item = document.getElementById("rate_" + i);

    if (item !== null) {
      // Exists.
      let quantity = document.getElementById("quantity_" + i);
      let rate = document.getElementById("rate_" + i);
      sub_total += quantity.value * rate.value;
    }
  }
  // document.getElementById('sub_total').innerHTML = sub_total;
  var tax = document.getElementById("tax");
  var tax_value = (tax.value / 100) * sub_total;
  var total = sub_total + tax_value;

  document.getElementById("sub_total").innerHTML = sub_total.toFixed(2);
  document.getElementById("tax_value").innerHTML = tax_value.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("total_due").innerHTML = total.toFixed(2);
}
function CloneItem(id) {
  total_item++;

  // Get the element
  var num = id.substring(9);

  item_id = "item_" + num;
  // console.log("Calling Id " + item_id);
  var elem = document.querySelector("#" + item_id);

  // Create a copy of it
  var clone = elem.cloneNode(true);

  // Update the ID
  clone.id = "item_" + total_item;

  const elementsThatHaveId = [...clone.querySelectorAll("[id]")];
  if (clone.matches("[id]")) {
    elementsThatHaveId.push(clone);
  }
  elementsThatHaveId.forEach((e) => {
    if (e.id[0] == "q") e.id = "quantity_" + total_item;
    else if (e.id[0] == "a") e.id = "amount_" + total_item;
    else if (e.id[0] == "r") e.id = "rate_" + total_item;
    else if (e.id[0] == "c") e.id = "copy_but_" + total_item;
    else if (e.id[0] == "n") e.id = "name" + total_item;
    else if (e.id[0] == "d") e.id = "del_but_" + total_item;
  });
  elem.after(clone);
  CalculateTotal();
}
function CloneNewItem() {
  total_item++;
  // Get the element
  var elem = document.querySelector("#item_1");

  // Create a copy of it
  var clone = elem.cloneNode(true);

  // Update the ID and add a class
  clone.id = "item_" + total_item;

  const elementsThatHaveId = [...clone.querySelectorAll("[id]")];
  if (clone.matches("[id]")) {
    elementsThatHaveId.push(clone);
  }
  elementsThatHaveId.forEach((e) => {
    if (e.id[0] == "q") {
      e.id = "quantity_" + total_item;
      e.value = 0;
    } else if (e.id[0] == "a") {
      e.id = "amount_" + total_item;
      e.value = 0;
    } else if (e.id[0] == "r") {
      e.id = "rate_" + total_item;
      e.value = 0;
    } else if (e.id[0] == "c") e.id = "copy_but_" + total_item;
    else if (e.id[0] == "d") e.id = "del_but_" + total_item;
    else if (e.id[0] == "n") {
      e.id = "name" + total_item;
      e.value = "Items you are selling...";
    }
  });
  elem.after(clone);
  document.getElementById("amount_" + total_item).innerHTML = 0;

  // document.getElementById("name_" + total_item).innerHTML = "Items you are selling...";
}
function DeleteItem(id) {
  var num = id.substring(8);
  // console.log(num);
  item_id = "item_" + num;
  var div = document.getElementById(item_id);
  div.remove();
  CalculateTotal();
}
function changeCurrency() {
  var x = document.getElementById("cur").value;
  document.getElementById("curr").innerHTML = x;
  document.getElementById("curr1").innerHTML = x;

  convertRate();
}
function convertRate() {
  old_val = new_val;
  new_val = document.getElementById("cur").value;
  // console.log("old value"+old_val);
  // console.log("new value"+new_val);
  // console.log(curr);
  if (old_val != undefined) {
    var from = old_val;
    var to = new_val;

    var mul = curr[from][to];
    // console.log(mul);
    // console.log(total_item);
    for (let i = 1; i <= total_item; i++) {
      var rate = document.getElementById("rate_" + i).value;
      document.getElementById("rate_" + i).value = (rate * mul).toFixed(2);
      CalculateAmount("rate_" + i);
      // console.log("num "+i);
    }
  }
}
