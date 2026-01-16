'use client';
import Link from "next/link";

type ButtonAddProps = {
    label: string;
    href: string;
}

const ButtonAdd = ({ label, href }: ButtonAddProps) => {

    return (
        <div>
            <Link href={href}>
                <button className="px-4 py-2 bg-blue-500 text-white  hover:bg-blue-400 rounded-full cursor-pointer">
                    {label}
                </button>
            </Link>
        </div>
    )
}

export default ButtonAdd