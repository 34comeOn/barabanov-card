import { Fragment, ReactNode } from "react";
import Bar from "../../atoms/bar/bar";
import './style.css'

type TresumeData = {
    title: string, 
    info: ReactNode
}

export default function ResumeSection({resumeData}: {resumeData: TresumeData[]}) {
    return(
        <div>
            {resumeData.map(({title,info}, index)=> {
                return(
                    <Fragment key={index}>
                        {(index !== 0)? <Bar />: null}
                        <div className="flex flex-row justify-between resume-section mt-14" key={index}>
                            <h3 className="resume-section__title">{title}</h3>
                            {info}
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
} 