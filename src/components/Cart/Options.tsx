type TSelectProps = { data: number[]; name: string }

const Options = (props: TSelectProps) => {
    return (
        <>
            <select
                name={props.name}
                id={props.name}
                className='mr-2 font-semibold text-text_color2'
            >
                {props.data.map((elem, idx) => {
                    return (
                        <>
                            <option value={elem} key={idx}>
                                {elem}
                            </option>
                        </>
                    )
                })}
            </select>
        </>
    )
}

export default Options
