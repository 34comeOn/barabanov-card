import Expander from '../expander/expander'

type TexperienceTable = {
    period: string,
    position: string, 
    company: string, 
    description: string,
    shouldUseExpander: boolean,
}

export default function ExperienceTable( {experienceInfo}: {experienceInfo:TexperienceTable[]}) {
    return(
        <ul>
            {experienceInfo.map(({period,position,company,description,shouldUseExpander},index)=> {
                return(
                    <li key={index} className='flex flex-col md:flex-row gap-0 md:gap-4 mb-12'>
                        <span className='min-w-[130px] text-left md:text-right font-thin mt-1'>{period}</span>
                        <div className='max-w-[440px] w-full md:w-[340px] mt-[2px] text-left'>
                            <h4 className='font-semibold text-xl'>
                                {position}
                            </h4>
                            <span className='font-light text-xl'>
                                {company}
                            </span>

                            <Expander height="50px" isNecessaryToUse={shouldUseExpander}>
                                <p className="font-thin">
                                    {description}
                                </p>
                            </Expander>
                        </div>
                    </li>

                )

            })}
        </ul>
    )
}