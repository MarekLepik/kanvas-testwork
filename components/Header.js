import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className="flex justify-around mx-auto pt-8 pb-20 bg-white">
      <div className="-m-2">
        <Link href="/">
          <img
            className="sm:max-w-sm cursor-pointer"
            src="/assets/kanvasailogo.png"
          />
        </Link>
      </div>
      <div className="flex xl:space-x-10 md:space-x-8 sm:space-x-4 font-bold">
        <Link href="/">
          <h1 className="cursor-pointer">NFT MARKET</h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer">CREATORS</h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer">COLLECTORS</h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer">INFO</h1>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <h1 className="cursor-pointer">LOG IN</h1>
        </Link>
        <div className="-m-2">
          <button
            className="bg-kanvas-pink rounded-2xl text-white pt-2 pb-2 pl-6 pr-6"
            type="button"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
