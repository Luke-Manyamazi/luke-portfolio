import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `An IT Support Technician with over a decade of diverse experience in the technology and administrative sectors. Proficient in managing and troubleshooting complex IT systems, including VPN configurations, network setups, and hardware installations. Adept at providing exceptional user support and training, ensuring seamless operation and integration of various software applications. 
Proven track record in vehicle licensing supervision, project coordination, and customer care, showcasing strong organizational and leadership abilities. Currently pursuing a BSc in Software Engineering and Computer Science, with a strong foundation in Python programming and cloud computing. A CodeYourFuture trainee, also building projects with FreeCodeCamp while learning.
`;

export const ABOUT_TEXT = `Hi, I am Luke Manyamazi, an IT professional with a wealth of experience in remote and onsite technical support. Over the years, I've cultivated a deep passion for technology and programming, continuously expanding my skill set. I have completed several key courses, including the CS50P Python Course, which strengthened my understanding of problem-solving with Python, as well as FreeCodeCamp's Responsive Web Design Certification, which helped me master the basics of building accessible, user-friendly websites. I also completed CloudComputing 101 on Coursera, broadening my knowledge of cloud infrastructure and services. These experiences have provided me with a solid foundation in both software development and web technologies.
Currently, I am a trainee at CodeYourFuture, where I am sharpening my coding skills through hands-on projects and collaborative learning. I am also in my second year of the BSc Honours in Computer Engineering at Zimbabwe Open University, further expanding my technical knowledge. I am passionate about exploring new programming languages and technologies, and I look forward to applying my skills to build real-world solutions. Through my GitHub, I aim to share my learning journey and projects with the developer community, while continually improving and taking on new challenges.
My ultimate goal is to become a full-stack software engineer, capable of developing robust, end-to-end applications that solve meaningful problems. I am committed to continuous learning and growth as I work towards this objective.
`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "IT Support Technician",
    company: "Torga Optical",
    description: `Install, troubleshoot, and maintain VPNs, printers, scanners, and IT hardware, ensuring system uptime and reducing downtime by 30%. I manage Torga Apps and MagicPOS across 170+ stores, conduct IT asset servicing, and oversee Microsoft Office installations and software upgrades, maintaining 95% compliance. I also maintain the lab IT asset register and network server with 99.9% uptime. Additionally, I enhance website synchronization, create training content for LabTube, and support marketing by producing in-store TV content, boosting customer engagement by 30%.`,
    technologies: [
      "OpenVPN",
      "Anydesk",
      "MS365",
      "Firebase",
      "Confluence",
      "nopCommerce",
      "Blender",
      "Adobe",
    ],
  },
  {
    year: "2013 - 2019",
    role: "Vehicle Licensing Supervisor",
    company: "ZINARA",
    description: `Supervised 10+ licensing cashiers, ensuring accurate processing of 1,000+ licenses monthly while managing banking processes and compiling reports, reducing errors by 25%. I approved 500+ license cancellations annually and oversaw daily cash-ups exceeding $20,000 monthly. Additionally, I handled 100+ client queries per month with a 95% resolution rate, organized community outreach events for 2,000+ attendees, and represented the organization in 20+ stakeholder meetings to strengthen partnerships.`,
    technologies: ["ZimLIC", "ZimToll", "Microsoft Office"],
  },
  {
    year: "2008 - 2010",
    role: "Junior Systems Administrator",
    company: "Nyoni's Kraal Restaurant",
    description: `Installed and maintained computer systems, POS, display screens, and CCTV for a facility serving 500+ customers weekly, while providing standby IT support.`,
    technologies: ["Windows", "Hikvision", "RDP", "Teamviewer"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
