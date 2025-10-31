import React, { useState, useEffect, useRef } from 'react';

const initialItems = [
  { id: 1, text: 'Design Mockups' },
  { id: 2, text: 'User Research Report' },
  { id: 3, text: 'Component Library' },
];

export const EasyReversalVisual: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [archivedItem, setArchivedItem] = useState<{ item: any, index: number } | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleArchive = (id: number) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return;
    
    const itemToArchive = items[index];
    setArchivedItem({ item: itemToArchive, index });
    setItems(items.filter(item => item.id !== id));
  };

  const handleUndo = () => {
    if (archivedItem) {
      const newItems = [...items];
      newItems.splice(archivedItem.index, 0, archivedItem.item);
      setItems(newItems);
      setArchivedItem(null);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };
  
  useEffect(() => {
      if(archivedItem) {
          timeoutRef.current = window.setTimeout(() => {
              setArchivedItem(null);
          }, 5000)
          
          return () => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
          }
      }
  }, [archivedItem])

  return (
    <div className="w-full max-w-md h-80 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full h-64 flex flex-col p-4 border-2 border-dashed border-gray-700 rounded-lg">
        <h3 className="text-lg font-bold text-gray-300 mb-2">Project Files</h3>
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 bg-gray-800 rounded">
              <span>{item.text}</span>
              <button onClick={() => handleArchive(item.id)} className="text-gray-500 hover:text-red-500" aria-label={`Archive ${item.text}`}>
                Archive
              </button>
            </div>
          ))}
           {items.length === 0 && <p className="text-gray-500 text-center p-4">All files archived!</p>}
        </div>
      </div>
       <div className={`absolute bottom-12 transition-all duration-300 ease-in-out ${archivedItem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
         {archivedItem && (
            <div className="bg-blue-600 text-white p-3 rounded-lg flex items-center justify-between shadow-lg">
                <span>"{archivedItem.item.text}" archived.</span>
                <button onClick={handleUndo} className="ml-4 font-bold underline">Undo</button>
            </div>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-500">Archive an item to see the undo option.</p>
    </div>
  );
};