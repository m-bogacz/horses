import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import Link from "next/link";

export const Logo = () => (
  <Link href={"/"} className="mr-10">
    <Image priority src={logo} alt="logo" />
  </Link>
);
