import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-form';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
