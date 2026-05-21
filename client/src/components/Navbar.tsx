import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './Searchbar';
import { Bell, Home, ShoppingCart } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';

const Navbar = () => {

  return (
    <nav className='w-full flex justify-between items-center border-b border-gray-200 pb-4 pt-3'>
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
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href='/'>
          <Home className='w-4 h-4 text-gray-600' />
        </Link>
        <Bell className='w-4 h-4 text-gray-600' />
        <ShoppingCartIcon />
        <Link href='/'>Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;