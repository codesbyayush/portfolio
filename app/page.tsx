import ShortSum from "../ui/ShortSum";
import Projects from "../ui/Projects";
import Sidebar from "../ui/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-skin-main-color">
      <div className="sticky top-0 hidden lg:block h-screen">
        <Sidebar />
      </div>
      <div className="w-full xl:max-w-4xl max-w-3xl  min-h-screen  text-skin-base p-4 mx-auto">
        <ShortSum />
        <Projects />
      </div>
    </main>
  );
}
