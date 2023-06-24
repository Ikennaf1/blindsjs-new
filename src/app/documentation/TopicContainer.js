"use client";

import { useState } from 'react';
import Link from 'next/link';

const TopicContainer = ({ topics }) => {

    /**
     * Display the available versions with a functionality to
     * redirect to any selected one
     * @param {defaultVersion} param0 string
     */
    const VersionList = ({ defaultVersion }) => {

        const [url, setUrl] = useState(window.location.href);
    
        const handleVersionSelect = (e) => {
            setUrl(url.replace(/v[0-9]/, e.target.value));
            window.location.href = url;
        }
    
        return (
            <select className="w-full rounded p-2 bg-transparent border" defaultValue={ defaultVersion } onChange={(e) => handleVersionSelect(e)}>
                <option value="v0">v0</option>
            </select>
        );
    }

    /**
     * Gets the list of topics from a JSON file and parses it to an object of
     * topic title - topic address
     */
    const topicList = () => {
        const [allTopics] = useState(Object.entries(topics));

        return (
            <div className="topic-list-main">
                <VersionList defaultVersion="v0" />
                <ul id="topic_list_main">
                {
                    allTopics.map((topic, i) => 
                        <li key={i}>
                            <Link href={`${topic[1]}`} className="topic-list-items-main">{topic[0]}</Link>
                        </li>
                    )
                }
                </ul>
            </div>
        );
    }

    return (
        <div>
            { topicList() }
        </div>
    );
}

export default TopicContainer;
