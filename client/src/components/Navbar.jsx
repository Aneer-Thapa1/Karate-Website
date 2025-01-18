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


    console.log(isProfileDropdownOpen)

    // Navigation menu items
    const navItems = ["Home", "About", "Memberships", "Contact"];

    /**
     * Toggles the application theme between light and dark
     */
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, []);

    /**
     * Toggles the profile dropdown visibility
     */
    const toggleProfileDropdown = useCallback((event) => {
        event.stopPropagation();
        console.log("clicked")

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

    /**
     * Closes the profile dropdown when clicking outside
     */
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

    return (<div className="flex flex-col justify-center items-center bg-transparent p-4 w-screen ">
        <nav
            className="flex h-20 bg-[#212121] w-full rounded-2xl border border-gray-700 shadow-lg px-4 justify-evenly items-center relative">
            {/* Logo */}
            <img
                src={images.logo}
                alt="logo"
                className="w-20 h-20 object-contain"
            />

            {/* Navigation Menu Items */}
            <ul className="flex items-center justify-center flex-grow gap-16 text-gray-300 font-bold text-xl font-poppins">
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
            <div className='flex items-center gap-4 relative'>
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="transition-transform duration-300 hover:scale-110 focus:outline-none"
                    aria-label="Toggle Theme"
                >
                    {theme === "light" ? (<img src={images.moon} alt="Dark mode" className="w-8 h-8"/>) : (
                        <img src={images.sun} alt="Light mode" className="w-8 h-8"/>)}
                </button>

                {/* Notification Icon */}
                <img
                    src={images.notification}
                    alt="Notifications"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
                />

                {/* Profile Section with Dropdown */}
                <div className='relative'>
                    <img
                        src={images.profile}
                        alt="Profile"
                        onClick={toggleProfileDropdown}
                        className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
                    />

                    {/* Conditional Rendering of Profile Dropdown */}
                    {isProfileDropdownOpen && (<ProfileDropdown
                        onClose={() => setIsProfileDropdownOpen(false)}
                        onLogout={handleLogout}
                    />)}
                </div>
            </div>
        </nav>
    </div>);
};

export default Navbar;