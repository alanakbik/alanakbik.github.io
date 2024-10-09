import React from "react";

import type { TimelineEntryData } from "@/content/types";

export default function TimelineEntry({ data: { date, category, conference, content }, color }: {
    data: TimelineEntryData,
    color: string,
}) {
    const formattedDate = (() => {
        const d = new Date(date);

        let day = d.getDate().toString();
        if (day.length === 1) day = "0" + day;

        let month = (d.getMonth() + 1).toString();
        if (month.length === 1) month = "0" + month;

        return `${month}/${day}/${d.getFullYear()}`;
    })();
    return (
        <div
            className="relative border-l-3 border-hu-blue-primary pb-16 pl-8 after:absolute after:left-0 after:top-0 after:size-5
            after:translate-x-[calc(-50%-2px)] after:rounded-full after:border-3 after:border-hu-blue-primary after:bg-white after:content-['']
            last:ml-[3px] last:border-none last:pb-0"
        >
            <div className="flex -translate-y-1.5 items-center">
                <time dateTime={date} className="text-2xl text-hu-blue-primary">
                    {formattedDate}
                </time>
                <div
                    style={{
                        borderColor: color,
                        backgroundColor: color,
                    }}
                    className="ml-6 inline-block overflow-hidden rounded-lg border-3 leading-4"
                >
                    <span
                        style={{
                            backgroundColor: color,
                        }}
                        className="inline-block px-2 pb-[0.05rem] text-white"
                    >{category}</span>
                    {conference &&
                        <span
                            style={{
                                color: color,
                            }}
                            className="inline-block bg-white px-2 pb-[0.05rem]"
                        >{conference}</span>
                    }
                </div>
            </div>
            <p className="leading-loose">
                {content}
            </p>
        </div>
    );
}