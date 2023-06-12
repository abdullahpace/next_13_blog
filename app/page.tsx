import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../data/post';
// import { utilStyles } from './utils.module.css';
type Post = {
  id: string;
  title: string;
  date: string;
};
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className=' font-mono text-sm lg:flex'>Helo World</div>
      <ul>
        {posts.map((post: Post) => (
          <li>
            <Link href={'/posts'}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link className='block text-center' href={'/posts'}>
          Posts
        </Link>
        <Link className='block text-center' href={'/account'}>
          Account
        </Link>
      </div>
    </main>
  );
}
