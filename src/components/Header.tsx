import Image from "next/image";

function Header() {
  return (
    <header className="">
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
}

export default Header;
