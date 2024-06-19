
## useEffect

`useEffect`はReactのフックで、関数コンポーネントにおいて副作用（サイドエフェクト）を処理するために使用されます。
クラスコンポーネントのライフサイクルメソッド（`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`）の代替として使用されます。


クラスコンポーネントのライフサイクル
componetDidMount
コンポーネントのマウント直後に実行
componentDidUpdate
コンポーネントが再レンダリングされる度に実行
comonentWillUnmount
コンポーネントがアンマウントされて破棄される直前に実行


### 基本的な使い方

`useEffect`の基本的な使い方は以下の通りです：

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // マウント時または更新時に実行される
    console.log('Effect runs');

    // クリーンアップ関数を返す
    return () => {
      // アンマウント時に実行される
      console.log('Cleanup');
    };
  }, []); // 空の依存配列により、マウント時にのみ実行される

  return (
    <div>
      My Component
    </div>
  );
};

export default MyComponent;
```

### 依存配列

`useEffect`には依存配列（dependency array）を渡すことができます。依存配列に指定された値が変更されたときのみ、`useEffect`内の関数が再実行されます。

#### 依存配列がない場合
依存配列を指定しない場合、コンポーネントの再レンダリングごとに`useEffect`が実行されます。

```jsx
useEffect(() => {
  // マウント時および更新時に実行される
});
```

#### 空の依存配列
空の依存配列を渡すと、`useEffect`はコンポーネントのマウント時にのみ実行されます。

```jsx
useEffect(() => {
  // マウント時にのみ実行される

  return () => {
    // アンマウント時に実行される
  };
}, []);
```

#### 特定の依存配列
特定の依存配列を渡すと、指定した依存関係が変更されたときにのみ`useEffect`が再実行されます。

```jsx
useEffect(() => {
  // countが変更されたときに実行される
}, [count]);
```

### 複数の`useEffect`

複数の`useEffect`を同じコンポーネント内に持つことができます。それぞれが独立して動作し、異なる副作用を管理できます。

```jsx
useEffect(() => {
  // エフェクト1
}, [dep1]);

useEffect(() => {
  // エフェクト2
}, [dep2]);
```

### 例

以下は、`useEffect`を使用してデータをフェッチし、クリーンアップを行う例です：

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // データフェッチ
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // クリーンアップ関数
    return () => {
      // ここでクリーンアップを行う
    };
  }, []); // マウント時にのみ実行される

  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  );
};

export default MyComponent;
```

このコードでは、コンポーネントがマウントされたときにデータをフェッチし、アンマウント時にクリーンアップを行います。