import Head from "next/head";
import { Footer } from "./footer";
import { Navbar } from "./header";

export default function Layout({children}) {
    return (
        <>
        <Head>
          {/* <link rel="stylesheet" href="../src/style.css" /> */}
        </Head>
        <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}