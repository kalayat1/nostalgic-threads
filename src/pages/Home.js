import heroImage from "../assets/hero.jpeg";

function Home() {
  return (
    <>
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
            <button className="primary">Donate Items</button>
            <button className="secondary">Learn About Our Mission</button>
          </div>
        </div>
      </div>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Nostalgic Threads promotes recycling and reusing items to support
          environmental sustainability and provide affordable goods for the
          community.
        </p>
      </section>
    </>
  );
}

export default Home;
