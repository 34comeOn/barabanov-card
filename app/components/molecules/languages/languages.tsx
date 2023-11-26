import { CheckOutlined, CommentOutlined, MinusOutlined, SoundOutlined } from "@ant-design/icons"
import { Fragment } from "react"
import Bar from "../../atoms/bar/bar"

export default function Languages() {
    return(
        <ul className="mb-10 w-[250px] ml-[25px] xs:w-[315px] md:w-[370px] xs:ml-[25px] md:ml-0">
            <li className="text-left text-[16px] h-[40px] items-baseline md:text-xl leading-10 font-light flex md:items-center">
                <CommentOutlined className="text-[26px] md:text-[28px] block md:mt-[3px] ml-[-26px] mr-[5px] md:ml-[-45px] md:mr-[15px]"/>
                Russian - Native
            </li>
            <li className="text-left text-[16px] h-[40px] items-baseline md:text-xl leading-10 font-light flex md:items-center">
                <CommentOutlined className="text-[23px] md:text-[23px] block md:mt-[3px] ml-[-22px] mr-[5px] md:ml-[-40px] md:mr-[15px]"/>
                English - B2
            </li>
            <li className="text-left text-[16px] h-[40px] items-baseline md:text-xl leading-10 font-light flex md:items-center">
                <CommentOutlined className="text-[19px] md:text-[19px] block md:mt-[3px] ml-[-17px] mr-[5px] md:ml-[-35px] md:mr-[15px]"/>
                Español - A1
            </li>
        </ul>
    )
}