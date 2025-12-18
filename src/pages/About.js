import storeImage from "../assets/im_photo.jpeg";

function About() {
  return (
    <main className="about-page">
      {/* HERO/BANNER */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Nostalgic Threads</h1>
          <p>
            We believe in giving new life to gently used items while supporting our community 
            and promoting sustainability.
          </p>
        </div>
      </section>

      <section >
        <div >
          <img src={storeImage} alt="Community Impact" />
        </div>
      </section>
    </main>
  );
}

export default About;
