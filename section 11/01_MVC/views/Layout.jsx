import React from "react";
import { Link } from "react-router-dom";







export default function Layout({children,title}) {
    return (

   
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <Link rel="stylesheet" href="/styles.css" />

            <script src="script.js"defer></script>
        </head>
        <body>


            {children}



            
        </body>
        </html>







    ) 
}