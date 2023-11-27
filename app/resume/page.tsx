'use client'
import {motion as m} from 'framer-motion'
import ExperienceTable from '../components/molecules/experienceTable/experienceTable'
import Languages from '../components/molecules/languages/languages'
import ResumeSection from '../components/molecules/resumeSection/resumeSection'
import SkillsList from '../components/molecules/skillsList/skillsList'

const experienceData = [
    {
        period: '2023-currently',
        position: 'Full Stack Developer', 
        company: 'Freelance', 
        description: [
            '1) My own web application "Memorizer"', 
            'Building app architecture',
            'Clien side:', 
            '- Home page with trial access to business logic functionality;', 
            '- User authorization and registration page;',
            '- Form validation;',
            '- User’s personal collections page with the ability to create, edit and delete collections and items;',
            '- Data filtering and sorting;',
            '- Unit tests for business logic functions (TDD);',
            '- Responsive design;',
            '- and etc..',
            'Server side:', 
            '- Creating API;', 
            '- Server side validation;',
            '- Authorization by JWT (access, refresh) via cookies;',
            '- Mail service;',
            '- Connection and interaction with the database;',
            '- Creating and applying business logic;',
            '- Configuring CORS, data caching;',
            '- and etc..',
            'Cloud server deployment, domain connection',
            '--------------------------------------', 
            '2) Current SSR project "Personal Card"', 
            'Stack:',
            'NextJS, TypeScript, Ant Design, Tailwind, Framer Motion',
        ],
        shouldUseExpander: true
    },
    {
        period: '2022-2023',
        position: 'Middle React Developer', 
        company: 'Aston (ex Andersen)', 
        description: [
            'FinTech project. SPA development using React and Redux',
            '- Work on the Agile methodology (Scrum);',
            '- Task decomposition and estimation;',
            '- Development of new functions, components, pages;',
            '- Writing unit tests;',
            '- Code review;',
            '- Refactoring of obsolete code;',
            '- Installing plugins and configuring Webpack builds to perform tasks;',
        ],
        shouldUseExpander: true
    },
    {
        period: '2020-2022',
        position: 'Junior Web Developer', 
        company: 'Gazprom-Neft', 
        description: [
            'Creating UI for interaction with mining data and statistics (collection, processing).',
            '- Development of new components and pages for application;',
            '- Integration of frontend and backend authorization and technical support pages (REST API);',
            '- Code review;',
            '- Creating technical documentation for reference;',
        ],
        shouldUseExpander: true
    },
    {
        period: '2016-2020',
        position: 'Engineer', 
        company: 'Kvartal', 
        description: [
            '- Project documentation development according to the terms of reference;', 
            '- Compliance verification;',
            '- Negotiations;'],
        shouldUseExpander: true
    },
]

const educationData = [
    {
        period: '2018-2020',
        position: '', 
        company: 'HTML-Academy', 
        description: ['Web development online courses. Learning HTML, CSS, JS, React.'],
        shouldUseExpander: false,
    },
    {
        period: '2012-2013',
        position: '', 
        company: 'Saint-Petersburg Polytechnic National University', 
        description: [`Degree in construction engineering`],
        shouldUseExpander: false,
    },
    {
        period: '2005-2010',
        position: '', 
        company: 'Saint-Petersburg Polytechnic National University', 
        description: ['Degree in metal processing technologies'],
        shouldUseExpander: false,
    },
]

const resumeData = [
    {
        title: 'Work Experience',
        info: <ExperienceTable experienceInfo={experienceData} />,
    },
    {
        title: 'Education',
        info: <ExperienceTable experienceInfo={educationData} />,
    },
    {
        title: 'Skills',
        info: <SkillsList />,
    },
    {
        title: 'Languages',
        info: <Languages />,
    },
]

export default function ResumePage() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center'>
            <h2 className="md:mt-20 font-semibold text-center tracking-[3px] mr-[650px] block text-4xl mt-14 lg:font-bold lg:ml-[-8px]">Resume</h2>
            <ResumeSection resumeData={resumeData}/>
        </div>
        </m.main>
    )
}