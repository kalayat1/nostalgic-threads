import heroImage from "../assets/donate-hero.jpg";
import { Link } from "react-router-dom";
import {
  FaRecycle,
  FaHandsHelping,
  FaGlobeAmericas,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

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

          <Link to="/contact" className="donate-cta">
            Find a Store
          </Link>
        </div>

        <div
          className="donate-hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </section>

      {/* HOW YOUR DONATION HELPS */}
      <section className="donate-impact">
        <h2>How Your Donation Helps</h2>

        <div className="impact-grid">
          <div className="impact-card">
            <FaRecycle className="impact-icon" />
            <h3>Reduces Textile Waste</h3>
            <p>
              Donating gently used clothing helps reduce the amount of textile
              waste that ends up in landfills. By extending the life of garments,
              your donations support reuse and reduce the environmental impact
              caused by fast fashion.
            </p>
          </div>

          <div className="impact-card">
            <FaHandsHelping className="impact-icon" />
            <h3>Supports the Community</h3>
            <p>
              Your donations make affordable clothing accessible to individuals
              and families in the community. Thrifted items allow people to shop
              with dignity while supporting local initiatives and programs.
            </p>
          </div>

          <div className="impact-card">
            <FaGlobeAmericas className="impact-icon" />
            <h3>Encourages Sustainable Choices</h3>
            <p>
              Choosing to donate instead of discard promotes mindful consumption
              and sustainable habits. Each donation helps raise awareness about
              ethical fashion and responsible shopping practices.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION PROCESS */}
      <section className="donation-process">
        <h2>The Donation Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-icon">📦</div>
            <span className="process-step">Step 1</span>
            <h3>Sort & Prepare</h3>
            <p>
              Sort through your gently used clothing and make sure items are
              clean, wearable, and in good condition before donating.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">🚗</div>
            <span className="process-step">Step 2</span>
            <h3>Drop Off</h3>
            <p>
              Bring your items to one of our donation locations during store
              hours. Our team will gladly assist you with your donation.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">🏷️</div>
            <span className="process-step">Step 3</span>
            <h3>We Sort & Price</h3>
            <p>
              Our staff carefully sorts, prices, and prepares donated items so
              they can be placed on the sales floor.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">✅</div>
            <span className="process-step">Step 4</span>
            <h3>Items Sold</h3>
            <p>
              Donated items are sold in-store, supporting sustainability efforts
              and helping fund community programs.
            </p>
          </div>
        </div>
      </section>

      {/* ACCEPT / REJECT */}
      <section className="acceptance-section">
        <div className="acceptance-grid">

          <div className="acceptance-card accept">
            <h3>
              <FaCheckCircle className="accept-title-icon" />
              We Accept
            </h3>

            <ul>
              <li><FaCheckCircle className="accept-icon" /> Gently used clothing (all ages)</li>
              <li><FaCheckCircle className="accept-icon" /> Shoes and accessories</li>
              <li><FaCheckCircle className="accept-icon" /> Books and media</li>
              <li><FaCheckCircle className="accept-icon" /> Small furniture</li>
              <li><FaCheckCircle className="accept-icon" /> Household items and kitchenware</li>
              <li><FaCheckCircle className="accept-icon" /> Toys and games (in good condition)</li>
            </ul>
          </div>

          <div className="acceptance-card reject">
            <h3>
              <FaTimesCircle className="reject-title-icon" />
              We Cannot Accept
            </h3>

            <ul>
              <li><FaTimesCircle className="reject-icon" /> Large appliances</li>
              <li><FaTimesCircle className="reject-icon" /> Mattresses or box springs</li>
              <li><FaTimesCircle className="reject-icon" /> Car seats or cribs (safety regulations)</li>
              <li><FaTimesCircle className="reject-icon" /> Damaged or broken items</li>
              <li><FaTimesCircle className="reject-icon" /> Hazardous materials</li>
              <li><FaTimesCircle className="reject-icon" /> Undergarments</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Donations;
