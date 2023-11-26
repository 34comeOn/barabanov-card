import { Fragment, ReactNode } from "react";
import Bar from "../../atoms/bar/bar";

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
                        <div className="flex flex-col md:flex-row max-w-[810px] m-auto justify-between mt-8 sm:mt-14" key={index}>
                            <h3 className="tracking-[0.7px] mb-[25px] text-[22px] w-min sm:w-max min-w-min text-left leading-[30px] font-medium">{title}</h3>
                            {info}
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
} 