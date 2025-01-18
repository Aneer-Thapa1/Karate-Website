import images from '../constants/images.jsx';


/**
 * ProfileDropdown Component
 * Renders a dropdown menu for user profile information and actions
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to close the dropdown
 * @param {Function} props.onLogout - Function to handle user logout
 */
const ProfileDropdown = ({onClose, onLogout}) => {
    return (<div
        className="absolute top-full right-0 mt-2 w-64 bg-[#2a2a2a] border border-gray-700 rounded-lg shadow-lg z-50"
        // Close dropdown when clicking outside
        onClick={(e) => e.stopPropagation()}
    >
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
                <img
                    src={images.profile}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <p className="text-white font-semibold">John Doe</p>
                    <p className="text-gray-400 text-sm">johndoe@example.com</p>
                </div>
            </div>
        </div>

        {/* Dropdown Actions */}
        <ul className="py-1">
            <li
                onClick={onLogout}
                className="px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer transition-colors duration-300"
            >
                Logout
            </li>
        </ul>
    </div>);
};

export default ProfileDropdown;