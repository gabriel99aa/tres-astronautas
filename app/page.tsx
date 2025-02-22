'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutContext } from '@layout/context/layoutcontext';
import type { Page } from '@/types';

import './styles.css';
import { Tooltip } from 'primereact/tooltip';

const LandingPage: Page = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const path = '/layout/images/landing/';
    const image = layoutConfig.colorScheme === 'dark' ? 'line-effect-dark.svg' : 'line-effect.svg';

    const navigateToDashboard = () => {
        router.push('/');
    };
    const navigateToRegister = () => {
        router.push('/auth/login');
    };

    const scrollToElement = (el: React.RefObject<HTMLDivElement>) => {
        setTimeout(() => {
            el.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 200);
    };

    return (
        <>
            <div className="surface-ground min-h-screen">
                <div className="landing-wrapper">
                    <div
                        style={{ backgroundImage: `url(${path}${image})` }}
                        className="bg-no-repeat bg-cover bg-bottom min-h-screen"
                    >
                        <div
                            style={{ backgroundImage: `url(/assets/sol.png)`, height: '32rem !important' }}
                            className="bg-no-repeat bg-bottom animate__animated animate__fadeInDown"
                        />

                        <Tooltip target=".sombra-levitacion" mouseTrack mouseTrackLeft={100} />
                        <img
                            src={'/assets/mercurio.png'}
                            data-pr-tooltip="Mercurio"
                            className="sombra-levitacion pd-planeta-left mercurio"
                            alt="PLANETA"
                        />

                        <img
                            src={'/assets/venus.png'}
                            data-pr-tooltip="Venus"
                            className="sombra-levitacion pd-planeta-right venus"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/tierra.png'}
                            data-pr-tooltip="Tierra"
                            className="sombra-levitacion pd-planeta-left tierra"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/marte.png'}
                            data-pr-tooltip="Marte"
                            className="sombra-levitacion pd-planeta-right marte"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/jupiter.png'}
                            data-pr-tooltip="Júpiter"
                            className="sombra-levitacion pd-planeta-left jupiter"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/saturno.png'}
                            data-pr-tooltip="Saturno"
                            className="sombra-levitacion pd-planeta-right saturno"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/urano.png'}
                            data-pr-tooltip="Urano"
                            className="sombra-levitacion pd-planeta-left urano"
                            alt="PLANETA"
                        />
                        <img
                            src={'/assets/neptuno.png'}
                            data-pr-tooltip="Neptuno"
                            className="sombra-levitacion pd-planeta-right neptuno"
                            alt="PLANETA"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
