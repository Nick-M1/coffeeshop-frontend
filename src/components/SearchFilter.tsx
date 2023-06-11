import {ChangeEvent} from "react";
import {toFormattedLowerCase} from "../utils/text-utils";

type Props = {
    title: string
    searchKey: string
    options: string[]
    defaultValue?: string
    canBeEmpty: boolean
    onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

export default function SearchFilter({ title, searchKey, options, defaultValue, canBeEmpty, onChange }: Props) {
    return (
        <div>
            <label htmlFor={searchKey}>{ title }:</label>
            <select id={searchKey} name={searchKey} className='my-1.5 input-primary capitalize' onChange={onChange} defaultValue={defaultValue}>
                { canBeEmpty && <option value='ALL'>All</option> }
                { options.map(option =>
                    <option key={option} value={option} className='capitalize'>{ toFormattedLowerCase(option) }</option>
                )}
            </select>
        </div>
    )
}