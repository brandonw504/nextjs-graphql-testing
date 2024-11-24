'use server';

const query = `
  query UserQuery($ids: [ID]!) {
    users(ids: $ids) {
      name
    }
  }
`;

const getBaseUrl = () => {
  // In the browser, use relative URLs
  if (typeof window !== 'undefined') return '';

  // Deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Custom Domain
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Local
  return 'http://localhost:3000';
};

export default async function UserAction() {
  const res = await fetch(`${getBaseUrl()}/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        ids: [
          // '7bae85c0-7862-4d8e-b991-41c73d51936d',
          // '9e327de1-38f1-4324-9427-48ec9a670ca3',
          // '47ca283a-2178-4760-814f-7f847f580af3',
          '7e2cf847-6861-46cb-95b9-27b0e327aa26',
        ],
      },
    }),
  });

  const user = await res.json();
  return JSON.stringify(user);
}
