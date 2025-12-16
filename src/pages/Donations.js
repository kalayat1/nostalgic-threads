import heroImage from "../assets/donate-hero.jpg";
import { Link } from "react-router-dom";
import { FaRecycle, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

function Donations() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="donate-hero">
        <div className="donate-hero-text">
          <h1>Give Clothing a Second Life</h1>

          <p>
            Donate gently used items to support sustainability and reduce textile
            waste.
          </p>

          <Link to="/visit" className="donate-cta">
            Find a Store
          </Link>
        </div>

        <div
          className="donate-hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </section>

      {/* HOW YOUR DONATION HELPS */}
      <section className="donate-impact">
        <h2>How Your Donation Helps</h2>

        <div className="impact-grid">
          <div className="impact-card">
            <span className="impact-icon">
              <FaRecycle />
            </span>

            <h3>Reduces Textile Waste</h3>
            <p>
              Donating gently used clothing helps reduce the amount of textile
              waste that ends up in landfills. By extending the life of garments,
              your donations support reuse and reduce the environmental impact
              caused by fast fashion.
            </p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">
              <FaHandsHelping />
            </span>

            <h3>Supports the Community</h3>
            <p>
              Your donations make affordable clothing accessible to individuals
              and families in the community. Thrifted items allow people to shop
              with dignity while supporting local initiatives and programs.
            </p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">
              <FaGlobeAmericas />
            </span>

            <h3>Encourages Sustainable Choices</h3>
            <p>
              Choosing to donate instead of discard promotes mindful consumption
              and sustainable habits. Each donation helps raise awareness about
              ethical fashion and responsible shopping practices.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION GUIDELINES */}
      <section className="donate-guidelines">
        <h2>Donation Guidelines</h2>

        <div className="guidelines-grid">
          <div className="guideline-item">
            <span className="icon">👗</span>
            <h3>Clothing</h3>
            <p>Clean, gently used clothing in good condition.</p>
          </div>

          <div className="guideline-item">
            <span className="icon">👟</span>
            <h3>Shoes</h3>
            <p>Pairs with minimal wear and intact soles.</p>
          </div>

          <div className="guideline-item">
            <span className="icon">👜</span>
            <h3>Accessories</h3>
            <p>Bags, scarves, and belts in usable condition.</p>
          </div>

          <div className="guideline-item not-accepted">
            <span className="icon">🚫</span>
            <h3>Not Accepted</h3>
            <p>Damaged, stained, or heavily worn items.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Donations;
