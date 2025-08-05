import Image from "next/image"
import logo from "../../../zoro.png"

export const NameBrief = () => {
  return (
    <div>
        <Image src={logo} alt="Profile Pic" width={130} height={130} className="rounded-lg h-[130px] width-[130px]" objectFit="cover"/>
    </div>
  )
}
