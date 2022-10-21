import Head from "next/head";
import { Footer } from "./footer";


export default function Layout({children}) {
    return (
        <>
        <Head>
          {/* <link rel="stylesheet" href="../src/style.css" /> */}
        </Head>
     
            <main>{children}</main>
            <Footer/>
        </>
    )
}