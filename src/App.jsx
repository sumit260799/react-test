import './App.css'

function App() {
  return (
    <div className='app-container'>
      {/* Header */}
      <header className='header'>
        <h1>Welcome to My World 🌍</h1>
        <nav>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-content'>
          <h2>Unlock Your Potential 🚀</h2>
          <p>
            Discover new possibilities, embrace creativity, and build amazing
            things. Join us on this incredible journey!
          </p>
          <a href='#explore' className='cta-button'>
            Explore More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='about'>
        <h2>Who We Are</h2>
        <p>
          We are a passionate team of developers, designers, and dreamers
          dedicated to making the digital world a better place. Innovation
          drives us, and we love what we do!
        </p>
      </section>

      {/* Services Section */}
      <section id='services' className='services'>
        <h2>What We Offer</h2>
        <div className='service-cards'>
          <div className='service-card'>
            <h3>Web Development 🌐</h3>
            <p>
              Creating responsive and dynamic websites that bring ideas to life.
            </p>
          </div>
          <div className='service-card'>
            <h3>UI/UX Design 🎨</h3>
            <p>Designing user-friendly and visually stunning interfaces.</p>
          </div>
          <div className='service-card'>
            <h3>SEO & Marketing 📈</h3>
            <p>
              Boost your online presence and reach your target audience
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact'>
        <h2>Get in Touch</h2>
        <a href='mailto:contact@example.com' className='contact-button'>
          Say Hello 👋
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>Created by ❤️ Sumit Das</p>
      </footer>
    </div>
  )
}

export default App
