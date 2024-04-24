import { ChangeEvent } from 'react'
import { IInputProps } from '../types/types'

const FieldInput = (props: IInputProps<ChangeEvent>) => {
    return (
        <>
            <input
                {...props}
                className='w-auto border-2 bg-[#6794d815] text-slate-700 px-3 py-3 rounded-xl text-[1.10rem] font-semibold '
            />
        </>
    )
}

export default FieldInput
