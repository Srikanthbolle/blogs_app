import React from "react"
import Image from "next/image"

const Logo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        alt="logo"
        src="https://links.papareact.com/1m8"
      />
      {renderDefault && renderDefault(props)}
    </div>
  )
}

export default Logo
