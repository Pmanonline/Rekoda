import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: "relative inline-block text-left", ref: dropdownRef, children: [_jsx("button", { className: "inline-flex justify-center w-full rounded-md shadow-sm  py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100  focus:text-green active:", onClick: toggleMenu, children: _jsx("svg", { viewBox: "0 0 21 21", fill: "currentColor", height: "3em", width: "3em", children: _jsxs("g", { fill: "currentColor", fillRule: "evenodd", children: [_jsx("path", { d: "M11.5 10.5 A1 1 0 0 1 10.5 11.5 A1 1 0 0 1 9.5 10.5 A1 1 0 0 1 11.5 10.5 z" }), _jsx("path", { d: "M11.5 5.5 A1 1 0 0 1 10.5 6.5 A1 1 0 0 1 9.5 5.5 A1 1 0 0 1 11.5 5.5 z" }), _jsx("path", { d: "M11.5 15.5 A1 1 0 0 1 10.5 16.5 A1 1 0 0 1 9.5 15.5 A1 1 0 0 1 11.5 15.5 z" })] }) }) }), isOpen && (_jsx("div", { className: "origin-left absolute right-[4px] top- mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5", children: _jsxs("div", { className: "py-1", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: [_jsx("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "VIEW RECEIPT" }), _jsx("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "DOWNLOAD RECEIPT" })] }) }))] }));
};
export default DropdownMenu;
