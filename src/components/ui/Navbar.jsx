import Image from "next/image"
import Link from "next/link"
import { LoginButton } from "../LoginButton"


export const Navbar = () => {
  return (
    <nav className="fixed top-8 w-full h-20 ">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <Image src="/images/logo.png" width={97} height={80} alt="logo travel pulse" />
          <ul className="text-white text-2xl font-extrabold flex gap-16">
            <Link href="#" >
              Experiencias
            </Link>
            <Link href="#" >
              Stories
            </Link>
            <Link href="#" >
              Reviews
            </Link>
          </ul>
          <div>
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
