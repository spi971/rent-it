"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<div className="flex flex-row gap-2">
			<Image
				alt="Logo"
				className="hidden md:block cursor-pointer"
				height="35"
				width="35"
				src={"/images/logo.svg"}
			/>
			<h1 className="text-logo-green text-4xl">Rent It</h1>
		</div>
	);
};

export default Logo;
