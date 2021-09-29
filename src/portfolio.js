import CV from './assets/CV.pdf'
import MyDiploma from './assets/My_diplom.pdf'
import codemyLogo from './assets/img/codemy.jpg'

export const greetings = {
	name: "Umid Ermatov",
	title: "Hi all, I'm Umid",
	description:
		"A passionate Frontend Web Developer having an experience of building Web applications with JavaScript / Reactjs, Nodejs / Expressjs / MySQL for Backend and some other cool libraries and frameworks.",
	resumeLink: CV,
};

export const openSource = {
	githubUserName: "UmidErmatov",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/umidbek.ermatov.9",
	telegram: "https://t.me/ermatov_umid",
	instagram: "https://www.instagram.com/ermatovumidbek/",
	github: "https://github.com/UmidErmatov",
	linkedin: "https://www.linkedin.com/in/umidbek-ermatov-a587a421b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B16xdf2PERoOeX5NTY7Pgbw%3D%3D",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CREATIVE FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: <i class="fa fa-html5"></i>,
		},
		{
			skillName: "css3",
			fontAwesomeClassname: <i class="fa fa-css3"></i>,
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: <i class="fa fa-js"></i>,
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: <i class="fa fa-react"></i>,
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "40",
	},
];

export const educationInfo = [
	{
		schoolName: "Ferghana Polytechnic Institute",
		subHeader: "Automation and control of technological processes and production",
		duration: "September 2016 - June 2020",
		diplomLink: MyDiploma
	}
];

export const experience = [
	{
		role: "Full Stack developer",
		company: "Codemy",
		companylogo: codemyLogo,
		date: "June 2021 – Present",
		desc: "Nowadays, I am working with \"Codemy\"s' full stack group and improve my coding skill together. I have participated in several projects.",
	},
];

export const projects = [
	{
		name: "Admin/User login & logout",
		desc: "In this React project, only app admin/user have access to get data about users. In user's page, user can search by name, username, and email columns and also filter by every column, as well as log out of website.",
		link: "https://codesandbox.io/s/awesome-bush-r5lqx",
		github: "https://github.com/UmidErmatov/vacancy_task_React_project"
	},
	{
		name: "Categories",
		desc: "Categories page for websites. It is CRUD example in React",
		github: "https://github.com/UmidErmatov/Category_CRUD_React_project",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
