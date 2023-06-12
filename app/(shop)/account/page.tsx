'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Account() {
  const router = useRouter();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className=' font-mono text-sm lg:flex'>Account</div>
      <div>
        {' '}
        <Link href={'/'}>Back to Home</Link>
      </div>
      <div>
        <button onClick={() => router.push('/')}>Go to Home</button>
      </div>
    </main>
  );
}
