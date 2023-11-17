import { Fragment} from "react";
import Image from 'next/image'
import './style.css'
import { DeploymentUnitOutlined, LinkOutlined, ReadOutlined } from "@ant-design/icons";

const projectData = [
    {
        title: 'Memorizer',
        technics: 'NodeJs',
        description: 'It is awsome',
        href: 'http://memorizer-app.com'
    }
]

export default function ProjectSection() {
    return(
        <div>
            {projectData.map(({title,technics, description, href}, index)=> {
                return(
                    <div key={index} className="flex flex-row justify-between project-section mt-14 w-full text-left">
                        <div className="flex flex-col">
                            <h3 className="project-section__title">{title}</h3>
                            {href && <div className="flex flex-row items-center mt-4 mb-4">
                                <LinkOutlined style={{marginRight: '10px', fontSize: '28px'}}/>
                                <a href={href}>{href}</a>
                            </div>
                            }
                            <div className="flex flex-row items-center mt-4 mb-4">
                                <DeploymentUnitOutlined style={{marginRight: '10px', fontSize: '28px'}}/>
                                <p> {technics}</p>
                            </div>
                            <div className="flex flex-row items-center mt-4 mb-4">
                                <ReadOutlined style={{marginRight: '10px', fontSize: '28px'}}/>
                                <p> {description}</p>
                            </div>
                        </div>
                        <div>
                            <Image
                            src="/mikhail-2.jpg"
                            width={400}
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