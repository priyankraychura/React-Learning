import './portfolio.css'
import reactLogo from './assets/react.svg'

function Portfolio() {
  return (
    <div>
    <header>
        <nav>
            <h1>My Portfolio</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <div class="hero">
            <h2>Hi, I'm <span>Your Name</span></h2>
            <p>Passionate Developer & Creative Thinker</p>
            <a href="#projects" class="btn">View Projects</a>
        </div>
    </section>

    <section id="about">
        <h2>About Me</h2>
        <div class="about-container">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <p>
                Hello! I'm a dedicated developer with a passion for building interactive web applications.
                With experience in HTML, CSS, JavaScript, and Python, I love creating meaningful projects.
            </p>
        </div>
    </section>

    <section id="projects">
    <h2>Projects</h2>
    <div class="projects-container">
        <div class="project-card">
            <h3>Random Quote Generator</h3>
            <p>A web app that generates random quotes with options to copy, share, and listen to them.</p>
            <a href="#">View Project</a>
        </div>
        <div class="project-card">
            <h3>Password Validator</h3>
            <p>An interactive tool to validate password strength and ensure security standards.</p>
            <a href="#">View Project</a>
        </div>
        <div class="project-card">
            <h3>Recipe Website</h3>
            <p>A responsive recipe-sharing platform with attractive layouts and easy navigation.</p>
            <a href="#">View Project</a>
        </div>
    </div>
    </section>


    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
    </section>

    <footer>
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
    </footer>

    </div>
  );
}

export default Portfolio;