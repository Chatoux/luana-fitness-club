import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <div className="font-bold text-xl">Luana Fitness Club</div>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};