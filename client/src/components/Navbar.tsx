import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './Searchbar';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center border-b border-gray-200 pb-4'>
        {/* Left */}
        <Link href='/' className='flex items-center'>
         <Image 
         src='/logo.png'
         alt='E-store'
         width={35}
         height={35}
         className='w-6 h-6 md:w-9 md:h-9'
         />
         <p className='hidden md:block text-md font-medium tracking-wider'>Digital Store</p>
        </Link>

        {/* Right */}
        <div>
          <SearchBar />
        </div>
    </nav>
  )
}

export default Navbar