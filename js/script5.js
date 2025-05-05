// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Quantity selects functionality
  const qtySelects = document.querySelectorAll('.qty-select');
  qtySelects.forEach(select => {
    select.addEventListener('change', updateTotals);
  });

  // Remove item buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cartItem = this.closest('.cart-item');
      cartItem.style.opacity = '0';
      setTimeout(() => {
        cartItem.remove();
        updateCartCount();
        updateTotals();
      }, 300);
    });
  });

  // Remove all button
  const removeAllBtn = document.querySelector('.remove-all-btn');
  if (removeAllBtn) {
    removeAllBtn.addEventListener('click', function() {
      const cartItems = document.querySelectorAll('.cart-item');
      cartItems.forEach(item => {
        item.style.opacity = '0';
      });
      setTimeout(() => {
        cartItems.forEach(item => {
          item.remove();
        });
        updateCartCount();
        updateTotals();
      }, 300);
    });
  }

  // Save for later buttons
  const saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cartItem = this.closest('.cart-item');
      cartItem.style.opacity = '0';
      setTimeout(() => {
        alert('Item saved for later!');
        cartItem.remove();
        updateCartCount();
        updateTotals();
      }, 300);
    });
  });

  // Move to cart buttons
  const moveButtons = document.querySelectorAll('.move-btn');
  moveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      productCard.style.opacity = '0';
      setTimeout(() => {
        alert('Item moved to cart!');
        productCard.remove();
        updateCartCount();
      }, 300);
    });
  });

  // Back to shop button
  const returnBtn = document.querySelector('.return-btn');
  if (returnBtn) {
    returnBtn.addEventListener('click', function() {
      window.location.href = 'index.html'; // Redirect to home page
    });
  }

  // Apply coupon button
  const applyBtn = document.querySelector('.apply-btn');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      const couponInput = document.querySelector('.coupon-input input');
      if (couponInput.value.trim() !== '') {
        alert('Coupon applied successfully!');
        couponInput.value = '';
      } else {
        alert('Please enter a coupon code.');
      }
    });
  }

  // Checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      alert('Proceeding to checkout!');
    });
  }

  // Shop now button
  const shopNowBtn = document.querySelector('.shop-now-btn');
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function() {
      window.location.href = 'index.html'; // Redirect to home page
    });
  }

  // Update cart count
  function updateCartCount() {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartTitle = document.querySelector('.cart-title');
    if (cartTitle) {
      cartTitle.textContent = `My cart (${cartItems.length})`;
    }
  }

  // Update totals - this is a simplified version that doesn't actually recalculate
  function updateTotals() {
    // In a real application, you would recalculate based on actual item prices and quantities
    console.log('Totals would be updated here based on actual cart items');
  }

  // Add link from cart.html to index.html
  const updateIndexHtml = () => {
    // This would be implemented in the main website.
    // For now, this is just a demonstration of how you would add navigation
    console.log('Add navigation from index.html to cart.html');
  };
});