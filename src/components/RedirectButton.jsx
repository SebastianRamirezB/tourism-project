import Link from "next/link"

export const RedirectButton = ({link, text}) => {
  return (
    <Link className="py-5 px-8 border border-primary text-primary font-semibold capitalize rounded-[40px]" href={link}>{text}</Link>
  )
}
