import heroImage from "../assets/hero.jpeg";
import { Link } from "react-router-dom";
import { FaRecycle, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

function Home() {
  const scrollToMission = () => {
    const element = document.getElementById("mission");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Giving Back, One Treasure at a Time</h1>
          <p>
            Supporting sustainability and community through second-hand finds.
          </p>
          <div className="hero-buttons">
  <Link to="/donations" className="primary">Donate Items</Link>
  <button className="secondary" onClick={scrollToMission}>Learn About Our Mission</button>
</div>
        </div>
      </div>

      {/* OUR MISSION */}
      <section className="section mission-section" id="mission">
        <h2>Our Mission</h2>
        <p>
          Nostalgic Threads is dedicated to promoting recycling and reusing items to support
          environmental sustainability. We provide affordable goods to the community while
          helping reduce waste and make a positive impact on the planet.
        </p>
      </section>

      {/* MAKING REAL IMPACT */}
      <section className="impact-section">
        <h2>Making Real Impact</h2>

        <div className="impact-grid">
          <div className="impact-card">
            <FaRecycle className="impact-icon" />
            <h3>Reduces Textile Waste</h3>
            <p>
              By donating gently used clothing, we help reduce textile waste
              and extend the life of garments, lowering environmental impact.
            </p>
          </div>

          <div className="impact-card">
            <FaHandsHelping className="impact-icon" />
            <h3>Supports the Community</h3>
            <p>
              Donations make affordable clothing accessible to families and
              individuals, while supporting local initiatives and programs.
            </p>
          </div>

          <div className="impact-card">
            <FaGlobeAmericas className="impact-icon" />
            <h3>Encourages Sustainable Choices</h3>
            <p>
              Choosing to donate instead of discard raises awareness about
              ethical fashion and sustainable consumption.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANIZATION & ACHIEVEMENTS */}
      <section className="organization-section">
        <h2>Our Organization</h2>
        <p>
          Nostalgic Threads has been making a real difference by supporting the community 
          and promoting sustainability. Each year, we grow stronger and expand our reach.
        </p>

        <div className="organization-grid">
          <div className="organization-card">
            <img 
              src={require("../assets/last-year-ach.jpeg")} 
              alt="Last year's event" 
            />
          </div>
          <div className="organization-card">
            <h3>Achievements</h3>
            <ul>
              <li>Over 1,000 families served last year</li>
              <li>Collected 10,000+ clothing items for reuse</li>
              <li>Raised awareness on sustainable fashion in local schools</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
