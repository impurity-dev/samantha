import { MouseEvent, ReactNode } from 'react';

export function Button({ children, onClick }: { children: ReactNode; onClick: (event?: MouseEvent<HTMLButtonElement>) => void }) {
    return (
        <button
            className="bg-indigo-500 hover:bg-indigo-600 py-2 px-3 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
