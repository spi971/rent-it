import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rent It",
	description: "Air Bnb clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={nunitoFont.className}>
				<ClientOnly>
					<Modal/>
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
