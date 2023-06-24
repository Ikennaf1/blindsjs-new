import Image from 'next/image';
import Link from 'next/link';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import NavCollapsible from './NavCollapsible';

import logoDark from '/public/logo-no-bg-dark.svg';
import logo from '/public/logo-no-bg.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';

export const metadata = {
  title: 'Blinds | Home',
  description: 'The best dark mode package for all websites',
}

const Home = () => {
  return (
    <main className="flex flex-col gap-32 justify-start">
      <NavCollapsible>
        <div className="mt-5 h-1/2 overflow-y-auto">
          <ul id="topic_list_collapsible">
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>About</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
            <Link href='/documentation' className="topic-list-items-collapsible"><li>Products</li></Link>
          </ul>
        </div>
      </NavCollapsible>
      <nav className="nav">
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
            <Link href="/"><h1 className="font-bold text-xl">Blinds</h1></Link>
          </div>
          {/* <div className="">dhf</div> */}
          <div className="">
            <ul className="hidden md:flex gap-4">
              <Link href="/documentation"><li>Documentation</li></Link>
              <Link href="/"><li>About</li></Link>
              <Link href="/"><li>Blog</li></Link>
              <Link href="/"><li>Products</li></Link>
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
      <header className="header pt-32">
        <div className="cta body-margin h-[85%]">
          <div className="w-24 h-24 sm:w-40 sm:h-40 m-auto">
              <Image
               src={logo}
               width=""
               height=""
               alt="Blinds logo"
               className="drop-shadow-md"
              />
          </div>
          <div className="w-3/4 text-center m-auto mt-4">
              <h2 className="">The only dark mode package you need for your website</h2>
              <p className="mt-4">
                  Blinds provides the scaffold required to give your customers the dark mode user interface necessary for a truely modern website.
              </p>
              <Link href="/docs" className="inline-block rounded-md p-5 mt-8 shadow-lg bg-[#2ec4b6] text-white font-bold uppercase hover:bg-[#289e92] transition duration-100 ease-linear">Get started</Link>
              <ul className="mt-6 flex justify-center items-center text-gray-400">
                  <li className="mx-3">Currently v0.6.2</li>
                  <li>·</li>
                  <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds">Visit Github</a></li>
                  <li>·</li>
                  <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds/tags">See all releases</a></li>
              </ul>
          </div>
        </div>
      </header>

      {/* Section One */}
      <SectionOne />

      {/* Section Two */}
      <SectionTwo />

      {/* Section Three */}
      <SectionThree />

      {/* Section Four */}
      <SectionFour />

    </main>
  )
}

export default Home;
