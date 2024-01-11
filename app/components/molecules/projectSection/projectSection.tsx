import { Fragment} from "react";
import Image from 'next/image'
import './style.css'
import { DeploymentUnitOutlined, LinkOutlined, ReadOutlined } from "@ant-design/icons";
import Expander from "../expander/expander";

const projectData = [
    {
        title: 'Memorizer',
        technics: 'React, TypeScript, Redux, SASS, Styled Components, Material UI, Ant Design, NodeJs, Express, Mongo DB, Jest and more...',
        description: [
            `Memorizer - is a web application designed to remember, track, organize and have easily access for personal materials, created by the user.`,
            `The app architecture, client and server parts, the connection and interaction with the database, app deployment are all tasks that I have completed.`,
            `The architecture is based on the fundamental principles: the program should be easy to modify; the complexity of change should be proportional
            to the scale of the change, but not to its form; the division of software into levels and the construction of architectural boundaries.`,
            `The main tasks of development were: creation of easy-to-read, easy-to-use and easy-maintenance code; scalability, and independence of development of layers and components of the application.`
        ],
        href: 'http://memorizer-app.com/',
        imgPath: '/memorizer.jpg',
        shouldUseExpander: true,
        alt: 'Memorizer screen shot',
    },
    {
        title: 'Personal card',
        technics: 'NextJS, TypeScript, Ant Design, Tailwind, Framer Motion',
        description: [`
        The project "Personal Card" was developed by me using the modern technology of Server Site Rendering, popular libraries and 
        contemporary tools of developer.`,
        ` The site was created using responsive design, optimization of page loading, improvement of SEO 
        indicators by modern development standards.`],
        href: 'https://barabanov-card.vercel.app',
        imgPath: '/card.jpg',
        shouldUseExpander: false,
        alt: 'card site screen shot',
    },
]

export default function ProjectSection() {
    return(
        <div className="mb-10">
            {projectData.map(({title,technics, description, href, imgPath, shouldUseExpander, alt}, index)=> {
                return(
                    <div key={index} className="flex flex-col md:flex-row justify-between project-section mt-14 w-full text-left">
                        <div className="flex flex-col project-section__info">
                            <h3 className="project-section__title">{title}</h3>
                            {href && <div className="flex flex-row items-center mt-4 mb-4">
                                <LinkOutlined style={{marginRight: '10px', fontSize: '28px'}}/>
                                <a className="font-light underline" href={href}>{href}</a>
                            </div>
                            }
                            <div className="flex flex-row items-center mt-4 mb-4">
                                <DeploymentUnitOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <p className="font-light"> {technics}</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <ReadOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <Expander height="247px" isNecessaryToUse={shouldUseExpander}>
                                    {description.map((item, index)=> {
                                        return(
                                            <p key={index} className="font-light mt-[3px]">
                                            {item}
                                        </p>
                                        )
                                    })}
                                    {/* <p className="font-light mt-[3px]"> {description}</p> */}
                                </Expander>
                            </div>
                        </div>
                        <div className="ml-[auto] mr-[auto] xs:ml-[36px] md:ml-[16px] mt-[30px] md:mt-[54px]">
                            <Image
                            unoptimized
                            priority={true}
                            src={imgPath}
                            width={350}
                            height={200}
                            alt={alt}
                            className='relative shadow-[3px_7px_9px_-2px_rgba(0,0,0,0.4)]'
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 