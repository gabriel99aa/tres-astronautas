import { AutoComplete } from 'primereact/autocomplete';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
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
    const [searchActive, setSearchActive] = useState<boolean | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<Planet[]>([]);
    const [filterActive, setFilterActive] = useState(false);
    const [sortedPlanets, setSortedPlanets] = useState<Planet[]>([...planets]);
    const [filteredPlanets, setFilteredPlanets] = useState(planets);

    const router = useRouter();
    const menubuttonRef = useRef(null);

    const search = (event: { query: string }) => {
        const query = event.query.toLowerCase();
        const results = planets.filter((planet) => planet.name.toLowerCase().includes(query));
        setFilteredResults(results);
    };

    const onSelect = (e: { value: Planet }) => {
        router.push(e.value.link);
        setSearchActive(false);
    };

    const toggleFilter = () => setFilterActive(!filterActive);

    const sortAscending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => a.name.localeCompare(b.name)));

    const sortDescending = () => setFilteredPlanets([...filteredPlanets].sort((a, b) => b.name.localeCompare(a.name)));

    const navigateToPlanet = (link: string) => {
        router.push(link);
        setFilterActive(false);
    };

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            <Link href={'/'} className="app-logo">
                <img alt="app logo" src="/assets/sol.png" />
                <span className="app-name">Solar System</span>
            </Link>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {/* Botón de búsqueda */}
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

                {/* Botón de filtro */}
                <div className={classNames('topbar-search')}>
                    <button className="topbar-searchbutton p-link" onClick={toggleFilter}>
                        <i className="pi pi-sort-alpha-down" style={{ fontSize: '18px' }}></i>
                    </button>
                </div>

                {/* Desplegable del filtro */}
                {filterActive && (
                    <div
                        className="filter-dropdown card"
                        style={{
                            position: 'absolute',
                            top: '70px',
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
                            {filteredPlanets.map((planet) => (
                                <li
                                    key={planet.name}
                                    style={{ padding: '5px', cursor: 'pointer' }}
                                    onClick={() => navigateToPlanet(planet.link)}
                                >
                                    {planet.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
