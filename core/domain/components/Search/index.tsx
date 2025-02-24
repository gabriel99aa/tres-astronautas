import { AutoComplete } from 'primereact/autocomplete';
import { classNames } from 'primereact/utils';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Planet } from '@interfaces';
import { useState, useEffect } from 'react';

export const Search = ({ planets }: { planets: Planet[] }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<Planet[]>([]);

    // Cargar el término de búsqueda desde la URL al inicio
    useEffect(() => {
        const queryParam = searchParams.get('search');
        if (queryParam) {
            setSearchTerm(queryParam);
            search({ query: queryParam });
        }
    }, []);

    const search = (event: { query: string }) => {
        const query = event.query.toLowerCase();
        const results = planets.filter((planet) => planet.name.toLowerCase().includes(query));
        setFilteredResults(results);
    };

    const onChange = (e: { value: string }) => {
        setSearchTerm(e.value);

        const params = new URLSearchParams(searchParams);
        params.set('search', e.value);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const onSelect = (e: { value: Planet }) => {
        setSearchActive(false);

        const params = new URLSearchParams(searchParams);
        router.replace(`${e.value.link}?${params.toString()}`, { scroll: false });
    };

    return (
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
                        onChange={onChange}
                        onSelect={onSelect}
                        onBlur={() => setSearchActive(false)}
                    />
                    <i className="pi pi-search"></i>
                </span>
            </div>
        </div>
    );
};
