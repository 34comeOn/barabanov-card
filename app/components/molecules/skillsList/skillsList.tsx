import { CheckOutlined, MinusOutlined } from "@ant-design/icons"
import { Fragment } from "react"
import Bar from "../../atoms/bar/bar"

const skillsData = [
    {
        category: 'main',
        technologies: ['JS ES6', 'React', 'TS','NextJS', 'Redux']
    },
    {
        category: 'server technologies',
        technologies: ['NodeJS', 'Express', 'Mongo DB', 'Mongoose']
    },
    {
        category: 'web',
        technologies: ['REST API', 'GraphQL']
    },
    {
        category: 'styling',
        technologies: ['CSS', 'SASS', 'CSS in JS', 'Styled Components']
    },
    {
        category: 'libraries',
        technologies: ['AntDesign', 'Material UI', 'Tailwind',]
    },
    {
        category: 'testing libraries',
        technologies: ['Jest', 'React Testing Library']
    },
]

export default function SkillsList() {
    return(
        <ul className="mb-10 w-[250px] ml-[20px] xs:w-[315px] md:w-[370px] xs:ml-[20px] md:ml-0">
            {skillsData && skillsData.map(({category,technologies},index)=> {
                return(
                    <Fragment key={index}>
                        {(index !== 0)? <Bar />: null}
                        <li className="text-left text-[12px] xs:text-[16px] h-[40px] items-baseline md:text-xl leading-10 font-light flex md:items-center">
                            <CheckOutlined className="text-[16px] md:text-[20px] block md:mt-[3px] ml-[-20px] mr-[5px] md:ml-[-35px] md:mr-[15px]"/>
                        {technologies && technologies.join(', ')}
                        </li>
                    </Fragment>
                )
            })}
        </ul>
    )
}