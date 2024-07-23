import "./hero.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <section className="hero-section section-container">
      <Navbar />
      <section className="personal-info">
        <section className="profile-image-container">
          <img className="profile-image" src="" alt="" />
        </section>
        <section className="profile-details">
          <h1>Themba Mtshelwane</h1>
          <h3>Frontend Web Developer</h3>
        </section>
      </section>
      <Carousel />
    </section>
  );
};
export default HeroSection;
