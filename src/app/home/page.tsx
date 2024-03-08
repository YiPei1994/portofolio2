import About from "@/components/About";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

function Homepage() {
  return (
    <>
      <header className="relative w-full">
        <Navbar />
      </header>
      <main className="max-w-screen-xl p-4 md:p-8 lg:p-12 m-auto">
        <Intro />
        <About />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default Homepage;
