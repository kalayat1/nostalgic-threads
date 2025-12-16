import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-section">
        <div className="contact-grid">

          {/* STORE HOURS */}
          <div className="contact-card">
            <h2>
              <FaClock className="contact-icon" />
              Store Hours
            </h2>

            <ul className="hours-list">
              <li><span>Monday</span><span>Closed</span></li>
              <li><span>Tuesday</span><span>10:00 AM – 6:00 PM</span></li>
              <li><span>Wednesday</span><span>10:00 AM – 6:00 PM</span></li>
              <li><span>Thursday</span><span>10:00 AM – 6:00 PM</span></li>
              <li><span>Friday</span><span>10:00 AM – 7:00 PM</span></li>
              <li><span>Saturday</span><span>9:00 AM – 5:00 PM</span></li>
              <li><span>Sunday</span><span>12:00 PM – 4:00 PM</span></li>
            </ul>

            <div className="dropoff-note">
              <strong>Donation Drop-off:</strong> 
               Please bring donations during store hours so our team can assist you.
            </div>
          </div>

          {/* LOCATION & CONTACT */}
          <div className="contact-card">
            <h2>
              <FaMapMarkerAlt className="contact-icon" />
              Location & Contact
            </h2>

            <div className="contact-details">
              <p>
                <FaMapMarkerAlt />  
                235 Innes Rd<br />
                Orléans, ON
              </p>

              <p>
                <FaPhoneAlt />  
                (555) 123-4567
              </p>

              <p>
                <FaEnvelope />  
                info@nostalgicthreads.com
              </p>
            </div>

            <div className="map-embed">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps?q=Ottawa+Ontario&output=embed"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
