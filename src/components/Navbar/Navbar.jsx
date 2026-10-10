import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logooo.png";

import grubhubLogo from "../../assets/grubhub.png";
import doordashLogo from "../../assets/doordash.png";
import uberEatsLogo from "../../assets/ubereats.png";
import yelpLogo from "../../assets/yelp.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ orderOpen, setOrderOpen }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const deliveryApps = [
    {
      name: "Grubhub",
      logo: grubhubLogo,
      link:
        "https://www.grubhub.com/restaurant/masala-cafe-839-newark-ave-jersey-city/3024548",
    },
    {
      name: "DoorDash",
      logo: doordashLogo,
      link:
        "https://www.doordash.com/store/masala-cafe-south-indian-cuisine-jersey-city-1083908/88442546/?event_type=autocomplete&pickup=false",
    },
    {
      name: "Uber Eats",
      logo: uberEatsLogo,
      link:
        "https://www.ubereats.com/store/masala-cafe-jc/qTlTTknpQgKt4lw4WdZoiA?diningMode=DELIVERY&sc=SEARCH_SUGGESTION",
    },
    {
      name: "Yelp",
      logo: yelpLogo,
      link:
        "https://www.yelp.com/biz/masala-cafe-jersey-city-4?osq=masala+cafde",
    },
  ];

  const handleDeliveryApp = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");

    setDeliveryOpen(false);
    setOrderOpen(false);
  };

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>

      <Link to="/" className="logo">
        <img src={logo} alt="Masala Cafe Logo" />

        <div className="logo-text">
          <h2 style={{ fontStyle: "italic" }}>
            Masala Cafe
          </h2>

          <span>
            South Indian Restaurant
          </span>
        </div>
      </Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/catering" onClick={() => setMenuOpen(false)}>Catering</Link></li>
      </ul>

      <button
        className="order-btn"
        onClick={() => {
          setOrderOpen(true);
          setDeliveryOpen(false);
        }}
      >
        Order Now
      </button>

      {orderOpen && !deliveryOpen && (
        <div
          className="order-overlay"
          onClick={() => setOrderOpen(false)}
        >
          <div
            className="order-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="order-close"
              onClick={() => setOrderOpen(false)}
            >
              ×
            </button>

            <h2>How would you like to order?</h2>
            <p>Choose your preferred option</p>

            <div className="order-options">

              <button
                className="order-option"
                onClick={() => {
                  console.log("Pickup selected");
                  setOrderOpen(false);
                }}
              >
                <span className="order-icon">🥡</span>
                <span>
                  <strong>Pickup</strong>
                  <small>Pick up from our restaurant</small>
                </span>
              </button>

              <button
                className="order-option"
                onClick={() => {
                  setDeliveryOpen(true);
                }}
              >
                <span className="order-icon">🛵</span>
                <span>
                  <strong>Delivery</strong>
                  <small>Get your food delivered</small>
                </span>
              </button>

            </div>
          </div>
        </div>
      )}

      {deliveryOpen && (
        <div
          className="order-overlay"
          onClick={() => {
            setDeliveryOpen(false);
          }}
        >
          <div
            className="order-card delivery-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="order-close"
              onClick={() => {
                setDeliveryOpen(false);
                setOrderOpen(false);
              }}
            >
              ×
            </button>

            <h2>Choose Delivery Partner</h2>
            <p>Select your preferred delivery app</p>

            <div className="delivery-options">
              {deliveryApps.map((app) => (
                <button
                  key={app.name}
                  className="delivery-option"
                  onClick={() => handleDeliveryApp(app.link)}
                >
                  <img src={app.logo} alt={app.name} />
                  <span className="delivery-name">{app.name}</span>
                  <span className="delivery-arrow">↗</span>
                </button>
              ))}
            </div>

            <button
              className="delivery-back"
              onClick={() => {
                setDeliveryOpen(false);
              }}
            >
              ← Back
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;