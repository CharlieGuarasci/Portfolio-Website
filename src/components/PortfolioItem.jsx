import React from "react";
import { Link } from "react-router-dom";  // Import Link for internal navigation

function PortfolioItem({ title, imgUrl, stack, link }) { 
    // Check if the link is internal (starts with '/')
    const isInternalLink = link && link.startsWith('/');

    // Reusable content for both link types
    const content = (
        <>
            <img 
                src={imgUrl}
                alt={title}
                className="w-full h-36 md:h-48 object-cover shadow cursor-pointer hover:opacity-60 transition-opacity"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-light">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-xs dark:text-white">
                    {stack.map((item, index) => (
                        <span 
                            key={index} 
                            className="inline-block px-2 py-1 border border-stone-400 dark:border-white rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </>
    );

    // Conditionally render Link (for internal) or <a> (for external)
    return isInternalLink ? (
        <Link 
            to={link} 
            className="border border-gray-400
             dark:border-white rounded-md overflow-hidden"
        >
            {content}
        </Link>
    ) : (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-gray-400 dark:border-white rounded-md overflow-hidden"
        >
            {content}
        </a>
    );
}

export default PortfolioItem;
