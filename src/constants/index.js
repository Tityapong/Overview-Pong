import {
	backend,
	creator,
	css,
	datahouse,
	figma,
	freelancer,
	git,
	html,
	javascript,
	mobile,
	mui,
	nodejs,
	reactjs,
	redux,
	tailwind,
	threejs,
	typescript,
	web,
	cafesang,
	covidtracker,
	inutdesign,
	kingstonedanang,
	noorcafe,
	noorkombucha,
	taptaponme,
	portfolio2021,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer (React)",
		icon: mobile,
	},
	{
		title: "UIX Designer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	// {
	// 	name: "Material UI",
	// 	icon: mui,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Education",
		company_name: "",
		icon: freelancer,
		iconBg: "#383E56",
		date: "2023 - present",
		points: [
			"(2023) Study C++ and  Frontend Developer (React) at ETEC",
			"(Bachelor Degree - 2023-present) Royal University of Phnom Penh Bachelor's Degree in Information Technology Engineering.",
			"(2024-present) I'm a student studying Schoolarship Web Developer Node js at the ANT Training Center.The Ministry of Post and Telecommunication is the sponsor. "

		],
	},
	
	{
		title: "Volunteer and Experience",
	//	company_name: "Datahouse Asia",
		icon: datahouse,
		iconBg: "#E6DEDD",
		date: "2023",
		points: [
			" Internship spring20",
			" Vollunteer Bussiness Club at Fe RUPP"


		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Booking & Tour",
		description:
			"An E-commerce website for customizing laptops, mobile, camera skin",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "Animate os",
				color: "blue-text-gradient",
			},
			{
				name: "Material UI",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
		],
		image: inutdesign,
		source_code_link: "https://project-bos5.vercel.app/",
	},
	{
		name: "Booking & Tour",
		description:
			"An E-commerce website for customizing laptops, mobile, camera skin",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "Animate os",
				color: "blue-text-gradient",
			},
			{
				name: "Material UI",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
		],
		image: taptaponme,
		source_code_link: "",
	},
	// {
	// 	name: "Portfolio",
	// 	description:
	// 		"My pervious portfolio website to show my information and practice 3D web animation",
	// 	tags: [
	// 		{
	// 			name: "Next",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "ThreeJS",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Framer motion",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "React Three Fiber",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Spline",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: portfolio2021,
	// 	source_code_link: "https://tinspham.dev/",
	// },
	{
		name: "Kingstone Danang",
		description:
			"A website for displaying Granite & Marble stone, Furniture - Exterior products",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
			{
				name: "Firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
		],
		image: kingstonedanang,
		source_code_link: "",
	},
	// {
	// 	name: "NOOR Coffee Website",
	// 	description:
	// 		"A website for the coffee shop includes: Blog, View Products, View Review",
	// 	tags: [
	// 		{
	// 			name: "React",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Sanity",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Material UI",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "Firebase",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Redux",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: noorcafe,
	// 	source_code_link: "https://noor-cf.web.app/",
	// },
	// {
	// 	name: "NOOR Kombucha Website",
	// 	description:
	// 		"A website for the coffee shop includes: Blog, View Products, View Review",
	// 	tags: [
	// 		{
	// 			name: "React",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Sanity",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Material UI",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "Firebase",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Redux",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: noorkombucha,
	// 	source_code_link: "https://noor-kombucha.web.app/",
	// },
	// {
	// 	name: "Cafesang",
	// 	description:
	// 		"A community of like-minded individuals passionate about information technology, coming together to exchange ideas, insights, and expertise",
	// 	tags: [
	// 		{
	// 			name: "React",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Redux",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Material UI",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "Firebase",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Youtube API",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: cafesang,
	// 	source_code_link: "https://cafe-sang.web.app/",
	// },
	// {
	// 	name: "Covid Tracker",
	// 	description:
	// 		"A website for Visualization infected, recovered, deaths in card, table, chart, maps on worldwide of COVID-19",
	// 	tags: [
	// 		{
	// 			name: "React",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Redux",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Material UI",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "React-ChartJS",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "Leaflet",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: covidtracker,
	// 	source_code_link: "https://covid-tracker-dksgsd.surge.sh/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
