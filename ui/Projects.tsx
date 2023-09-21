import Card from "./Card";
import Link from 'next/link';

const projects = [
  {
    title: "tmdb",
    shortDesc: " Your Movie Lookup Powerhouse! Discover global trends and top-rated movies/TV series. Powered by Next.js, React.js, Tailwind CSS, TypeScript & Rapid API, TMDB ensures real-time data and seamless experiences with the help of official TMDB open sourced api.",
    imgSrc: "/tmdb-desktop.png",
    badges: ["New", "NextJs"],
    liveSiteUrl: "https://main--tmdb-codesbyayush.netlify.app/"
  },
  {
    title: "url-shortner",
    shortDesc: "I have made this website that can shorten any long URL into a compact and easy-to-share link. I used an API from RapidAPI, React JS framework and Tailwind CSS to create this responsive and user-friendly website. It was also a part of the Frontend Mentor challenge, where I learned new skills and improved my coding abilities",
    imgSrc: "/shortly-desktop.png",
    badges: ["new"],
    liveSiteUrl: "https://urlshortnerayush.netlify.app/"
  },
  {
    title: "youtube-clone",
    shortDesc: "Developed a YouTube clone using React JS and Rapid API that allows users to search for videos and play them. The app is responsive and has stunning video sections, custom categories, and channel pages. It was built using modern web development techniques and is deployed on Netlify.",
    imgSrc: "/tmdb-desktop.png",
    badges: ["new"],
    liveSiteUrl: ""
  },
];

const Projects = () => {
  return (
    <section className="text-2xl font-semibold py-12">
      My Last Projects {"</>"}
      {projects.map((project, i) => (
        <Link href={project.liveSiteUrl}>
        <Card {...project} key={i} />
        </Link>
      ))}
    </section>
  );
};

export default Projects;
