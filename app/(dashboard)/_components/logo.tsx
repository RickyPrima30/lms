import Image from "next/image";

export const Logo = () => {
    return (
        <Image
        height={60}
        width={60}
        alt="lms-logo"
        src="/logo.svg"
        />
    )
}