import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="py-4">
            <ul className="flex flex-wrap justify-center gap-y-2">
                <li>
                    <Link href="/legal-notice" className="px-4">
                        <span className="inline-link text-nowrap bg-gradient-to-b from-hu-blue-primary to-hu-blue-primary
                        py-1 text-hu-blue-primary">
                            Legal Notice
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy" className="px-4">
                        <span className="inline-link text-nowrap bg-gradient-to-b from-hu-blue-primary to-hu-blue-primary
                        py-1 text-hu-blue-primary">
                            Privacy Policy
                        </span>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}