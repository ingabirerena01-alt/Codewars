const data = {
  users: [
    { id: 1, name: "Regis" },
    { id: 2, name: "Alice" },
    { id: 3, name: "John" },
  ],

  orders: [
    { id: 101, userId: 1, product: "Laptop", price: 1200 },
    { id: 102, userId: 1, product: "Mouse", price: 25 },
    { id: 103, userId: 2, product: "Phone", price: 800 },
    { id: 104, userId: 2, product: "Headphones", price: 100 },
    { id: 105, userId: 3, product: "Keyboard", price: 70 },
  ],
};
function getUser(id) {
  const user = data.users.find((u) => u.id === id);
  if (!user) {
    return Promise.reject(new Error("User not found"));
  }
  return Promise.resolve(user);
}

function getOrders(userId) {
  const orders = data.orders.filter((o) => o.userId === userId);
  if (orders.length === 0) {
    return Promise.reject(new Error("No orders found"));
  }
  return Promise.resolve(orders);
}

function getOrderDetails(orderId) {
  const order = data.orders.find((o) => o.id === orderId);
  if (!order) {
    return Promise.reject(new Error("Order not found"));
  }
  return Promise.resolve(order);
}

Promise.all([getUser(1), getOrders(1), getOrderDetails(101)])
  .then(([user, orders, orderDetails]) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
