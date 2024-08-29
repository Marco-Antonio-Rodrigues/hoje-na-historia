import Link from "next/link"
import { IconTelegram } from "../Icon"

const Footer = () => {
  return (
    <footer className="w-full dark:text-CustomAntiqueWhite text-CustomCharcoal lg:text-lg flex items-center justify-center py-10">
        <Link href='https://t.me/historiadehojebr/4948' className="lg:no-underline hover:underline flex gap-2 items-center transition-transform duration-700 hover:scale-105">
          <IconTelegram/>
          historiadehojebr
        </Link>
    </footer>
  )
}

export default Footer