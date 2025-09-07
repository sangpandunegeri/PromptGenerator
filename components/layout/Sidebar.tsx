
import React from 'react';
import { Page } from '../../types';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    page: Page;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, page, currentPage, setCurrentPage }) => (
    <button
        className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-200
            ${currentPage === page ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={() => setCurrentPage(page)}
    >
        {icon}
        <span className="hidden lg:inline">{label}</span>
    </button>
);


interface SidebarProps {
    navItems: Omit<NavItemProps, 'currentPage' | 'setCurrentPage'>[];
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, currentPage, setCurrentPage }) => {
    return (
        <nav className="bg-gray-800 p-4 lg:w-64 flex flex-col items-center lg:items-start shadow-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-none lg:rounded-tr-lg">
            <h1 className="text-3xl font-bold text-blue-400 mb-0 hidden lg:block">PromptGen</h1>
            <p className="text-sm text-gray-400 mb-6 hidden lg:block">By Sang Pandu Negeri</p>
            <div className="flex lg:flex-col flex-wrap justify-center gap-2 lg:gap-4 w-full">
                {navItems.map(item => (
                    <NavItem 
                        key={item.page}
                        {...item}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
