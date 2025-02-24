'use client';
import React, { useEffect, useState } from 'react';

import { Props, CelestialBody } from '@interfaces';
import { useGeneralStore } from '@store';
import { Avatar } from 'primereact/avatar';
import { getCelestialBody } from '@/infrastructure/services';

const Name = ({ params }: Props) => {
    const { planets, setPlanets } = useGeneralStore((state) => state);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getCelestialBody();
                setPlanets(result);
            } catch (err) {
                console.log('Error al obtener los datos');
            }
        }
        if (!planets) fetchData();
    }, []);

    const planet = planets?.find((planet: CelestialBody) => planet.id === params.name);

    return (
        <>
            <div className="planet-datos-grid">
                <div>
                    <img
                        alt={params.name}
                        src={`/assets/${params.name}.png`}
                        className={`sombra-levitacion-masive animate__animated animate__pulse animate__infinite sun`}
                    />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', paddingRight: '4rem' }}>
                    <div className="card">
                        <h5>Description of the planet</h5>
                        <div className="planet-datos-grid">
                            <div>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="N"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(101, 214, 173, 0.1)',
                                                color: '#27AB83',
                                                border: '1px solid #65D6AD'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Name</span>
                                            <span className="text-color-secondary block">{planet?.name}</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="Kg"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(250, 219, 95, 0.1)',
                                                color: '#DE911D',
                                                border: '1px solid #FADB5F'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Mass</span>
                                            <span className="text-color-secondary block">
                                                {`${planet?.mass.massValue} X 10^${planet?.mass?.massExponent} Kg`}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="Km"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(94, 208, 250, 0.1)',
                                                color: '#1992D4',
                                                border: '1px solid #5ED0FA'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Vol</span>
                                            <span className="text-color-secondary block">
                                                {`${planet?.vol?.volValue} X 10^${planet?.vol?.volExponent} Km^3`}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="M"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(43, 176, 237, 0.1)',
                                                color: '#127FBF',
                                                border: '1px solid #2BB0ED'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Moons</span>
                                            <span className="text-color-secondary block">
                                                {typeof planet?.moons === 'number' ? planet.moons : 0}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="I"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(255, 155, 155, 0.1)',
                                                color: '#CF1124',
                                                border: '1px solid #FF9B9B'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Inclination</span>
                                            <span className="text-color-secondary block">{planet?.inclination}</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="G"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(250, 219, 95, 0.1)',
                                                color: '#DE911D',
                                                border: '1px solid #FADB5F'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Gravity</span>
                                            <span className="text-color-secondary block">{planet?.gravity} m/s²</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="DB"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(101, 214, 173, 0.1)',
                                                color: '#27AB83',
                                                border: '1px solid #65D6AD'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Discovered By</span>
                                            <span className="text-color-secondary block">{planet?.discoveredBy}</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="DY"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(250, 219, 95, 0.1)',
                                                color: '#DE911D',
                                                border: '1px solid #FADB5F'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Density</span>
                                            <span className="text-color-secondary block">{planet?.density}</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="ER"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(94, 208, 250, 0.1)',
                                                color: '#1992D4',
                                                border: '1px solid #5ED0FA'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Equa Radius</span>
                                            <span className="text-color-secondary block">{planet?.equaRadius} Km</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="AT"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(43, 176, 237, 0.1)',
                                                color: '#127FBF',
                                                border: '1px solid #2BB0ED'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Average Temperature</span>
                                            <span className="text-color-secondary block">{planet?.avgTemp} K</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="AB"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(255, 155, 155, 0.1)',
                                                color: '#CF1124',
                                                border: '1px solid #FF9B9B'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Axial Tilt</span>
                                            <span className="text-color-secondary block">{planet?.avgTemp} °</span>
                                        </div>
                                    </li>
                                    <li className="mb-4 flex align-items-center">
                                        <Avatar
                                            label="DD"
                                            size="large"
                                            shape="circle"
                                            className="text-base font-bold"
                                            style={{
                                                backgroundColor: 'rgba(250, 219, 95, 0.1)',
                                                color: '#DE911D',
                                                border: '1px solid #FADB5F'
                                            }}
                                        ></Avatar>
                                        <div className="ml-3">
                                            <span className="block">Discovery Date</span>
                                            <span className="text-color-secondary block">{planet?.discoveryDate}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Name;
