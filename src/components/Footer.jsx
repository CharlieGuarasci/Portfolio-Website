import React from "react";

function Footer() { 
    return (
        <div className="py-5 text-center">
            {/* Social Icons*/}
            <p className="text-am mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Charlie 
                Guarasci. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;