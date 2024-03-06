import Intro from "@/components/Intro";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center w-full border-b-accent border p-6 flex-wrap">
        <Logo />
        <Navbar />
      </header>
      <main>
        <Intro />
      </main>
      <footer></footer>
    </>
  );
}
