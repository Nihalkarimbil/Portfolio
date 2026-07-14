"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";
import GooeyNav from "./GooeyNav";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`paddingX
			w-full flex items-center py-5 fixed top-0 z-20 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				
				<div
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<Link href="https://github.com/Nihalkarimbil">
						<Image
							src="/favicon.ico"
							
							width={40}
							height={40}
							alt="logo"
							priority
							className="object-contain"
						/>
					</Link>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						NK &nbsp; <span className="sm:block hidden ">| Nihal K</span>
					</p>
				</div>

				<div className="hidden sm:flex">
					<GooeyNav
						items={navLinks.map((nav) => ({
							label: nav.title,
							href: `#${nav.id}`,
						}))}
						initialActiveIndex={
							navLinks.findIndex((nav) => nav.title === active) !== -1
								? navLinks.findIndex((nav) => nav.title === active)
								: 0
						}
						onItemClick={(item) => {
							setActive(item.label);
						}}
					/>
				</div>
				<div className="mt-2 lg:block hidden">
					<ResumeButton />
				</div>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							<div style={{ position: 'relative' }}>
								<GooeyNav
									items={navLinks.map((nav) => ({
										label: nav.title,
										href: `#${nav.id}`,
									}))}
									initialActiveIndex={
										navLinks.findIndex((nav) => nav.title === active) !== -1
											? navLinks.findIndex((nav) => nav.title === active)
											: 0
									}
									onItemClick={(item) => {
										setActive(item.label);
										// Delay hiding the menu to allow the Gooey effect to play
										setTimeout(() => setToggle(false), 800);
									}}
								/>
							</div>
							<li>
								<div className="mt-2">
									<ResumeButton />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
