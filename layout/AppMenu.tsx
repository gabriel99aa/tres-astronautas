import AppSubMenu from './AppSubMenu';
import type { MenuModel } from '@/types';

const AppMenu = () => {
    const roots: MenuModel[] = [];

    return <AppSubMenu model={roots} />;
};

export default AppMenu;
