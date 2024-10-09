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
            className="relative border-l-3 border-hu-blue-primary pb-16 pl-4 after:absolute after:left-0 after:top-0 after:size-4 after:translate-x-[calc(-50%-2px)] after:rounded-full
            after:border-3 after:border-hu-blue-primary after:bg-white after:content-[''] last:ml-[3px] last:border-none
            last:pb-0 sm:pl-8 sm:after:size-5"
        >
            <div className="flex -translate-y-2.5 flex-col sm:-translate-y-1.5 sm:flex-row sm:items-center">
                <time dateTime={date} className="text-2xl text-hu-blue-primary">
                    {formattedDate}
                </time>
                <div className="mt-3 flex h-full sm:mt-0">
                    <div
                        style={{
                            borderColor: color,
                            backgroundColor: color,
                        }}
                        className="inline-block overflow-hidden text-clip text-nowrap rounded-lg border-3 leading-4 sm:ml-6"
                    >
                        <span className="inline-block px-2 pb-[0.1rem] text-white">{category}</span>
                        {conference &&
                            <span
                                style={{
                                    color: color,
                                }}
                                className="inline-block bg-white px-2 pb-[0.1rem]"
                            >{conference}</span>
                        }
                    </div>
                </div>
            </div>
            <p className="leading-loose">
                {content}
            </p>
        </div>
    );
}