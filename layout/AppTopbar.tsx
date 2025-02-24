import { AutoComplete } from 'primereact/autocomplete';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import Link from 'next/link';

interface Planet {
    name: string;
    link: string;
}

const planets: Planet[] = [
    { name: 'Mercure', link: '/planet/mercure' },
    { name: 'Venus', link: '/planet/venus' },
    { name: 'Terre', link: '/planet/terre' },
    { name: 'Mars', link: '/planet/mars' },
    { name: 'Jupiter', link: '/planet/jupiter' },
    { name: 'Saturne', link: '/planet/saturne' },
    { name: 'Uranus', link: '/planet/uranus' },
    { name: 'Neptune', link: '/planet/neptune' }
];

const AppTopbar = forwardRef((props, ref) => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<Planet[]>([]);
    const [filterActive, setFilterActive] = useState(false);
    const [filteredPlanets, setFilteredPlanets] = useState(planets);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const router = useRouter();
    const searchRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    const search = (event: { query: string }) => {
        const query = event.query.toLowerCase();
        const results = planets.filter((planet) => planet.name.toLowerCase().includes(query));
        setFilteredResults(results);
    };

    const onSelect = (e: { value: Planet }) => {
        router.push(e.value.link);
        setSearchActive(false);
        setSearchTerm('');
    };

    const toggleFilter = () => setFilterActive(!filterActive);

    const sortAscending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => a.name.localeCompare(b.name)));
    const sortDescending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => b.name.localeCompare(a.name)));

    const navigateToPlanet = (link: string) => {
        router.push(link);
        setFilterActive(false);
    };

    useImperativeHandle(ref, () => ({
        menubutton: searchRef.current
    }));

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setFilterActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
    const paginatedPlanets = filteredPlanets.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="layout-topbar">
            <Link href={'/'} className="app-logo">
                <img alt="app logo" src="/assets/sol.png" />
                <span className="app-name">Solar System</span>
            </Link>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div className={classNames('topbar-search', { 'topbar-search-active': searchActive })}>
                    <button className="topbar-searchbutton p-link" onClick={() => setSearchActive(true)}>
                        <i className="pi pi-search"></i>
                    </button>
                    <div className="search-input-wrapper">
                        <span className="p-input-icon-right">
                            <AutoComplete
                                className="searchInput"
                                value={searchTerm}
                                suggestions={filteredResults}
                                completeMethod={search}
                                field="name"
                                placeholder="Search a planet"
                                onChange={(e) => setSearchTerm(e.value)}
                                onSelect={onSelect}
                                onBlur={() => setSearchActive(false)}
                            />
                            <i className="pi pi-search"></i>
                        </span>
                    </div>
                </div>

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
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
