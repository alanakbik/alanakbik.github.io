import React from "react";

import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
            <div className="min-h-dvh py-[calc(var(--header-height)*2)]">
                <H1>Privacy Policy</H1>
                <P>
                    The webserver / web hosting company might collect certain log files to prevent abuse of services. These log files can include: IP address, URL, date and time.
                    We do not use any tracking services or cookies to track or re-identify visitors.
                </P>
            </div>
        </Wrapper>
    );
}
