import HDimg from '../assets/HDimg.png'
import Portimg from '../assets/Portimg.png'

export const EXPERIENCE = [
    { 
        year: "Feb2023 - May2024",
        role: "IT Help Desk Supervisor",
        company: "Univeristy of Wisconsin Milwaukee",
        description: "Promoted to Supervisor from consultant in 3 months. Oversaw the efficient operation of the Help Desk",
        technologies: ["Microsoft Teams", "Microsoft Excel", "Microsoft Azure"]
    },
    {
        year: "Jun2023 - Aug2023",
        role: "Full stack Web Developer Intern",
        company: "Seminaut Inc",
        description: "Utilized Flask framework to create REST APIs and React.js, Typescript to develop reusable models for a webpage of the company's website, while engaging with fellow interns and maintaining code synchronization through Git version control",
        technologies: ["Flask", "React.js", "Typescript", "TailwindCSS"]
    },
    {
        year: "Oct2022 - Feb2023",
        role: "IT Help Desk Consultant",
        company: "Univeristy of Wisconsin Milwaukee",
        description: "Provided prompt and professional IT support to students, faculty, and staff, addressing a wide range of technical issues and inquiries related to software, hardware, networking, and university systems. Demonstrated strong problem-solving abilities by troubleshooting and resolving complex technical problems, minimizing downtime and ensuring efficient operations",
        technologies: ["Microsoft Teams", "Microsoft Excel", "Microsoft Azure"]
    },
    {
        year: "May2021 - Feb2022",
        role: "Full stack Developer (AI)",
        company: "Payoda Technologies - Cloth Prediction system",
        description: "Created a Flask and React.js based dashboard to predict cloth stitch type, stitch pattern, hosted the application on AWS, securing a Proof of Concept (POC) project for the company",
        technologies: ["Flask", "React.js", "MySQL", "CNN", "AWS EC2"]
    },
    {
        year: "Feb2021 - May2021",
        role: "Frontend Developer",
        company: "Payoda Technologies - Smart Call Center",
        description: " Designed an application deploying Flask, Vue.js, and NLP to assist Customer Care in handling customers with ease for Verizon, resulting in a Proof of Concept (POC) project for the company",
        technologies: ["Flask", "Vue.js", "NLP", "AWS EC2"]
    },
    {
        year: "Feb2020 - Feb2021",
        role: "Software Developer I",
        company: "Payoda Technologies - myTheo (Real estate application)",
        description: "Designed features for myTheo, a Real Estate Client with agencies across the USA and headquarters in California, incorporating Ruby on Rails, HAML, and Google Street View, increasing the company's sales by 20%",
        technologies: ["Ruby on Rails", "HAML", "SCSS", "Google Street View", "PostgreSQL"]
    },
    {
        year: "Aug2019 - Feb2020",
        role: "Software Developer Intern",
        company: "Payoda Technologies - Alternative Soft",
        description: "Developed portfolio construction software, processes for institutional investors, utilizing technologies such as .NET, React.js, micro services, and SQL, resulting in a 40% increase in clientele",
        technologies: [".NET", "React.js", "SQL", "Microservices", "AWS"]
    }
];

export const PROJECTS = [
    {
        title: "UWM Help Desk Chatbot",
        img: HDimg,
        link: 'https://github.com/Tharanbala/HelpDeskChatbot',
        description: "Built the Help Desk chatbot, an application used as one of the methods of contact for the UWM IT Help Desk with Django, Rasa framework and using React.js, Typescript, MySQL hosted on AWS",
        technologies: ["Django", "React.js", "Next.js", "Typescript", "TailwindCSS", "RASA", "MySQL"]
    },
    {
        title: "Portfolio Website",
        img: Portimg,
        link: 'https://github.com/Tharanbala/portfolio',
        description: "A Personal Portfolio website showcasing my projects, skill set and experience",
        technologies: ["React.Js", "TailwindCSS", "HTML", "CSS"]
    }
];