// Product list
const products = [
  // Drinks
  {
    id: 1,
    name: "Tea",
    price: 10,
    image: "images/peppermint-tea-on-teacup-1417945.jpg",
    category: "Drinks",
  },
  {
    id: 2,
    name: "Coffee",
    price: 15,
    image: "images/images.jpg",
    category: "Drinks",
  },
  {
    id: 3,
    name: "Orange Juice",
    price: 20,
    image: "images/orange-juice.jpg",
    category: "Drinks",
  },
  {
    id: 4,
    name: "Water",
    price: 5,
    image: "images/istockphoto-1293618957-612x612.jpg",
    category: "Drinks",
  },
  {
    id: 5,
    name: "Apple Juice",
    price: 18,
    image: "images/orange-juice.jpg", // افتراضي
    category: "Drinks",
  },
  {
    id: 6,
    name: "Lemonade",
    price: 12,
    image: "images/orange-juice.jpg", // افتراضي
    category: "Drinks",
  },
  // Breakfast
  {
    id: 7,
    name: "Scrambled Eggs",
    price: 25,
    image: "images/PIZZA-MARGHERITA.jpg", // افتراضي
    category: "Breakfast",
  },
  {
    id: 8,
    name: "Pancakes",
    price: 30,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 9,
    name: "Omelette",
    price: 28,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 10,
    name: "Toast with Jam",
    price: 15,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 11,
    name: "Cereal Bowl",
    price: 20,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 12,
    name: "Bacon and Eggs",
    price: 35,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 13,
    name: "French Toast",
    price: 32,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  {
    id: 14,
    name: "Smoothie Bowl",
    price: 22,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Breakfast",
  },
  // Lunch
  {
    id: 15,
    name: "Margherita Pizza",
    price: 50,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 16,
    name: "Pasta",
    price: 40,
    image: "images/images (1).jpg",
    category: "Lunch",
  },
  {
    id: 17,
    name: "Chicken Burger",
    price: 45,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 18,
    name: "Caesar Salad",
    price: 35,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 19,
    name: "Grilled Chicken",
    price: 55,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 20,
    name: "Fish and Chips",
    price: 50,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 21,
    name: "Beef Steak",
    price: 70,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 22,
    name: "Vegetable Stir Fry",
    price: 38,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 23,
    name: "Lasagna",
    price: 48,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 24,
    name: "Chicken Shawarma",
    price: 42,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 25,
    name: "Falafel Wrap",
    price: 30,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  {
    id: 26,
    name: "Rice and Curry",
    price: 40,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Lunch",
  },
  // Desserts
  {
    id: 27,
    name: "Chocolate Cake",
    price: 25,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
  {
    id: 28,
    name: "Ice Cream",
    price: 15,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
  {
    id: 29,
    name: "Cheesecake",
    price: 28,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
  {
    id: 30,
    name: "Tiramisu",
    price: 30,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
  {
    id: 31,
    name: "Brownie",
    price: 20,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
  {
    id: 32,
    name: "Fruit Salad",
    price: 18,
    image: "images/PIZZA-MARGHERITA.jpg",
    category: "Desserts",
  },
];

// State management
let currentPage = "home";
let cart = [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// DOM elements
const homePage = document.getElementById("home");
const menuPage = document.getElementById("menu");
const receiptPage = document.getElementById("receipt");
const addOrderBtn = document.getElementById("add-order-btn");
const backToHomeBtn = document.getElementById("back-to-home");
const viewCartBtn = document.getElementById("view-cart");
const confirmOrderBtn = document.getElementById("confirm-order");
const backToMenuBtn = document.getElementById("back-to-menu");
const ordersList = document.getElementById("orders-list");
const menuItems = document.getElementById("menu-items");
const cartItems = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");
const customerNameInput = document.getElementById("customer-name");
const tableNumberInput = document.getElementById("table-number");

// Navigation functions
function showPage(page) {
  console.log("Showing page:", page);
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
  currentPage = page;

  // Show/hide floating buttons
  const addBtn = document.getElementById("add-order-btn");
  const backBtn = document.getElementById("back-to-home");
  const cartBtn = document.getElementById("view-cart");

  addBtn.style.display = page === "home" ? "block" : "none";
  backBtn.style.display = page === "menu" ? "block" : "none";
  cartBtn.style.display = page === "menu" ? "block" : "none";
  const backMenuBtn = document.getElementById("back-to-menu");
  backMenuBtn.style.display = page === "receipt" ? "block" : "none";
}

// Delete order
function deleteOrder(index) {
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

// Render menu
function renderMenu() {
  // Clear all sections
  document
    .querySelectorAll(".menu-section .items")
    .forEach((section) => (section.innerHTML = ""));

  // Group products by category
  const categories = {
    Drinks: document.querySelector("#drinks-section .items"),
    Breakfast: document.querySelector("#breakfast-section .items"),
    Lunch: document.querySelector("#lunch-section .items"),
    Desserts: document.querySelector("#desserts-section .items"),
  };

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="name">${product.name}</span>
                <span class="price">${product.price} EGP</span>
            </div>
            <div class="quantity-section">
              <p>Quantity</p>
              <div class="controls">
                <button class="btn-minus" onclick="changeQuantity(${product.id}, -1)">-</button>
                <span id="quantity-${product.id}">0</span>
                <button class="btn-plus" onclick="changeQuantity(${product.id}, 1)">+</button>
              </div>
            </div>
            <div class="total-section">
              <span id="total-price-${product.id}">0</span>
              <span>Price</span>
            </div>
        `;
    categories[product.category].appendChild(card);
  });
}

// Change quantity
function changeQuantity(productId, delta) {
  const product = products.find((p) => p.id === productId);
  const quantitySpan = document.getElementById(`quantity-${productId}`);
  const totalSpan = document.getElementById(`total-price-${productId}`);
  let quantity = parseInt(quantitySpan.innerText) + delta;
  if (quantity < 0) quantity = 0;
  quantitySpan.innerText = quantity;
  totalSpan.innerText = (quantity * product.price).toFixed(2);

  // Update cart
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity = quantity;
    if (quantity === 0) {
      cart = cart.filter((item) => item.id !== productId);
    }
  } else if (quantity > 0) {
    cart.push({ ...product, quantity });
  }
}

// Render cart

// Confirm order
function confirmOrder() {
  const customerName = customerNameInput.value.trim();
  const tableNumber = tableNumberInput.value.trim();
  if (!customerName || !tableNumber || cart.length === 0) {
    alert("Please fill in all fields and add items to the cart");
    return;
  }
  const order = {
    customerName,
    tableNumber,
    items: [...cart],
    date: new Date().toISOString(),
  };
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  cart = [];
  customerNameInput.value = "";
  tableNumberInput.value = "";
  showPage("home");
  renderOrders();
}

// Events
addOrderBtn.addEventListener("click", () => {
  showPage("menu");
  renderMenu();
});

backToHomeBtn.addEventListener("click", () => showPage("home"));

viewCartBtn.addEventListener("click", () => {
  renderCart();
  showPage("receipt");
});

confirmOrderBtn.addEventListener("click", confirmOrder);

backToMenuBtn.addEventListener("click", () => showPage("menu"));

// Load data on start
renderOrders();
showPage("home");

function renderOrders() {
  ordersList.innerHTML = "";
  orders.forEach((order, index) => {
    const orderDiv = document.createElement("div");
    orderDiv.className = "order-item";
    orderDiv.innerHTML = `
        <div class="order-header">
            <strong>${order.customerName}</strong>
            <span class="table-badge">Table ${order.tableNumber}</span>
        </div>
        <div class="order-details">
            ${order.items
              .map(
                (item) => `
                <div class="item-row">
                    <span>${item.name}</span>
                    <span class="item-qty">x${item.quantity}</span>
                </div>
            `
              )
              .join("")}
        </div>
        <div class="order-footer">
            <button class="delete-btn" onclick="deleteOrder(${index})">
                <i class="fas fa-trash"></i> Delete Order
            </button>
        </div>
    `;
    ordersList.appendChild(orderDiv);
  });
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
            <span>${item.name} | ${item.quantity} x ${item.price} = ${(
      item.quantity * item.price
    ).toFixed(2)} EGP</span>
        `;
    cartItems.appendChild(itemDiv);
    total += item.quantity * item.price;
  });
  totalAmount.innerText = total.toFixed(2);
}
