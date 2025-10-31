import React, { useState, useEffect, useRef } from 'react';

const Modal = ({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        const trapFocus = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement?.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement?.focus();
                    e.preventDefault();
                }
            }
        };

        modalRef.current?.addEventListener('keydown', trapFocus);
        firstElement?.focus();
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            modalRef.current?.removeEventListener('keydown', trapFocus);
        }
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm border border-cyan-500" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <h2 id="modal-title" className="text-xl font-bold mb-4">{title}</h2>
                {children}
            </div>
        </div>
    );
};


export const OperableVisual: React.FC = () => {
    const [showBadModal, setShowBadModal] = useState(false);
    const [showGoodModal, setShowGoodModal] = useState(false);

    return (
        <div className="w-full max-w-lg h-80 flex flex-col items-center justify-center p-4">
            <div className="w-full h-64 flex justify-around items-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <div className="text-center space-y-2">
                    <h3 className="font-bold text-red-400">Inaccessible</h3>
                    <div onClick={() => alert("This modal is not keyboard accessible!")} className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer">Open Bad Modal</div>
                    <p className="text-xs text-gray-500">Cannot be opened or used with a keyboard.</p>
                </div>
                 <div className="text-center space-y-2">
                    <h3 className="font-bold text-green-400">Accessible</h3>
                    <button onClick={() => setShowGoodModal(true)} className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-lg">Open Good Modal</button>
                    <p className="text-xs text-gray-500">Use Tab, Shift+Tab, Enter, and Esc.</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">Try to navigate the "Good Modal" using only your keyboard.</p>

            {showGoodModal && (
                <Modal title="Accessible Modal" onClose={() => setShowGoodModal(false)}>
                    <p className="text-gray-400 mb-4">You can navigate these elements with the Tab key and close this with Escape.</p>
                    <div className="flex justify-end gap-2">
                        <button className="px-3 py-1 bg-gray-600 rounded" onClick={() => setShowGoodModal(false)}>Cancel</button>
                        <button className="px-3 py-1 bg-cyan-600 rounded" onClick={() => setShowGoodModal(false)}>Confirm</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};