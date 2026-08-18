import myPhoto from "../assets/myphoto.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={myPhoto} alt="profile" />
      </div>

      <div className="hero-right">
        <h1>Hi, I'm Chinnareddaiah</h1>
        <h3>Java Developer</h3>
        <p>
          Passionate Java Developer with strong knowledge in Core Java,
          Object-Oriented Programming, SQL, and problem solving.
          Interested in building scalable real-world applications.
        </p>
      </div>
    </div>
  );
}

export default Hero;