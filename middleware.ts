import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isTemplateActive = false;

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/template-resources')) {
        if (!isTemplateActive) {
            const url = req.nextUrl.clone();
            url.pathname = '/not-found';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/template-resources/:path*']
};
