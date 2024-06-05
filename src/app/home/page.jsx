






// "use client";

// import { useEffect, useState } from 'react';
// import { db } from '../backend/firebase';
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import Navbar from '../navbar/page';
// import { FaTrash } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// export default function HomePage() {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       const notesSnapshot = await getDocs(collection(db, 'notes'));
//       const notesList = notesSnapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id,
//         createdAt: doc.data().createdAt, 
//       }));
//       setNotes(notesList);
//     };
//     fetchNotes();
//   }, []);

//   const handleDeleteNote = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'notes', id));
//       setNotes(notes.filter(note => note.id !== id));
//       toast.success("Note deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting note:", error);
//       toast.error("Failed to delete note. Please try again later.");
//     }
//   };

//   return (
//     <div className="h-screen w-full flex flex-col bg-[#ffcc00]">
//       <Navbar />
//       <main className="flex-1 overflow-auto">
//         <ul className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
//           {notes.map(note => (
//             <li
//               key={note.id}
//               className="relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg shadow-sm group"
//             >
//               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
//                 <button
//                   onClick={() => handleDeleteNote(note.id)}
//                   className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//               <div className='p-6 shadow-xl'>
//                 <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{note.title}</h2>
//                 <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{note.content.substring(0, 100)}...</p>
//                 <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
//                   {note.createdAt ? new Date(note.createdAt).toLocaleString() : 'Unknown Date'} 
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from 'react';
import { db } from '../backend/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Navbar from '../navbar/page';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, 'notes'));
      const notesList = notesSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt,
      }));
      setNotes(notesList);
    };
    fetchNotes();
  }, []);

  const handleDeleteNote = async (id) => {
    try {
      await deleteDoc(doc(db, 'notes', id));
      setNotes(notes.filter(note => note.id !== id));
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note. Please try again later.");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#ffcc00]">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <ul className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map(note => (
            <li
              key={note.id}
              className="relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg shadow-sm group"
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <FaTrash />
                </button>
              </div>
              <div className='p-6 shadow-xl'>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{note.title}</h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{note.content.substring(0, 100)}...</p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  {note.createdAt ? new Date(note.createdAt).toLocaleString() : 'Unknown Date'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
