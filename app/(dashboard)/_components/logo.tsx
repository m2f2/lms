import FLogo from "@/public/logo.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <Image
    height={120}
    width={120}
    alt="logo"
    src={FLogo}
    className="text-sky-700"/>
  )
}

export default Logo


