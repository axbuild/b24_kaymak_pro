import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="b24.kaymak.pro">
      <Image src={logo} alt="b24.kaymak.pro" width={32} height={32} />
    </Link>
  );
}
