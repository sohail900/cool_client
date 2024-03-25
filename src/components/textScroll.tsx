const TextScroll = () => {
    return (
        <>
            <section className='w-full overflow-hidden mask'>
                <ul className='w-max py-2 px-4 flex bg-cardColor gap-[4.5rem] text-[2rem] scroll'>
                    <li>Shoe</li>
                    <li>Nike</li>
                    <li>Jordan</li>
                    <li>Yezzy</li>
                    <li>Adidas</li>
                    <li>Puma</li>
                    <li>Travis</li>
                    <li>Air</li>
                    <li>Nike</li>
                    <li className='duplicate'>Shoe</li>
                    <li>Nike</li>
                    <li>Jordan</li>
                    <li>Yezzy</li>
                    <li>Adidas</li>
                    <li>Puma</li>
                    <li>Travis</li>
                    <li>Air</li>
                    <li>Nike</li>
                </ul>
            </section>
        </>
    )
}
export default TextScroll
