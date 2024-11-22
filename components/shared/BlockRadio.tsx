import React from "react";

export default function BlockRadio({ children, checked, onChange, name }: {
    children: string,
    checked: boolean,
    onChange: (e: { target: { checked: boolean } }) => void,
    name: string,
}) {
    return (
        <label aria-label={children}>
            <span
                className={"block-link cursor-pointer " + (checked ? "" : "block-link-gray")}
                role="checkbox"
                tabIndex={0}
                aria-checked={checked}
                onKeyDown={e => ["Enter", " "].includes(e.key) && onChange({ target: { checked: !checked }})}
            >
                <span className="select-none">{children}</span>
            </span>
            <input type="radio" className="hidden" checked={checked} onChange={onChange} name={name}/>
        </label>
    );
}
