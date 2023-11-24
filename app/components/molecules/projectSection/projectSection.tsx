import { Fragment} from "react";
import Image from 'next/image'
import './style.css'
import { DeploymentUnitOutlined, LinkOutlined, ReadOutlined } from "@ant-design/icons";
import Expander from "../expander/expander";

const projectData = [
    {
        title: 'Memorizer',
        technics: 'React, TypeScript, Redux, SASS, Styled Components, Material UI, Ant Design, NodeJs, Express, Mongo DB, Jest and more...',
        description: `Memorizer - это веб проложение, предназначенное для запоминания, структурирования 
        и удобного доступа к персональным материалам, создаваемых пользователем. 
        Архитектура, клиентская часть, серверная часть, подключение и взаимодействие 
        с базой данных, деплой приложения целиком выполнены мной. Архитектура приложения выстроена исходя 
        из краеугольных принципов: программа должна легко поддаваться изменению; сложность измения должна быть пропорциональна 
        масштабу изменения, но никак не его форме; деление программного обеспечения на уровни и построение архитектурных границ. 
        Основными задачами разработки являлись: создание легко читаемого, 
         удобного в переиспользовании и в сопровождении кода; масштабируемость, а также независимость разработки 
         слоев и компонентов приложения.`,
        href: 'http://memorizer-app.com',
        imgPath: '/memorizer.jpg',
        shouldUseExpander: true,
        alt: 'Memorizer screen shot',
    },
    {
        title: 'Personal card',
        technics: 'NextJS, TypeScript, Ant Design, Tailwind, Framer Motion',
        description: `Проект "Визитная карточка" был разработан мной с использованием современной технологии Server Site Rendering, популярных библиотек и атуальных 
        инструментов разработчика. Сайт был создан с применением отзывчивого дизайна, оптимизации загрузки страниц, улучшением 
        показателей SEO по современным стандартам разработки.`,
        href: 'https://test.com',
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
                                <a className="font-light" href={href}>{href}</a>
                            </div>
                            }
                            <div className="flex flex-row items-center mt-4 mb-4">
                                <DeploymentUnitOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <p className="font-light"> {technics}</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <ReadOutlined style={{marginRight: '10px', fontSize: '28px', marginBottom: 'auto', marginTop: '5px'}}/>
                                <Expander height="250px" isNecessaryToUse={shouldUseExpander}>
                                    <p className="font-light mt-[3px]"> {description}</p>
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