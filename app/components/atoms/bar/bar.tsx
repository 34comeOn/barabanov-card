import './style.css'

export default function Bar({width}: {width?: string}) {
    return(
        <div className={`footer-bar ${width? `w-${width}` : 'w-full'}`}></div>
    )
}