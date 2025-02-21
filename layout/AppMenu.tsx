import AppSubMenu from './AppSubMenu';
import type { MenuModel } from '@/types';

const isTemplateActive = false;

const AppMenu = () => {
    const model: MenuModel[] = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'SaaS',
                    icon: 'pi pi-fw pi-home',
                    to: '/template-resources'
                },
                {
                    label: 'Sales',
                    icon: 'pi pi-fw pi-image',
                    to: '/template-resources/dashboard-sales'
                }
            ]
        },
        {
            label: 'UI Kit',
            icon: 'pi pi-fw pi-star',
            items: [
                {
                    label: 'Form Layout',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/template-resources/uikit/formlayout'
                },
                {
                    label: 'Input',
                    icon: 'pi pi-fw pi-check-square',
                    to: '/template-resources/uikit/input'
                },
                {
                    label: 'Float Label',
                    icon: 'pi pi-fw pi-bookmark',
                    to: '/template-resources/uikit/floatlabel'
                },
                {
                    label: 'Invalid State',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/template-resources/uikit/invalidstate'
                },
                {
                    label: 'Button',
                    icon: 'pi pi-fw pi-box',
                    to: '/template-resources/uikit/button'
                },
                {
                    label: 'Table',
                    icon: 'pi pi-fw pi-table',
                    to: '/template-resources/uikit/table'
                },
                {
                    label: 'List',
                    icon: 'pi pi-fw pi-list',
                    to: '/template-resources/uikit/list'
                },
                {
                    label: 'Tree',
                    icon: 'pi pi-fw pi-share-alt',
                    to: '/template-resources/uikit/tree'
                },
                {
                    label: 'Panel',
                    icon: 'pi pi-fw pi-tablet',
                    to: '/template-resources/uikit/panel'
                },
                {
                    label: 'Overlay',
                    icon: 'pi pi-fw pi-clone',
                    to: '/template-resources/uikit/overlay'
                },
                {
                    label: 'Media',
                    icon: 'pi pi-fw pi-image',
                    to: '/template-resources/uikit/media'
                },
                {
                    label: 'Menu',
                    icon: 'pi pi-fw pi-bars',
                    to: '/template-resources/uikit/menu'
                },
                {
                    label: 'Message',
                    icon: 'pi pi-fw pi-comment',
                    to: '/template-resources/uikit/message'
                },
                {
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    to: '/template-resources/uikit/file'
                },
                {
                    label: 'Chart',
                    icon: 'pi pi-fw pi-chart-bar',
                    to: '/template-resources/uikit/charts'
                },
                {
                    label: 'Misc',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/template-resources/uikit/misc'
                }
            ]
        },
        {
            label: 'Apps',
            icon: 'pi pi-th-large',
            items: [
                {
                    label: 'Blog',
                    icon: 'pi pi-fw pi-comment',
                    items: [
                        {
                            label: 'List',
                            icon: 'pi pi-fw pi-image',
                            to: '/template-resources/apps/blog/list'
                        },
                        {
                            label: 'Detail',
                            icon: 'pi pi-fw pi-list',
                            to: '/template-resources/apps/blog/detail'
                        },
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/template-resources/apps/blog/edit'
                        }
                    ]
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/template-resources/apps/calendar'
                },
                {
                    label: 'Chat',
                    icon: 'pi pi-fw pi-comments',
                    to: '/template-resources/apps/chat'
                },
                {
                    label: 'Files',
                    icon: 'pi pi-fw pi-folder',
                    to: '/template-resources/apps/files'
                },
                {
                    label: 'Mail',
                    icon: 'pi pi-fw pi-envelope',
                    items: [
                        {
                            label: 'Inbox',
                            icon: 'pi pi-fw pi-inbox',
                            to: '/template-resources/apps/mail/inbox'
                        },
                        {
                            label: 'Compose',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/template-resources/apps/mail/compose'
                        },
                        {
                            label: 'Detail',
                            icon: 'pi pi-fw pi-comment',
                            to: '/template-resources/apps/mail/detail/1000'
                        }
                    ]
                },
                {
                    label: 'Task List',
                    icon: 'pi pi-fw pi-check-square',
                    to: '/template-resources/apps/tasklist'
                }
            ]
        },

        {
            label: 'Prime Blocks',
            icon: 'pi pi-fw pi-prime',
            items: [
                {
                    label: 'Free Blocks',
                    icon: 'pi pi-fw pi-eye',
                    to: '/template-resources/blocks'
                },
                {
                    label: 'All Blocks',
                    icon: 'pi pi-fw pi-globe',
                    url: 'https://blocks.primevue.org',
                    target: '_blank'
                }
            ]
        },
        {
            label: 'Utilities',
            icon: 'pi pi-fw pi-compass',
            items: [
                {
                    label: 'PrimeIcons',
                    icon: 'pi pi-fw pi-prime',
                    to: '/template-resources/utilities/icons'
                },
                {
                    label: 'Colors',
                    icon: 'pi pi-fw pi-palette',
                    to: '/template-resources/utilities/colors'
                },
                {
                    label: 'PrimeFlex',
                    icon: 'pi pi-fw pi-desktop',
                    url: 'https://www.primefaces.org/primeflex/',
                    target: '_blank'
                },
                {
                    label: 'Figma',
                    icon: 'pi pi-fw pi-pencil',
                    url: 'https://www.figma.com/file/PgQXX4HXMPeCkT74tGajod/Preview-%7C-Verona-2022?type=design&node-id=1303-750&mode=design',
                    target: '_blank'
                }
            ]
        },
        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'Landing',
                    icon: 'pi pi-fw pi-globe',
                    to: '/template-resources/landing'
                },
                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Login',
                            icon: 'pi pi-fw pi-sign-in',
                            to: '/template-resources/auth/login'
                        },

                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/template-resources/auth/error'
                        },

                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/template-resources/auth/access'
                        },

                        {
                            label: 'Register',
                            icon: 'pi pi-fw pi-user-plus',
                            to: '/template-resources/auth/register'
                        },
                        {
                            label: 'Forgot Password',
                            icon: 'pi pi-fw pi-question',
                            to: '/template-resources/auth/forgotpassword'
                        },
                        {
                            label: 'New Password',
                            icon: 'pi pi-fw pi-cog',
                            to: '/template-resources/auth/newpassword'
                        },
                        {
                            label: 'Verification',
                            icon: 'pi pi-fw pi-envelope',
                            to: '/template-resources/auth/verification'
                        },
                        {
                            label: 'Lock Screen',
                            icon: 'pi pi-fw pi-eye-slash',
                            to: '/template-resources/auth/lockscreen'
                        }
                    ]
                },
                {
                    label: 'Crud',
                    icon: 'pi pi-fw pi-pencil',
                    to: '/template-resources/pages/crud'
                },
                {
                    label: 'Timeline',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/template-resources/pages/timeline'
                },
                {
                    label: 'Invoice',
                    icon: 'pi pi-fw pi-dollar',
                    to: '/template-resources/pages/invoice'
                },

                {
                    label: 'Help',
                    icon: 'pi pi-fw pi-question-circle',
                    to: '/template-resources/pages/help'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/template-resources/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/template-resources/pages/empty'
                },
                {
                    label: 'Contact Us',
                    icon: 'pi pi-fw pi-phone',
                    to: '/template-resources/pages/contact'
                }
            ]
        },
        {
            label: 'E-Commerce',
            icon: 'pi pi-fw pi-wallet',
            items: [
                {
                    label: 'Product Overview',
                    icon: 'pi pi-fw pi-image',
                    to: '/template-resources/ecommerce/product-overview'
                },
                {
                    label: 'Product List',
                    icon: 'pi pi-fw pi-list',
                    to: '/template-resources/ecommerce/product-list'
                },
                {
                    label: 'New Product',
                    icon: 'pi pi-fw pi-plus',
                    to: '/template-resources/ecommerce/new-product'
                },
                {
                    label: 'Shopping Cart',
                    icon: 'pi pi-fw pi-shopping-cart',
                    to: '/template-resources/ecommerce/shopping-cart'
                },
                {
                    label: 'Checkout Form',
                    icon: 'pi pi-fw pi-check-square',
                    to: '/template-resources/ecommerce/checkout-form'
                },
                {
                    label: 'Order History',
                    icon: 'pi pi-fw pi-history',
                    to: '/template-resources/ecommerce/order-history'
                },
                {
                    label: 'Order Summary',
                    icon: 'pi pi-fw pi-file',
                    to: '/template-resources/ecommerce/order-summary'
                }
            ]
        },

        {
            label: 'User Management',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'List',
                    icon: 'pi pi-fw pi-list',
                    to: '/template-resources/profile/list'
                },
                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    to: '/template-resources/profile/create'
                }
            ]
        },
        {
            label: 'Hierarchy',
            icon: 'pi pi-fw pi-align-left',
            items: [
                {
                    label: 'Submenu 1',
                    icon: 'pi pi-fw pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 1.1.1',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Submenu 1.1.2',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Submenu 1.1.3',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 1.2.1',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    icon: 'pi pi-fw pi-align-left',
                    items: [
                        {
                            label: 'Submenu 2.1',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 2.1.1',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Submenu 2.1.2',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 2.2.1',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Start',
            icon: 'pi pi-fw pi-download',
            items: [
                {
                    label: 'Buy Now',
                    icon: 'pi pi-fw pi-shopping-cart',
                    url: 'https://www.primefaces.org/store'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-info-circle',
                    to: '/template-resources/documentation'
                }
            ]
        }
    ];

    const roots: MenuModel[] = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'SaaS',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Sales',
                    icon: 'pi pi-fw pi-image',
                    to: '/dashboard-sales'
                }
            ]
        }
    ];

    return <AppSubMenu model={isTemplateActive ? model : roots} />;
};

export default AppMenu;
