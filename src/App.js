import React, { useState } from 'react';
import './App.css';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Icônes des réseaux sociaux

const App = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('1 mois');

  const handleBuyClick = (productName) => {
    const whatsappNumber = '+2126996600354'; // Remplacez par votre numéro WhatsApp
    const message = `Salam, je suis intéressé par "${productName}" avec un abonnement de ${selectedSubscription}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubscriptionChange = (e) => {
    setSelectedSubscription(e.target.value);
  };

  return (
    <div className="app-container">
      {/* Menu */}
      <header className="header">
      <h1>Frezzy Store</h1>
      </header>

      {/* Produits */}
      <section className="products-section">
        <h2>Nos Produits</h2>
        <div className="products-container">
          {/* Produit 1 */}
          <div className="product-card">
            <img src="./images/netflix.jpg" alt="NETFLIX" className="product-image" />
            <h3>Netflix subscription</h3>
            <p className="product-description">*Loffre shared 4K</p>
            <p className="product-description">*t9dr telechager</p>
            <p className="product-description">*Works on any device.</p>
            <p className="product-description">*Contact us for any issue</p>
            <p className="product-description">*Safety Account Warranty 100%</p><br></br>
            <label htmlFor="subscription">Choisissez un abonnement :</label>
            <select
              id="subscription"
              className="subscription-select"
              value={selectedSubscription}
              onChange={handleSubscriptionChange}
            >
              <option value="1 mois">1 mois</option>
              <option value="3 mois">3 mois</option>
              <option value="6 mois">6 mois</option>
              <option value="1 an">1 an</option>
            </select>
            <button
              className="buy-button"
              onClick={() => handleBuyClick('NETFLIX')}
            >
              Acheter
            </button>
          </div>

          {/* Produit 2 */}
          <div className="product-card">
            <img src="./images/spoty.png" alt="SPOTIFY" className="product-image" />
            <h3>Spotify subscription</h3>
            <p className="product-description">*Private Spotify Premium Subscription</p>
            <p className="product-description">*You can Download</p>
            <p className="product-description">*Full Warranty and Support</p>
            <p className="product-description">*You can Change Email and Password</p>
            <p className="product-description">*Can be used on All devices</p><br></br>
            <label htmlFor="subscription">Choisissez un abonnement :</label>
            <select
              id="subscription"
              className="subscription-select"
              value={selectedSubscription}
              onChange={handleSubscriptionChange}
            >
              <option value="1 mois">1 mois</option>
              <option value="3 mois">3 mois</option>
              <option value="6 mois">6 mois</option>
              <option value="1 an">1 an</option>
            </select>
            <button
              className="buy-button"
              onClick={() => handleBuyClick('SPOTIFY')}
            >
              Acheter
            </button>
          </div>
          {/* Produit 2 */}
          <div className="product-card">
            <img src="./images/iptv.jpg" alt="IPTV" className="product-image" />
            <h3>IPTV subscription</h3>
            <p className="product-description">*PPV Events</p>
            <p className="product-description">*Warranty</p>
            <p className="product-description">*LAG-FREE and Anti freeze system.</p>
            <p className="product-description">*Up to 4k Ultra HD quality</p>
            <p className="product-description">*Can be used on All devices</p><br></br>
            <label htmlFor="subscription">Choisissez un abonnement :</label>
            <select
              id="subscription"
              className="subscription-select"
              value={selectedSubscription}
              onChange={handleSubscriptionChange}
            >
              <option value="6 mois">6 mois</option>
              <option value="1 an">1 an</option>
            </select>
            <button
              className="buy-button"
              onClick={() => handleBuyClick('IPTV')}
            >
              Acheter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Suivez-nous :</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/frezzy_isthestore?igsh=bWIxcmkwN3Z4MG9o" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#ffc107" />
          </a>
          <a href="https://www.tiktok.com/@frezzy_thestore?_t=ZN-8syhoE9gAUg&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} color="#ffc107" />
          </a>
          </div><br></br>
        <p>©2025 frezzy Store</p>
      </footer>
    </div>
  );
};

export default App;