import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
            <div className='flex flex-col gap-4 items-center md:items-start '>
                <Link href='/' className='flex items-center'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={36}
                        height={36}
                    />
                    <p className='hidden md:block text-md font-medium tracking-wider text-white'>Digital Store</p>
                </Link>
                    <p className="text-sm text-gray-400">© 2025 Latest Trend.</p>
                    <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>

            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href='/'>HomePage</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Terms of services</Link>
                <Link href='/'>Private Policy</Link>
            </div>

            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href='/'>All Products</Link>
                <Link href='/'>New Arrival</Link>
                <Link href='/'>Best Seller</Link>
                <Link href='/'>Sale</Link>
            </div>

            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Private Policy</Link>
            </div>
        </div>
    );
};

export default Footer;