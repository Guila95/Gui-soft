document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM chargé - initialisation du script');

    // --- BASE DE DONNÉES DES PRODUITS ---
    const products = [
        {
            id: 1,
            name: "Microsoft Office 2024 Pro Plus LTSC",
            price: 28.99,
            image: "images/produits_en_vente/office/O24PP.jpg",
            category: "office"
        },
        {
            id: 2,
            name: "Microsoft Office 2021 Pro Plus",
            price: 24.99,
            image: "images/produits_en_vente/office/office2021pro.webp",
            category: "office"
        },
        {
            id: 3,
            name: "Windows 11 Pro (Clé à vie)",
            price: 22.99,
            image: "images/produits_en_vente/windows/windows11pro.png",
            category: "windows"
        },
        {
            id: 4,
            name: "Microsoft Office 2019 Pro",
            price: 19.99,
            image: "images/produits_en_vente/office/office2019.webp",
            category: "office"
        },
        {
            id: 5,
            name: "Windows 11 Home (Clé à vie)",
            price: 22.99,
            image: "images/produits_en_vente/windows/whome.avif",
            category: "windows"
        },
        {
            id: 6,
            name: "Microsoft Office 2016 Pro Plus",
            price: 15.99,
            image: "images/produits_en_vente/office/office2016.png",
            category: "office"
        },
        {
            id: 7,
            name: "Microsoft Office 365",
            price: 24.99,
            image: "images/produits_en_vente/office/office365.jpg",
            category: "office"
        },
        {
            id: 8,
            name: "Microsoft Office 2019 Pro (Activation avec Internet)",
            price: 47.99,
            image: "images/produits_en_vente/office/office2019.webp",
            category: "office"
        },
        {
            id: 9,
            name: "Microsoft Office 2016 Pro Plus (Activation avec Internet)",
            price: 29.99,
            image: "images/produits_en_vente/office/office2016.png",
            category: "office"
        },
        {
            id: 10,
            name: "Microsoft Office 2021 Pro Plus (Activation avec Internet)",
            price: 57.99,
            image: "images/produits_en_vente/office/office2021pro.webp",
            category: "office"
        },
        {
            id: 11,
            name: "Windows 10 Pro (Clé à vie)",
            price: 22.99,
            image: "images/produits_en_vente/windows/windows10pro.png",
            category: "windows"
        },
        {
            id: 12,
            name: "Windows 10 Home (Clé à vie)",
            price: 22.99,
            image: "images/produits_en_vente/windows/windows10home.jpg",
            category: "windows"
        },
        {
            id: 13,
            name: "Windows 7 Pro (Clé à vie)",
            price: 15.99,
            image: "images/produits_en_vente/windows/Windows7pro.png",
            category: "windows"
        },
        {
            id: 14,
            name: "Windows 7 Ultimate (Clé à vie)",
            price: 15.99,
            image: "images/produits_en_vente/windows/Windows7Ultimate.png",
            category: "windows"
        },
        {
            id: 15,
            name: "Windows 7 Premium (Clé à vie)",
            price: 15.99,
            image: "images/produits_en_vente/windows/Windows7Premium.png",
            category: "windows"
        },
        {
            id: 16,
            name: "Windows 7 Basic (Clé à vie)",
            price: 15.99,
            image: "images/produits_en_vente/windows/Windows7_basic.png",
            category: "windows"
        },
        {
            id: 17,
            name: "Microsoft Project pro 2024 ",
            price: 141.99,
            image: "images/produits_en_vente/office/project2024.png",
            category: "office"
        },

        {
            id: 18,
            name: "Microsoft Project pro 2021 ",
            price: 38.99,
            image: "images/produits_en_vente/office/msproject2021__.png",
            category: "office"
        },

        {
            id: 19,
            name: "Microsoft Project pro 2021 (Activation par telephone)",
            price: 24.99,
            image: "images/produits_en_vente/office/msproject2021__.png",
            category: "office"
        },

        {
            id: 20,
            name: "Microsoft Project pro 2019",
            price: 28.99,
            image: "images/produits_en_vente/office/msproject2019.png",
            category: "office"
        },

        {
            id: 21,
            name: "Microsoft project pro 2019 (Activation par telephone )",
            price: 15.99,
            image: "images/produits_en_vente/office/msproject2019.png",
            category: "office"
        },

        {
            id: 22,
            name: "Microsoft Visio pro 2024 ",
            price: 141.99,
            image: "images/produits_en_vente/office/visio2024.jpg",
            category: "office"
        },

        {
            id: 23,
            name: "Microsoft Visio pro 2021 ",
            price: 38.99,
            image: "images/produits_en_vente/office/visio2021.webp",
            category: "office"
        },

        {
            id: 24,
            name: "Microsoft Visio pro 2021 (Activation par telephone) ",
            price: 24.99,
            image: "images/produits_en_vente/office/visio2021.webp",
            category: "office"
        },

        {
            id: 25,
            name: "Microsoft Visio pro 2019 ",
            price: 28.99,
            image: "images/produits_en_vente/office/visio2019.webp",
            category: "office"
        },

        {
            id: 26,
            name: "Microsoft Visio pro 2019 (Activation par telephone) ",
            price: 15.99,
            image: "images/produits_en_vente/office/visio2019.webp",
            category: "office"
        },

        {
            id: 27,
            name: "Windows Server Datacenter  (Activation par telephone) ",
            price: 21.99,
            image: "images/produits_en_vente/windows/windows_server.png",
            category: "windows"
        },
    ];

    // --- ÉTAT DU PANIER ---
    let cart = JSON.parse(localStorage.getItem('guiSoftCart')) || [];

    // --- SÉLECTEURS DOM ---
    const productListOffice = document.getElementById('product-list-office');
    const productListWindows = document.getElementById('product-list-windows');
    const productListAutres = document.getElementById('product-list-autres');
    const autresPlaceholder = document.getElementById('autres-placeholder');

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    const cartModal = document.getElementById('cart-modal');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Sélecteurs pour les témoignages
    const testimonialTabButtons = document.querySelectorAll('.tab-testimonial-btn');
    const testimonialContents = document.querySelectorAll('.testimonial-content');
    const screenshotModal = document.getElementById('screenshot-modal');
    const closeScreenshotModal = document.getElementById('close-screenshot-modal');
    const screenshotModalImage = document.getElementById('screenshot-modal-image');
    const screenshotImages = document.querySelectorAll('.screenshot-image');
    const videoTestimonialBtn = document.querySelector('.video-testimonial-btn');

    // Sélecteurs pour le modal de description produit
    const productModal = document.getElementById('product-modal');
    const closeProductModalBtn = document.getElementById('close-product-modal-btn');
    const productModalTitle = document.getElementById('product-modal-title');
    const productModalImage = document.getElementById('product-modal-image');
    const productModalName = document.getElementById('product-modal-name');
    const productModalDescription = document.getElementById('product-modal-description');
    const productModalPrice = document.getElementById('product-modal-price');
    const addToCartFromModal = document.getElementById('add-to-cart-from-modal');

    // --- FONCTIONS PRINCIPALES ---

    function renderProducts() {
        console.log('Début du rendu des produits');

        // Vider les listes
        if (productListOffice) productListOffice.innerHTML = '';
        if (productListWindows) productListWindows.innerHTML = '';
        if (productListAutres) productListAutres.innerHTML = '';

        let hasAutres = false;

        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <div class="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer view-product-details" data-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}" 
                            class="w-full h-full object-contain p-4"
                            onerror="this.onerror=null; this.src='https://placehold.co/400x400/CCCCCC/FFFFFF?text=Image+Produit';">
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold text-gray-900 truncate">${product.name}</h3>
                        <p class="text-xl font-extrabold text-blue-600 my-2">${product.price.toFixed(2)} €</p>
                        <div class="flex gap-2">
                            <button
                                class="view-details-btn btn-secondary flex-1 flex items-center justify-center gap-2"
                                data-id="${product.id}">
                                <i class="fas fa-info-circle"></i> Détails
                            </button>
                            <button
                                class="add-to-cart-btn btn-primary flex-1 flex items-center justify-center gap-2"
                                data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> Ajouter
                            </button>
                        </div>
                    </div>
                </div>
            `;

            // Injecter la carte dans la bonne liste
            if (product.category === 'office' && productListOffice) {
                productListOffice.innerHTML += productCard;
            } else if (product.category === 'windows' && productListWindows) {
                productListWindows.innerHTML += productCard;
            } else if (product.category === 'autres' && productListAutres) {
                productListAutres.innerHTML += productCard;
                hasAutres = true;
            }
        });

        // Afficher le message si "Autres" est vide
        if (autresPlaceholder) {
            autresPlaceholder.classList.toggle('hidden', hasAutres);
        }

        console.log('Rendu des produits terminé');
    }

    function updateCartUI() {
        // Mettre à jour la liste des articles dans le modal
        if (cartItemsList) {
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<p class="text-gray-500 text-center py-4">Votre panier est vide.</p>';
            } else {
                cartItemsList.innerHTML = '';
                cart.forEach(item => {
                    const itemHtml = `
                        <div class="flex items-center justify-between gap-4 py-2 border-b border-gray-100">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain rounded-md bg-gray-100 p-1"
                                onerror="this.onerror=null; this.src='https://placehold.co/100x100/CCCCCC/FFFFFF?text=IMG';">
                            <div class="flex-1">
                                <h4 class="font-semibold text-sm">${item.name}</h4>
                                <p class="text-gray-500 text-sm">${item.price.toFixed(2)} €</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <button class="quantity-change-btn w-6 h-6 bg-gray-200 rounded-full font-bold hover:bg-gray-300" data-id="${item.id}" data-change="-1">-</button>
                                <span class="font-bold w-6 text-center">${item.quantity}</span>
                                <button class="quantity-change-btn w-6 h-6 bg-gray-200 rounded-full font-bold hover:bg-gray-300" data-id="${item.id}" data-change="1">+</button>
                            </div>
                            <span class="font-bold w-16 text-right">${(item.price * item.quantity).toFixed(2)} €</span>
                        </div>
                    `;
                    cartItemsList.innerHTML += itemHtml;
                });
            }
        }

        // Mettre à jour le prix total
        if (cartTotalPrice) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalPrice.textContent = `${total.toFixed(2)} €`;
        }

        // Mettre à jour le badge du panier
        if (cartCountBadge) {
            const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountBadge.textContent = totalQuantity;
            cartCountBadge.classList.toggle('opacity-0', totalQuantity === 0);
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return;

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('guiSoftCart', JSON.stringify(cart));
        updateCartUI();

        // Animation du badge
        if (cartCountBadge) {
            cartCountBadge.classList.add('add-to-cart-animation');
            setTimeout(() => {
                cartCountBadge.classList.remove('add-to-cart-animation');
            }, 500);
        }

        // Afficher une notification
        showNotification(`${product.name} ajouté au panier !`);
    }

    function changeQuantity(productId, newQuantity) {
        const index = cart.findIndex(item => item.id === parseInt(productId));
        if (index === -1) return;

        if (newQuantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQuantity;
        }

        localStorage.setItem('guiSoftCart', JSON.stringify(cart));
        updateCartUI();
    }

    function showCartModal() {
        if (cartModal) {
            cartModal.classList.remove('hidden');
        }
    }

    function hideCartModal() {
        if (cartModal) {
            cartModal.classList.add('hidden');
        }
    }

    // --- FONCTIONS POUR LE MODAL DE DESCRIPTION PRODUIT ---
    function showProductModal(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return;

        // Remplir le modal avec les données du produit
        productModalTitle.textContent = 'Détails du produit';
        productModalImage.src = product.image;
        productModalImage.alt = product.name;
        productModalName.textContent = product.name;
        productModalPrice.textContent = `${product.price.toFixed(2)} €`;

        // Mettre à jour l'ID du produit sur le bouton "Ajouter au panier" dans le modal
        addToCartFromModal.setAttribute('data-id', product.id);

        // Afficher le modal
        productModal.classList.remove('hidden');
    }

    function hideProductModal() {
        productModal.classList.add('hidden');
    }

    function showNotification(message) {
        // Créer une notification temporaire
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animation d'entrée
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
        }, 100);

        // Supprimer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // --- CORRECTION DE LA FONCTION WHATSAPP ---
    function handleCheckout() {
        if (cart.length === 0) return;

        const selectedCountry = document.getElementById('checkout-country')?.value || 'Non spécifié';
        const selectedPayment = document.getElementById('checkout-payment')?.value || 'Non spécifié';

        let message = "Bonjour Gui&Soft,\n\nJe souhaite passer la commande suivante :\n\n";

        message += `*Pays de Commande:* ${selectedCountry}\n`;
        message += `*Mode de Paiement Préféré:* ${selectedPayment}\n`;
        message += "--------------------\n\n";

        cart.forEach(item => {
            message += `*Produit:* ${item.name}\n`;
            message += `*Quantité:* ${item.quantity}\n`;
            message += `*Prix unitaire:* ${item.price.toFixed(2)} €\n`;
            message += `--------------------\n`;
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `\n*TOTAL DE LA COMMANDE: ${total.toFixed(2)} €*\n\n`;
        message += "Merci de m'indiquer la marche à suivre pour finaliser l'achat.";

        const whatsappLink = `https://wa.me/message/ON3C65UUCJLGF1?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    // --- FONCTIONNALITÉS POUR LES TÉMOIGNAGES ---

    function setupTestimonials() {
        console.log('Initialisation des fonctionnalités témoignages');

        // Gestion des onglets témoignages
        if (testimonialTabButtons.length > 0) {
            testimonialTabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Retirer 'active-testimonial-tab' de tous les boutons
                    testimonialTabButtons.forEach(btn => btn.classList.remove('active-testimonial-tab'));
                    // Ajouter 'active-testimonial-tab' au bouton cliqué
                    button.classList.add('active-testimonial-tab');

                    const targetTab = button.getAttribute('data-testimonial-tab');

                    // Masquer tous les contenus
                    testimonialContents.forEach(content => {
                        content.classList.remove('active-testimonial-content');
                    });

                    // Afficher le contenu cible
                    const activeContent = document.getElementById(`testimonial-${targetTab}`);
                    if (activeContent) {
                        activeContent.classList.add('active-testimonial-content');
                    }
                });
            });
        }

        // Gestion du modal des captures d'écran
        if (screenshotImages.length > 0) {
            screenshotImages.forEach(img => {
                img.addEventListener('click', () => {
                    if (screenshotModal && screenshotModalImage) {
                        screenshotModalImage.src = img.src;
                        screenshotModal.classList.remove('hidden');
                    }
                });
            });
        }

        // Fermer le modal des captures d'écran
        if (closeScreenshotModal && screenshotModal) {
            closeScreenshotModal.addEventListener('click', () => {
                screenshotModal.classList.add('hidden');
            });

            screenshotModal.addEventListener('click', (e) => {
                if (e.target === screenshotModal) {
                    screenshotModal.classList.add('hidden');
                }
            });
        }

        // --- BOUTON TÉMOIGNAGE VIDÉO MODIFIÉ ---
        if (videoTestimonialBtn) {
            videoTestimonialBtn.addEventListener('click', () => {
                // Ouvrir un modal avec votre vidéo locale
                const videoModal = document.createElement('div');
                videoModal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
                videoModal.innerHTML = `
            <div class="relative max-w-4xl w-full">
                <button class="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 close-video-modal">
                    <i class="fas fa-times"></i>
                </button>
                <video controls class="w-full h-auto rounded-lg" poster="images/temoignages/video-poster.jpg">
                    <source src="images/temoignages/temoignage-video.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>
        `;

                document.body.appendChild(videoModal);

                // Fermer le modal
                const closeBtn = videoModal.querySelector('.close-video-modal');
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(videoModal);
                });

                videoModal.addEventListener('click', (e) => {
                    if (e.target === videoModal) {
                        document.body.removeChild(videoModal);
                    }
                });
            });
        }
    }

    // --- INITIALISATION ---

    // Afficher les produits
    renderProducts();

    // Mettre à jour l'année du copyright
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initialiser le panier
    updateCartUI();

    // Initialiser les fonctionnalités témoignages
    setupTestimonials();

    // Adapter le menu mobile
    setupMobileMenu();

    // --- GESTIONNAIRES D'ÉVÉNEMENTS ---

    // Clic sur "Ajouter au panier"
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            const button = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            const productId = button.getAttribute('data-id');
            addToCart(productId);
        }
    });

    // Clic sur "Voir détails" ou sur l'image du produit
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('view-details-btn') || e.target.closest('.view-details-btn')) {
            const button = e.target.classList.contains('view-details-btn') ? e.target : e.target.closest('.view-details-btn');
            const productId = button.getAttribute('data-id');
            showProductModal(productId);
        }

        if (e.target.classList.contains('view-product-details') || e.target.closest('.view-product-details')) {
            const element = e.target.classList.contains('view-product-details') ? e.target : e.target.closest('.view-product-details');
            const productId = element.getAttribute('data-id');
            showProductModal(productId);
        }
    });

    // Fermer le modal de description produit
    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', hideProductModal);
    }

    if (productModal) {
        productModal.addEventListener('click', function (e) {
            if (e.target === productModal) {
                hideProductModal();
            }
        });
    }

    // Ajouter au panier depuis le modal
    if (addToCartFromModal) {
        addToCartFromModal.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
            hideProductModal();
        });
    }

    // Clic sur les boutons de quantité dans le panier
    if (cartItemsList) {
        cartItemsList.addEventListener('click', function (e) {
            const button = e.target.closest('.quantity-change-btn');
            if (button) {
                const productId = button.getAttribute('data-id');
                const change = parseInt(button.getAttribute('data-change'));
                const cartItem = cart.find(item => item.id === parseInt(productId));

                if (cartItem) {
                    const newQuantity = cartItem.quantity + change;
                    changeQuantity(productId, newQuantity);
                }
            }
        });
    }

    // Ouvrir/Fermer le modal du panier
    if (openCartBtn) openCartBtn.addEventListener('click', showCartModal);
    if (closeCartBtn) closeCartBtn.addEventListener('click', hideCartModal);

    if (cartModal) {
        cartModal.addEventListener('click', function (e) {
            if (e.target === cartModal) {
                hideCartModal();
            }
        });
    }

    // Clic sur "Passer la commande" - CORRIGÉ
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            handleCheckout();
        });
    }

    // Onglets produits
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Retirer 'active-tab' de tous les boutons
            tabButtons.forEach(btn => btn.classList.remove('active-tab'));
            // Ajouter 'active-tab' au bouton cliqué
            button.classList.add('active-tab');

            const targetTab = button.getAttribute('data-tab');

            // Masquer tous les contenus
            tabContents.forEach(content => {
                content.classList.remove('active-tab-content');
            });

            // Afficher le contenu cible
            const activeContent = document.getElementById(`tab-${targetTab}`);
            if (activeContent) {
                activeContent.classList.add('active-tab-content');
            }
        });
    });

    // --- MENU MOBILE ---
    function setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                // Changer l'icône
                const icon = mobileMenuBtn.querySelector('i');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            });

            // Fermer le menu en cliquant sur un lien
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                });
            });
        }
    }

    console.log('Initialisation terminée');
});