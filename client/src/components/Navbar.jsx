import React, {useCallback, useState} from "react";
import images from '../constants/images.jsx';
import ProfileDropdown from './ProfileDropdown';

/**
 * Navbar Component
 * Main navigation bar with theme toggle, notifications, and profile dropdown
 *
 * @returns {React.ReactElement} Navbar component
 */
const Navbar = () => {
    // State management
    const [theme, setTheme] = useState("dark");
    const [activeTab, setActiveTab] = useState("Home");
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [menuVisiblity, setMenuVisiblity] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(true);

    // Navigation menu items
    const navItems = ["Home", "About", "Memberships", "Contact"];


    // Toggles the application theme between light and dark

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, []);


    // Toggles the profile dropdown
    const toggleProfileDropdown = useCallback((event) => {
        event.stopPropagation();
        setIsProfileDropdownOpen(prev => !prev);
    }, []);

    /**
     * Handles user logout process
     * TODO: Implement actual logout logic (e.g., clear tokens, redirect)
     */
    const handleLogout = useCallback(() => {
        // Placeholder logout logic
        console.log("Logging out user");
        // Potential actions:
        // - Clear authentication tokens
        // - Reset user state
        // - Redirect to login page
    }, []);


    //Closes the profile dropdown when clicking outside

    const handleOutsideClick = useCallback(() => {
        if (isProfileDropdownOpen) {
            setIsProfileDropdownOpen(false);
        }
    }, [isProfileDropdownOpen]);

    // Add event listener to close dropdown when clicking outside
    React.useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);


    // on mobile view opens and closes menu bar

    const handleMenu = () => {
        setMenuVisiblity(prev => !prev)
    }

    return (<div className="flex flex-col justify-center items-center bg-transparent p-4 w-screen">
            <nav
                className="flex h-20 bg-[#212121] w-full rounded-2xl border border-gray-700 shadow-lg px-6 justify-between items-center  ">
                {/* Logo */}
                <img
                    src={images.logo}
                    alt="logo"
                    className="w-14 h-14 object-contain md:w-24 md:h-24 flex"
                />

                {/* Navigation Menu Items */}
                <ul className="hidden  md:gap-6 lg:gap-16 text-gray-300 font-bold text-xl font-poppins md:flex md:text-lg ">
                    {navItems.map((item) => (<li
                            key={item}
                            className={`
                relative group cursor-pointer transition-all duration-300 ease-in-out
                ${activeTab === item ? 'text-amber-400' : 'hover:text-amber-400'}
              `}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                            {/* Active/Hover Underline */}
                            <span
                                className={`
                  absolute bottom-[-10px] left-0 h-1 bg-amber-400 transition-all duration-300 ease-in-out
                  ${activeTab === item ? 'w-full' : 'w-0 group-hover:w-full'}
                `}
                            />
                        </li>))}
                </ul>

                {/* Right Side Icons Container */}
                <div className='hidden md:flex items-center gap-6 relative'>
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="transition-transform duration-300 hover:scale-110 focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? (
                            <img src={images.moon} alt="Dark mode" className=" md:w-8 md:h-8"/>) : (
                            <img src={images.sun} alt="Light mode" className=" md:w-8 md:h-8"/>)}
                    </button>

                    {/* Notification Icon */}
                    <img
                        src={images.notification}
                        alt="Notifications"
                        className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300 md:w-8 md:h-8"
                    />

                    {/* Profile Section with Dropdown */}



                    <div className='relative'>
                        <img
                            src={images.profile}
                            alt="Profile"
                            onClick={toggleProfileDropdown}
                            className=" rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 md:w-8 md:h-8"
                        />

                        {/* Conditional Rendering of Profile Dropdown */}
                        {isProfileDropdownOpen && (<ProfileDropdown
                                onClose={() => setIsProfileDropdownOpen(false)}
                                onLogout={handleLogout}
                            />)}
                    </div>
                </div>

                <img src={images.menu} alt="Menu" className="w-6 h-6 md:hidden cursor-pointer" onClick={handleMenu}/>
            </nav>


        {/* mobile view of navbar*/}
        {menuVisiblity && (
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setMenuVisiblity(false);
                    }
                }}
            >
                <div
                    className="absolute right-0 top-0 h-screen w-72 bg-white dark:bg-gray-900
                      shadow-2xl animate-in slide-in-from-right duration-300"
                >
                    {/* Close Button - Floating */}
                    <button
                        onClick={handleMenu}
                        className="absolute -left-12 top-4 p-2 rounded-full bg-white/10 backdrop-blur-sm
                         hover:bg-white/20 transition-all duration-200"
                    >
                        <img
                            src={images.close}
                            alt="Close"
                            className="w-6 h-6 cursor-pointer"
                        />
                    </button>

                    {/* Content Container */}
                    <div className="h-full flex flex-col">
                        {/* Logo Section */}
                        <div className="p-6 flex justify-center border-b border-gray-200 dark:border-gray-800">
                            <img
                                src={images.logo}
                                alt="Logo"
                                className="h-8 object-contain"
                            />
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 overflow-y-auto py-8">
                            <ul className="space-y-2 px-4">
                                {navItems.map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => {
                                                setActiveTab(item);
                                                setMenuVisiblity(false);
                                            }}
                                            className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200
                                              ${activeTab === item
                                                ? 'bg-amber-400/10 text-amber-400 font-medium'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* User Section */}
                        {isLoggedin && (
                            <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
                                <div className="px-4 flex items-center gap-3">
                                    <img
                                        src={images.profile}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-amber-400"
                                    />
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">John Doe</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">johndoe@gmail.com</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <button
                                        onClick={() => {
                                            // Handle profile
                                            setMenuVisiblity(false);
                                        }}
                                        className="w-full px-4 py-2.5 rounded-lg text-left text-gray-600 dark:text-gray-300
                                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        View Profile
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setMenuVisiblity(false);
                                        }}
                                        className="w-full px-4 py-2.5 rounded-lg text-left text-red-600
                                         hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors duration-200"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Settings Bar */}
                        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between px-4">
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors duration-200"
                                >
                                    {theme === "light" ? (
                                        <img src={images.moon} alt="Dark mode" className="w-5 h-5" />
                                    ) : (
                                        <img src={images.sun} alt="Light mode" className="w-5 h-5" />
                                    )}
                                </button>
                                <button
                                    className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors duration-200"
                                >
                                    <img
                                        src={images.notification}
                                        alt="Notifications"
                                        className="w-5 h-5"
                                    />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>);
};

export default Navbar;