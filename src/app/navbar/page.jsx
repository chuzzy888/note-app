
// "use client"; 

// import { MenuIcon, PlusIcon } from 'lucide-react';
// import Link from 'next/link';

// function Navbar() {
//   return (
//     <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 shadow-xl sticky top-0 z-50 bg-white ">
//       <div className="flex items-center space-x-4">
//         <MenuIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
//         <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Notes</h1>
//       </div>
//       <Link href='/new'>
//         <PlusIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
//       </Link>
//     </header>
//   );
// }

// export default Navbar;






"use client";

import { MenuIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 shadow-xl sticky top-0 z-50 bg-white">
      <div className="flex items-center space-x-4">
        <MenuIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Notes</h1>
      </div>
      <Link href='/new'>
        <PlusIcon className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
      </Link>
    </header>
  );
}

export default Navbar;
