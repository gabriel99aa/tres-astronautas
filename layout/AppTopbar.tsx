import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Planet } from '@interfaces';
import { Favorites, Filter, Search } from '@components';
import Link from 'next/link';

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
    return (
        <div className="layout-topbar">
            <Link href={'/'} className="app-logo">
                <img alt="app logo" src="/assets/sol.png" />
                <span className="app-name">Solar System</span>
            </Link>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <Search planets={planets} />
                <Filter planets={planets} />
                <Favorites planets={planets} />
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
