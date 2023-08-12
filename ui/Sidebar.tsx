import Image from "next/image"

const Sidebar = () => {
  return (
    <div className='h-screen w-[21rem] xl:w-96 bg-skin-sidebar-color flex flex-col items-center px-4 pt-4 text-skin-base sticky top-0'>
        <Image 
        src="/me.png"
        alt="me"
        height={200}
        width={200}
        className="w-48 h-auto py-8 opacity-90 "
        />
        <ul className="self-start p-8 font-semibold text-2xl">
          <li className="py-6"><button>Home</button></li>
          <li className="py-6"><button>Projects</button></li>
          <li className="py-6"><button>Blog</button></li>
          <li className="py-6"><button>Contact</button></li>
        </ul>
        <div className="absolute flex justify-between w-[95%] bottom-0 px-12 py-4 rounded-lg overflow-hidden shadow-2xl shadow-slate-900 bg-skin-tech-used my-2">
          <Image 
          src='./github.svg' 
          alt="S-media"
          height={40}
          width={40}
          className=""/>
          <Image
          src='./linkedIn.svg' 
          alt="S-media"
          height={35}
          width={35}
          className=""/>
          <Image
          src='./twitter.svg' 
          alt="S-media"
          height={35}
          width={35}
          className=""/>
          {/* <Image
          src='/hashnode.png' 
          alt="S-media"
          height={35}
          width={35}
          className="bg-"/> */}
          <Image
          src='./instagram.svg' 
          alt="S-media"
          height={35}
          width={35}
          className=""/>
        </div>
    </div>
  )
}

export default Sidebar