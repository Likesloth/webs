import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react';

type Layout = {
    children: ReactNode;
}


export default function Layout({ children }: Layout) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}