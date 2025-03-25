import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Image
          src="/creator-text.svg"
          alt="Creator Share Logo"
          width={140}
          height={40}
          priority
        />
      </div>
      <div className="flex items-center gap-8">
        <a href="#about" className="nav-link">About Us</a>
        <a href="#work" className="nav-link">Our Work</a>
        <a href="#share" className="nav-link">Ways to Share</a>
        <a href="#sponsor" className="nav-link">Sponsorship</a>
        <a href="#partner" className="nav-link">Partnership</a>
        <a href="/donate" className="donate-button">Donate</a>
      </div>
    </nav>
  );
}
