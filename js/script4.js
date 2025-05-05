// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Quantity input functionality
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.qty-input');
    
    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
      }
    });
    
    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(qtyInput.value);
      qtyInput.value = currentValue + 1;
    });
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
          content.style.display = 'none';
          content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        activeContent.style.display = 'block';
        activeContent.classList.add('active');
      });
    });
    
    // Product thumbnail functionality
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Change main image source
        const color = this.alt;
        if (color.includes('White')) {
          mainImage.src = 'https://placehold.co/300x350/ffffff/gray?text=White+Polo';
        } else if (color.includes('Black')) {
          mainImage.src = 'https://placehold.co/300x350/2d2d2d/white?text=Black+Polo';
        } else if (color.includes('Blue')) {
          mainImage.src = 'https://placehold.co/300x350/0033cc/white?text=Blue+Polo';
        } else {
          mainImage.src = 'https://placehold.co/300x350/e0e0e0/gray?text=Gray+Polo';
        }
      });
    });
    
    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    addToCartBtn.addEventListener('click', function() {
      alert('Product added to cart!');
    });
    
    // Select sample button
    const selectSampleBtn = document.querySelector('.outline-btn');
    
    selectSampleBtn.addEventListener('click', function() {
      alert('Sample selected!');
    });
    
    // Save for later checkbox
    const saveForLater = document.getElementById('save');
    
    saveForLater.addEventListener('change', function() {
      if (this.checked) {
        alert('Product saved for later!');
      } else {
        alert('Product removed from saved items!');
      }
    });
  });