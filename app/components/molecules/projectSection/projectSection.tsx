import { Fragment} from "react";
import Image from 'next/image'
import './style.css'
import { DeploymentUnitOutlined, LinkOutlined, ReadOutlined } from "@ant-design/icons";

const projectData = [
    {
        title: 'Memorizer',
        technics: 'React, TypeScript, Redux, SASS, Styled Components, Material UI, Ant Design, NodeJs, Express, Mongo DB and more...',
        description: 'It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text',
        href: 'http://memorizer-app.com',
        imgPath: '/memorizer.jpg',
    },
    {
        title: 'Personal card',
        technics: 'NextJS, TypeScript, Ant Design, Tailwind, Framer Motion',
        description: ' great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text It is great a lot of text',
        href: 'https://test.com',
        imgPath: '/card.jpg',
    },
]

export default function ProjectSection() {
    return(
        <div className="mb-10">
            {projectData.map(({title,technics, description, href, imgPath}, index)=> {
                return(
                    <div key={index} className="flex flex-row justify-between project-section mt-14 w-full text-left">
                        <div className="flex flex-col project-section__info">
                            <h3 className="project-section__title">{title}</h3>
                            {href && <div className="flex flex-row items-center mt-4 mb-4">
                                <LinkOutlined style={{marginRight: '10px', fontSize: '28px'}}/>
                                <a className="font-light" href={href}>{href}</a>
                            </div>
                            }
                            <div className="flex flex-row items-center mt-4 mb-4">
                                <DeploymentUnitOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <p className="font-light"> {technics}</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <ReadOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <p className="font-light"> {description}</p>
                            </div>
                        </div>
                        <div>
                            <Image
                            src={imgPath}
                            width={350}
                            height={200}
                            alt="Memorizer application"
                            className='relative'
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 