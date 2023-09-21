import Image from "next/image"
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='h-screen w-[21rem] xl:w-96 bg-skin-sidebar-color flex flex-col items-center px-4 pt-4 text-skin-base sticky top-0'>
        <Image 
        src="/me.png"
        alt="me"
        height={200}
        width={200}
        className="w-48 h-auto my-8 opacity-90 outline outline-8 outline-offset-8 outline-skin-tech-used-color rounded-[50%]"
        />
        <ul className="py-8 font-semibold text-2xl w-full">
          <Link href='/'>
          <li className="py-6 px-8 "><button>Home</button></li>
          </Link>
          <Link href='/'>
          <li className="py-6 px-8"><button>Projects</button></li>
          </Link>
          <Link href='/'>
          <li className="py-6 px-8"><button>Blog</button></li>
          </Link>
          <Link href='/'>
          <li className="py-6 px-8"><button>Contact</button></li>
        </Link>
        </ul>
        <div className="absolute flex justify-between w-[95%] h-20 bottom-0 px-12 py-4 rounded-lg overflow-hidden shadow-2xl shadow-slate-900 bg-skin-tech-used my-2">
          <Link href='https://github.com/codesbyayush'>
            <Image
              src='./github.svg'
              alt="S-media"
              height={35}
              width={35}
              className="py-auto h-full w-12 px-1"/>
          </Link>
          <Link href='https://www.linkedin.com/in/-ayush-/'>
            <Image
              src='./linkedIn.svg'
              alt="S-media"
              height={35}
              width={35}
              className="py-auto h-full w-12 px-1"/>
          </Link>
          <Link href='https://twitter.com/ayush05__'>
            <Image
              src='./twitter.svg'
              alt="S-media"
              height={35}
              width={35}
              className="py-auto h-full w-12 px-1"/>
          </Link>
          <Link href='https://www.instagram.com/ayushupss/'>
            <Image
              src='./instagram.svg'
              alt="S-media"
              height={35}
              width={35}
              className="py-auto h-full w-12 px-1"/>
          </Link>
          {/* <Image
          src='/hashnode.png' 
          alt="S-media"
          height={35}
          width={35}
          className="bg-"/> */}
        </div>
    </div>
  )
}

export default Sidebar