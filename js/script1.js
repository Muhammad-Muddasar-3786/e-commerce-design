
document.addEventListener('DOMContentLoaded', function() {
// Product hover effect
const productCards = document.querySelectorAll('.product-card');
  
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  });
  
  // Add click event for product cards
  card.addEventListener('click', function() {
    alert('Product details page would open here!');
  });
});

// Newsletter form validation
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterTextarea = document.querySelector('.newsletter-textarea');
const quantityInput = document.querySelector('.quantity-input');
const newsletterButton = document.querySelector('.newsletter-button');

if (newsletterButton) {
  newsletterButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    if (newsletterInput.value.trim() === '') {
      alert('Please enter what you are looking for');
      isValid = false;
    }
    
    if (newsletterTextarea.value.trim() === '') {
      alert('Please provide more details');
      isValid = false;
    }
    
    if (quantityInput.value.trim() === '') {
      alert('Please specify a quantity');
      isValid = false;
    }
    
    if (isValid) {
      alert('Your inquiry has been sent successfully!');
      newsletterForm.reset();
    }
  });
}

// Subscription form
const subscriptionForm = document.querySelector('.subscription-form');
const subscriptionInput = document.querySelector('.subscription-input');
const subscriptionButton = document.querySelector('.subscription-button');

if (subscriptionButton) {
  subscriptionButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (subscriptionInput && subscriptionInput.value.trim() === '') {
      alert('Please enter your email address');
    } else if (subscriptionInput && !validateEmail(subscriptionInput.value)) {
      alert('Please enter a valid email address');
    } else {
      alert('Thank you for subscribing!');
      if (subscriptionInput) subscriptionInput.value = '';
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

// Show back to top button when scrolling down
window.addEventListener('scroll', function() {
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0.7';
    }
  }
});

// Header icons hover effect
const headerIcons = document.querySelectorAll('.header-icon');

headerIcons.forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2)';
  });
  
  icon.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
  
  // Add click event for header icons
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    const iconType = this.textContent;
    
    switch(iconType) {
      case '🔔':
        alert('Notifications would appear here!');
        break;
      case '❤':
        alert('Favorites would appear here!');
        break;
      case '🛒':
        alert('Shopping cart would appear here!');
        break;
      case '👤':
        alert('User profile would appear here!');
        break;
      default:
        alert('Feature not implemented yet!');
    }
  });
});

// Shop now button
const shopNowButton = document.querySelector('.shop-now-btn');

if (shopNowButton) {
  shopNowButton.addEventListener('click', function() {
    alert('Shop now button clicked! This would navigate to products.');
  });
}

// CTA buttons
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('This would filter products according to: ' + this.textContent);
  });
});

// Add smooth transitions
document.querySelectorAll('a, button').forEach(el => {
  el.style.transition = 'all 0.3s ease';
});
});