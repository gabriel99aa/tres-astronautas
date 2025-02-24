import { useEffect, useRef, useState } from 'react';
import { Planet } from '@interfaces';
import { useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

export const Filter = ({ planets }: { planets: Planet[] }) => {
    const router = useRouter();

    const [filterActive, setFilterActive] = useState(false);
    const [filteredPlanets, setFilteredPlanets] = useState(planets);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 5;

    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setFilterActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const toggleFilter = () => setFilterActive(!filterActive);

    const sortAscending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => a.name.localeCompare(b.name)));
    const sortDescending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => b.name.localeCompare(a.name)));

    const navigateToPlanet = (link: string) => {
        router.push(link);
        setFilterActive(false);
    };

    const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
    const paginatedPlanets = filteredPlanets.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <>
            <div ref={filterRef} className={classNames('topbar-search')}>
                <button className="topbar-searchbutton p-link" onClick={toggleFilter}>
                    <i className="pi pi-sort-alpha-down" style={{ fontSize: '18px' }}></i>
                </button>
                {filterActive && (
                    <div
                        className="filter-dropdown card"
                        style={{
                            position: 'absolute',
                            top: '80px',
                            right: '10px',
                            padding: '10px',
                            borderRadius: '5px',
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '10px',
                                gap: '1rem'
                            }}
                        >
                            <Button icon="pi pi-arrow-up" onClick={sortAscending} />
                            <Button icon="pi pi-arrow-down" onClick={sortDescending} />
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {paginatedPlanets.map((planet) => (
                                <li
                                    key={planet.name}
                                    style={{ padding: '5px', cursor: 'pointer' }}
                                    onClick={() => navigateToPlanet(planet.link)}
                                >
                                    {planet.name}
                                </li>
                            ))}
                        </ul>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                marginTop: '10px',
                                gap: '2rem'
                            }}
                        >
                            <Button
                                icon="pi pi-chevron-left"
                                disabled={currentPage === 0}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            />
                            <span>
                                Page {currentPage + 1} of {totalPages}
                            </span>
                            <Button
                                icon="pi pi-chevron-right"
                                disabled={currentPage === totalPages - 1}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
