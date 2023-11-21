'use client'
import {motion as m} from 'framer-motion'
import ExperienceTable from '../components/molecules/experienceTable/experienceTable'
import ResumeSection from '../components/molecules/resumeSection/resumeSection'
import SkillsList from '../components/molecules/skillsList/skillsList'
import './style.css'

const experienceData = [
    {
        period: '2023-currently',
        position: 'Full Stack Developer', 
        company: 'Freelance', 
        description: `Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        `,
        shouldUseExpander: true
    },
    {
        period: '2022-2023',
        position: 'Middle React Developer', 
        company: 'Andersen', 
        description: `Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        `,
        shouldUseExpander: true
    },
    {
        period: '2020-2022',
        position: 'Junior Web Developer', 
        company: 'Gazprom-Neft', 
        description: `Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        `,
        shouldUseExpander: true
    },
    {
        period: '2016-2020',
        position: 'Engineer', 
        company: 'Kvartal', 
        description: `Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        Ive done a Ive done a  Ive done a  Ive done a 
        `,
        shouldUseExpander: true
    },
]

const educationData = [
    {
        period: '2018-2020',
        position: '', 
        company: 'HTML-Academy', 
        description: 'Web development online courses',
        shouldUseExpander: false,
    },
    {
        period: '2012-2013',
        position: '', 
        company: 'Saint-Petersburg Politechnic University', 
        description: 'Engineer in construction technologies',
        shouldUseExpander: false,
    },
    {
        period: '2005-2010',
        position: '', 
        company: 'Saint-Petersburg Politechnic University', 
        description: 'Engineer in metal processing technologies',
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
]

export default function ResumePage() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center'>
            <h2 className="mt-20 font-semibold resume__caption">Resume</h2>
            <ResumeSection resumeData={resumeData}/>
        </div>
        </m.main>
    )
}