import { AutoComplete } from 'primereact/autocomplete';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';

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

    const activateSearch = () => {
        setSearchActive(true);
    };

    const deactivateSearch = () => {
        setSearchActive(false);
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
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <div
                    className={classNames('topbar-search', {
                        'topbar-search-active': searchActive
                    })}
                >
                    <button className="topbar-searchbutton p-link" onClick={activateSearch}>
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
                                onBlur={deactivateSearch}
                            />
                            <i className="pi pi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
