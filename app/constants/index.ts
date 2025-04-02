export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "skills",
	},
	
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];





const experiences = [
	{
		title: "MERN Stack Developer Intern",
		company_name: "Bridgeon Solutions",
		icon: "/company/bridgeon.png",
		iconBg: "#383E56",
		date: "2024 -  2025",
		points: [
			"Designed and developed responsive, user-friendly web applications using the MERN Stack",
			"Built and optimized scalable RESTful APIs with Express.js and Node.js ,ensuring high performance and efficiency",
			"Implemented Git for version control, collaborated on code reviews, and maintained high-quality coding standards",
			"Actively participated in team discussions and scrum meetings, staying updated with industry trends and best practices",
		]
	}
]

const testimonials = [
	
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Nihal Karimbil",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/nihal-karimbil/",
	},
	

	{
		id: 5,
		testimonial:
			"Check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Nihalkarimbil",
		image: "/tech/github.webp",
		link: "https://github.com/Nihalkarimbil",
	},
	{
		id: 3,
		testimonial:
			"instagram is a social media platform for sharing photos and videos. connect with me !",
		name: "niha.l._",
		image: "/socialmedia/instagram1.svg",
		link: "https://www.instagram.com/niha.l._/",
	},

];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Next" | "Vercel" | "Figma" | "React" | "Web"
}[] = [
	{
		name: "Vital Aid",
		description:
			"A Complete Health Care Monitoring management app for a locality made With Nextjs and Typescript With MERN Stack.",
		tags: [
			{
				name: "next.js",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MERN",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/vitalaid.png",
		platform: "Next",
		source_code_link: "https://github.com/Vital-Aid/",
		deploy_link: "https://vitalaid-snr.vercel.app/",
	},
	{
		name: "ownbnb",
		description:
			"An MERN stack Airbnb clone Application with a responsive design and a user-friendly interface.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Node",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/ownbnb.png",
		source_code_link: "https://github.com/Nihalkarimbil/ownBnB",
		platform: "React",
		deploy_link: "https://own-bnb.vercel.app/",
	},
	{
		name: "Furnitales",
		description:
			"An E-commerce website for furniture and home decor products, built with MERN Stack and Tailwind CSS.",
		tags: [
			{
				name: "react",
				color: "orange-text-gradient",
			},
			{
				name: "Node",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "pink-text-gradient",
			},
			{
				name: "Express",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/furnitales.png",
		source_code_link: "https://github.com/Nihalkarimbil/furnitale-app",
		platform: "Web",
		deploy_link: "https://furnitales.vercel.app/",
	},

];

export { experiences, testimonials, projects };
