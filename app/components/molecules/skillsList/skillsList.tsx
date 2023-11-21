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
        <ul className="mb-10">
            {skillsData && skillsData.map(({category,technologies},index)=> {
                return(
                    <Fragment key={index}>
                        {(index !== 0)? <Bar />: null}
                        <li className="text-left text-xl leading-10 font-light flex items-center">
                        <CheckOutlined style={{marginLeft: '-40px', marginRight: '20px',marginTop: '3px'}}/>
                        {technologies && technologies.join(', ')}
                        </li>
                    </Fragment>
                )
            })}
        </ul>
    )
}