import './style.css'

type TexperienceTable = {
    period: string,
    position: string, 
    company: string, 
    description: string
}

export default function ExperienceTable( {experienceInfo}: {experienceInfo:TexperienceTable[]}) {
    return(
        <ul>
            {experienceInfo.map(({period,position,company,description},index)=> {
                return(
                    <li key={index} className='flex flex-row gap-4 mb-12'>
                        <span className='font-thin mt-1'>{period}</span>
                        <div className='experience__block'>
                            <h4 className='font-semibold text-xl'>
                                {position}
                            </h4>
                            <span className='font-light text-xl'>
                                {company}
                            </span>
                            <p className="font-thin">
                                {description}
                            </p>
                        </div>
                    </li>

                )

            })}
        </ul>
    )
}