

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-800 p-4 text-white text-center">
                <p>© 2024 Karl Gilmartin. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                <a href="/" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
                <a href="/" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </a>
                </div>
                </div>
            {/* Socials, github and linkdein */}
            

            

        </div>
    );
    }

export default Footer;