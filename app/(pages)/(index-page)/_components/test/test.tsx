'use client';
// import { getClient } from '@lib/ApolloClient';
// import { gql } from '@apollo/client';

import UserAction from '@actions/someAction';
// import { useState } from 'react';

// const query = gql`
//   query GetPlaylists {
//     playlist {

//     }
//   }
// `;

// const query = gql`
//   query UserQuery($ids: [ID]!) {
//     users(ids: $ids) {
//       name
//     }
//   }
// `;

export default function Page() {
  // const { data } = await getClient().query({
  //   query,
  //   variables: {
  //     ids: [
  //       // '7bae85c0-7862-4d8e-b991-41c73d51936d',
  //       // '9e327de1-38f1-4324-9427-48ec9a670ca3',
  //       // '47ca283a-2178-4760-814f-7f847f580af3',
  //       '7e2cf847-6861-46cb-95b9-27b0e327aa26',
  //     ],
  //   },
  // });

  // const [user, setUser] = useState('nothing');

  return (
    <div>
      <h1>Playlists</h1>
      <form
        action={async () => {
          await UserAction();
        }}
      >
        <button type="submit">Sign in</button>
      </form>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
}
