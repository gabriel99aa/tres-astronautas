'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import { Suspense } from 'react';
import Layout from '@layout/layout';

import '../styles/layout/layout.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '../styles/demo/Demos.scss';
import 'animate.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link id="theme-link" href={`/theme/theme-dark/indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <PrimeReactProvider>
                    <LayoutProvider>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Layout>{children}</Layout>
                        </Suspense>
                    </LayoutProvider>
                </PrimeReactProvider>
            </body>
        </html>
    );
}
