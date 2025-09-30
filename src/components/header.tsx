import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="px-4 py-2 flex gap-x-4 text-black justify-between items-center border-b border-gray-300">
      <nav className="flex flex-row">
        <img
          src="https://nexus-demo.availproject.org/avail-logo.svg"
          alt="Avail Logo"
        />
      </nav>

      <div className="flex items-center gap-x-4">
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
