document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('productsContainer');
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const menuButtons = document.querySelectorAll('.menu-btn');
    let currentCategory = 'wszystkie';

    // Obsługa filtrowania kategorii
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            renderProducts(currentCategory);
        });
    });

    // Zamykanie modalu
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Funkcja renderująca produkty
    function renderProducts(category) {
        productsContainer.innerHTML = '';
        
        Object.entries(productsData).forEach(([key, product]) => {
            if (category === 'wszystkie' || category === key) {
                const availableFlavors = product.flavors.filter(flavor => flavor.available);
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-header">
                        <h3 class="product-title">${product.name}</h3>
                        <span class="availability-badge ${availableFlavors.length > 0 ? 'available' : 'unavailable'}">
                            ${availableFlavors.length} smaków
                        </span>
                    </div>
                    <div class="product-price">
                        od ${product.prices[0].price} PLN
                    </div>
                    <div class="product-flavors">
                        ${availableFlavors.slice(0, 3).map(flavor => 
                            `<span class="flavor-tag">${flavor.name}</span>`
                        ).join('')}
                        ${availableFlavors.length > 3 ? `<span class="flavor-tag">+${availableFlavors.length - 3} więcej</span>` : ''}
                    </div>
                    <button class="details-btn">Zobacz szczegóły</button>
                `;
                
                card.querySelector('.details-btn').addEventListener('click', () => showProductDetails(product));
                productsContainer.appendChild(card);
            }
        });
    }

    // Funkcja wyświetlająca szczegóły produktu
    function showProductDetails(product) {
        const modalBody = modal.querySelector('.modal-body');
        const availableFlavors = product.flavors.filter(flavor => flavor.available);
        const unavailableFlavors = product.flavors.filter(flavor => !flavor.available);
        
        modalBody.innerHTML = `
            <h2>${product.name}</h2>
            
            <div class="price-section">
                <h3>Cennik:</h3>
                <table class="price-table">
                    <thead>
                        <tr>
                            <th>Ilość</th>
                            <th>Cena całkowita</th>
                            <th>Cena za sztukę</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${product.prices.map(price => `
                            <tr>
                                <td>${price.quantity} szt.</td>
                                <td>${price.price} PLN</td>
                                <td>${price.pricePerUnit} PLN</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="flavors-section">
                <h3>Dostępne smaki (${availableFlavors.length}):</h3>
                <div class="flavors-grid">
                    ${availableFlavors.map(flavor => `
                        <span class="flavor-tag available">${flavor.name}</span>
                    `).join('')}
                </div>
                
                ${unavailableFlavors.length > 0 ? `
                    <h3>Niedostępne smaki (${unavailableFlavors.length}):</h3>
                    <div class="flavors-grid">
                        ${unavailableFlavors.map(flavor => `
                            <span class="flavor-tag unavailable">${flavor.name}</span>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <div class="shipping-note">
                <p><i class="fas fa-info-circle"></i> Koszt wysyłki: 20 PLN (paczkomat)</p>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    // Inicjalne renderowanie wszystkich produktów
    renderProducts('wszystkie');

    // Obsługa sortowania (opcjonalnie)
    function sortProducts(method) {
        const products = Array.from(productsContainer.children);
        
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('od ', '').replace(' PLN', ''));
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('od ', '').replace(' PLN', ''));
            
            if (method === 'price-asc') {
                return priceA - priceB;
            } else if (method === 'price-desc') {
                return priceB - priceA;
            }
        });
        
        productsContainer.innerHTML = '';
        products.forEach(product => productsContainer.appendChild(product));
    }

    // Obsługa wyszukiwania (opcjonalnie)
    function searchProducts(query) {
        const products = Array.from(productsContainer.children);
        
        products.forEach(product => {
            const title = product.querySelector('.product-title').textContent.toLowerCase();
            const flavors = Array.from(product.querySelectorAll('.flavor-tag'))
                .map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(query.toLowerCase()) ||
                           flavors.some(flavor => flavor.includes(query.toLowerCase()));
            
            product.style.display = matches ? 'block' : 'none';
        });
    }
});