import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    const cookieStore = cookies()
    const token = cookieStore.get('tourism-token')

    if(!token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}