import profileImg from '../assets/raghavendra.jpg';

export const profileData = {
    name: "Raghavendra Yallamanda",
    role: "Senior Frontend Developer",
    experience: "4+ Years",
    summary: "Frontend Developer with 4+ years of experience specializing in scalable UI development using React.js, Redux, Tailwind, and Ant Design. Strong expertise in Warehouse Management Systems (WMS) and FinTech domains. Skilled in state management, performance optimization, and building reusable component architectures. Experienced in leading teams and delivering secure, high-performance applications.",
    location: "Hyderabad, India",
    email: "raghavendra324174@gmail.com",
    phone: "9676324174",
    photo: profileImg,
    companies: [
        { name: "M2P Solutions", role: "Solution Engineer", duration: "July 2025 - Present" },
        { name: "eArbor", role: "Senior Frontend Developer", duration: "Jan 2022 - July 2025" }
    ],
    social: {
        linkedin: "https://www.linkedin.com/in/raghavendra-yallamanda-970794225/", // User didn't provide full URL in text, leaving base or placeholder
        github: "https://github.com/raghava139",
        email: "mailto:raghavendra324174@gmail.com"
    },
    skills: {
        frontend: ["HTML", "CSS3", "JavaScript", "TypeScript", "React.js", "jQuery"],
        stateManagement: ["Redux", "Redux Toolkit", "Jotai"],
        buildTools: ["Webpack", "Parcel", "Vite"],
        uiFrameworks: ["Bootstrap", "Ant Design", "Tailwind CSS"],
        backend: ["PostgreSQL"],
        tools: ["Git", "GitHub", "DSA", "System Design"]
    },
    projects: [
        {
            title: "MAI - Warehouse Management System",
            description: "Feature-rich WMS streamlining logistics. Implemented real-time stock tracking, batch/lot tracking, and predictive analytics using React.js, Redux, and .NET.",
            tech: ["React.js", "Redux", ".NET", "PostgreSQL", "Ant Design"],
            link: "#"
        },
        {
            title: "BOLX - WMS",
            description: "Automation-driven WMS enhancing workflow efficiency and order fulfillment. Integrated real-time analytics and ERP syncing.",
            tech: ["React.js", "Redux", ".NET", "PostgreSQL"],
            link: "#"
        },
        {
            title: "SBBS - Printer Rental Services",
            description: "Customizable rental platform with secure payment integrations and automated maintenance scheduling.",
            tech: ["React.js", "Redux", ".NET", "PostgreSQL"],
            link: "#"
        },
        {
            title: "HDFC – Prepaid Customer Portal",
            description: "Secure customer portal for HDFC prepaid card users. Implemented reusable components for card management and transaction dashboards.",
            tech: ["React.js", "Redux", "Tailwind CSS", "Ant Design"],
            link: "#"
        },
        {
            title: "CIM Finance – Cashier Portal",
            description: "Cashier transaction workflows with real-time validations. modular UI components for payment collection and receipts.",
            tech: ["React.js", "Redux", "Tailwind CSS",],
            link: "#"
        },
        {
            title: "Carmudi – Finance Management Portal",
            description: "Scalable UI architecture for customer onboarding and loan processing. Real-time dashboards and financial API integration.",
            tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Jotai", "ShadCn", "NestJS"],
            link: "#"
        }
    ]
};
