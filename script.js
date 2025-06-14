// Enhanced APEX Website JavaScript with Full Functionality

class ApexWebsite {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('apexCart')) || [];
        this.currentPage = 'home';
        this.products = this.generateProducts();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSearch();
        this.setupCart();
        this.setupProductInteractions();
        this.setupAnimations();
        this.setupMobileMenu();
        this.setupAllButtons();
        this.updateCartDisplay();
        console.log('APEX Website Enhanced - All systems ready! 🚀');
    }

    // Generate comprehensive product catalog
    generateProducts() {
        return [
            // Men's Products
            { id: 1, name: 'APEX Max 270 Premium', category: 'men', type: 'shoes', price: 180, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop', description: 'Premium lifestyle shoes with Max cushioning' },
            { id: 2, name: 'APEX Elite 1 Mid Premium', category: 'men', type: 'shoes', price: 130, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop', description: 'Classic basketball shoes with premium leather' },
            { id: 3, name: 'APEX React Infinity Elite', category: 'men', type: 'shoes', price: 190, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop', description: 'Premium running shoes with React foam' },
            { id: 4, name: 'APEX Dri-FIT Premium Tee', category: 'men', type: 'clothing', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'Premium moisture-wicking t-shirt' },
            { id: 5, name: 'APEX Elite Basketball Shorts', category: 'men', type: 'clothing', price: 65, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&h=500&fit=crop', description: 'Professional basketball shorts' },
            { id: 6, name: 'APEX Premium Backpack', category: 'men', type: 'accessories', price: 85, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', description: 'Premium sports backpack with laptop compartment' },
            { id: 7, name: 'APEX Elite Socks Pack', category: 'men', type: 'accessories', price: 25, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&h=500&fit=crop', description: 'Premium athletic socks 3-pack' },
            { id: 8, name: 'APEX Force 1 Premium', category: 'men', type: 'shoes', price: 140, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', description: 'Classic premium basketball shoes' },
            { id: 9, name: 'APEX Tech Fleece Hoodie', category: 'men', type: 'clothing', price: 120, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'Premium tech fleece hoodie' },

            // Women's Products
            { id: 11, name: 'APEX Max 97 Women\'s', category: 'women', type: 'shoes', price: 170, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&h=500&fit=crop', description: 'Iconic women\'s lifestyle shoes' },
            { id: 12, name: 'APEX Premium Backpack', category: 'women', type: 'accessories', price: 100, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', description: 'Premium sports backpack with laptop compartment' },
            { id: 13, name: 'APEX Zoom Pegasus Women\'s', category: 'women', type: 'shoes', price: 130, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop', description: 'Premium running shoes for women' },
            { id: 14, name: 'APEX Pro Dri-FIT Women\'s Top', category: 'women', type: 'clothing', price: 40, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop', description: 'Premium athletic training top' },
            { id: 15, name: 'APEX Yoga Luxe Women\'s Leggings', category: 'women', type: 'clothing', price: 90, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop', description: 'Premium yoga and lifestyle leggings' },
            { id: 16, name: 'APEX Women\'s Training Jacket', category: 'women', type: 'clothing', price: 110, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'Premium women\'s training jacket' },
            { id: 17, name: 'APEX Women\'s Crossbody Bag', category: 'women', type: 'accessories', price: 60, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', description: 'Stylish crossbody bag for active lifestyle' },
            { id: 18, name: 'APEX Women\'s Training Gloves', category: 'women', type: 'accessories', price: 35, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&h=500&fit=crop', description: 'Premium training gloves' },

            // Kids Products
            { id: 19, name: 'APEX Max 270 Kids', category: 'kids', type: 'shoes', price: 90, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop', description: 'Kids version of the popular Max 270' },
            { id: 20, name: 'APEX Revolution 6 Kids', category: 'kids', type: 'shoes', price: 65, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop', description: 'Comfortable running shoes for kids' },
            { id: 21, name: 'APEX Court Borough Kids', category: 'kids', type: 'shoes', price: 55, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop', description: 'Classic basketball-inspired kids shoes' },
            { id: 22, name: 'APEX Kids Dri-FIT T-Shirt', category: 'kids', type: 'clothing', price: 25, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'Moisture-wicking kids t-shirt' },
            { id: 23, name: 'APEX Force 1 Premium', category: 'kids', type: 'shoes', price: 30, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', description: 'Classic premium basketball shoes for kids' },
            { id: 24, name: 'APEX Kids Hoodie', category: 'kids', type: 'clothing', price: 50, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'Cozy hoodie for kids' },
            { id: 25, name: 'APEX Kids Backpack', category: 'kids', type: 'accessories', price: 40, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', description: 'Fun and functional kids backpack' },
            { id: 26, name: 'APEX Kids Cap', category: 'kids', type: 'accessories', price: 20, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&h=500&fit=crop', description: 'Stylish cap for kids' },

            // Sale Products (discounted items)
            { id: 27, name: 'APEX Max 90 (Sale)', category: 'sale', type: 'shoes', price: 85, originalPrice: 120, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop', description: 'Classic Max 90 at sale price' },
            { id: 28, name: 'APEX Training Set (Sale)', category: 'sale', type: 'clothing', price: 60, originalPrice: 95, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'Complete training outfit on sale' },
            { id: 29, name: 'APEX React Element (Sale)', category: 'sale', type: 'shoes', price: 75, originalPrice: 130, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop', description: 'Modern React technology shoes on sale' },
            { id: 30, name: 'APEX Windbreaker (Sale)', category: 'sale', type: 'clothing', price: 45, originalPrice: 80, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'Lightweight windbreaker jacket on sale' },

            // SNKRS (Limited Edition/Exclusive)
            { id: 31, name: 'APEX Elite 4 Retro "Black"', category: 'snkrs', type: 'shoes', price: 220, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop', description: 'Limited edition Elite 4 release' },
            { id: 32, name: 'APEX Dunk SB "Collab"', category: 'snkrs', type: 'shoes', price: 350, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop', description: 'Exclusive artist collaboration' },
            { id: 33, name: 'APEX Force 1 "Limited"', category: 'snkrs', type: 'shoes', price: 280, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', description: 'Exclusive limited edition' },
            { id: 34, name: 'APEX Elite 1 "Premium"', category: 'snkrs', type: 'shoes', price: 195, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop', description: 'Limited Premium collection' },
            { id: 35, name: 'APEX Max 1 "Elite"', category: 'snkrs', type: 'shoes', price: 160, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop', description: 'Exclusive Elite collection' },
            { id: 36, name: 'APEX Zoom Pegasus Women\'s"', category: 'snkrs', type: 'shoes', price: 190, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop', description: 'Limited Luxe collection' }
        ];
    }

    // Setup all buttons functionality
    setupAllButtons() {
        // Setup footer links
        document.querySelectorAll('footer a[data-action]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const action = link.dataset.action;
                this.handleFooterAction(action);
            });
        });

        // Setup banner links
        document.querySelectorAll('.banner-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNotification('Free delivery and returns policy opened!', 'info');
            });
        });

        // Setup all other action buttons
        document.querySelectorAll('[data-action]').forEach(element => {
            if (!element.hasEventListener) {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleAction(element.dataset.action, element);
                });
                element.hasEventListener = true;
            }
        });
    }

    // Handle footer actions
    handleFooterAction(action) {
        const footerActions = {
            'store-locator': () => this.showNotification('Store locator opened! Find APEX stores near you.', 'info'),
            'apex-app': () => this.showNotification('Download the APEX mobile app for exclusive features!', 'info'),
            'become-member': () => this.showNotification('Join APEX Elite membership for exclusive benefits!', 'success'),
            'student-discount': () => this.showNotification('Student discount: 15% off with valid student ID!', 'success'),
            'order-status': () => this.showNotification('Order tracking system opened!', 'info'),
            'delivery': () => this.showNotification('Delivery information: Free shipping on orders over $50!', 'info'),
            'returns': () => this.showNotification('Easy returns: 30-day return policy activated!', 'info'),
            'payment': () => this.showNotification('Payment options: All major cards and digital wallets accepted!', 'info'),
            'contact': () => this.showNotification('Contact support: 24/7 customer service available!', 'success'),
            'news': () => this.showNotification('Latest APEX news and updates!', 'info'),
            'careers': () => this.showNotification('Join the APEX team! Careers page opened.', 'info'),
            'investors': () => this.showNotification('Investor relations information accessed!', 'info'),
            'sustainability': () => this.showNotification('APEX sustainability initiatives and eco-friendly practices!', 'success'),
            'twitter': () => this.showNotification('Follow @shivam-6174 on GitHub!', 'info'),
            'facebook': () => this.showNotification('Like APEX Athletics on Facebook!', 'info'),
            'youtube': () => this.showNotification('Subscribe to APEX YouTube channel!', 'info'),
            'instagram': () => this.showNotification('Follow @ApexAthletics on Instagram!', 'info'),
            'guides': () => this.showNotification('Size guides and product information!', 'info'),
            'terms-sale': () => this.showNotification('Terms of sale document opened!', 'info'),
            'terms-use': () => this.showNotification('Terms of use agreement displayed!', 'info'),
            'privacy': () => this.showNotification('APEX privacy policy accessed!', 'info')
        };

        if (footerActions[action]) {
            footerActions[action]();
        } else {
            this.showNotification(`${action.replace('-', ' ')} functionality activated!`, 'info');
        }
    }

    // Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        const pages = document.querySelectorAll('.page-content');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.dataset.page;
                this.showPage(pageId);
                this.updateActiveNav(link);
            });
        });
    }

    showPage(pageId) {
        const pages = document.querySelectorAll('.page-content');
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
                this.animatePageEntry(page);
            }
        });

        this.currentPage = pageId;
        this.loadCategoryProducts(pageId);
    }

    loadCategoryProducts(category) {
        const container = document.querySelector(`#${category} .products-container`);
        if (!container) return;

        let categoryProducts = [];
        
        switch(category) {
            case 'men':
                categoryProducts = this.products.filter(product => product.category === 'men');
                break;
            case 'women':
                categoryProducts = this.products.filter(product => product.category === 'women');
                break;
            case 'kids':
                categoryProducts = this.products.filter(product => product.category === 'kids');
                break;
            case 'sale':
                categoryProducts = this.products.filter(product => product.category === 'sale');
                break;
            case 'snkrs':
                categoryProducts = this.products.filter(product => product.category === 'snkrs');
                break;
            default:
                return;
        }

        if (categoryProducts.length > 0) {
            container.innerHTML = this.renderProductGrid(categoryProducts, category);
            this.setupProductGridEvents();
        }
    }

    renderProductGrid(products, category = '') {
        return `
            <div class="products-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; margin-top: 40px;">
                ${products.map(product => `
                    <div class="product-card" style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.08); transition: all 0.3s ease; cursor: pointer;">
                        <div style="position: relative;">
                            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 280px; object-fit: cover;">
                            ${product.originalPrice ? `<div style="position: absolute; top: 15px; left: 15px; background: #dc143c; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: 600;">SALE</div>` : ''}
                            ${category === 'snkrs' ? `<div style="position: absolute; top: 15px; left: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: 600;">EXCLUSIVE</div>` : ''}
                        </div>
                        <div style="padding: 24px;">
                            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #111;">${product.name}</h3>
                            <p style="color: #707072; margin-bottom: 8px; text-transform: capitalize; font-size: 14px;">${product.type || product.category}</p>
                            <p style="color: #707072; margin-bottom: 16px; font-size: 14px; line-height: 1.4;">${product.description}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                                <div>
                                    <span style="font-size: 20px; font-weight: 700; color: #111;">$${product.price}</span>
                                    ${product.originalPrice ? `<span style="font-size: 16px; color: #707072; text-decoration: line-through; margin-left: 8px;">$${product.originalPrice}</span>` : ''}
                                </div>
                                ${product.originalPrice ? `<span style="color: #dc143c; font-weight: 600; font-size: 14px;">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</span>` : ''}
                            </div>
                            <button class="add-to-cart" data-product-id="${product.id}" style="width: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 16px; transition: all 0.3s ease;">Add to Cart</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updateActiveNav(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    animatePageEntry(page) {
        page.style.animation = 'none';
        page.offsetHeight;
        page.style.animation = 'fadeIn 0.6s ease-out';
    }

    // Action Handler System
    handleAction(action, element) {
        const actions = {
            'shop-now': () => this.showShopCollection(),
            'learn-more': () => this.showStory(),
            'shop-running': () => this.showCategory('running'),
            'shop-basketball': () => this.showCategory('basketball'),
            'shop-lifestyle': () => this.showCategory('lifestyle'),
            'join-membership': () => this.showMembership(),
            'favorites': () => this.showFavorites(),
            'cart': () => this.toggleCart(),
            'checkout': () => this.processCheckout()
        };

        if (actions[action]) {
            this.addRippleEffect(element);
            actions[action]();
            this.showNotification(`${action.replace('-', ' ')} activated!`, 'success');
        }
    }

    // Enhanced Search System
    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });

        searchInput.addEventListener('focus', () => {
            searchInput.style.backgroundColor = '#ffffff';
            searchInput.style.borderColor = '#667eea';
            searchInput.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.1)';
        });

        searchInput.addEventListener('blur', () => {
            searchInput.style.backgroundColor = '#f7f7f7';
            searchInput.style.borderColor = '#e5e5e5';
            searchInput.style.boxShadow = 'none';
        });
    }

    performSearch(query) {
        if (!query.trim()) return;
        
        const results = this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.type?.toLowerCase().includes(query.toLowerCase())
        );

        console.log(`Search results for "${query}":`, results);
        this.showNotification(`Found ${results.length} products for "${query}"`, 'info');
        
        if (results.length > 0) {
            this.displaySearchResults(results);
        }
    }

    displaySearchResults(results) {
        console.log('Displaying search results:', results);
    }

    // Cart System
    setupCart() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(button.dataset.productId);
                this.addToCart(productId);
                this.addRippleEffect(button);
            });
        });

        const closeCartBtn = document.querySelector('.close-cart');
        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => this.toggleCart());
        }

        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.toggleCart());
        }
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showNotification(`${product.name} added to cart!`, 'success');
        
        const cartIcon = document.querySelector('[data-action="cart"]');
        cartIcon.style.animation = 'none';
        cartIcon.offsetHeight;
        cartIcon.style.animation = 'bounce 0.6s ease';
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        if (cartSidebar.classList.contains('open')) {
            this.renderCartItems();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        
        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #707072;">
                    <p style="font-size: 18px; margin-bottom: 10px;">Your cart is empty</p>
                    <p>Add some premium APEX products!</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item" style="display: flex; padding: 20px 0; border-bottom: 1px solid #e5e5e5;">
                <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-right: 15px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 16px; margin-bottom: 5px;">${item.name}</h4>
                    <p style="color: #707072; font-size: 14px; margin-bottom: 10px;">Qty: ${item.quantity}</p>
                    <p style="font-weight: 600; font-size: 18px;">$${item.price}</p>
                </div>
                <button onclick="apexWebsite.removeFromCart(${item.id})" style="background: none; border: none; color: #707072; cursor: pointer; font-size: 20px; padding: 5px;">&times;</button>
            </div>
        `).join('');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
        this.showNotification('Item removed from cart', 'info');
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            cartCount.textContent = itemCount;
            cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }

        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = total.toFixed(2);
        }
    }

    saveCart() {
        localStorage.setItem('apexCart', JSON.stringify(this.cart));
    }

    processCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'warning');
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.showNotification(`Processing checkout for $${total.toFixed(2)}...`, 'info');
        
        setTimeout(() => {
            this.cart = [];
            this.saveCart();
            this.updateCartDisplay();
            this.toggleCart();
            this.showNotification('Order placed successfully! 🎉', 'success');
        }, 2000);
    }

    // Product Interactions
    setupProductInteractions() {
        document.querySelectorAll('.trending-item[data-product]').forEach(item => {
            item.addEventListener('click', () => {
                const productName = item.dataset.product;
                this.showProductDetails(productName);
            });
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterProducts(btn.dataset.filter);
            });
        });
    }

    showProductDetails(productName) {
        this.showNotification(`Viewing ${productName.replace('-', ' ')} details`, 'info');
    }

    setupProductGridEvents() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(button.dataset.productId);
                this.addToCart(productId);
                this.addRippleEffect(button);
            });
        });

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
            });
        });
    }

    filterProducts(filter) {
        if (this.currentPage === 'home') return;
        
        const allProducts = this.products.filter(p => p.category === this.currentPage);
        const filteredProducts = filter === 'all' ? allProducts : allProducts.filter(p => p.type === filter);
        
        const container = document.querySelector('.products-container');
        if (container) {
            container.innerHTML = this.renderProductGrid(filteredProducts, this.currentPage);
            this.setupProductGridEvents();
        }
    }

    // Animation System
    setupAnimations() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupRippleEffects();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-title, .featured-card, .trending-item, .membership-content, .benefit').forEach(el => {
            observer.observe(el);
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.trending-item, .featured-card').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
            });
        });
    }

    setupRippleEffects() {
        document.querySelectorAll('button, .nav-link').forEach(element => {
            element.addEventListener('click', (e) => {
                this.addRippleEffect(element, e);
            });
        });
    }

    addRippleEffect(element, event = null) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        let x, y;
        if (event) {
            x = event.clientX - rect.left - size / 2;
            y = event.clientY - rect.top - size / 2;
        } else {
            x = rect.width / 2 - size / 2;
            y = rect.height / 2 - size / 2;
        }
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        element.style.position = element.style.position || 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Mobile Menu System
    setupMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                if (document.getElementById('cartSidebar').classList.contains('open')) {
                    this.toggleCart();
                }
            }
        });
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#667eea'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 3000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-width: 300px;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Premium feature implementations
    showShopCollection() {
        this.showPage('men');
        this.showNotification('Welcome to our premium collection!', 'info');
    }

    showStory() {
        this.showNotification('Discover the story behind APEX innovative design', 'info');
    }

    showCategory(category) {
        this.showNotification(`Exploring ${category} collection`, 'info');
    }

    showMembership() {
        this.showNotification('Join APEX Elite for exclusive benefits!', 'info');
    }

    showFavorites() {
        this.showNotification('Your favorites collection', 'info');
    }
}

// Enhanced CSS animations
const additionalCSS = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
    }
`;

const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

let apexWebsite;
document.addEventListener('DOMContentLoaded', () => {
    apexWebsite = new ApexWebsite();
});

// Navbar scroll effect with enhanced performance
let lastScrollTop = 0;
let ticking = false;

function updateNavbar() {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`✨ APEX Premium Site loaded in ${loadTime}ms`);
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}
