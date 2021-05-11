import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="text-center">
            <h1>Ooooops...</h1>
            <h2>This page cannot be found</h2>
            <p>
                Go back to the{" "}
                <Link href={"/"}>
                    <a className="text-blue-600 underline">Homepage</a>
                </Link>
            </p>
        </div>
    );
}
