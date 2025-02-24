import { useEffect, useRef, useState } from 'react';
import { Planet } from '@interfaces';
import { useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';
import { useGeneralStore } from '@store';
import { Divider } from 'primereact/divider';

export const Favorites = ({ planets }: { planets: Planet[] }) => {
    const { favorites, setFavorites } = useGeneralStore((state) => state);

    const [favoritesActive, setFavoritesActive] = useState(false);
    const favoritesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (favoritesRef.current && !favoritesRef.current.contains(event.target as Node)) {
                setFavoritesActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleFavorites = () => setFavoritesActive(!favoritesActive);

    const navigateToPlanet = (name: string) => {
        setFavorites(name);
    };

    return (
        <div ref={favoritesRef} className={classNames('topbar-search')}>
            <button className="topbar-searchbutton p-link" onClick={toggleFavorites}>
                <i
                    className={`pi ${favorites.length > 0 ? 'pi-heart-fill' : 'pi-heart'}`}
                    style={{ fontSize: '18px', color: 'red' }}
                ></i>
            </button>
            {favoritesActive && (
                <div
                    className="favorites-dropdown card"
                    style={{
                        position: 'absolute',
                        top: '80px',
                        right: '10px',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {planets.map((planet) => (
                            <div key={planet.name}>
                                <li
                                    style={{ padding: '5px', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
                                    onClick={() => navigateToPlanet(planet.name)}
                                    className='hover-li'
                                >
                                    <i
                                        className={`pi ${
                                            favorites.includes(planet.name) ? 'pi-heart-fill' : 'pi-heart'
                                        }`}
                                        style={{ fontSize: '18px', color: 'red' }}
                                    ></i>
                                    {planet.name}
                                </li>
                                {planet.name !== 'Neptune' && <Divider />}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
