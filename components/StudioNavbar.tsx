import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-baseline p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="w-6 h-6 text-[#F7AB0A] mr-2" />
          Go To Website
        </Link>

    <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
<h1 className="font-bold text-white">Want coding challenges & Solutions sent to your inbox daily?</h1>
<Link href="https://www.papareact.com/universityofcode" className="text-[#F7AB0A] font-bold mr-2">
www.parareact.com/universityofcode
</Link>
    </div>

      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
