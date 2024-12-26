'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useEffect} from "react";

export function Providers({children}) {
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [])

    return (<NextUIProvider>
        <NextThemesProvider attribute={'class'} defaultTheme={'dark'}>
            {children}
        </NextThemesProvider>
    </NextUIProvider>)
}