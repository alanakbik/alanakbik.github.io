import React from "react";

export default function BlockCheckbox({ children, checked, onChange }: {
    children: string,
    checked: boolean,
    onChange: (e: { target: { checked: boolean } }) => void,
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
            <input type="checkbox" className="hidden" checked={checked} onChange={onChange}/>
        </label>
    );
}
