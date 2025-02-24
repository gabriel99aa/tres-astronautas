import { AutoComplete } from 'primereact/autocomplete';
import { classNames } from 'primereact/utils';
import { useRouter } from 'next/navigation';
import { Planet } from '@interfaces';
import { useState } from 'react';

export const Search = ({ planets }: { planets: Planet[] }) => {
    const router = useRouter();

    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<Planet[]>([]);

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

    return (
        <>
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
        </>
    );
};
