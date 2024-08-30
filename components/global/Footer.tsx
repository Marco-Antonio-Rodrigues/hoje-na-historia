import Link from "next/link"
import { IconTelegram } from "../Icon"

const Footer = () => {
  return (
    <footer className="w-full dark:text-CustomAntiqueWhite text-CustomCharcoal lg:text-lg flex items-center justify-center py-10">
        <Link href='https://web.telegram.org/k/#@historia_br' className="lg:no-underline hover:underline flex gap-2 items-center transition-transform duration-700 hover:scale-105">
          <IconTelegram/>
          historia_br
        </Link>
    </footer>
  )
}

export default Footer