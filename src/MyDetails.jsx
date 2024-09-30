//Used accross multiple Screens

export const MyName = "Sujith Medisetty";
export const MyRole = "Full-Stack Developer";

// Header.jsx
export const navItems = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Profile", path: "#profile" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

// Introduction.jsx
export const IntroProfessionalDetails = [
  {
    text: "Linked-In",
    href: "https://www.linkedin.com/in/sujith-medisetty-40965a1b4/",
  },
  {
    text: "Download CV",
    href: "Resume.pdf",
  },
];

export const IntroDesc =
  "I am a full-stack developer with 1+ years of experience in building and delivering web applications at Amadeus Software Labs. I am proficient in Java, Python and have hands-on experience with frameworks such as Spring Boot, React, and Angular. I have a strong understanding of both the frontend and backend technologies. I am a highly motivated and self-directed individual. I am also a team player and I am able to work effectively with others to achieve common goals.";

// About.jsx
export const AboutDesc =
  "I worked as a Software Development Engineer (SDE) at Amadeus Software Labs in the Airlines Check-In department. My responsibilities included fixing bugs in the code, developing a tool related to airline feeds, and managing the entire process from bug fixes to delivery to the client. I utilized frameworks such as Angular, React, and Spring Boot, and I have a strong understanding of both frontend and backend technologies. This experience provided me with valuable exposure to real-world applications.";

//Profile.jsx
export const ProfileContentBoxDescSize = 50;

export const ProfileDetails = [
  {
    category: "Education",
    icon: "SchoolIcon",
    timelines: [
      {
        title: "Graduation",
        org: "University Of Memphis",
        startYear: "2023",
        endYear: "Currently pursuing masters",
        desc: "Currently pursuing my master's at University Of Memephis, Memphis, TN 38152",
      },
      {
        title: "UnderGraduation",
        org: "Anurag Group Of Institutions",
        startYear: "2017",
        endYear: "2021",
        desc: "Graduated with a Bachelor of Technology degree in Information Technology from Anurag Group Of Institutions, Hyderabad, India in 2021 with an aggregate of 9.45",
      },
      {
        title: "Intemediate",
        org: "Narayana Junior College",
        startYear: "2015",
        endYear: "2017",
        desc: "Completed the Intermediate Examination from Narayana Junior College, Hyderabad, India in 2017.",
      },
      {
        title: "Secondary School",
        org: "Montessori High School",
        startYear: "",
        endYear: "2015",
        desc: "Completed the Secondary School Examination from Montessori High School, India in 2015.",
      },
    ],
  },
  {
    category: "Experience",
    icon: "WorkHistoryIcon",
    timelines: [
      {
        title: "Software Developer",
        org: "Amadeus Software Labs",
        startYear: "Nov 2021",
        endYear: "Dec 2022 (1 yr 2 mos)",
        desc: "Worked as a full-stack developer in the Airlines Checking In department, specifically in the IATCI (Interline Airline Through Check-in) department. Worked on bug fixes in the code, developed a tool related to airlines feeds, and took care of the entire process from bug fix to delivery to the client. This experience gave me valuable exposure to real-world applications.",
      },
      {
        title: "Application Developer Intern",
        org: "Revature",
        startYear: "Jul 2021",
        endYear: "Oct 2021 (4 mos)",
        desc: "As an Application Developer Intern at Revature, I developed a robust management system using Spring Boot and React. My role involved backend API development, creating a user-friendly interface, and implementing security measures, all aimed at enhancing operational efficiency",
      },
    ],
  },
  {
    category: "Skills",
    icon: "DisplaySettingsIcon",
    timelines: [
      {
        title: "Languages",
        desc: "Java, Python, C, C++, HTML, CSS, JavaScript, JQuery, SQL",
      },
      {
        title: "Frameworks & Libraries",
        desc: "Spring Boot, Spring Security, Spring JPA, Hibernate, React JS, Angular JS, Flutter (Mobile App Development)",
      },
      {
        title: "Cloud, DevOps, Build & config tools..etc",
        desc: "AWS, Docker, Jenkins",
      },
    ],
  },
];

// Project.jsx
export const ProjectContentBoxDescSize = 20;

export const projects = [
  {
    title: "Restaurent Management System",
    desc: "Developed a comprehensive Restaurant Management System consisting of Customer, Admin, Kitchen Master, and Supervisor modules. Customers can seamlessly browse, customize, and place orders via an intuitive interface while Admins possess full control over menu items, staff, and supervisors. Chefs adeptly fulfill orders, and Supervisors handle inquiries",
    techStack: ["Angular 10", "Spring Boot", "Hibernate 5.3", "Log4J"],
    url: "https://github.com/Sujith-Medisetty/Restaurant-Management-System",
  },
  {
    title: "Information-Security-Management-System",
    desc: "A foundational web application prioritizing security to thwart potential breaches. Employed AES encryption for secure resource storage, and encoded passwords and keys in the database. Only authorized personnel can access portals. Implemented CAPTCHA for DoS attack prevention, fortified against SQL injections with parameterized queries and JPA. Incorporated notification functionality for private communication. The site operates over HTTPS using a self-signed and trusted certificate. Committed to a secure user experience.",
    techStack: ["Angular", "Spring Boot", "Hibernate", "Spring Security"],
    url: "https://github.com/Sujith-Medisetty/ISMS",
  },
  {
    title: "Self-Portfolio",
    desc: "Explore my professional journey, including a detailed Profile, accomplished Projects, and background About me",
    techStack: ["React JS", "Material UI"],
    url: "https://github.com/Sujith-Medisetty/portfolio",
  },
  {
    title: "Weather Tracker",
    desc: "Reports Current Weather Condition by accessing Geo Location , provides 7-day forecast information and hourly forecast for next 24 hours. (This application works on both Android and IOS)",
    techStack: ["Flutter", "SQ-Lite"],
    url: "https://github.com/Sujith-Medisetty/Weather_App",
  },
  {
    title: "Retail Management System",
    desc: "This application maintains the statistics of Teller and helps supervisors to monitor their performance.",
    techStack: ["Spring Boot", "MY-SQL Database", "Bootstrap & JS"],
    url: "https://github.com/Sujith-Medisetty/Spring-RMS-1",
  },
];

// contact.jsx

export const myEmail = "sujithmedisetty012@gmail.com";
export const phone = "+1 (901)-264-7157";
