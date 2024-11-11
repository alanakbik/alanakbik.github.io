import Link from "next/link";
import React from "react";

import H1 from "@/components/shared/H1";
import P from "@/components/shared/P";
import Wrapper from "@/components/Wrapper";

export default function Page() {
    return (
        <Wrapper>
            <div className="min-h-dvh py-[calc(var(--header-height)*2)]">
                <H1>Legal Notice</H1>
                <P>
                    This webite is maintained by:
                </P>
                <P>
                    Alan Akbik <br/>
                    Humboldt-Universität zu Berlin <br/>
                    Institut für Informatik / Lehrstuhl Maschinelles Lernen <br/>
                    Unter den Linden 6 <br/>
                    10099 Berlin <br/>
                    Germany <br/>
                    <Link href="mailto:alan.akbik@hu-berlin.de">
                        <span
                            className="inline-link text-nowrap bg-gradient-to-b from-hu-blue-primary to-hu-blue-primary
                            text-hu-blue-primary"
                        >E-mail: alan.akbik@hu-berlin.de</span>
                    </Link>
                </P>
            </div>
        </Wrapper>
    );
}
