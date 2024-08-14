## React Query

- [https://tanstack.com/query/v5](https://tanstack.com/query/v5)
- [https://tanstack.com/query/latest/docs/framework/react/examples/simple](https://tanstack.com/query/latest/docs/framework/react/examples/simple)


### CQRSパターン

CQRS はコマンド クエリ責務分離を表し、データ ストアの読み取りと更新の操作を分離するパターンです。  
この設計パターンはフロントエンド開発に限らずAPI開発などでも実装できるパターンです。  
React QueryはCQRSパターンに一部当てはまります。（厳密にCQRSを実装する場合はDDDの知識が必要になります。）
データストアの読み取り、GETリクエストを送るときはQueryを利用。  
対して、GET以外のPOSTやDELETE、UPDATEなどのメソッドは一律でMutationを利用します。  

以下参考サイト  
  
- [https://learn.microsoft.com/ja-jp/azure/architecture/patterns/cqrs](https://learn.microsoft.com/ja-jp/azure/architecture/patterns/cqrs)


### インストールから実装まで

React Queryは、Reactアプリケーションでサーバーデータを簡単に管理するためのライブラリです。  
以下はインストールからQueryとMutationを利用するためのコード。  

### npmを使用する場合
```bash
npm install @tanstack/react-query
```


インストールが完了したら、以下のようにReactアプリケーションにReact Queryの設定を追加します。  

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 他のコンポーネント */}
    </QueryClientProvider>
  );
}

export default App;
```

### Query
```tsx
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// ユーザーの型定義
interface User {
  id: number;
  name: string;
}

// QueryClientのインスタンスを作成
const queryClient = new QueryClient();

// ユーザーデータを取得する関数
async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function Users() {
  const { data, error, isLoading } = useQuery<User[], Error>(['users'], fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
```



### Mutation

```tsx
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query';

// ユーザーの型定義
interface User {
  id: number;
  name: string;
}

// 新しいユーザーの型定義
interface NewUser {
  name: string;
}

// QueryClientのインスタンスを作成
const queryClient = new QueryClient();

// ユーザーデータを取得する関数
async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// 新しいユーザーを作成する関数
async function createUser(newUser: NewUser): Promise<User> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
}

function Users() {
  const [name, setName] = useState<string>('');
  const { data, error, isLoading } = useQuery<User[], Error>(['users'], fetchUsers);

  // useMutationフックを使用して、新しいユーザーを作成
  const mutation = useMutation<User, Error, NewUser>(createUser, {
    onSuccess: () => {
      // ユーザーが正常に作成された後にキャッシュを無効化して再フェッチ
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleCreateUser = () => {
    if (name) {
      mutation.mutate({ name });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div>
        <h3>Create a new user</h3>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      {mutation.isLoading ? (
        <p>Creating user...</p>
      ) : (
        mutation.isError ? (
          <p>An error occurred: {mutation.error?.message}</p>
        ) : (
          mutation.isSuccess && <p>User created successfully!</p>
        )
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
```

### その他有用なHooks

[useQueries](https://tanstack.com/query/latest/docs/framework/react/reference/useQueries)  
複数のクエリを送るためのHooks

[useInfiniteQuery](https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery)  
スクロールするごとにページングするためのHooks