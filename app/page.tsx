'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutContext } from '@layout/context/layoutcontext';
import { Tooltip } from 'primereact/tooltip';
import type { Page } from '@/types';

import { getCelestialBody } from '@/infrastructure/services';
import { useGeneralStore } from '@store';

const planets = [
    { name: 'mercure', image: '/assets/mercure.png', className: 'pd-planeta-left' },
    { name: 'venus', image: '/assets/venus.png', className: 'pd-planeta-right' },
    { name: 'terre', image: '/assets/terre.png', className: 'pd-planeta-left' },
    { name: 'mars', image: '/assets/mars.png', className: 'pd-planeta-right' },
    { name: 'jupiter', image: '/assets/jupiter.png', className: 'pd-planeta-left' },
    { name: 'saturne', image: '/assets/saturne.png', className: 'pd-planeta-right' },
    { name: 'uranus', image: '/assets/uranus.png', className: 'pd-planeta-left' },
    { name: 'neptune', image: '/assets/neptune.png', className: 'pd-planeta-right' }
];

const LandingPage: Page = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const { setPlanets } = useGeneralStore((state) => state);

    const path = '/layout/images/landing/';
    const image = layoutConfig.colorScheme === 'dark' ? 'line-effect-dark.svg' : 'line-effect.svg';

    const [infinity, setInfinity] = useState(false);

    useEffect(() => {
        setTimeout(() => setInfinity(true), 2000);
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getCelestialBody();
                setPlanets(result);
            } catch (err) {
                console.log('Error al obtener los datos');
            }
        }

        fetchData();
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
                        className={`bg-no-repeat bg-bottom height-secure animate__animated ${
                            infinity ? 'animate__pulse animate__infinite sun' : 'animate__fadeInDown'
                        } `}
                    />

                    <Tooltip target=".sombra-levitacion" mouseTrack mouseTrackLeft={100} />

                    {planets.map(({ name, image, className }) => (
                        <img
                            key={name}
                            alt={name}
                            src={image}
                            data-pr-tooltip={name}
                            onClick={() => router.push(`planet/${name}`)}
                            className={`sombra-levitacion ${className} cursor: pointer`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
