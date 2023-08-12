import Card from "./Card";

const projects = [
  {
    title: "tmdb",
    shortDesc: "abcd",
    imgSrc: "/tmdb-desktop.png",
    badges: ["New", "NextJs"],
  },
  {
    title: "tmdb",
    shortDesc: "abcd",
    imgSrc: "/shortly-desktop.png",
    badges: ["new"],
  },
  {
    title: "tmdb",
    shortDesc: "abcd",
    imgSrc: "/tmdb-desktop.png",
    badges: ["new"],
  },
];

const Projects = () => {
  return (
    <section className="text-2xl font-semibold py-12">
      My Last Projects {"</>"}
      {projects.map((project, i) => (
        <Card {...project} key={i} />
      ))}
    </section>
  );
};

export default Projects;
