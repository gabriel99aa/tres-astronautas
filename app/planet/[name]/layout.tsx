import AppConfig from '@layout/AppConfig';
import { Metadata } from 'next';
import React from 'react';

interface FullPageLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Sistema Solar',
    description: 'Sistema Solar'
};

export default function FullPageLayout({ children }: FullPageLayoutProps) {
    return <React.Fragment>{children}</React.Fragment>;
}
