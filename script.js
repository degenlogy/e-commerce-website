/* ==========================================================================
   PRODUCT DATA
   ========================================================================== */
const products = [
    { id: 1, name: "Sony WH-1000XM5 Wireless Headphones", category: "Electronics", price: 348, oldPrice: 399, rating: 4.8, reviews: 1245, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80", description: "Industry-leading noise cancellation, up to 30-hour battery life, and superior sound quality.", colors: ["Black", "Silver"], sizes: [], stock: 15, badge: "Sale" },
    { id: 2, name: "Apple Watch Series 9", category: "Electronics", price: 399, oldPrice: null, rating: 4.9, reviews: 856, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80", description: "The most powerful chip in Apple Watch ever. A magical new way to use your watch without touching the screen.", colors: ["Midnight", "Starlight", "Red"], sizes: ["41mm", "45mm"], stock: 8, badge: "New" },
    { id: 3, name: "Minimalist Leather Backpack", category: "Fashion", price: 129, oldPrice: 159, rating: 4.6, reviews: 342, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", description: "Crafted from full-grain leather. Perfect for your daily commute or weekend getaways.", colors: ["Brown", "Black"], sizes: [], stock: 20, badge: null },
    { id: 4, name: "Organic Cotton Essentials T-Shirt", category: "Fashion", price: 35, oldPrice: null, rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80", description: "A comfortable, breathable everyday tee made from 100% organic cotton.", colors: ["White", "Black", "Grey"], sizes: ["S", "M", "L", "XL"], stock: 100, badge: null },
    { id: 5, name: "Ceramic Pour-Over Coffee Maker", category: "Home & Living", price: 45, oldPrice: 60, rating: 4.7, reviews: 210, image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&w=600&q=80", description: "Elevate your morning routine with this beautifully crafted ceramic coffee dripper.", colors: ["White", "Charcoal"], sizes: [], stock: 12, badge: "Sale" },
    { id: 6, name: "Smart Home Security Camera", category: "Electronics", price: 89, oldPrice: null, rating: 4.3, reviews: 452, image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&w=600&q=80", description: "1080p HD video, two-way audio, and night vision capabilities to keep your home safe.", colors: ["White", "Black"], sizes: [], stock: 0, badge: "Sold Out" },
    { id: 7, name: "Matte Black Sunglasses", category: "Accessories", price: 75, oldPrice: null, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", description: "Polarized lenses with UV400 protection in a sleek matte black frame.", colors: ["Black"], sizes: [], stock: 30, badge: null },
    { id: 8, name: "Hydrating Facial Serum", category: "Beauty", price: 42, oldPrice: null, rating: 4.9, reviews: 673, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80", description: "Packed with hyaluronic acid and Vitamin C for a radiant, glowing complexion.", colors: [], sizes: [], stock: 45, badge: "Best Seller" },
    { id: 9, name: "Yoga Mat with Alignment Lines", category: "Sports", price: 65, oldPrice: 85, rating: 4.7, reviews: 231, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80", description: "Eco-friendly, non-slip mat with intuitive alignment lines for perfect posture.", colors: ["Blue", "Purple", "Black"], sizes: [], stock: 18, badge: "Sale" },
    { id: 10, name: "Noise-Isolating Earbuds", category: "Electronics", price: 149, oldPrice: null, rating: 4.5, reviews: 312, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", description: "True wireless earbuds offering crisp sound and secure fit for workouts.", colors: ["White", "Black"], sizes: [], stock: 25, badge: null },
    { id: 11, name: "Premium Wool Throw Blanket", category: "Home & Living", price: 110, oldPrice: 140, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1580828369066-6b22eb0bbfa6?auto=format&fit=crop&w=600&q=80", description: "Incredibly soft 100% merino wool throw, perfect for cozying up on the sofa.", colors: ["Grey", "Beige"], sizes: [], stock: 5, badge: "Sale" },
    { id: 12, name: "Running Shoes - Speed Pro", category: "Sports", price: 135, oldPrice: null, rating: 4.6, reviews: 418, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", description: "Lightweight running shoes engineered for speed, comfort, and durability.", colors: ["Red", "Blue", "Black"], sizes: ["8", "9", "10", "11", "12"], stock: 40, badge: null },
    { id: 13, name: "Stainless Steel Water Bottle", category: "Accessories", price: 28, oldPrice: null, rating: 4.7, reviews: 564, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80", description: "Insulated 32oz bottle keeps drinks cold for 24 hours or hot for 12 hours.", colors: ["Black", "Teal", "White"], sizes: [], stock: 60, badge: null },
    { id: 14, name: "Nourishing Night Cream", category: "Beauty", price: 58, oldPrice: 75, rating: 4.8, reviews: 290, image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80", description: "Restore your skin overnight with this rich, ceramide-packed moisturizing cream.", colors: [], sizes: [], stock: 15, badge: "Sale" },
    { id: 15, name: "Linen Blend Button-Down Shirt", category: "Fashion", price: 65, oldPrice: null, rating: 4.4, reviews: 92, image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=600&q=80", description: "Breezy linen-cotton blend shirt perfect for warm weather and casual outings.", colors: ["Navy", "White", "Olive"], sizes: ["M", "L", "XL"], stock: 22, badge: null },
    { id: 16, name: "Adjustable Dumbbell Set", category: "Sports", price: 199, oldPrice: 249, rating: 4.9, reviews: 875, image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80", description: "Space-saving adjustable dumbbells spanning from 5 to 50 lbs per hand.", colors: [], sizes: [], stock: 4, badge: "Sale" }
];

const categories = ["All", "Electronics", "Fashion", "Home & Living", "Accessories", "Beauty", "Sports"];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
let state = {
    cart: loadFromStorage('nova_cart') || [],
    wishlist: loadFromStorage('nova_wishlist') || [],
    viewed: loadFromStorage('nova_viewed') || [],
    theme: loadFromStorage('nova_theme') || 'system',
    currentCategory: 'All',
    searchQuery: '',
    sortType: 'featured',
    filters: {
        price: [],
        rating: [],
        stock: []
    }
};

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const DOM = {
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    views: document.querySelectorAll('.view'),
    logo: document.getElementById('logo'),
    
    // Drawers & Modals
    overlay: document.getElementById('overlay'),
    mobileMenu: document.getElementById('mobile-menu-drawer'),
    cartDrawer: document.getElementById('cart-drawer'),
    wishlistDrawer: document.getElementById('wishlist-drawer'),
    filterDrawer: document.getElementById('filter-drawer'),
    quickViewModal: document.getElementById('quick-view-modal'),
    
    // Buttons
    btnTheme: document.getElementById('btn-theme'),
    btnMobileMenu: document.getElementById('btn-mobile-menu'),
    btnCart: document.getElementById('btn-cart'),
    btnWishlist: document.getElementById('btn-wishlist'),
    btnCheckout: document.getElementById('btn-checkout'),
    btnMobileFilters: document.getElementById('btn-mobile-filters'),
    closeDrawers: document.querySelectorAll('.close-drawer'),
    closeModals: document.querySelectorAll('.close-modal'),
    
    // Grid & Content
    categoriesContainer: document.getElementById('categories-container'),
    productGrid: document.getElementById('main-product-grid'),
    sortSelect: document.getElementById('sort-select'),
    
    // Search
    headerSearch: document.getElementById('header-search'),
    mobileSearch: document.getElementById('mobile-search-input'),
    searchResults: document.getElementById('search-results'),
    
    // Cart & Wishlist Elements
    cartBadge: document.getElementById('cart-badge'),
    cartCount: document.getElementById('cart-drawer-count'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    wishlistBadge: document.getElementById('wishlist-badge'),
    wishlistItemsContainer: document.getElementById('wishlist-items-container'),
    
    // Cart Totals
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscount: document.getElementById('cart-discount'),
    cartTax: document.getElementById('cart-tax'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    
    // Product Page
    btnBackHome: document.getElementById('btn-back-home'),
    relatedProducts: document.getElementById('related-products'),
    viewedProducts: document.getElementById('viewed-products'),
    
    // Checkout
    btnBackCart: document.getElementById('btn-back-cart'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutItems: document.getElementById('checkout-items'),
    coSubtotal: document.getElementById('co-subtotal'),
    coDiscount: document.getElementById('co-discount'),
    coTax: document.getElementById('co-tax'),
    coShipping: document.getElementById('co-shipping'),
    coTotal: document.getElementById('co-total'),
    
    // Toasts
    toastContainer: document.getElementById('toast-container')
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init() {
    applyTheme(state.theme);
    renderCategories();
    renderProductGrid();
    updateCartUI();
    updateWishlistUI();
    renderRecentlyViewed();
    setupEventListeners();
    
    // Copy desktop filters to mobile
    const mobileFilter = document.getElementById('mobile-filter-container');
    const desktopFilter = document.getElementById('desktop-filter-container');
    if (mobileFilter && desktopFilter) {
        mobileFilter.innerHTML = desktopFilter.innerHTML;
    }
    attachFilterListeners();
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function setupEventListeners() {
    // Navigation
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            
            closeAllDrawers();
            
            if(view === 'home' || view === 'shop' || view === 'categories' || view === 'sale') {
                switchView('view-home');
                if (view === 'shop') document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'});
                if (view === 'categories') document.querySelector('.categories-section').scrollIntoView({behavior: 'smooth'});
                if (view === 'sale') {
                    state.sortType = 'discount';
                    DOM.sortSelect.value = 'discount';
                    renderProductGrid();
                    document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'});
                }
            }
        });
    });

    DOM.logo?.addEventListener('click', () => { switchView('view-home'); window.scrollTo(0,0); });
    DOM.btnBackHome?.addEventListener('click', () => { switchView('view-home'); });
    document.getElementById('btn-promo-shop').addEventListener('click', () => {
        state.sortType = 'discount'; DOM.sortSelect.value = 'discount';
        renderProductGrid(); document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'});
    });

    // Theme Toggle
    DOM.btnTheme?.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        showToast(`Switched to ${newTheme} mode`, 'success');
    });

    // Drawers
    DOM.btnMobileMenu?.addEventListener('click', () => openDrawer(DOM.mobileMenu));
    DOM.btnCart?.addEventListener('click', () => openDrawer(DOM.cartDrawer));
    DOM.btnWishlist?.addEventListener('click', () => openDrawer(DOM.wishlistDrawer));
    DOM.btnMobileFilters?.addEventListener('click', () => openDrawer(DOM.filterDrawer));
    
    DOM.closeDrawers.forEach(btn => btn.addEventListener('click', closeAllDrawers));
    DOM.overlay?.addEventListener('click', () => { closeAllDrawers(); closeModal(); });
    DOM.closeModals.forEach(btn => btn.addEventListener('click', closeModal));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeAllDrawers(); closeModal(); } });

    // Search
    const handleSearch = (e) => {
        const query = e.target.value.trim().toLowerCase();
        if(query.length > 0) {
            const results = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
            if(e.target.id === 'header-search') {
                DOM.searchResults.classList.add('active');
                if(results.length === 0) {
                    DOM.searchResults.innerHTML = '<div style="padding: 1rem; color: var(--text-muted);">No products found.</div>';
                } else {
                    DOM.searchResults.innerHTML = results.slice(0, 5).map(p => `
                        <div class="search-result-item" data-id="${p.id}">
                            <img src="${p.image}" class="search-result-img" alt="${p.name}">
                            <div class="search-result-info">
                                <h5>${p.name}</h5>
                                <p>$${p.price}</p>
                            </div>
                        </div>
                    `).join('');
                }
            } else {
                // Mobile search triggers grid update
                state.searchQuery = query;
                renderProductGrid();
                closeAllDrawers();
                document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'});
            }
        } else {
            DOM.searchResults.classList.remove('active');
            state.searchQuery = '';
            if(e.target.id === 'mobile-search-input') renderProductGrid();
        }
    };
    
    DOM.headerSearch?.addEventListener('input', handleSearch);
    DOM.mobileSearch?.addEventListener('change', handleSearch);
    
    // Close search dropdown on outside click
    document.addEventListener('click', e => {
        if(!e.target.closest('.search-container')) DOM.searchResults.classList.remove('active');
    });
    
    // Search result click
    DOM.searchResults.addEventListener('click', e => {
        const item = e.target.closest('.search-result-item');
        if(item) {
            openProductPage(parseInt(item.dataset.id));
            DOM.searchResults.classList.remove('active');
            DOM.headerSearch.value = '';
        }
    });

    // Sorting
    DOM.sortSelect?.addEventListener('change', e => {
        state.sortType = e.target.value;
        renderProductGrid();
    });

    // Checkout
    DOM.btnCheckout?.addEventListener('click', () => {
        if(state.cart.length === 0) { showToast("Your cart is empty", "error"); return; }
        closeAllDrawers();
        switchView('view-checkout');
        renderCheckoutSummary();
    });
    DOM.btnBackCart?.addEventListener('click', () => { switchView('view-home'); openDrawer(DOM.cartDrawer); });
    DOM.checkoutForm?.addEventListener('submit', handleCheckout);

    // Global Event Delegation for Product Interactions
    document.addEventListener('click', e => {
        // Wishlist Toggle
        const wishlistBtn = e.target.closest('.btn-wishlist-toggle');
        if(wishlistBtn) {
            e.preventDefault(); e.stopPropagation();
            toggleWishlist(parseInt(wishlistBtn.dataset.id));
        }
        
        // Add to Cart from Grid/Quick View
        const addCartBtn = e.target.closest('.btn-add-cart');
        if(addCartBtn) {
            e.preventDefault(); e.stopPropagation();
            const id = parseInt(addCartBtn.dataset.id);
            const p = products.find(prod => prod.id === id);
            
            if(p.stock === 0) { showToast("Product is out of stock", "error"); return; }
            
            // If product has variants, open Quick View (if from grid)
            if((p.colors.length > 0 || p.sizes.length > 0) && !addCartBtn.classList.contains('from-modal')) {
                openQuickView(id);
                showToast("Please select options", "success");
            } else {
                // Determine variants if in quick view
                let color = p.colors[0] || null;
                let size = p.sizes[0] || null;
                
                if(addCartBtn.classList.contains('from-modal')) {
                    const colorBtn = document.querySelector('#quick-view-modal .variant-btn.color-btn.active');
                    const sizeBtn = document.querySelector('#quick-view-modal .variant-btn.size-btn.active');
                    if(p.colors.length && !colorBtn) { showToast("Please select a color", "error"); return; }
                    if(p.sizes.length && !sizeBtn) { showToast("Please select a size", "error"); return; }
                    color = colorBtn ? colorBtn.dataset.val : null;
                    size = sizeBtn ? sizeBtn.dataset.val : null;
                    const qty = parseInt(document.getElementById('qv-qty').value) || 1;
                    addToCart(id, qty, color, size);
                    closeModal();
                } else {
                    addToCart(id, 1, color, size);
                }
            }
        }
        
        // Quick View
        const qvBtn = e.target.closest('.btn-quick-view');
        if(qvBtn) {
            e.preventDefault(); e.stopPropagation();
            openQuickView(parseInt(qvBtn.dataset.id));
        }

        // Product Details Link (Grid clicks)
        const productLink = e.target.closest('.product-link');
        if(productLink && !e.target.closest('button')) {
            e.preventDefault();
            openProductPage(parseInt(productLink.dataset.id));
        }
    });
}

/* ==========================================================================
   ROUTING & VIEWS
   ========================================================================== */
function switchView(viewId) {
    DOM.views.forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById(viewId);
    if (!targetView) return;
    targetView.classList.add('active');
    
    DOM.navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-view') === (viewId === 'view-home' ? 'home' : null));
    });
    window.scrollTo(0,0);
}

/* ==========================================================================
   RENDERERS & UI
   ========================================================================== */
function applyTheme(theme) {
    if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    state.theme = theme;
    saveToStorage('nova_theme', theme);
}

function openDrawer(drawer) {
    DOM.overlay.classList.add('active');
    drawer.classList.add('open');
}

function closeAllDrawers() {
    DOM.overlay.classList.remove('active');
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
}

function closeModal() {
    DOM.overlay.classList.remove('active');
    DOM.quickViewModal.classList.remove('active');
}

function renderCategories() {
    DOM.categoriesContainer.innerHTML = categories.map(c => `
        <div class="category-card ${c === state.currentCategory ? 'active' : ''}" data-cat="${c}">
            <h3>${c}</h3>
            <p>${c === 'All' ? products.length : products.filter(p => p.category === c).length} Products</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            state.currentCategory = card.dataset.cat;
            renderCategories();
            renderProductGrid();
            document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'});
        });
    });
}

function attachFilterListeners() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const group = cb.name; // price, rating, stock
            if(cb.checked) {
                state.filters[group].push(cb.value);
            } else {
                state.filters[group] = state.filters[group].filter(v => v !== cb.value);
            }
            // Sync mobile/desktop checkboxes
            document.querySelectorAll(`input[name="${group}"][value="${cb.value}"]`).forEach(input => input.checked = cb.checked);
            renderProductGrid();
        });
    });

    document.querySelectorAll('.btn-clear-filters').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            state.filters = { price: [], rating: [], stock: [] };
            renderProductGrid();
        });
    });
}

function filterAndSortProducts() {
    let result = [...products];
    
    // Category
    if(state.currentCategory !== 'All') {
        result = result.filter(p => p.category === state.currentCategory);
    }
    
    // Search
    if(state.searchQuery) {
        result = result.filter(p => p.name.toLowerCase().includes(state.searchQuery) || p.category.toLowerCase().includes(state.searchQuery));
    }
    
    // Filters - Price
    if(state.filters.price.length > 0) {
        result = result.filter(p => {
            return state.filters.price.some(range => {
                const [min, max] = range.split('-').map(Number);
                return p.price >= min && p.price < max;
            });
        });
    }
    
    // Filters - Rating
    if(state.filters.rating.length > 0) {
        const minRating = Math.min(...state.filters.rating.map(Number));
        result = result.filter(p => p.rating >= minRating);
    }
    
    // Filters - Stock
    if(state.filters.stock.length > 0) {
        if(state.filters.stock.includes('in-stock') && !state.filters.stock.includes('out-stock')) {
            result = result.filter(p => p.stock > 0);
        } else if (!state.filters.stock.includes('in-stock') && state.filters.stock.includes('out-stock')) {
            result = result.filter(p => p.stock === 0);
        }
    }
    
    // Sorting
    switch(state.sortType) {
        case 'newest': result.reverse(); break; // Mock newest
        case 'price-asc': result.sort((a,b) => a.price - b.price); break;
        case 'price-desc': result.sort((a,b) => b.price - a.price); break;
        case 'rating': result.sort((a,b) => b.rating - a.rating); break;
        case 'discount': 
            result.sort((a,b) => {
                const dA = a.oldPrice ? ((a.oldPrice - a.price)/a.oldPrice) : 0;
                const dB = b.oldPrice ? ((b.oldPrice - b.price)/b.oldPrice) : 0;
                return dB - dA;
            });
            break;
    }
    
    return result;
}

function createProductCardHTML(p) {
    const isWishlist = state.wishlist.some(item => item.id === p.id);
    const discountStr = p.oldPrice ? `<span class="old">$${p.oldPrice}</span>` : '';
    const badgeHTML = p.badge ? `<div class="product-badge">${p.badge}</div>` : '';
    
    return `
        <div class="product-card product-link" data-id="${p.id}">
            <div class="product-image">
                ${badgeHTML}
                <button class="icon-btn product-wishlist btn-wishlist-toggle ${isWishlist ? 'active' : ''}" data-id="${p.id}" aria-label="Wishlist">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="product-actions-overlay">
                    <button class="btn btn-primary flex-1 btn-add-cart" data-id="${p.id}">Add to Cart</button>
                    <button class="btn btn-outline icon-btn btn-quick-view" data-id="${p.id}" style="background: var(--bg)"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-cat">${p.category}</div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-rating">
                    <span>★</span> ${p.rating} <span>(${p.reviews})</span>
                </div>
                <div class="product-price">
                    $${p.price} ${discountStr}
                </div>
            </div>
        </div>
    `;
}

function renderProductGrid() {
    const filtered = filterAndSortProducts();
    if(filtered.length === 0) {
        DOM.productGrid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 1rem; opacity: 0.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search query.</p>
                <button class="btn btn-outline mt-4 btn-clear-filters">Clear Filters</button>
            </div>
        `;
        // Re-attach clear listener
        const clrBtn = DOM.productGrid.querySelector('.btn-clear-filters');
        if(clrBtn) clrBtn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            state.filters = { price: [], rating: [], stock: [] };
            state.searchQuery = '';
            DOM.headerSearch.value = '';
            renderProductGrid();
        });
    } else {
        DOM.productGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
}

/* ==========================================================================
   PRODUCT PAGE & QUICK VIEW
   ========================================================================== */
function addToRecentlyViewed(id) {
    state.viewed = state.viewed.filter(vId => vId !== id);
    state.viewed.unshift(id);
    if(state.viewed.length > 4) state.viewed.pop();
    saveToStorage('nova_viewed', state.viewed);
    renderRecentlyViewed();
}

function renderRecentlyViewed() {
    if(state.viewed.length === 0) {
        DOM.viewedProducts.innerHTML = '<p class="text-muted w-100">Nothing here yet.</p>';
        return;
    }
    const viewedProds = state.viewed.map(id => products.find(p => p.id === id)).filter(Boolean);
    DOM.viewedProducts.innerHTML = viewedProds.map(createProductCardHTML).join('');
}

function openProductPage(id) {
    const p = products.find(prod => prod.id === id);
    if(!p) return;
    
    addToRecentlyViewed(id);
    
    document.getElementById('pd-main-img').src = p.image;
    document.getElementById('pd-category').textContent = p.category;
    document.getElementById('pd-title').textContent = p.name;
    document.getElementById('pd-rating').innerHTML = `★ ${p.rating} <span style="color:var(--text-muted); font-size: 0.875rem">(${p.reviews} reviews)</span>`;
    document.getElementById('pd-price').textContent = `$${p.price}`;
    
    if(p.oldPrice) {
        document.getElementById('pd-old-price').textContent = `$${p.oldPrice}`;
        document.getElementById('pd-discount').textContent = `Save ${Math.round(((p.oldPrice - p.price)/p.oldPrice)*100)}%`;
        document.getElementById('pd-discount').style.display = 'inline-block';
    } else {
        document.getElementById('pd-old-price').textContent = '';
        document.getElementById('pd-discount').style.display = 'none';
    }
    
    document.getElementById('pd-desc').textContent = p.description;
    
    // Variants
    const renderVariants = (arr, elId, groupElId, type) => {
        const group = document.getElementById(groupElId);
        const container = document.getElementById(elId);
        if(arr.length > 0) {
            group.style.display = 'block';
            container.innerHTML = arr.map((v, i) => `<button class="variant-btn ${type}-btn ${i===0?'active':''}" data-val="${v}">${v}</button>`).join('');
        } else {
            group.style.display = 'none';
            container.innerHTML = '';
        }
    };
    renderVariants(p.colors, 'pd-colors', 'pd-colors-group', 'color');
    renderVariants(p.sizes, 'pd-sizes', 'pd-sizes-group', 'size');
    
    // Variant Selection listeners
    const setupVariantClicks = (containerId, selectorClass) => {
        const container = document.getElementById(containerId);
        container.querySelectorAll(selectorClass).forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll(selectorClass).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    };
    setupVariantClicks('pd-colors', '.color-btn');
    setupVariantClicks('pd-sizes', '.size-btn');
    
    // Stock & Qty
    const stockEl = document.getElementById('pd-stock');
    const qtyInput = document.getElementById('pd-qty');
    qtyInput.value = 1;
    
    if(p.stock > 0) {
        stockEl.textContent = `In Stock (${p.stock} available)`;
        stockEl.className = 'stock-status';
    } else {
        stockEl.textContent = 'Out of Stock';
        stockEl.className = 'stock-status out';
    }
    
    // Related
    const related = products.filter(prod => prod.category === p.category && prod.id !== p.id).slice(0, 4);
    DOM.relatedProducts.innerHTML = related.map(createProductCardHTML).join('');
    
    // Buttons (Clear old listeners via cloning if necessary, but here we just reassign onclick)
    const addCartBtn = document.getElementById('pd-add-cart');
    addCartBtn.onclick = () => {
        if(p.stock === 0) { showToast('Out of stock', 'error'); return; }
        const colorBtn = document.querySelector('#pd-colors .color-btn.active');
        const sizeBtn = document.querySelector('#pd-sizes .size-btn.active');
        
        if(p.colors.length && !colorBtn) { showToast("Please select a color", "error"); return; }
        if(p.sizes.length && !sizeBtn) { showToast("Please select a size", "error"); return; }
        
        const color = colorBtn ? colorBtn.dataset.val : null;
        const size = sizeBtn ? sizeBtn.dataset.val : null;
        const qty = parseInt(qtyInput.value) || 1;
        
        addToCart(p.id, qty, color, size);
    };
    
    const wishlistBtn = document.getElementById('pd-wishlist');
    wishlistBtn.className = `btn btn-outline icon-btn ${state.wishlist.some(w=>w.id===p.id)?'active text-danger':''}`;
    wishlistBtn.onclick = () => {
        toggleWishlist(p.id);
        wishlistBtn.classList.toggle('active');
        wishlistBtn.classList.toggle('text-danger');
    };

    // Qty controls
    document.getElementById('pd-qty-inc').onclick = () => { if(qtyInput.value < p.stock) qtyInput.value++; };
    document.getElementById('pd-qty-dec').onclick = () => { if(qtyInput.value > 1) qtyInput.value--; };

    switchView('view-product');
}

function openQuickView(id) {
    const p = products.find(prod => prod.id === id);
    if(!p) return;
    
    const discountStr = p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span> <span class="discount-badge">Save ${Math.round(((p.oldPrice - p.price)/p.oldPrice)*100)}%</span>` : '';
    
    const renderVariants = (arr, type) => {
        if(!arr.length) return '';
        return `
            <div class="option-group">
                <h4>${type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <div class="variant-selector" id="qv-${type}s">
                    ${arr.map((v,i) => `<button class="variant-btn ${type}-btn ${i===0?'active':''}" data-val="${v}">${v}</button>`).join('')}
                </div>
            </div>
        `;
    };

    document.getElementById('qv-container').innerHTML = `
        <div class="main-image-container"><img src="${p.image}" alt="${p.name}"></div>
        <div class="product-details">
            <span class="product-category">${p.category}</span>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${p.name}</h2>
            <div class="product-rating" style="margin-bottom: 1rem;">★ ${p.rating} <span>(${p.reviews})</span></div>
            <div class="product-price-row" style="margin-bottom: 1rem;">
                <span class="price" style="font-size: 1.5rem;">$${p.price}</span>
                ${discountStr}
            </div>
            <p class="product-description" style="font-size: 0.875rem; margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${p.description}</p>
            
            ${renderVariants(p.colors, 'color')}
            ${renderVariants(p.sizes, 'size')}
            
            <div class="product-actions" style="margin-top: auto;">
                <div class="qty-control">
                    <button class="qty-btn" onclick="const i=document.getElementById('qv-qty'); if(i.value>1) i.value--">-</button>
                    <input type="number" id="qv-qty" value="1" min="1" max="${p.stock}" readonly>
                    <button class="qty-btn" onclick="const i=document.getElementById('qv-qty'); if(i.value<${p.stock}) i.value++">+</button>
                </div>
                <div class="stock-status ${p.stock === 0 ? 'out' : ''}">${p.stock > 0 ? 'In Stock' : 'Out of Stock'}</div>
            </div>
            <div class="flex-gap mt-4">
                <button class="btn btn-primary flex-1 btn-add-cart from-modal" data-id="${p.id}">Add to Cart</button>
                <button class="btn btn-outline flex-1" onclick="closeModal(); openProductPage(${p.id})">Full Details</button>
            </div>
        </div>
    `;

    // Attach variant clicks for QV
    ['color', 'size'].forEach(type => {
        const container = document.getElementById(`qv-${type}s`);
        if(container) {
            container.querySelectorAll(`.${type}-btn`).forEach(btn => {
                btn.addEventListener('click', () => {
                    container.querySelectorAll(`.${type}-btn`).forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });
        }
    });

    DOM.overlay.classList.add('active');
    DOM.quickViewModal.classList.add('active');
}

/* ==========================================================================
   CART SYSTEM
   ========================================================================== */
function addToCart(id, qty, color, size) {
    const p = products.find(prod => prod.id === id);
    if(!p) return;
    
    const existing = state.cart.find(item => item.id === id && item.color === color && item.size === size);
    
    if(existing) {
        if(existing.qty + qty > p.stock) {
            showToast(`Only ${p.stock} units available.`, 'warning');
            existing.qty = p.stock;
        } else {
            existing.qty += qty;
        }
    } else {
        if (qty > p.stock) qty = p.stock;
        state.cart.push({ id, qty, color, size, price: p.price, oldPrice: p.oldPrice, name: p.name, image: p.image });
    }
    
    saveToStorage('nova_cart', state.cart);
    updateCartUI();
    showToast('Added to cart', 'success');
    openDrawer(DOM.cartDrawer);
}

function updateCartQty(index, delta) {
    const item = state.cart[index];
    const p = products.find(prod => prod.id === item.id);
    
    let newQty = item.qty + delta;
    if(newQty < 1) newQty = 1;
    if(newQty > p.stock) {
        newQty = p.stock;
        showToast('Maximum stock reached', 'warning');
    }
    
    item.qty = newQty;
    saveToStorage('nova_cart', state.cart);
    updateCartUI();
}

function removeFromCart(index) {
    state.cart.splice(index, 1);
    saveToStorage('nova_cart', state.cart);
    updateCartUI();
    showToast('Item removed', 'success');
}

function updateCartUI() {
    // Badges
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    DOM.cartBadge.textContent = totalItems;
    DOM.cartCount.textContent = totalItems;
    
    if(totalItems === 0) {
        DOM.cartBadge.style.display = 'none';
        DOM.cartItemsContainer.innerHTML = `
            <div style="text-align:center; padding: 2rem 0; color: var(--text-muted);">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 1rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <p>Your cart is empty.</p>
                <button class="btn btn-outline mt-4 close-drawer" onclick="document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'})">Start Shopping</button>
            </div>`;
    } else {
        DOM.cartBadge.style.display = 'flex';
        DOM.cartItemsContainer.innerHTML = state.cart.map((item, index) => {
            const variantText = [item.color, item.size].filter(Boolean).join(' | ');
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        ${variantText ? `<div class="cart-item-variant">${variantText}</div>` : ''}
                        <div class="cart-item-bottom">
                            <div class="qty-control" style="height: 30px; font-size: 0.875rem;">
                                <button class="qty-btn" style="width:26px; height:26px" onclick="updateCartQty(${index}, -1)">-</button>
                                <input type="number" value="${item.qty}" style="width:30px" readonly>
                                <button class="qty-btn" style="width:26px; height:26px" onclick="updateCartQty(${index}, 1)">+</button>
                            </div>
                            <div style="text-align: right">
                                <div style="font-weight: 600">$${item.price * item.qty}</div>
                                <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Totals
    let subtotal = 0;
    let discountTotal = 0;
    
    state.cart.forEach(item => {
        subtotal += item.price * item.qty;
        if(item.oldPrice) discountTotal += (item.oldPrice - item.price) * item.qty;
    });
    
    const tax = subtotal * 0.08;
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
    const total = subtotal + tax + shipping;
    
    DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    DOM.cartDiscount.textContent = `-$${discountTotal.toFixed(2)}`;
    DOM.cartTax.textContent = `$${tax.toFixed(2)}`;
    DOM.cartShipping.textContent = shipping === 0 ? (subtotal === 0 ? '$0.00' : 'Free') : `$${shipping.toFixed(2)}`;
    DOM.cartTotal.textContent = `$${total.toFixed(2)}`;
    
    DOM.btnCheckout.disabled = totalItems === 0;
}

/* ==========================================================================
   WISHLIST SYSTEM
   ========================================================================== */
function toggleWishlist(id) {
    const p = products.find(prod => prod.id === id);
    if(!p) return;
    
    const index = state.wishlist.findIndex(item => item.id === id);
    if(index > -1) {
        state.wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'success');
    } else {
        state.wishlist.push(p);
        showToast('Added to wishlist', 'success');
    }
    
    saveToStorage('nova_wishlist', state.wishlist);
    updateWishlistUI();
    
    // Update active state in grid if currently visible
    document.querySelectorAll(`.btn-wishlist-toggle[data-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('active', index === -1);
    });
}

function updateWishlistUI() {
    DOM.wishlistBadge.textContent = state.wishlist.length;
    DOM.wishlistBadge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    
    if(state.wishlist.length === 0) {
        DOM.wishlistItemsContainer.innerHTML = `
            <div style="text-align:center; padding: 2rem 0; color: var(--text-muted);">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 1rem;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <p>Your wishlist is empty.</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem">Save products you love and find them here.</p>
            </div>`;
    } else {
        DOM.wishlistItemsContainer.innerHTML = state.wishlist.map(item => `
            <div class="cart-item" style="align-items: center">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" style="cursor:pointer" onclick="openProductPage(${item.id}); closeAllDrawers();">
                <div class="cart-item-info">
                    <div class="cart-item-title" style="cursor:pointer" onclick="openProductPage(${item.id}); closeAllDrawers();">${item.name}</div>
                    <div style="font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem;">$${item.price}</div>
                    <div class="flex-gap">
                        <button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.75rem" onclick="toggleWishlist(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

/* ==========================================================================
   CHECKOUT SYSTEM
   ========================================================================== */
function renderCheckoutSummary() {
    DOM.checkoutItems.innerHTML = state.cart.map(item => {
        const variantText = [item.color, item.size].filter(Boolean).join(' | ');
        return `
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem; align-items: center;">
                <img src="${item.image}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-md)">
                <div style="flex:1">
                    <div style="font-weight: 600; font-size: 0.875rem; line-height: 1.2; margin-bottom: 0.25rem;">${item.name}</div>
                    ${variantText ? `<div style="font-size: 0.75rem; color: var(--text-muted)">${variantText}</div>` : ''}
                </div>
                <div style="font-size: 0.875rem; text-align: right">
                    <div>${item.qty} x $${item.price}</div>
                    <div style="font-weight: 600">$${item.qty * item.price}</div>
                </div>
            </div>
        `;
    }).join('');
    
    DOM.coSubtotal.textContent = DOM.cartSubtotal.textContent;
    DOM.coDiscount.textContent = DOM.cartDiscount.textContent;
    DOM.coTax.textContent = DOM.cartTax.textContent;
    DOM.coShipping.textContent = DOM.cartShipping.textContent;
    DOM.coTotal.textContent = DOM.cartTotal.textContent;
}

function handleCheckout(e) {
    e.preventDefault();
    const btn = DOM.checkoutForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Processing...";
    btn.disabled = true;
    
    // Simulate network request
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        
        showToast("Order Confirmed! Thank you.", "success");
        state.cart = [];
        saveToStorage('nova_cart', state.cart);
        updateCartUI();
        
        DOM.checkoutForm.reset();
        switchView('view-home');
        window.scrollTo(0,0);
    }, 1500);
}

/* ==========================================================================
   UTILITIES & HELPERS
   ========================================================================== */
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.warn("Could not save to localStorage", e);
    }
}

function loadFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.warn("Could not read from localStorage", e);
        return null;
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' 
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
        
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div>${message}</div>
        <button class="toast-close" aria-label="Close"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    `;
    
    DOM.toastContainer.appendChild(toast);
    
    // Trigger slide in
    requestAnimationFrame(() => toast.classList.add('show'));
    
    const removeToast = () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    };
    
    toast.querySelector('.toast-close').addEventListener('click', removeToast);
    setTimeout(removeToast, 3500);
}

// Bootstrap Application
init();