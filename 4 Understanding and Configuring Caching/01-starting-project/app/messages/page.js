// import { unstable_noStore } from 'next/cache';

import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// must be revalidate, so NextJs can understand
// export const revalidate = 5;

// same that cache: 'no-store' in all fetchs in this page
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {tags: ['msg']},
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
