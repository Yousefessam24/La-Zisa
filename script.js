// Product list
const products = [
  // Drinks
  {
    id: 1,
    name: "Tea",
    price: 20,
    image: "images/peppermint-tea-on-teacup-1417945.webp",
    category: "Drinks",
  },
  {
    id: 2,
    name: "Coffee",
    price: 35,
    image: "images/images.jpg",
    category: "Drinks",
  },
  {
    id: 3,
    name: "Orange Juice",
    price: 30,
    image: "images/orange-juice.webp",
    category: "Drinks",
  },
  {
    id: 4,
    name: "Water",
    price: 10,
    image: "images/istockphoto-1293618957-612x612.jpg",
    category: "Drinks",
  },
  {
    id: 5,
    name: "Apple Juice",
    price: 35,
    image: "images/AppleJuice_f42254d5-a00c-4e3e-b695-9d70bbf194d2_800x.webp", // افتراضي
    category: "Drinks",
  },
  {
    id: 6,
    name: "Lemonade",
    price: 30,
    image: "images/36186t1.webp", // افتراضي
    category: "Drinks",
  },
  // Breakfast
  {
    id: 7,
    name: "Scrambled Eggs",
    price: 60,
    image:
      "images/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.webp", // افتراضي
    category: "Breakfast",
  },
  {
    id: 8,
    name: "Pancakes",
    price: 65,
    image: "images/34568t5.webp",
    category: "Breakfast",
  },
  {
    id: 9,
    name: "Omelette",
    price: 55,
    image: "images/Basic-omelette.webp",
    category: "Breakfast",
  },
  {
    id: 10,
    name: "Toast with Jam",
    price: 60,
    image: "images/grilled-peanut-butter-and-jam-sandwich.webp",
    category: "Breakfast",
  },
  {
    id: 11,
    name: "Cereal Bowl",
    price: 60,
    image: "images/hero-image.webp",
    category: "Breakfast",
  },
  {
    id: 12,
    name: "Bacon and Eggs",
    price: 70,
    image: "images/EP_15072015_TOMATOTOAST_019 (1).webp",
    category: "Breakfast",
  },
  {
    id: 13,
    name: "French Toast",
    price: 65,
    image:
      "images/Simply-Recipes-Best-French-Toast-LEAD-5-9f0a042bdcb14a5fb526e0f772663877.jpg",
    category: "Breakfast",
  },
  {
    id: 14,
    name: "Smoothie Bowl",
    price: 75,
    image: "images/Smoothie-Bowl-Overhead.jpg",
    category: "Breakfast",
  },
  // Lunch
  {
    id: 15,
    name: "Margherita Pizza",
    price: 120,
    image: "images/PIZZA-MARGHERITA.webp",
    category: "Lunch",
  },
  {
    id: 16,
    name: "Pasta",
    price: 90,
    image: "images/images (1).jpg",
    category: "Lunch",
  },
  {
    id: 17,
    name: "Chicken Burger",
    price: 95,
    image:
      "images/658e02cda7939e42519065e9_6584c1ed00a3c9810932e955_airfryerchickensandwich_youtube_dad_2.webp",
    category: "Lunch",
  },
  {
    id: 18,
    name: "Caesar Salad",
    price: 75,
    image:
      "images/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
    category: "Lunch",
  },
  {
    id: 19,
    name: "Grilled Chicken",
    price: 105,
    image:
      "images/16160-juicy-grilled-chicken-breasts-ddmfs-5594-hero-3x4-902673c819994c0191442304b40104af.webp",
    category: "Lunch",
  },
  {
    id: 20,
    name: "Fish and Chips",
    price: 115,
    image:
      "images/20220707143834-atlantic_cod_fish_chips_recipe_1024x1024.webp",
    category: "Lunch",
  },
  {
    id: 21,
    name: "Beef Steak",
    price: 250,
    image: "images/uspi03PY-1280.webp",
    category: "Lunch",
  },
  {
    id: 22,
    name: "Vegetable Stir Fry",
    price: 70,
    image: "images/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.webp",
    category: "Lunch",
  },
  {
    id: 23,
    name: "Lasagna",
    price: 100,
    image: "images/KnxzkZhO-1280.webp",
    category: "Lunch",
  },
  {
    id: 24,
    name: "Chicken Shawarma",
    price: 80,
    image: "images/Shawarma-848x477.jpg",
    category: "Lunch",
  },
  {
    id: 25,
    name: "Falafel Wrap",
    price: 60,
    image: "images/Vegan-Falafel-Wrap-1.jpg",
    category: "Lunch",
  },
  {
    id: 26,
    name: "Rice and Curry",
    price: 95,
    image: "images/chicken_curry_with_83629_16x9.webp",
    category: "Lunch",
  },
  // Desserts
  {
    id: 27,
    name: "Chocolate Cake",
    price: 65,
    image: "images/8Mhboqg7-1280.webp",
    category: "Desserts",
  },
  {
    id: 28,
    name: "Ice Cream",
    price: 45,
    image: "images/images (3).jpg",
    category: "Desserts",
  },
  {
    id: 29,
    name: "Cheesecake",
    price: 70,
    image:
      "images/cheesecake-senza-burro_4dba1f5b-8ca4-4a4d-8217-6bb590d6c353.webp",
    category: "Desserts",
  },
  {
    id: 30,
    name: "Tiramisu",
    price: 95,
    image: "images/05COOKING-TIRAMISU1-jumbo-v2.webp",
    category: "Desserts",
  },
  {
    id: 31,
    name: "Brownie",
    price: 100,
    image: "images/Quick-and-Easy-Fudge-Brownies-5.avif",
    category: "Desserts",
  },
  {
    id: 32,
    name: "Fruit Salad",
    price: 70,
    image: "images/199259152_166663622165057_6223652316946896551_n.webp",
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
function renderMenu(searchTerm = "") {
  // تفريغ الأقسام
  document.querySelectorAll(".menu-section .items").forEach((section) => (section.innerHTML = ""));

  const categories = {
    Drinks: document.querySelector("#drinks-section .items"),
    Breakfast: document.querySelector("#breakfast-section .items"),
    Lunch: document.querySelector("#lunch-section .items"),
    Desserts: document.querySelector("#desserts-section .items"),
  };

  // تصفية المنتجات بناءً على البحث
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredProducts.forEach((product) => {
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
              <span>Price</span>
              <span id="total-price-${product.id}">0</span>
            </div>
        `;
    categories[product.category].appendChild(card);
  });

  // إخفاء العناوين الفارغة إذا لم توجد نتائج في القسم
  Object.keys(categories).forEach(cat => {
      const section = document.getElementById(`${cat.toLowerCase()}-section`);
      section.style.display = categories[cat].children.length > 0 ? "block" : "none";
  });
}

// Change quantity
function changeQuantity(productId, delta) {
  const product = products.find((p) => p.id === productId);
  const quantitySpan = document.getElementById(`quantity-${productId}`);
  const totalSpan = document.getElementById(`total-price-${productId}`);
  
  // الحصول على عناصر الواجهة لإضافة التأثيرات
  const card = quantitySpan.closest(".product-card");
  const plusBtn = card.querySelector(".btn-plus");

  let quantity = parseInt(quantitySpan.innerText) + delta;
  if (quantity < 0) quantity = 0;

  // إضافة التأثيرات فقط عند الضغط على زر الزيادة (+)
  if (delta > 0) {
    // إضافة كلاس الحركة للزر
    plusBtn.classList.add("pulse-animation");
    // إضافة كلاس الومضة للكارت
    card.classList.add("flash-animation");

    // إزالة الكلاسات بعد انتهاء الأنميشن (300-400 مللي ثانية) لإعادة استخدامها
    setTimeout(() => {
      plusBtn.classList.remove("pulse-animation");
      card.classList.remove("flash-animation");
    }, 400);
  }

  quantitySpan.innerText = quantity;
  totalSpan.innerText = (quantity * product.price).toFixed(2);

  // تحديث السلة (Cart logic) كما هي
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

  // التحقق من وجود طلبات
  if (orders.length === 0) {
    ordersList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-clipboard-list"></i>
        <p>No orders currently</p>
      </div>
    `;
    return; // التوقف هنا وعدم إكمال الدالة
  }

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

// البحث الفوري عند الكتابة
document.getElementById("menu-search").addEventListener("input", (e) => {
  renderMenu(e.target.value);
});

// دالة التنقل السريع للأقسام
function scrollToCategory(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // حساب الارتفاع لترك مسافة بسيطة من الأعلى لكي لا يغطي الـ Tabs العنوان
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// يمكنك إضافة هذا الكود لضمان أن المتصفح يحدث البيانات قبل الطباعة
window.onbeforeprint = () => {
    const name = customerNameInput.value || "N/A";
    const table = tableNumberInput.value || "N/A";
    // يمكنك هنا إضافة منطق لعرض البيانات كنص بدلاً من حقول إدخال إذا رغبت
};


function prepareAndPrint() {
    const name = document.getElementById("customer-name").value;
    const table = document.getElementById("table-number").value;

    if (!name || !table) {
        alert("Please enter customer name and table number before printing");
        return;
    }

    // 1. تحديث الاسم والطاولة
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-table").innerText = table;

    // 2. توليد التاريخ والوقت الحالي
    const now = new Date();
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const formattedDate = now.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = now.toLocaleTimeString('en-GB', timeOptions);
    
    document.getElementById("display-datetime").innerText = `${formattedDate} | ${formattedTime}`;

    // 3. تشغيل الطباعة
    window.print();
}

// تعديل بسيط في renderCart للتأكد من انسيابية الأصناف
function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.style.display = "flex";
        itemDiv.style.justifyContent = "space-between";
        itemDiv.style.width = "100%";
        itemDiv.style.marginBottom = "5px";
        
        itemDiv.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>${(item.quantity * item.price).toFixed(2)} EGP</span>
        `;
        cartItems.appendChild(itemDiv);
        total += item.quantity * item.price;
    });
    totalAmount.innerText = total.toFixed(2);
}