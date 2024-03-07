import About from "@/components/About";
import Intro from "@/components/Intro";
import Logo from "@/components/Logo";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header className="relative w-full">
        <Navbar />
      </header>
      <main className="max-w-screen-xl p-4 md:p-8 lg:p-12 m-auto">
        <Intro />
        <About />
      </main>
      <footer></footer>
    </>
  );
}
