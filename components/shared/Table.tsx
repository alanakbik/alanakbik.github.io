import type { ReactNode } from "react";
import React from "react";

function Tr({ children }: {children: React.ReactNode}) {
    return <tr className="border-t-2 border-t-hu-blue-primary">{children}</tr>;
}

function Td({ children }: {children: React.ReactNode}) {
    return <td className="break-all p-2 first:pl-0 last:pr-0 sm:break-normal sm:px-4 ">{children}</td>;
}

export default function Table({ data }: { data: ReactNode[][] }) {
    if (data.length === 0) return null;
    return (
        <table className="my-8 w-full text-[0.75rem] sm:text-[1rem]">
            <thead>
                <tr className="text-[1rem] font-medium text-hu-blue-primary sm:text-xl">
                    {data[0].map((x, i) => <Td key={i}>{x}</Td>)}
                </tr>
            </thead>
            <tbody>
                {data.slice(1).map((x, i) => (
                    <Tr key={i}>
                        {x.map((y, j) => <Td key={j}>{y}</Td>)}
                    </Tr>
                ))}
            </tbody>
        </table>
    );
}