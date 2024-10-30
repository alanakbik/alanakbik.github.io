import React from "react";

import ScrollDownButton from "@/components/routes/chair/ScrollDownButton";

export default function Page() {
    return (
        <div>
            <div
                role="img"
                aria-hidden="true"
                className="h-dvh w-full bg-hu-blue-primary bg-[url('/group_photo_vertical.webp')] bg-cover
                bg-bottom bg-no-repeat landscape:bg-[url('/group_photo_horizontal.webp')] landscape:bg-top ultrawide:landscape:bg-[url('/group_photo_ultrawide.webp')]"
            >
                <ScrollDownButton/>
            </div>
            <div id="chair-main">
                <br/>
            </div>
        </div>
    );
}
