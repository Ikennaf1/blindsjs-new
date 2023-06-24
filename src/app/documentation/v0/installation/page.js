import TopicContainer from '../../TopicContainer';
import topics from '../topics.json';
import Installation from './Installation';

const V0Installation = () => {
    
    return (
        <div className="flex flex-row justify-between gap-4 body-margin">
            <section className="article-left-margin hidden md:block">
                <TopicContainer topics={topics} />
            </section>            

            <section className="flex flex-col gap-32 bg-white shadow-lg article p-8">
                <Installation />
            </section>

            <section className="bg-blue-500">
                &nbsp;
            </section>
        </div>
    );
}

export default V0Installation;
