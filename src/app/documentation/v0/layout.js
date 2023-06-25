import Link from 'next/link';
import Image from 'next/image';
import NavCollapsible from '../../NavCollapsible';
import topics from './topics.json';

import logoDark from '/public/logo-no-bg-dark.svg';
import toggleIcon from '/public/bars-3-bottom-right.svg';
import TopicContainer from '../TopicContainer';

const DocLayout = ({ children }) => {
    return (
        <main>
            <NavCollapsible>
                <div className="mt-5 h-1/2 overflow-y-auto">
                <ul id="topic_list_collapsible">
                    <Link href='/documentation' className="topic-list-items-collapsible"><li>Documentation</li></Link>
                    <Link href='/documentation' className="topic-list-items-collapsible"><li>About</li></Link>
                    <Link href='/documentation' className="topic-list-items-collapsible"><li>Blog</li></Link>
                    <Link href='/documentation' className="topic-list-items-collapsible"><li>Products</li></Link>
                </ul>
                </div>
                <TopicContainer topics={topics} />
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
                    <Link href="/"><h1 className="font-bold text-xl">Blinds</h1></Link>
                </div>
                {/* <div id="blinds_id" className="">dhf</div> */}
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

            <div className="pt-32">
                <div className="flex flex-row justify-between gap-4 body-margin">
                    <section className="article-left-margin hidden md:block">
                        <TopicContainer topics={topics} />
                    </section>            

                    <section className="flex flex-col gap-32 bg-white shadow-lg article p-8">
                        { children }
                    </section>

                    <section className="bg-blue-500">
                        &nbsp;
                    </section>
                </div>
            </div>
        </main>
    );
}

export default DocLayout;
