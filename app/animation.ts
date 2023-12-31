export const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
}

export const item = {
    hidden: {y: '17%'},
    show: {
        y: '0%',
        transition: {duration: 0.5}
    }
}