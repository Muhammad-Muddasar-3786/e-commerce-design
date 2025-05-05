document.addEventListener('DOMContentLoaded', function() {
    // View switching functionality
    const viewButtons = document.querySelectorAll('.view-btn');
    const productList = document.querySelector('.product-list');
    
    viewButtons.forEach(button => {
      button.addEventListener('click', function() {
        viewButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const viewType = this.getAttribute('data-view');
        if (productList) {
          if (viewType === 'grid') {
            productList.style.gridTemplateColumns = 'repeat(1, 1fr)';
            
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
              card.style.display = 'flex';
              card.style.flexDirection = 'row';
            });
            
            // Reset image dimensions
            const images = document.querySelectorAll('.product-image');
            images.forEach(img => {
              img.style.width = '180px';
              img.style.height = '180px';
            });
          } else {
            productList.style.gridTemplateColumns = 'repeat(2, 1fr)';
            
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
              card.style.display = 'flex';
              card.style.flexDirection = 'column';
            });
            
            // Adjust image dimensions
            const images = document.querySelectorAll('.product-image');
            images.forEach(img => {
              img.style.width = '100%';
              img.style.height = '200px';
            });
          }
        }
      });
    });
    
    // Favorite button functionality
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.style.color = this.style.color === 'rgb(255, 71, 71)' ? '#ccc' : '#ff4747';
      });
    });
    
    // Pagination functionality
    const pageButtons = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
    pageButtons.forEach(button => {
      button.addEventListener('click', function() {
        pageButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterButton = document.querySelector('.newsletter-button');
    
    if (newsletterButton) {
      newsletterButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (newsletterInput && newsletterInput.value.trim() === '') {
          alert('Please enter your email address');
        } else if (newsletterInput && !validateEmail(newsletterInput.value)) {
          alert('Please enter a valid email address');
        } else {
          alert('Thank you for subscribing!');
          if (newsletterInput) newsletterInput.value = '';
        }
      });
    }
    
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Back to top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Product added to cart!');
      });
    });
  });