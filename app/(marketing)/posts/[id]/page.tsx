import { posts } from '../../../../data/post';
import Link from 'next/link';
async function generateStaticParams() {
  const ids: string[] = ['1', '2'];
  ids.map((id: string) => ({ id: id }));
}
async function getPost(id: string) {
  const post = posts.find((post) => post.id === id);
  return post;
}
export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className=' font-mono text-sm lg:flex'>{post!.title}</div>
      <div className=' font-mono text-sm lg:flex'>{post!.date}</div>
      <div>
        <Link href={'/'}>Back to Home</Link>
      </div>
    </main>
  );
}
