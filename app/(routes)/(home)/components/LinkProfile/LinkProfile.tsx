"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function LinkProfile() {
    const [isCopiedLink, setIsCopiedLink] = useState(false);

    const copylink = () => {
        const url = `${window.location.origin}/@edtmdev`
        navigator.clipboard.writeText(url)
        setIsCopiedLink(true)
    }

    return (
        <div className="bg-indigo-100 rounded-2xl">
            <div className="flex flex-col justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
                <span className="text-sm">                    
                    <span>🔥 Your EduTreeClone is live: </span> {window.location.origin}/@edtmdev
                    {/*{window.location.origin} es una expresión en JavaScript que se utiliza para obtener el origen de la URL actual de la ventana del navegador. El origen incluye el esquema (http o https), el nombre del host (dominio) y el número de puerto (si está presente).
                    Por ejemplo, si la URL actual es https://www.ejemplo.com:3000/pagina, window.location.origin devolverá https://www.ejemplo.com:3000.
                    En el contexto de React y TypeScript, {window.location.origin} se puede usar dentro de JSX para renderizar dinámicamente el origen de la URL en la interfaz de usuario. */}
                </span>

                <Button
                variant="outline"
                className="px-4 font-semibold text-xs md:text-[13px]"
                onClick={copylink}
                >
                    {isCopiedLink ? "Copied!" : "Copy your URL"}
                </Button>
            </div>
        </div>
    )
}