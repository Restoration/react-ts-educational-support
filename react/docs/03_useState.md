
## useState

`useState`は、Reactの関数コンポーネントで状態管理を行うためのフックです。
状態（state）は、コンポーネントの動的なデータを保持し、ユーザーの操作やその他のイベントに応じて更新されます。`useState`を使用すると、クラスコンポーネントのように状態を管理することができます。

### 基本的な使い方

`useState`は、状態変数とその状態を更新するための関数を返します。基本的な構文は以下の通りです：

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  // countという名前の状態変数を定義し、その初期値を0に設定
  const [count, setCount] = useState(0);

  // 状態を更新する関数を定義
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

### 複数の状態変数

`useState`を複数回呼び出すことで、複数の状態変数を持つことができます：

```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName('Bob')}>Change Name</button>
    </div>
  );
};
```

### 初期値の設定

`useState`には初期値を設定できます。初期値は関数を使用して遅延的に設定することもできます：

```jsx
const [count, setCount] = useState(() => {
  // 初期値を計算するための関数
  const initialValue = computeExpensiveValue();
  return initialValue;
});
```

### 状態更新関数

`setState`関数は新しい状態値を受け取りますが、関数を渡して現在の状態に基づいて新しい状態を計算することもできます：

```jsx
setCount(prevCount => prevCount + 1);
```

### 例

以下は、ユーザー入力を受け取って状態を更新する簡単な例です：

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default MyComponent;
```

この例では、テキスト入力フィールドに文字を入力すると、その値が状態に保存され、画面にリアルタイムで表示されます。



