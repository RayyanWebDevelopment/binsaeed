// WhatsApp Direct Order Configuration
let WHATSAPP_NUMBER = "923045713194";

const fakeReviewsPool = [
    { name: "Ayesha K.", review: "Fabric quality is just amazing! Bohat pyara suit hai.", stars: 5 },
    { name: "Sara", review: "Received my order today. Color is exactly as shown in picture.", stars: 5 },
    { name: "Zainab R.", review: "Embroidery bohat neat hai, highly recommended!", stars: 5 },
    { name: "Fiza M.", review: "Delivery was fast. Dress bohat acha hai.", stars: 4 },
    { name: "Amna", review: "Lawn ki quality bohat achi hai, summer ke liye best.", stars: 5 },
    { name: "Sana A.", review: "Very premium feel. Main ne 2 suits order kiye dono perfect hain.", stars: 5 },
    { name: "Hira T.", review: "Stuff is very soft. Same as shown.", stars: 5 },
    { name: "Maha", review: "Mujhe bohat pasand aya. Stitching bhi khud karwai hai, looks beautiful.", stars: 5 },
    { name: "Kiran F.", review: "Colors are so vibrant. Will shop again for sure.", stars: 4 },
    { name: "Nida", review: "Worth the price. Dupatta is very flowy and soft.", stars: 5 },
    { name: "Faiza", review: "Original Bin Saeed! Loving the print.", stars: 5 },
    { name: "Tania", review: "Excellent customer service and premium fabric.", stars: 5 },
    { name: "Alishba", review: "Kapra bohat thanda aur comfortable hai garmiyo ke liye.", stars: 5 },
    { name: "Rubina", review: "Gifted this to my mother, she loved it!", stars: 4 },
    { name: "Sahar", review: "Gorgeous design. Highly satisfied.", stars: 5 },
    { name: "Khadija", review: "Print and fabric is original. Bohat pyara lag raha pehan ke.", stars: 5 },
    { name: "Maryam", review: "Quality is 10/10. Will buy more.", stars: 5 }
];

// Default Lawn articles database
const defaultProducts = [
    {
        "id": 1,
        "name": "Black & White Embroidered Lawn Suit",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Black & White Embroidered Lawn Suit/cover.png",
        "images": [
            "images/New folder (21)/Black & White Embroidered Lawn Suit/cover.png",
            "images/New folder (21)/Black & White Embroidered Lawn Suit/6a2d5df0-0ba7-4724-b866-798b51e58928.png",
            "images/New folder (21)/Black & White Embroidered Lawn Suit/9e514d99-deb9-4d76-b2a5-9a45f8d7ddbe.png",
            "images/New folder (21)/Black & White Embroidered Lawn Suit/dc8124ed-1df2-4cf5-98b1-f7d5385ba547.png"
        ],
        "badge": "Hot Sale",
        "description": "Grace your wardrobe with Black & White Embroidered Lawn Suit, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    },
    {
        "id": 2,
        "name": "Floral Embroidered Lawn Suit",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Floral Embroidered Lawn Suit/cover.png",
        "images": [
            "images/New folder (21)/Floral Embroidered Lawn Suit/cover.png",
            "images/New folder (21)/Floral Embroidered Lawn Suit/579f9a46-f13b-46dc-84f8-7fa2da9b3f43.png",
            "images/New folder (21)/Floral Embroidered Lawn Suit/75a559aa-1247-4d9b-9e70-81e968313ad0 (1).png",
            "images/New folder (21)/Floral Embroidered Lawn Suit/75a559aa-1247-4d9b-9e70-81e968313ad0.png",
            "images/New folder (21)/Floral Embroidered Lawn Suit/8f48ded6-79b9-4347-abd8-576bfa05c581.png"
        ],
        "badge": "New Arrival",
        "description": "Grace your wardrobe with Floral Embroidered Lawn Suit, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    },
    {
        "id": 3,
        "name": "Maroon Embroidered Lawn Suit",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Maroon Embroidered Lawn Suit/cover.png",
        "images": [
            "images/New folder (21)/Maroon Embroidered Lawn Suit/cover.png",
            "images/New folder (21)/Maroon Embroidered Lawn Suit/96800dea-a116-45f9-a19d-b99e1815aafb.png",
            "images/New folder (21)/Maroon Embroidered Lawn Suit/9ff94a74-cc41-4723-b500-b893367e0ca3.png",
            "images/New folder (21)/Maroon Embroidered Lawn Suit/ffe28d87-2bf1-434c-8410-7f31f5c41ede.png"
        ],
        "badge": "Hot Sale",
        "description": "Grace your wardrobe with Maroon Embroidered Lawn Suit, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    },
    {
        "id": 4,
        "name": "Navy Embroidered Lawn 3 Piece",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Navy Embroidered Lawn 3 Piece/cover.png",
        "images": [
            "images/New folder (21)/Navy Embroidered Lawn 3 Piece/cover.png",
            "images/New folder (21)/Navy Embroidered Lawn 3 Piece/4114fa2d-21ab-4f7c-998a-62281ac38354.png",
            "images/New folder (21)/Navy Embroidered Lawn 3 Piece/9434ac89-a47d-4a2b-8e9a-0e789d2bc35d.png",
            "images/New folder (21)/Navy Embroidered Lawn 3 Piece/980a76b2-d69d-41b4-8bb2-67a731f50644.png",
            "images/New folder (21)/Navy Embroidered Lawn 3 Piece/b337271b-bceb-4ac0-98da-f0304359dcf9.png"
        ],
        "badge": "New Arrival",
        "description": "Grace your wardrobe with Navy Embroidered Lawn 3 Piece, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    },
    {
        "id": 5,
        "name": "Purple Embroidered Lawn Suit",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Purple Embroidered Lawn Suit/cover.png",
        "images": [
            "images/New folder (21)/Purple Embroidered Lawn Suit/cover.png",
            "images/New folder (21)/Purple Embroidered Lawn Suit/3.png",
            "images/New folder (21)/Purple Embroidered Lawn Suit/4.png",
            "images/New folder (21)/Purple Embroidered Lawn Suit/5.png"
        ],
        "badge": "Hot Sale",
        "description": "Grace your wardrobe with Purple Embroidered Lawn Suit, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    },
    {
        "id": 6,
        "name": "Teal Embroidered Lawn Suit",
        "category": "embroidered",
        "categoryLabel": "Embroidered Collection",
        "price": 6500,
        "oldPrice": 8000,
        "image": "images/New folder (21)/Teal Embroidered Lawn Suit/cover.png",
        "images": [
            "images/New folder (21)/Teal Embroidered Lawn Suit/cover.png",
            "images/New folder (21)/Teal Embroidered Lawn Suit/1123123.png",
            "images/New folder (21)/Teal Embroidered Lawn Suit/123123.png",
            "images/New folder (21)/Teal Embroidered Lawn Suit/991576c9-e44b-48ef-ae3b-71191f07b4b3.png",
            "images/New folder (21)/Teal Embroidered Lawn Suit/a20a1f0b-8aba-499e-b714-dd827922dd3b.png"
        ],
        "badge": "New Arrival",
        "description": "Grace your wardrobe with Teal Embroidered Lawn Suit, featuring premium lawn fabric with intricate embroidery, paired with a matching dupatta and lawn trouser. Perfect for summer and festive occasions.",
        "fabric": "100% Premium Lawn",
        "details": [
            "Premium Lawn",
            "3 Piece Suit",
            "Embroidered Shirt",
            "Printed / Embroidered Dupatta",
            "Lawn Trouser",
            "Soft & Breathable Fabric",
            "Summer Collection 2026"
        ],
        "outOfStockSizes": []
    }
];

let products = defaultProducts;
localStorage.setItem("binsaeed_products", JSON.stringify(products));

// App State
let cart = JSON.parse(localStorage.getItem("bin_saeed_cart")) || [];
let activeCategory = "embroidered";
let currentProduct = null;
let selectedSize = "M";

// DOM Elements
let productsGrid, filterTabs, cartDrawer, cartOverlay, cartItemsContainer, cartTotalElement, cartBadge, cartCountText, quickViewModal, searchOverlay, searchInput, checkoutSuccessModal, toast;
let checkoutModal, checkoutForm, contactForm, checkoutSubtotal, checkoutShipping, checkoutTotal;
let modalSlideshowInterval = null;

function initializeDOMElements() {
    productsGrid = document.getElementById("products-grid");
    filterTabs = document.querySelectorAll(".filter-tab");
    cartDrawer = document.getElementById("cart-drawer");
    cartOverlay = document.getElementById("cart-overlay");
    cartItemsContainer = document.querySelector(".cart-items-container");
    cartTotalElement = document.getElementById("cart-total");
    cartBadge = document.querySelector(".cart-badge");
    cartCountText = document.getElementById("cart-count-text");
    quickViewModal = document.getElementById("quick-view-modal");
    searchOverlay = document.getElementById("search-overlay");
    searchInput = document.getElementById("search-input");
    checkoutSuccessModal = document.getElementById("checkout-success-modal");
    toast = document.getElementById("toast-msg");
    
    // New Elements
    checkoutModal = document.getElementById("checkout-modal");
    checkoutForm = document.getElementById("checkout-form");
    contactForm = document.getElementById("contact-form");
    checkoutSubtotal = document.getElementById("checkout-subtotal");
    checkoutShipping = document.getElementById("checkout-shipping");
    checkoutTotal = document.getElementById("checkout-total");
}

// --- Initialization ---
function initApp() {
    initializeDOMElements();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    setupScrollAnimations();
    
    // Initial render
    cycleReviews();
    // Change reviews every 5 seconds
    setInterval(cycleReviews, 5000);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// --- Setup Event Listeners ---
function setupEventListeners() {
    // Header Scroll Effect
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Category Filter Selection
    filterTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            filterTabs.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            activeCategory = e.target.dataset.filter;
            renderProducts();
        });
    });

    // Cart Drawer Toggle
    document.querySelectorAll(".cart-toggle").forEach(btn => {
        btn.addEventListener("click", toggleCartDrawer);
    });
    cartOverlay.addEventListener("click", toggleCartDrawer);
    document.querySelector(".cart-close-btn").addEventListener("click", toggleCartDrawer);

    // Modal Close
    document.querySelector(".modal-close-btn").addEventListener("click", closeProductModal);
    document.querySelector(".modal-backdrop").addEventListener("click", closeProductModal);

    // Search Toggle
    document.querySelector(".search-toggle").addEventListener("click", toggleSearchOverlay);
    document.querySelector(".search-close-btn").addEventListener("click", toggleSearchOverlay);
    searchInput.addEventListener("input", handleSearch);

    // Checkout Action
    document.querySelector(".checkout-btn").addEventListener("click", handleCheckout);
    document.querySelector(".success-close-btn").addEventListener("click", closeSuccessModal);
    
    // Close Checkout Modal
    document.querySelector(".checkout-modal-close-btn").addEventListener("click", closeCheckoutModal);
    checkoutModal.querySelector(".modal-backdrop").addEventListener("click", closeCheckoutModal);
    
    // Forms Submission Logic
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // 1. Gather Customer Info
        const name = document.getElementById("checkout-name").value;
        const email = document.getElementById("checkout-email").value;
        const phone = document.getElementById("checkout-phone").value;
        const city = document.getElementById("checkout-city").value;
        const province = document.getElementById("checkout-province").value;
        const postal = document.getElementById("checkout-postal").value;
        const payment = document.getElementById("checkout-payment").value === "cod" ? "Cash on Delivery (COD)" : "Credit / Debit Card";
        const address = document.getElementById("checkout-address").value;
        
        const shippingFee = 250;
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        const orderTotal = subtotal + shippingFee;
        
        // 2. Build Order Items Details Message
        let itemsText = "";
        
        cart.forEach((item, index) => {
            const product = products.find(p => p.id === item.id);
            const fabric = product ? product.fabric : "Premium Fabric";
            const itemSubtotal = item.price * item.quantity;
            
            // Format absolute image URL
            const absoluteImgUrl = window.location.origin + "/" + item.image;
            
            itemsText += `\n*${index + 1}. ${item.name}*\n`;
            itemsText += `   • Size: ${item.size}\n`;
            itemsText += `   • Qty: ${item.quantity}\n`;
            itemsText += `   • Price: Rs. ${item.price.toLocaleString()} each\n`;
            itemsText += `   • Item Total: Rs. ${itemSubtotal.toLocaleString()}\n`;
            itemsText += `   • Fabric: ${fabric}\n`;
            itemsText += `   • Image: ${absoluteImgUrl}\n`;
            itemsText += `   ----------------------------------------\n`;
        });
        
        // 3. Assemble Full WhatsApp Message
        const messageText = 
`*✨ NEW ORDER - BIN SAEED FABRICS ✨*

*👤 CUSTOMER SHIPPING DETAILS:*
• *Name:* ${name}
• *Phone:* ${phone}
• *Email:* ${email}
• *Address:* ${address}
• *City:* ${city}
• *Province:* ${province}
• *Postal Code:* ${postal}
• *Payment:* ${payment}

*🛍️ ORDERED ARTICLES:*
----------------------------------------${itemsText}
*💰 ORDER SUMMARY:*
• *Items Subtotal:* Rs. ${subtotal.toLocaleString()}
• *Shipping Fee:* Rs. 250
• *Total Payable:* Rs. ${orderTotal.toLocaleString()}

Thank you for shopping with Bin Saeed Fabrics! We look forward to fulfilling your order.`;

        // 4. Encode message and open WhatsApp URL
        const encodedText = encodeURIComponent(messageText);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
        
        // 5. Close checkout form, show order success page, reset cart
        closeCheckoutModal();
        checkoutSuccessModal.classList.add("open");
        
        // Facebook Pixel Purchase Event
        if (typeof fbq === 'function') {
            fbq('track', 'Purchase', { value: subtotal, currency: 'PKR' });
        }
        
        cart = [];
        saveCart();
        updateCartUI();
        checkoutForm.reset();
    });
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                document.getElementById("contact-form-success").style.display = "flex";
                contactForm.style.display = "none";
                showToast("Message sent successfully!");
            }).catch(error => {
                showToast("Error sending message.");
            });
        });
    }

    // Prevent scrolling behind modal/drawer when open
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProductModal();
            closeCheckoutModal();
            if (cartDrawer.classList.contains("open")) toggleCartDrawer();
            if (searchOverlay.classList.contains("open")) toggleSearchOverlay();
        }
    });

    // Scroll To Top button logic
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mobile Navigation Drawer Toggle logic
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    
    if (mobileMenuToggle && navLinks && mobileNavOverlay) {
        const toggleMenu = () => {
            navLinks.classList.toggle("open");
            mobileNavOverlay.classList.toggle("open");
            const icon = mobileMenuToggle.querySelector("i");
            const header = document.querySelector("header");
            if (navLinks.classList.contains("open")) {
                icon.className = "fas fa-times";
                if (header) header.classList.add("menu-open");
                document.body.style.overflow = "hidden"; // Prevent scrolling behind drawer
            } else {
                icon.className = "fas fa-bars";
                if (header) header.classList.remove("menu-open");
                document.body.style.overflow = ""; // Enable scrolling
            }
        };

        mobileMenuToggle.addEventListener("click", toggleMenu);
        mobileNavOverlay.addEventListener("click", toggleMenu);
        
        // Close menu when clicking a nav link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                mobileNavOverlay.classList.remove("open");
                const header = document.querySelector("header");
                if (header) header.classList.remove("menu-open");
                document.body.style.overflow = "";
                const icon = mobileMenuToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            });
        });
    }
}

// --- Render Product Grid ---
function renderProducts(productsToRender = products) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = "";
    
    const filtered = activeCategory === "all" 
        ? productsToRender 
        : productsToRender.filter(p => p.category === activeCategory);

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--dark-muted)">No items found matching the search.</div>`;
        return;
    }

    filtered.forEach((product, index) => {
        const productCard = document.createElement("div");
        
        // Remove out-of-stock check to guarantee all sizes are available
        const isSoldOut = false; // product.outOfStockSizes && product.outOfStockSizes.includes(size); && oosSizes.includes("M") && oosSizes.includes("L");
        
        productCard.className = `product-card reveal active ${isSoldOut ? 'sold-out' : ''}`;
        productCard.style.cursor = "pointer";

        const priceHTML = product.oldPrice 
            ? `<span class="product-price">Rs. ${product.price.toLocaleString()}</span>
               <span class="product-old-price">Rs. ${product.oldPrice.toLocaleString()}</span>`
            : `<span class="product-price">Rs. ${product.price.toLocaleString()}</span>`;

        const badgeText = isSoldOut ? "Sold Out" : product.badge;
        const badgeHTML = badgeText
            ? `<span class="product-badge ${isSoldOut ? 'sold-out' : (badgeText.toLowerCase() === 'sale' ? 'sale' : '')}">${badgeText}</span>`
            : "";

        productCard.innerHTML = `
            <div class="product-image-container">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="product-image" decoding="async">
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-wrapper">
                    ${priceHTML}
                </div>
            </div>
        `;

        productCard.addEventListener("click", () => {
            openProductModal(product.id);
        });

        productsGrid.appendChild(productCard);
    });

    const cards = productsGrid.querySelectorAll(".reveal");
    cards.forEach(card => card.classList.add("active"));
}

// --- Cart Logic ---
function addToCart(productId, size, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${product.name} (Size: ${size}) to cart`);
    
    // Animate cart badge
    cartBadge.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartBadge.style.transform = "";
    }, 300);

    // Auto-open cart drawer for seamless UX
    if (!cartDrawer.classList.contains("open")) {
        toggleCartDrawer();
    }
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartUI();
    showToast("Item removed from cart");
}

function updateCartQty(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem("bin_saeed_cart", JSON.stringify(cart));
}

function toggleCartDrawer() {
    cartDrawer.classList.toggle("open");
    cartOverlay.classList.toggle("open");
}

function updateCartUI() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    
    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fas fa-shopping-bag empty-cart-icon"></i>
                <p>Your shopping bag is empty.</p>
                <button class="btn btn-primary cart-toggle" style="margin-top: 20px; padding: 12px 24px; font-size: 11px">Shop Now</button>
            </div>
        `;
        // Re-bind the shop now toggle button inside empty cart
        cartItemsContainer.querySelector(".cart-toggle").addEventListener("click", toggleCartDrawer);
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-meta">Size: ${item.size}</p>
                    <div class="cart-item-bottom">
                        <div class="quantity-controls">
                            <button class="qty-btn dec-qty-btn" data-id="${item.id}" data-size="${item.size}">-</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn inc-qty-btn" data-id="${item.id}" data-size="${item.size}">+</button>
                        </div>
                        <span class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}" data-size="${item.size}" style="margin-top: 10px;">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Update prices and badges
    const shippingFee = 250;
    cartTotalElement.textContent = total > 0 ? `Rs. ${(total + shippingFee).toLocaleString()}` : `Rs. 0`;
    
    if (itemCount > 0) {
        cartBadge.textContent = itemCount;
        cartBadge.classList.add("active");
        cartCountText.textContent = `(${itemCount})`;
    } else {
        cartBadge.classList.remove("active");
        cartCountText.textContent = "";
    }

    // Bind item buttons
    document.querySelectorAll(".dec-qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            updateCartQty(id, size, -1);
        });
    });

    document.querySelectorAll(".inc-qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            updateCartQty(id, size, 1);
        });
    });

    document.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const size = btn.dataset.size;
            removeFromCart(id, size);
        });
    });
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast("Add items to your bag first!");
        return;
    }
    
    // Calculate subtotal and render checkout items list
    let subtotal = 0;
    const itemsListContainer = document.getElementById("checkout-items-list");
    if (itemsListContainer) {
        itemsListContainer.innerHTML = "";
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            
            const itemElement = document.createElement("div");
            itemElement.className = "checkout-item-summary";
            itemElement.innerHTML = `
                <div class="checkout-item-summary-info">
                    <span class="checkout-item-summary-name">${item.name}</span>
                    <span class="checkout-item-summary-meta">Size: ${item.size} | Qty: ${item.quantity}</span>
                </div>
                <span class="checkout-item-summary-price">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            `;
            itemsListContainer.appendChild(itemElement);
        });
    } else {
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
        });
    }
    
    checkoutSubtotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
    checkoutShipping.textContent = `Rs. 250`;
    checkoutTotal.textContent = `Rs. ${(subtotal + 250).toLocaleString()}`; // Added shipping
    
    // Open checkout modal
    toggleCartDrawer();
    checkoutModal.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeCheckoutModal() {
    checkoutModal.classList.remove("open");
    document.body.classList.remove("no-scroll");
}

function closeSuccessModal() {
    checkoutSuccessModal.classList.remove("open");
}

// --- Product Modal Logic ---
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    
    // Check stock (Disabled completely)
    const oosSizes = [];
    const isSoldOut = false;
    
    // Default to "M"
    const availableSizes = ["S", "M", "L"];
    selectedSize = "M";

    // Set modal data
    const detailsContainer = quickViewModal.querySelector(".modal-details");
    const imageElement = document.getElementById("modal-product-image");
    
    if (imageElement) {
        imageElement.src = product.image;
        imageElement.alt = product.name;
        
        let thumbContainer = document.getElementById("modal-thumbnails");
        if (!thumbContainer) {
            thumbContainer = document.createElement("div");
            thumbContainer.id = "modal-thumbnails";
            thumbContainer.className = "modal-thumbnails";
            imageElement.parentNode.appendChild(thumbContainer);
        }
        thumbContainer.innerHTML = "";
        
        if (product.images && product.images.length > 1) {
            let currentImageIndex = 0;
            const imagesCount = product.images.length;
            
            product.images.forEach((imgSrc, index) => {
                const thumb = document.createElement("img");
                thumb.src = imgSrc;
                thumb.className = "modal-thumb";
                if (imgSrc === product.image) {
                    thumb.classList.add("active");
                    currentImageIndex = index; // set initial index
                }
                thumb.onclick = () => {
                    clearInterval(modalSlideshowInterval); // Stop auto slide on manual interaction
                    currentImageIndex = index;
                    imageElement.src = imgSrc;
                    thumbContainer.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
                    thumb.classList.add("active");
                };
                thumbContainer.appendChild(thumb);
            });

            // Start auto sliding every 3 seconds
            modalSlideshowInterval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % imagesCount;
                const nextImgSrc = product.images[currentImageIndex];
                imageElement.src = nextImgSrc;
                thumbContainer.querySelectorAll(".modal-thumb").forEach((t, i) => {
                    if (i === currentImageIndex) {
                        t.classList.add("active");
                    } else {
                        t.classList.remove("active");
                    }
                });
            }, 3000);
        }
    }

    // Build size buttons
    const sizeButtonsHTML = ["S", "M", "L"].map(size => {
        const isOOS = false;
        if (isOOS) {
            return `<button class="size-btn out-of-stock" disabled data-size="${size}">${size} (Sold Out)</button>`;
        } else {
            return `<button class="size-btn ${selectedSize === size ? 'active' : ''}" data-size="${size}">${size}</button>`;
        }
    }).join('');

    const addButtonHTML = isSoldOut
        ? `<button class="btn modal-add-btn sold-out" disabled style="background-color: #ccc; cursor: not-allowed;">Sold Out</button>`
        : `<button class="btn modal-add-btn">Add to Bag</button>`;

    detailsContainer.innerHTML = `
        <span class="modal-category">${product.categoryLabel}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price">Rs. ${product.price.toLocaleString()}</div>
        <p class="modal-desc">${product.description}</p>
        
        <div class="modal-options">
            <div class="option-title" style="display:flex; justify-content:space-between; align-items:center;">
                <span>Select Size:</span>
                <span id="size-chart-btn" class="size-chart-btn"><i class="fas fa-ruler-combined"></i> Size Chart</span>
            </div>
            <div class="size-selector">
                ${sizeButtonsHTML}
            </div>
        </div>
        
        <div id="size-chart-container" class="size-chart-container">
            <div class="size-chart-title">Shirt Measurements</div>
            <table class="size-chart-table">
                <tr><th>Size</th><th>Chest</th><th>Shoulders</th><th>Hips</th><th>Length</th><th>Waist</th></tr>
                <tr><td>S</td><td>19"</td><td>13.5"</td><td>20"</td><td>36"</td><td>16"</td></tr>
                <tr><td>M</td><td>21"</td><td>14.5"</td><td>23"</td><td>36"</td><td>18"</td></tr>
                <tr><td>L</td><td>23"</td><td>15"</td><td>25"</td><td>36"</td><td>20"</td></tr>
            </table>
            <div class="size-chart-title">Shalwar / Plazu</div>
            <table class="size-chart-table" style="margin-bottom:0;">
                <tr><th>Size</th><th>Length</th></tr>
                <tr><td>S</td><td>39"</td></tr>
                <tr><td>M</td><td>40"</td></tr>
                <tr><td>L</td><td>41"</td></tr>
            </table>
            <p style="font-size:9px; color:var(--dark-muted); text-align:center; margin-top:10px;">All measurements are in inches. Measure yourself and compare before ordering.</p>
        </div>

        <div class="qty-selector-wrapper">
            <div class="option-title" style="margin-bottom: 0;">Qty:</div>
            <div class="modal-qty">
                <button class="qty-btn modal-dec-btn" ${isSoldOut ? 'disabled' : ''}>-</button>
                <span class="qty-value modal-qty-val">1</span>
                <button class="qty-btn modal-inc-btn" ${isSoldOut ? 'disabled' : ''}>+</button>
            </div>
            ${addButtonHTML}
        </div>

        <div class="fabric-details">
            <div class="fabric-detail-item"><strong>Fabric:</strong> ${product.fabric}</div>
            <div class="fabric-detail-item"><strong>Includes:</strong></div>
            <ul style="list-style: disc; padding-left: 20px; font-size: 13px; color: var(--dark-muted); font-weight: 300;">
                ${product.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
        </div>

        <div class="product-reviews" style="margin-top: 25px; padding-top: 20px; border-top: 1px solid var(--border-color);">
            <div style="font-size: 16px; font-family: var(--font-heading); font-weight: 600; margin-bottom: 15px;">Customer Reviews</div>
            <div id="reviews-container"></div>
        </div>
    `;

    // Pick a random number of reviews between 2 and 5 for this load
    let shuffled = [...fakeReviewsPool].sort(() => 0.5 - Math.random());
    let randomCount = Math.floor(Math.random() * 4) + 2;
    let selectedReviews = shuffled.slice(0, randomCount);
    
    let reviewsHTML = selectedReviews.map((r, index) => `
        <div class="review-item" style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; opacity: 0; animation: fadeIn 0.8s ease forwards; animation-delay: ${index * 0.25}s;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="font-weight: 600; font-size: 13px;">${r.name}</span>
                <span style="color: #FFC107; font-size: 11px;">${'<i class="fas fa-star"></i>'.repeat(r.stars)}</span>
            </div>
            <div style="font-size: 13px; color: var(--dark-muted); font-style: italic;">"${r.review}"</div>
        </div>
    `).join('');

    detailsContainer.querySelector("#reviews-container").innerHTML = reviewsHTML;

    quickViewModal.classList.add("open");
    document.body.classList.add("no-scroll");

    // Setup options clicks
    // Setup size chart toggle
    detailsContainer.querySelector("#size-chart-btn").addEventListener("click", () => {
        const chartContainer = document.getElementById("size-chart-container");
        chartContainer.classList.toggle("open");
    });

    const sizeBtns = detailsContainer.querySelectorAll(".size-btn:not(.out-of-stock)");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = btn.dataset.size;
        });
    });

    const qtyVal = detailsContainer.querySelector(".modal-qty-val");
    let currentQty = 1;

    detailsContainer.querySelector(".modal-dec-btn").addEventListener("click", () => {
        if (currentQty > 1) {
            currentQty--;
            qtyVal.textContent = currentQty;
        }
    });

    detailsContainer.querySelector(".modal-inc-btn").addEventListener("click", () => {
        if (!isSoldOut) {
            currentQty++;
            qtyVal.textContent = currentQty;
        }
    });

    if (!isSoldOut) {
        detailsContainer.querySelector(".modal-add-btn").addEventListener("click", () => {
            addToCart(product.id, selectedSize, currentQty);
            closeProductModal();
        });
    }
}

function closeProductModal() {
    quickViewModal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    currentProduct = null;
    if (modalSlideshowInterval) {
        clearInterval(modalSlideshowInterval);
        modalSlideshowInterval = null;
    }
}

// --- Search Handler ---
function toggleSearchOverlay() {
    searchOverlay.classList.toggle("open");
    if (searchOverlay.classList.contains("open")) {
        setTimeout(() => searchInput.focus(), 300);
    } else {
        searchInput.value = "";
        renderProducts();
    }
}

function handleSearch(e) {
    const term = e.target.value.toLowerCase().trim();
    if (term === "") {
        renderProducts();
        return;
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.fabric.toLowerCase().includes(term)
    );

    renderProducts(filtered);
}

// --- Scroll reveal Animations ---
function setupScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");
    
    // Instantly activate elements visible near viewport on page load
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
            el.classList.add("active");
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "50px"
    });

    reveals.forEach(reveal => {
        if (!reveal.classList.contains("active")) {
            observer.observe(reveal);
        }
    });
}

// --- Toast Toast Notification ---
let toastTimeout;
function showToast(message) {
    clearTimeout(toastTimeout);
    
    const toastText = toast.querySelector(".toast-text");
    toastText.textContent = message;
    
    toast.classList.add("show");
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ============================================
// GLOBAL POLICY STRINGS
// ============================================
const shippingPolicyHtml = `
    <h2 style="margin-bottom: 20px; color: var(--primary);">Shipping Details</h2>
    <p>At Bin Saeed Fabrics, we ensure that your luxury wear reaches you safely and promptly.</p>
    <ul>
        <li><strong>Delivery Time:</strong> Standard delivery takes 3-5 working days within Pakistan.</li>
        <li><strong>Shipping Fee:</strong> A flat rate of Rs. 250 applies to all standard orders.</li>
        <li><strong>Order Tracking:</strong> Once dispatched, a tracking ID will be shared via email/SMS.</li>
        <li><strong>Our Responsibility:</strong> Humari zimedari hai ke parcel aap tak safely deliver ho. The parcel is our responsibility until it reaches your doorstep.</li>
    </ul>
`;

const faqHtml = `
    <h2 style="margin-bottom: 20px; color: var(--primary);">Frequently Asked Questions</h2>
    <p><strong>Q: What fabrics do you offer?</strong><br>A: We specialize in pure lawn, cotton net, cambric, and chiffon fabrics.</p>
    <p><strong>Q: How do I track my order?</strong><br>A: You will receive a tracking link via WhatsApp or SMS once dispatched.</p>
    <p><strong>Q: Do you ship internationally?</strong><br>A: Currently, we operate within Pakistan, but international shipping is coming soon.</p>
`;

const returnPolicyHtml = `
    <h2 style="margin-bottom: 20px; color: var(--primary);">Return & Exchange Policy</h2>
    <p>We strive to provide the finest quality fabrics. Please read our policy carefully:</p>
    <ul>
        <li><strong>No Returns:</strong> We do not offer cash refunds or returns on sold items.</li>
        <li><strong>Exchange for Size Only:</strong> Exchange is only possible if there is a sizing issue with a stitched article. Exchange will only be made with another dress/size, not for cash.</li>
        <li><strong>Damaged Items:</strong> Agar customer ke paas kapra phat jaye ya kharab ho jaye, to kisi qisam ka exchange nahi hoga. (If the item is torn or damaged after delivery by the customer, it cannot be exchanged under any circumstances.)</li>
        <li><strong>Claim Window:</strong> Any valid exchange requests (like size issues or incorrect item sent by us) must be raised within 3 days of delivery.</li>
    </ul>
`;

const privacyPolicyHtml = `
    <h2 style="margin-bottom: 20px; color: var(--primary);">Privacy Policy</h2>
    <p>Bin Saeed Fabrics respects your privacy. We collect only necessary information (name, phone, address) to fulfill your orders.</p>
    <p>Your data is securely stored and is never sold or shared with third-party marketing agencies. By using our website, you consent to our use of cookies to improve your shopping experience.</p>
`;

// ============================================
// Data & State Initialization (Fixed)
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    // Policy Modal Close Logic
    const policyModal = document.getElementById("policy-modal");
    if(policyModal) {
        policyModal.querySelector(".policy-close-btn").addEventListener("click", () => {
            policyModal.classList.remove("open");
        });
        policyModal.querySelector(".modal-backdrop").addEventListener("click", () => {
            policyModal.classList.remove("open");
        });
    }
});
// Reviews Cycler Logic
// ============================================
const reviewsData = [
    { text: "Kapra bohat acha hai, exactly as shown in pictures.", author: "Fatima A.", stars: 5 },
    { text: "The embroidered lawn is absolutely beautiful. Very comfortable for summer.", author: "Ayesha K.", stars: 5 },
    { text: "Fabric quality is top notch! 100% pure cotton.", author: "Sana T.", stars: 5 },
    { text: "Delivery time pe mili aur suit bohat pyara hai.", author: "Hina M.", stars: 4 },
    { text: "I love the intricate embroidery on the neckline. Worth the price.", author: "Zainab", stars: 5 },
    { text: "Color bilkul fade nahi hua dhone ke baad. Best lawn!", author: "Sadia", stars: 5 },
    { text: "Mujhe mera parcel mil gaya, bohat acha kapra hai.", author: "Rubina", stars: 4 },
    { text: "Fast shipping and the material is so breathable.", author: "Maria S.", stars: 5 },
    { text: "Bohat zabardast fabric hai, lawn bilkul soft hai.", author: "Kiran", stars: 5 },
    { text: "The digital print quality is amazing. Highly recommended.", author: "Nida", stars: 5 },
    { text: "Bhai kya lawn hai, pure cotton bilkul! Recommend karungi sabko.", author: "Amna", stars: 5 },
    { text: "Very elegant designs. Will definitely shop again.", author: "Sobia", stars: 4 },
    { text: "Embroidered patch bohat neat tha. Loving it.", author: "Hafsa", stars: 5 },
    { text: "Colors real me aur bhi pyare hain.", author: "Mehwish", stars: 5 },
    { text: "Suit ki length bilkul perfect thi. Good experience.", author: "Anum", stars: 4 },
    { text: "Zabardast! Pehli dafa order kiya aur satisfy hui.", author: "Uzma", stars: 5 },
    { text: "The lawn fabric feels very premium. Embroidery is fine.", author: "Sumaira", stars: 5 },
    { text: "Stitching karwai thi, bohot pyari fall aayi hai kapre ki.", author: "Iqra", stars: 5 },
    { text: "Bohot reasonable price mein itna acha suit mil gaya.", author: "Farah", stars: 4 },
    { text: "I gifted this to my mother, she loved it!", author: "Zara", stars: 5 },
    { text: "Excellent customer service and premium quality.", author: "Sehrish", stars: 5 },
    { text: "Bilkul wesa hi hai jesa tasveer mein tha. No difference.", author: "Madiha", stars: 5 },
    { text: "Garmiyon ke hisaab se best material hai.", author: "Noreen", stars: 5 },
    { text: "Embroidery mein koi thread kharab nahi tha. Very neat.", author: "Tuba", stars: 4 },
    { text: "MashaAllah itne achay suits hain, dil khush ho gaya.", author: "Khadija", stars: 5 },
    { text: "The thread work is gorgeous. Fabric is 10/10.", author: "Beenish", stars: 5 },
    { text: "Fabric bohat thanda aur soft hai. Recommended.", author: "Ghazala", stars: 5 },
    { text: "Quick delivery. Overall very satisfied with the purchase.", author: "Kinza", stars: 4 },
    { text: "Meri taraf se 5 stars. Bohat umda quality.", author: "Bushra", stars: 5 },
    { text: "Beautiful collection. Pure lawn as promised.", author: "Rabia", stars: 5 },
    { text: "First time buy kiya, aur ab main hamesha yahin se lungi.", author: "Asma", stars: 5 },
    { text: "Kapre ki shine bohot achi hai. Worth every penny.", author: "Naheed", stars: 5 },
    { text: "Embroidery bilkul wesi hai jesi main chahti thi.", author: "Shumaila", stars: 4 },
    { text: "I have sensitive skin but this fabric is very soothing.", author: "Areeba", stars: 5 },
    { text: "Very soft and flowy material.", author: "Maryam", stars: 4 },
    { text: "Jesa dikhaya wesa hi bheja. Thank you!", author: "Fozia", stars: 5 },
    { text: "Very rich and vibrant colors. Embroidery is stunning.", author: "Hoorain", stars: 5 },
    { text: "Itna pyara suit, sabne tareef ki. Amazing!", author: "Laiba", stars: 5 },
    { text: "Order 2 din mein receive ho gaya. Best service.", author: "Sara", stars: 5 },
    { text: "Bohat pyara suit! Quality pe koi compromise nahi.", author: "Tahira", stars: 5 },
    { text: "Original brand jaisa feel hai bilkul. Excellent.", author: "Aiman", stars: 4 },
    { text: "Prices are great for the quality provided.", author: "Samina", stars: 5 },
    { text: "Thank you for the fast delivery. Kapra shandar hai.", author: "Roohi", stars: 5 },
    { text: "Bohot achi lawn hai. Shrink bhi zyada nahi hui.", author: "Shazia", stars: 4 },
    { text: "I'll order the black one next. Outstanding stuff.", author: "Gul", stars: 5 },
    { text: "Mery expectations se barh ke tha.", author: "Aqsa", stars: 5 },
    { text: "Color combination bohot hit hai.", author: "Ayesha N.", stars: 5 },
    { text: "Great fabric! It stays fresh even after washing.", author: "Rimsha", stars: 4 },
    { text: "Bohot shukriya itna pyara suit bhejne ke liye.", author: "Hafiza", stars: 5 },
    { text: "Beautiful embroidery on the daman and sleeves.", author: "Emaan", stars: 5 }
];

function cycleReviews() {
    const grid = document.getElementById("dynamic-reviews-grid");
    if(!grid) return;
    
    // Fade out
    grid.style.opacity = 0;
    
    setTimeout(() => {
        // Pick 3 random
        let shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        
        grid.innerHTML = "";
        selected.forEach((rev) => {
            let starsHtml = "";
            for(let i=0; i<5; i++) {
                if(i < rev.stars) {
                    starsHtml += `<i class="fas fa-star animated-star" style="animation-delay: 0.${i}s;"></i>`;
                } else {
                    starsHtml += `<i class="far fa-star animated-star" style="animation-delay: 0.${i}s;"></i>`;
                }
            }
            grid.innerHTML += `
                <div class="review-card">
                    <div class="review-stars">
                        ${starsHtml}
                    </div>
                    <p class="review-text">"${rev.text}"</p>
                    <h4 class="review-author">- ${rev.author}</h4>
                </div>
            `;
        });
        
        // Fade in
        grid.style.opacity = 1;
    }, 500);
}
