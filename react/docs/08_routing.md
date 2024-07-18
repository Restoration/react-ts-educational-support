Reactのルーティングは、シングルページアプリケーション（SPA）で異なるURLに対して異なるコンポーネントを表示するために使用されます。一般的には、[React Router](https://reactrouter.com/)というライブラリを使用します。

### 1. インストール
まず、React Routerをインストールします。

```bash
npm install react-router-dom
```

### 2. 基本的なセットアップ
次に、アプリケーションのエントリーポイントでReact Routerを設定します。  
通常は`index.tsx`または`App.tsx`に設定します。その理由としては、LinkやRouter系のHooksはBrowserRouterコンポーネントの配下でなければ実行されないためです。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### 3. コンポーネントの作成
各ルートに対応するコンポーネントを作成します。例えば、`Home.tsx`、`About.tsx`、`Contact.tsx`のようにファイルを作成し、以下のように内容を記述します。

```tsx
// Home.tsx
import React from 'react';

function Home() {
  return <h2>Home</h2>;
}

export default Home;
```

```tsx
// About.tsx
import React from 'react';

function About() {
  return <h2>About</h2>;
}

export default About;
```

```tsx
// Contact.tsx
import React from 'react';

function Contact() {
  return <h2>Contact</h2>;
}

export default Contact;
```

### 4. 詳細なルーティング
React Routerは動的なルーティングやネストされたルーティングもサポートしています。例えば、動的なパラメータを使用するには、次のようにします。

```jsx
<Route path="/user/:id" element={User} />
```

`User`コンポーネント内でパラメータを取得するには、`useParams`フックを使用します。

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

export default User;
```

### 5. useNavigate

`useNavigate` は、React Router（バージョン6以降）が提供するフックで、Reactアプリケーション内でプログラム的にルート間をナビゲートするために使用されます。

以下に `useNavigate` の使い方を説明します：


1. **React Routerのセットアップ**：アプリケーションが `BrowserRouter` コンポーネントでラップされていることを確認します。

   ```jsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </Router>
     );
   }
   ```

2. **`useNavigate`の使用**：コンポーネント内で `useNavigate` フックを使用して、異なるルートにナビゲートできます。

   ```jsx
   import { useNavigate } from 'react-router-dom';

   function Home() {
     const navigate = useNavigate();

     const goToAbout = () => {
       navigate('/about');
     };

     return (
       <div>
         <h1>Home</h1>
         <button onClick={goToAbout}>About</button>
       </div>
     );
   }

   function About() {
     return <h1>About</h1>;
   }

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </Router>
     );
   }

   export default App;
   ```

### キーポイント：

- **インポート**：`useNavigate` を `react-router-dom` からインポートします。
- **ナビゲート**：`useNavigate` から返される `navigate` 関数を呼び出して、目的のパスを指定します。
- **プログラム的ナビゲーション**：条件に基づいたナビゲーション、ユーザーのアクション、またはイベント後のナビゲーションに役立ちます。

### 使用例：

1. **フォーム送信後のリダイレクト**：
   ```jsx
   import { useNavigate } from 'react-router-dom';

   function FormComponent() {
     const navigate = useNavigate();

     const handleSubmit = (event) => {
       event.preventDefault();
       // フォーム送信のロジックを実行
       navigate('/success');
     };

     return (
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" />
         <button type="submit">送信</button>
       </form>
     );
   }
   ```

2. **条件付きナビゲーション**：
   ```jsx
   import { useNavigate } from 'react-router-dom';

   function Dashboard() {
     const navigate = useNavigate();

     useEffect(() => {
       const isAuthenticated = false; // 実際の認証チェックに置き換え
       if (!isAuthenticated) {
         navigate('/login');
       }
     }, [navigate]);

     return <h1>ダッシュボード</h1>;
   }
   ```

上記の場合はuseEffect内で実行した例です。
ある特定の条件が発生したときに遷移アクションを起こさせるものです。