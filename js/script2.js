document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
      {
        id: '1',
        name: 'Canon EOS R10 24MP, Black, DSLR Camera',
        image: '/placeholder.svg',
        price: 1128.00,
        oldPrice: 1199.00,
        rating: 4.5,
        reviewCount: 154,
        freeShipping: true,
        category: 'Electronics',
        description: '20 MP APS-C sensor delivers incredible image quality and detail even in challenging lighting situations.'
      },
      {
        id: '2',
        name: 'GoPro HERO 4K Action Camera - Black',
        image: '/placeholder.svg',
        price: 179.00,
        rating: 4.3,
        reviewCount: 189,
        freeShipping: true,
        category: 'Electronics',
        description: 'Stunning 4K video and 12MP photos in single, burst and time lapse modes. Durable by design.'
      },
      {
        id: '3',
        name: 'MacBook Air M2 Chip, 13.6" Retina Display - Space Gray',
        image: '/placeholder.svg',
        price: 1299.00,
        oldPrice: 1399.00,
        rating: 5.0,
        reviewCount: 312,
        freeShipping: true,
        category: 'Electronics',
        description: 'All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.'
      },
      {
        id: '4',
        name: 'Smart Watch Series 7 SE, GPS, Aluminium Case',
        image: '/placeholder.svg',
        price: 369.00,
        oldPrice: 399.00,
        rating: 4.7,
        reviewCount: 271,
        freeShipping: true,
        category: 'Mobile accessory',
        description: 'The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.'
      },
      {
        id: '5',
        name: 'Premium Noise-Cancelling Headphones - Silver',
        image: '/placeholder.svg',
        price: 249.00,
        rating: 4.5,
        reviewCount: 189,
        freeShipping: true,
        category: 'Mobile accessory',
        description: 'Premium noise cancellation for immersive music, clear calls and voice control'
      },
      {
        id: '6',
        name: 'Smartphone X Pro 256GB - Midnight Black',
        image: '/placeholder.svg',
        price: 799.00,
        oldPrice: 899.00,
        rating: 4.8,
        reviewCount: 423,
        freeShipping: true,
        category: 'Smartphones',
        description: 'The most advanced dual camera system ever on a smartphone. All-day battery life and super-fast charging.'
      }
    ];
  
    // Filter sections toggle
    const filterHeaders = document.querySelectorAll('.filter-header');
    filterHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const sectionId = header.getAttribute('data-section');
        const content = document.getElementById(`${sectionId}-content`);
        
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
      
      // Initialize all sections as expanded
      header.setAttribute('aria-expanded', 'true');
      const sectionId = header.getAttribute('data-section');
      const content = document.getElementById(`${sectionId}-content`);
      content.style.display = 'block';
    });
  
    // View toggle (grid/list)
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const productsContainer = document.getElementById('products-container');
    
    gridViewBtn.addEventListener('click', () => {
      productsContainer.className = 'products-grid';
      gridViewBtn.classList.add('view-btn-active');
      listViewBtn.classList.remove('view-btn-active');
      renderProducts();
    });
    
    listViewBtn.addEventListener('click', () => {
      productsContainer.className = 'products-list';
      listViewBtn.classList.add('view-btn-active');
      gridViewBtn.classList.remove('view-btn-active');
      renderProducts();
    });
  
    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
      filterProducts();
    });
  
    // Category filtering
    const categoryCheckboxes = document.querySelectorAll('[data-category]');
    categoryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        filterProducts();
      });
    });
  
    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
      filterProducts();
    });
  
    // Generate stars for ratings
    function generateStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      let starsHTML = '';
      
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          starsHTML += '<span class="star">★</span>';
        } else if (i === fullStars && hasHalfStar) {
          starsHTML += '<span class="star half">★</span>';
        } else {
          starsHTML += '<span class="star empty">☆</span>';
        }
      }
      
      return starsHTML;
    }
  
    // Render products
    function renderProducts(filteredProducts = products) {
      const isListView = productsContainer.className === 'products-list';
      productsContainer.innerHTML = '';
      
      const resultCountElement = document.getElementById('results-count');
      resultCountElement.textContent = `(${filteredProducts.length} items)`;
      
      filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = `product-card ${isListView ? 'list-view' : ''}`;
        
        card.innerHTML = `
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <button class="wishlist-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="product-content">
            <div class="product-price">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            
            <h3 class="product-title">${product.name}</h3>
            
            <div class="product-rating">
              <div class="product-stars" style="color: #facc15;">
                ${generateStars(product.rating)}
              </div>
              <span class="product-reviews">${product.rating} (${product.reviewCount})</span>
            </div>
            
            <p class="product-description">${product.description}</p>
            
            <div class="product-footer">
              ${product.freeShipping ? '<span class="product-badge">Free shipping</span>' : ''}
              <a href="#" class="product-link">View details</a>
            </div>
          </div>
        `;
        
        productsContainer.appendChild(card);
      });
    }
  
    // Filter products
    function filterProducts() {
      const searchQuery = searchInput.value.toLowerCase();
      const selectedCategory = getSelectedCategory();
      const sortMethod = sortSelect.value;
      
      let filteredProducts = products.filter(product => {
        // Apply search query filter
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
          return false;
        }
        
        // Apply category filter
        if (selectedCategory && product.category !== selectedCategory) {
          return false;
        }
        
        return true;
      });
      
      // Apply sorting
      switch (sortMethod) {
        case 'price-asc':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // In a real app, this would sort by date added
          break;
        case 'bestselling':
          // In a real app, this would sort by number of sales
          break;
        // Default is 'featured', no sorting needed
      }
      
      // Update breadcrumb
      updateBreadcrumb(selectedCategory);
      
      // Render the filtered and sorted products
      renderProducts(filteredProducts);
    }
  
    // Get selected category
    function getSelectedCategory() {
      const checkedCategoryCheckbox = document.querySelector('[data-category]:checked');
      return checkedCategoryCheckbox ? checkedCategoryCheckbox.getAttribute('data-category') : null;
    }
  
    // Update breadcrumb
    function updateBreadcrumb(category) {
      const breadcrumbElement = document.getElementById('category-breadcrumb');
      breadcrumbElement.textContent = category ? ` / ${category}` : '';
    }
    
    // Initial render
    renderProducts();
  });