import Link from 'next/link';
import Image from 'next/image'

import NavCollapsible from '../NavCollapsible';
import logoDark from '/public/logo-no-bg-dark.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';

export const metadata = {
  title: 'Blinds | About',
  description: 'The best dark mode package for all websites',
  openGraph: {
    title: 'Blinds | About',
    description: 'The best dark mode package for all websites',
    image: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg'
  }
}

const About = () => {
  return (
    <main className="flex flex-col gap-32 justify-start">
      <NavCollapsible>
        <div className="flex flex-col space-between">
        <div className="mt-4 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            <Link href='/about' className="topic-list-items-collapsible"><li>About</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Products</li></Link>
          </ul>
        </div>
        <div className="flex flex-row flex-wrap gap-8">
          <Image
           src="whatsapp.svg"
           width="24"
           height="24"
           alt="Whatsapp"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="twitter.svg"
           width="24"
           height="24"
           alt="Twitter"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="facebook.svg"
           width="24"
           height="24"
           alt="facebook"
           className="drop-shadow-md cursor-pointer"
          />
          {/* <Image
           src="wordpress.svg"
           width="24"
           height="24"
           alt="wordpress"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="youtube.svg"
           width="24"
           height="24"
           alt="youtube"
           className="drop-shadow-md cursor-pointer"
          />
          <Image
           src="react.svg"
           width="24"
           height="24"
           alt="react"
           className="drop-shadow-md cursor-pointer"
          /> */}
        </div>
        </div>
      </NavCollapsible>

      <nav className="nav text-sm">
        <div className="body-margin flex flex-row justify-between items-center">
          <div className="flex min-w-0 gap-4 items-center">
            <Link href="/">
              <Image
               src={logoDark}
               width="40"
               height="40"
               alt="Blinds logo"
              />
            </Link>
            <a href="/"><h1 className="font-bold text-xl">Blinds</h1></a>
          </div>
          <div id="blinds_id" className=""></div>
          <div className="">
            <ul className="hidden md:flex gap-4 items-center">
              <Link href="/documentation" className="nav-link"><li>Documentation</li></Link>
              <Link href="/about" className="nav-link"><li>About</li></Link>
              <Link href="/" className="nav-link"><li>Blog</li></Link>
              <Link href="/" className="nav-link"><li>Products</li></Link>
              <Link href="/" className="nav-link">
                <li className="">
                  <Image
                   src="/whatsapp.svg"
                   width="20"
                   height="20"
                   alt="Whatsapp"
                  />
                </li>
              </Link>
            </ul>
            <label htmlFor="collapsedNav" className="md:hidden">
              <Image
               src={toggleIcon}
               width=""
               height=""
               alt="toggle menu icon"
               className="drop-shadow-md cursor-pointer"
              />
            </label>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="about-jumbo">
        <div className="pt-32 pb-24 body-margin text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-light lg:font-light drop-shadow-lg uppercase border-b border-white inline-block px-8 py-4">Blinds</h2>
          <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-100 drop-shadow-lg">Helping businesses establish their online businesses.</p>
        </div>
      </header>

      <section>
        <div></div>
      </section>
    </main>
  );
}

export default About;
