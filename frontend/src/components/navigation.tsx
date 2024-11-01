"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	MobileIcon,
} from "@radix-ui/react-icons";
import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiNodedotjs,
	SiPostgresql,
	SiDocker,
	SiGit,
	SiLinux,
	SiSpring,
	SiKotlin,
	SiPython,
	SiFlask,
	SiDjango,
	SiSwift,
	SiFlutter,
	SiElectron,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Separator } from "./ui/separator";

const projects: { title: string; href: string; description: string }[] = [
	{
		title: "Tray Link",
		href: "https://github.com/thejoaov/tray-link",
		description: "A tool to help developers to open their projects faster.",
	},
	{
		title: "Gym Tracker",
		href: "https://play.google.com/store/apps/details?id=com.thejoaov.gymtracker",
		description: "A tool to help you track your gym progress.",
	},
	{
		title: "My Portfolio",
		href: "https://thejoaov.github.io",
		description: "My portfolio website.",
	},
];

const stack: { title: string; icon: React.ReactNode }[] = [
	{ title: "Next.js", icon: <SiNextdotjs /> },
	{ title: "React", icon: <SiReact /> },
	{ title: "Tailwind CSS", icon: <SiTailwindcss /> },
	{ title: "React Native", icon: <MobileIcon /> },
	{ title: "Kotlin", icon: <SiKotlin /> },
	{ title: "Swift", icon: <SiSwift /> },
	{ title: "Flutter", icon: <SiFlutter /> },
	{ title: "Electron", icon: <SiElectron /> },
	{ title: "Typescript", icon: <SiTypescript /> },
	{ title: "Node.js", icon: <SiNodedotjs /> },
	{ title: "Java", icon: <DiJava /> },
	{ title: "Spring Boot", icon: <SiSpring /> },
	{ title: "Python", icon: <SiPython /> },
	{ title: "Flask", icon: <SiFlask /> },
	{ title: "Django", icon: <SiDjango /> },
	{ title: "PostgreSQL", icon: <SiPostgresql /> },
	{ title: "Docker", icon: <SiDocker /> },
	{ title: "Git", icon: <SiGit /> },
	{ title: "Linux", icon: <SiLinux /> },
];

const links: { title: string; href: string; icon: React.ReactNode }[] = [
	{
		title: "GitHub",
		href: "https://github.com/thejoaov",
		icon: <GitHubLogoIcon />,
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/thejoaov/",
		icon: <LinkedInLogoIcon />,
	},
	// {
	//   title: "Instagram",
	//   href: "https://www.instagram.com/thejoaov/",
	//   icon: <InstagramLogoIcon />,
	// },
];

export function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Where i am</NavigationMenuTrigger>
					<NavigationMenuContent>
						<span className="text-lg p-8 font-medium leading-none flex gap-2 flex-row items-center">
							My links
						</span>
						<Separator />
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							{links.map((link) => (
								<ListItem
									key={link.title}
									href={link.href}
									title={link.title}
									icon={link.icon}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>What i do</NavigationMenuTrigger>
					<NavigationMenuContent>
						<span className="text-lg p-8 font-medium leading-none flex gap-2 flex-row items-center">
							Some of my projects
						</span>
						<Separator />
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{projects.map((project) => (
								<ListItem
									key={project.title}
									title={project.title}
									href={project.href}
								>
									{project.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>What i know</NavigationMenuTrigger>
					<NavigationMenuContent>
						<span className="text-lg p-8 font-medium leading-none flex gap-2 flex-row items-center">
							My stack
						</span>
						<Separator />
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{stack.map((item) => (
								<ListItem
									key={item.title}
									title={item.title}
									icon={item.icon}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<ModeToggle />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none flex gap-2 flex-row items-center">
						{icon && icon}
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
