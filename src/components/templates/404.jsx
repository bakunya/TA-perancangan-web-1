import Head from "next/head";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="min-w-screen min-h-screen overflow-hidden grid place-content-center">
                <h1 className="text-2xl sm:text-3xl font-light">404 - Page Not Found</h1>
            </div>
        </>
    )
}