<template>
  <footer class="light-footer">
    <div class="footer-container">
      <!-- Brand Section -->
      <div class="footer-brand">
        <h2>Vue E-commerce</h2>
        <p>Your one-stop shop for all your needs.</p>
      </div>

      <!-- Navigation Links -->
      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>

      <!-- Social Media Links -->
      <div class="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#"><i class="pi pi-facebook"></i> Facebook</a></li>
          <li><a href="https://www.x.com/_therealzoux"><i class="pi pi-twitter"></i> Twitter</a></li>
          <li><a href="https://www.instagram.com/therealzoux"><i class="pi pi-instagram"></i> Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/therealzoux"><i class="pi pi-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://github.com/therealzoux"><i class="pi pi-github"></i> GitHub</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p>&copy; 2024 Vue E-commerce. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="css" scoped>
/* Light Mode Footer */
.light-footer {
  background-color: #F8F9FA;
  /* Light gray background */
  color: #333333;
  /* Dark text for contrast */
  font-family: Arial, sans-serif;
  padding: 40px 0;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-brand h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #111827;
  /* Slightly darker for brand */
}

.footer-brand p {
  font-size: 1rem;
  color: #4B5563;
  /* Subtle gray for description */
}

.footer-links,
.footer-social {
  margin-top: 20px;
}

.footer-links h3,
.footer-social h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-links ul,
.footer-social ul {
  list-style: none;
  padding: 0;
}

.footer-links a,
.footer-social a {
  color: #333333;
  text-decoration: none;
  line-height: 2;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-social a:hover {
  color: #2563EB;
  /* Highlight color on hover */
}

.footer-social i {
  margin-right: 8px;
  font-size: 1.2rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #E5E7EB;
  font-size: 0.9rem;
  color: #6B7280;
}
</style>
