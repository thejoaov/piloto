import Image from "next/image";
import { NavigationMenuDemo } from "@/components/navigation";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sansr)]">
			<div className="animated-gradient" />
			<NavigationMenuDemo />

			<main className="flex flex-col gap-8 row-start-2 flex-1 items-center max-w-lg justify-center sm:items-start">
				<div className="flex items-center flex-col gap-4">
					<h1 className="text-4xl font-bold text-center">Hey hey!</h1>
					<p className="text-lg text-center">
						I'm João, a software engineer from Brazil. I'm a full-stack
						developer with a passion for building products that help people.
					</p>
					<Image
						src="https://github.com/thejoaov.png"
						alt="Vercel Logo"
						width={100}
						height={100}
						className="rounded-full"
					/>
				</div>
			</main>
		</div>
	);
}
