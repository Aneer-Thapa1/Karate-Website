import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";

const Landing = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat min-h-screen w-screen dark:bg-background-dark poppins">
      <Navbar />
      <div className="flex flex-col w-screen overflow-hidden">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Landing;
