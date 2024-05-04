import { ChangeEvent, useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { IInputProps } from '../../types/types'

const FieldInput = (props: IInputProps<ChangeEvent>) => {
    const [showPass, setShowPass] = useState<boolean>(false)
    return (
        <>
            <div className='flex w-[250px] sm:w-[350px] border-2 bg-[#6794d815] text-slate-700 rounded-lg text-[1.10rem] font-semibold  relative'>
                <input
                    {...props}
                    type={!showPass ? props.passtype : 'text'}
                    className='w-full bg-transparent pl-3 pr-9 py-2'
                    required
                />
                {props.checkpassword && (
                    <span className='h-full absolute right-3 grid place-items-center cursor-pointer '>
                        {!showPass ? (
                            <EyeOffIcon
                                size={20}
                                onClick={() => setShowPass((pre) => !pre)}
                            />
                        ) : (
                            <EyeIcon
                                size={20}
                                onClick={() => setShowPass((pre) => !pre)}
                            />
                        )}
                    </span>
                )}
            </div>
            {props.errors && (
                <p className='-mt-2 text-red-700/70 text-[0.9rem] font-semibold'>
                    {props.errors}
                </p>
            )}
        </>
    )
}

export default FieldInput
