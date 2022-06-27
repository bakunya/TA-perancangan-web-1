import clsx from 'clsx'

const Container = ({ children, wrapperClassName, containerClassName, cardClassName }) => {
    return (
        <div className={clsx(wrapperClassName, "min-w-screen")}>
            <div className={clsx(containerClassName, "max-w-[1400px] mx-auto")}>
                <div className={clsx(cardClassName, "py-10 px-10")}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Container