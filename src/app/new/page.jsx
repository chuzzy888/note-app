
// "use client";

// import { useState } from 'react';
// import { db } from '../backend/firebase';
// import { addDoc, collection } from 'firebase/firestore';
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';



// export default function AddNote() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const router = useRouter();

//   const handleAddNote = async (event) => {
//     event.preventDefault();
//     if (!title.trim() || !content.trim()) {
//       toast.error("Please fill in all fields.");
//       return;
//     }
//     const createdAt = new Date().toISOString();
//     try {
//       const docRef = await addDoc(collection(db, 'notes'), { title, content, createdAt });
//       toast.success("Note added successfully!");
//       router.push('/home');
//     } catch (error) {
//       console.error("Error adding note:", error);
//       toast.error("Failed to add note. Please try again later.");
//     }
//   };

//   return (
//     <div>


//       <div className="h-screen flex justify-center items-center bg-zinc-50">


//         <div className="w-full max-w-md mx-auto space-y-6 mt-8 ">

//           <div className="text-center">
//             <h2 className="text-2xl font-bold">Add a New Note</h2>
//             <p className="text-gray-500 dark:text-gray-400">Capture your thoughts and ideas.</p>
//           </div>
//           <form className="space-y-4 md:m-0 m-8" onSubmit={handleAddNote}>
//             <div className="space-y-1.5">
//               <Label htmlFor="title">Note Title</Label>
//               <Input id="title" type="text" placeholder="Enter a title for your note" value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div className="space-y-1.5">
//               <Label htmlFor="content">Note Content</Label>
//               <Textarea id="content" placeholder="Write your note here..." className="min-h-[120px]" value={content} onChange={(e) => setContent(e.target.value)} />
//             </div>
//             <Button type="submit" className="w-full">
//               Save Note
//             </Button>


//           </form>
//           <div className='flex justify-center '>
//             <Link href={'/home'}>

//               <Button className="  w-full rounded-3xl bg-red-700 hover:bg-red-500 px-10 ">


//                 Cancel

//               </Button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from 'react';
import { db } from '../backend/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleAddNote = async (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const createdAt = new Date().toISOString();
    try {
      await addDoc(collection(db, 'notes'), { title, content, createdAt });
      toast.success("Note added successfully!");
      router.push('/home');
    } catch (error) {
      console.error("Error adding note:", error);
      toast.error("Failed to add note. Please try again later.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-zinc-50">
      <div className="w-full max-w-md mx-auto space-y-6 mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Add a New Note</h2>
          <p className="text-gray-500 dark:text-gray-400">Capture your thoughts and ideas.</p>
        </div>
        <form className="space-y-4 md:m-0 m-8" onSubmit={handleAddNote}>
          <div className="space-y-1.5">
            <Label htmlFor="title">Note Title</Label>
            <Input id="title" type="text" placeholder="Enter a title for your note" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="content">Note Content</Label>
            <Textarea id="content" placeholder="Write your note here..." className="min-h-[120px]" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <Button type="submit" className="w-full">
            Save Note
          </Button>
        </form>
        <div className='flex justify-center '>
          <Link href='/home'>
            <Button className="w-full rounded-3xl bg-red-700 hover:bg-red-500 px-10">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
