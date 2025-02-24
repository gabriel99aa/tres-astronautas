import { InputText } from 'primereact/inputtext';
import { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { LayoutContext } from './context/layoutcontext';
import type { AppTopbarRef } from '@/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { classNames } from 'primereact/utils';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { tabs, closeTab } = useContext(LayoutContext);

    const [searchActive, setSearchActive] = useState<boolean | null>(null);

    const pathname = usePathname();
    const router = useRouter();
    const menubuttonRef = useRef(null);

    const activateSearch = () => {
        setSearchActive(true);
        setTimeout(() => {
            const element = document.querySelector('.searchInput');
            (element as HTMLElement)?.focus();
        }, 100);
    };
    const deactivateSearch = () => {
        setSearchActive(false);
    };

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current
    }));

    const onCloseTab = (index: number) => {
        if (tabs.length > 1) {
            if (index === tabs?.length - 1) router.push(tabs?.[tabs.length - 2].to);
            else router.push(tabs?.[index + 1].to);
        } else {
            router.push('/');
        }
        closeTab(index);
    };

    return (
        <div className="layout-topbar">
            <Link href={'/'} className="app-logo">
                <img alt="app logo" src="/assets/sol.png" />
                <span className="app-name">Solar System</span>
            </Link>

            <ul className="topbar-menu">
                {tabs.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link href={item.to} className={classNames({ 'active-route': item.to === pathname })}>
                                <span>{item.label}</span>
                            </Link>
                            <i className="pi pi-times" onClick={() => onCloseTab(i)}></i>
                        </li>
                    );
                })}
                {!tabs || (tabs.length === 0 && <li className="topbar-menu-empty"></li>)}
            </ul>

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
                        <InputText className="searchInput" type="text" placeholder="Search" onBlur={deactivateSearch} />
                        <i className="pi pi-search"></i>
                    </span>
                </div>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
