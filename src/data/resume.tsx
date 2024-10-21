import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Subham Mohanta",
  initials: "SM",
  url: "https://github.com/SubhamMohanta/",
  location: "Rourkela, Odisha",
  locationLink: "https://www.google.com/maps/place/Rourkela",
  description: "An aspiring web developer. I love building things and collaborating with people. Very active on [Figma](https://www.figma.com/@shubham50) ",
  summary:
    "I am currently pursuing Bachelors in Computer Science and Engineering at Lovely Professional University with specialization in [Kalvium](/#education). Currently I am working with technologies like [Next.js](https://nextjs.org/), [React](https://react.dev/), [Java](https://www.java.com/en/) and [Python](https://python.org/). ",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Javascript",
    "Typescript",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "subhammohanta99@gmail.com",
    tel: "+91 6372618797",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SubhamMohanta/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subham-mohanta-59b683289/",
        icon: Icons.linkedin,
        
        navbar: true,
      },
      Instagram:{
        name: "LinkedIn",
        url: "https://www.instagram.com/_shubham.xo_/",
        icon: Icons.Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=subhammohanta99@gmail.com&su=Subject&body=Hello%20there!",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Kalvium",
      href: "https://kalvium.com/",
      degree: "Bachelor's of Technology in Computer Science",
      logoUrl: "https://kalvium.com/wp-content/uploads/2022/07/fav.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Bachelor's of Technology in Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Pioneer Convent School",
      href: "https://pioneerconvent.com/",
      degree: "Higher Secondary Education",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudwcxlwErPapvmndkXmFaMEinjcI7Xt79_A&s",
      start: "2021",
      end: "2023",
    },
    {
      school: "Saint Paul's School",
      href: "https://stpaulsrourkela.org/",
      degree: "Primary and Secondary Education",
      logoUrl: "https://play-lh.googleusercontent.com/Zs55fEnWaGCKcOPhwRfIzkIuW-qf2zRRbCzrQOQGZv1T4popwdEvYkRk_0FFN2JCJTc=s512",
      start: "2009",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "U-Serve",
      href: "https://userve.vercel.app/",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "An innovative platform tailored for college campuses to enhance community engagement, facilitate volunteering opportunities, and promote social impact initiatives.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://userve.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kalviumcommunity/U-Serve",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      
      video:
        "https://res.cloudinary.com/dzgttn1mr/video/upload/v1729496990/yrpckqrsyadqepqucleq.mp4",
    },
    {
      title: "Jamify",
      href: "https://jamify-weld.vercel.app/",
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "Made to help budding music artists collaborate easily and showcase their unique talents based on the genre they are passionate about.",
      technologies: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Razorpay"
      ],
      links: [
        {
          type: "Website",
          href: "https://jamify-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kalviumcommunity/S53_Subham_Mohanta_Capstone_Jamify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dzgttn1mr/video/upload/v1729495719/ukmvnbew5h0uwaqret9h.mp4",
    }
  ]
} as const;
