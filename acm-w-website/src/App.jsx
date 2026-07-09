import { useState } from 'react'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  const scrollToSection = (section) => {
    setActiveNav(section)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="logo-container">
              <img src="/acm-w-logo.png" alt="ACM-W Logo" className="logo-img" />
            </div>
            <div className="brand-info">
              <span className="brand-name">NU Arlington ACM-W</span>
              <span className="brand-text">Women in Computing</span>
            </div>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeNav === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('events')} className={activeNav === 'events' ? 'active' : ''}>Events</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className={activeNav === 'gallery' ? 'active' : ''}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('team')} className={activeNav === 'team' ? 'active' : ''}>Team</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Northeastern University Arlington Campus</h1>
            <img src="/nu-arlington-acm-w-logo.png" alt="NU Arlington ACM-W Logo" className="hero-logo" />
            <p className="hero-subtitle">Empowering Women in Computing</p>
            <p className="hero-description">Join our community dedicated to supporting women in technology and fostering innovation through collaboration and learning.</p>
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get Involved</button>
          </div>
          <div className="hero-icon">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <path d="M30 50 L50 30 L70 50 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration-section">
        <div className="container">
          <div className="registration-content">
            <div className="registration-text">
              <h2>Join ACM-W Today!</h2>
              <p>Ready to become part of our community? Sign up to join ACM-W and start your journey with us.</p>
              <p className="registration-subtitle">Scan the QR code or click the link below to register as a member.</p>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5z84P6eCkZ9Kj3ZzP5FB37hUNUtFRTdYWkdaMDk2UDA0OEJMSFIwSDBGVS4u" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Now</a>
            </div>
            <div className="registration-qr">
              <div className="qr-box">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5z84P6eCkZ9Kj3ZzP5FB37hUNUtFRTdYWkdaMDk2UDA0OEJMSFIwSDBGVS4u"
                  alt="Registration QR Code"
                  className="qr-image"
                />
              </div>
              <p className="qr-label">Scan to Register</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section light-bg">
        <div className="container">
          <h2>About ACM-W</h2>
          <p className="section-intro">The Association for Computing Machinery's Council on Women in Computing (ACM-W) supports, celebrates, and advocates for the full engagement of women in all aspects of computing.</p>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">👩‍💻</div>
              <h3>Community</h3>
              <p>Build lasting connections with women in tech and create a supportive network.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Learning</h3>
              <p>Access workshops, seminars, and resources to advance your technical skills.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Opportunities</h3>
              <p>Discover internships, mentorship programs, and career development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">May 30</div>
              <h3>Monthly Meetup</h3>
              <p>Join us for our monthly gathering to network and share experiences in tech.</p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
            <div className="event-card">
              <div className="event-date">Jun 15</div>
              <h3>Technical Workshop</h3>
              <p>Hands-on workshop covering modern web development frameworks and best practices.</p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
            <div className="event-card">
              <div className="event-date">Jul 10</div>
              <h3>Career Panel</h3>
              <p>Hear from inspiring women leaders about their career journeys in tech.</p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2>Gallery</h2>
          <p className="section-intro">Explore moments from our community events and activities</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src= "src/gallery/image3.jpg" alt="2025 SIG Fair" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">2025 SIG Fair</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image5.jpg" alt="ACM-W Stickers" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">ACM-W Stickers</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image11.jpg" alt="ACM-W Professional Workshop" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">ACM-W Professional Workshop</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image12.jpg" alt="ACM-W Professional Workshop" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">ACM-W Professional Workshop</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image7.jpg" alt="Chapter Meeting" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">Chapter Meeting</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image8.jpg" alt="Members" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">Members</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image14.jpg" alt="CAPWIC 2026 Grad Fair" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">CAPWIC 2026 Grad Fair</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image2.jpg" alt="SIG Fair" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">SIG Fair</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="src/gallery/image15.jpg" alt="CAPWIC 2026" className="gallery-item-image" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-text">CAPWIC 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section light-bg">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Promise Owa</h3>
              <p className="role">President</p>
              <p>Computer Science • 3rd Year MSCS</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Yike Li</h3>
              <p className="role">Vice President</p>
              <p>Computer Science • 3rd Year MSCS</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Dr. Youna Jung</h3>
              <p className="role">Avisor</p>
              <p>Khoury College Of Computer Sciences • Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <h2>Get In Touch</h2>
          <p className="section-intro">Want to join ACM-W or have questions? We'd love to hear from you!</p>

          <div className="contact-content">
            <form className="contact-form" name="contact" method="POST" netlify>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about yourself or your interest in ACM-W" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            <div className="contact-info">
              <div className="info-item">
                <h3>📍 Location</h3>
                <p>1300 17th Street N<br/>Rosslyn, Arlington, VA 22202</p>
              </div>
              <div className="info-item">
                <h3>✉️ Email</h3>
                <p><a href="mailto:owa.p@northeastern.edu">nu-arl-acm-w@northeastern</a></p>
              </div>
              <div className="info-item">
                <h3>🔗 Follow Us</h3>
                <div className="social-links">
                  <a href="#" title="LinkedIn">LinkedIn</a>
                  <a href="#" title="GitHub">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 NU ARL ACM-W Student Chapter. All rights reserved.</p>
          <p>Supporting women in computing worldwide</p>
        </div>
      </footer>
    </div>
  )
}

export default App
