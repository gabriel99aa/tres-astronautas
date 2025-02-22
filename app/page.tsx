'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutContext } from '@layout/context/layoutcontext';
import { Tooltip } from 'primereact/tooltip';
import type { Page } from '@/types';

import './styles.css';

const planets = [
    { name: 'Mercurio', image: '/assets/mercurio.png', className: 'pd-planeta-left' },
    { name: 'Venus', image: '/assets/venus.png', className: 'pd-planeta-right' },
    { name: 'Tierra', image: '/assets/tierra.png', className: 'pd-planeta-left' },
    { name: 'Marte', image: '/assets/marte.png', className: 'pd-planeta-right' },
    { name: 'Júpiter', image: '/assets/jupiter.png', className: 'pd-planeta-left' },
    { name: 'Saturno', image: '/assets/saturno.png', className: 'pd-planeta-right' },
    { name: 'Urano', image: '/assets/urano.png', className: 'pd-planeta-left' },
    { name: 'Neptuno', image: '/assets/neptuno.png', className: 'pd-planeta-right' }
];

const LandingPage: Page = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const path = '/layout/images/landing/';
    const image = layoutConfig.colorScheme === 'dark' ? 'line-effect-dark.svg' : 'line-effect.svg';
    const [infinity, setInfinity] = useState(false);

    useEffect(() => {
        setTimeout(() => setInfinity(true), 2000);
    }, []);

    return (
        <div className="surface-ground min-h-screen">
            <div className="landing-wrapper overflow-x">
                <div
                    style={{ backgroundImage: `url(${path}${image})`, paddingBottom: '280px' }}
                    className="bg-no-repeat bg-cover bg-bottom min-h-screen"
                >
                    <div
                        style={{ backgroundImage: `url(/assets/sol.png)`, height: '32rem !important' }}
                        className={`bg-no-repeat bg-bottom animate__animated ${
                            infinity ? 'animate__pulse animate__infinite sun' : 'animate__fadeInDown'
                        } `}
                    />

                    <Tooltip target=".sombra-levitacion" mouseTrack mouseTrackLeft={100} />

                    {planets.map(({ name, image, className }) => (
                        <img
                            key={name}
                            src={image}
                            data-pr-tooltip={name}
                            className={`sombra-levitacion ${className}`}
                            alt={name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
