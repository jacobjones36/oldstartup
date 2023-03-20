async function callForAssistance() {
    const order = createOrder();
  
    // async/await
    try {
      await placeOrder(order);
      await makePizza(order);
      serveOrder(order);
    } catch (order) {
      orderFailure(order);
    }
  }
  
  function createOrder() {
    // Make the order and associate it with a new HTML element
    const id = Math.floor(Math.random() * 10000);
    const orderElement = document.createElement("li");
    const order = { element: orderElement, id: id };
  
    // Insert the order into the HTML list
    orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
    const orders = document.getElementById("orders");
    orders.appendChild(orderElement);
  
    return order;
  }
  
  function placeOrder(order) {
    return new Promise((resolve, reject) => {
      doWork(order, 1000, 3000, resolve, reject, `Wait time is longer than expected`);
    });
  }
  
  function makePizza(order) {
    return new Promise((resolve, reject) => {
      doWork(order, 2000, 5000, resolve, reject, `Wait time is about 5 minutes`);
    });
  }
  
  function doWork(order, min, max, resolve, reject, errMsg) {
    let workTime = Math.random() * (max - min) + min;
    setTimeout(() => {
      workTime = Math.round(workTime);
      if (workTime < max * 0.85) {
        resolve(order);
      } else {
        order.error = errMsg;
        reject(order);
      }
    }, workTime);
  }
  
  function serveOrder(order) {
    order.element.innerHTML = `<span><b>They are on their way!</b>!</span>`;
  }
  
  function orderFailure(order) {
    order.element.innerHTML = `<span><b class='failure'>We are sorry!</b>! ${order.error}</span>`;
  }
  