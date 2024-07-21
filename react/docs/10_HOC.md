## HOC

高階コンポーネント（Higher-Order Component, HOC）は、Reactコンポーネントの再利用を促進するためのパターンの一つです。
HOCは、コンポーネントをラップする関数であり、新しいコンポーネントを返します。
この新しいコンポーネントは、ラップされたコンポーネントに対して追加のプロパティやロジックを提供します。

### 基本的なHOCの構造

HOCは、以下のような構造を持ちます。

```typescript
import React, { useState } from 'react';

// 追加されるプロパティの型定義
interface ClickCounterProps {
  clickCount: number;
  increment: () => void;
}

// HOCの定義
function withClickCounter<P extends object>(
  WrappedComponent: React.ComponentType<P & ClickCounterProps>
): React.FC<P> {
  return (props) => {
    const [clickCount, setClickCount] = useState(0);

    const increment = () => setClickCount(clickCount + 1);

    return (
      <WrappedComponent
        {...props as P}
        clickCount={clickCount}
        increment={increment}
      />
    );
  };
}

// ラップされるコンポーネント
interface DisplayComponentProps {
  name: string;
}

const DisplayComponent: React.FC<DisplayComponentProps & ClickCounterProps> = ({
  name,
  clickCount,
  increment,
}) => (
  <div>
    <h1>{name}</h1>
    <p>Click count: {clickCount}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

// HOCを適用
const EnhancedComponent = withClickCounter(DisplayComponent);

// 使用例
const App: React.FC = () => (
  <div>
    <EnhancedComponent name="Click Me" />
  </div>
);

export default App;

```

## 命名

コンポーネントを返すコンポーネントですが、基本的に小文字始まりで作られることが多くしたがって、ファイル名も小文字始まりのものが多いです。
特に接頭辞として`with`が利用されます。


## ユースケース

レイアウトコンポーネントを利用してもHOCと同じふるまいをさせることができますが、決定的な違いはコンポーネントのレンダリング前に処理を挟むことができるのでロジックを使いまわしたいときなどに利用されます。
特に認証機能などが良い例です。
認証情報を持っていればそのままページを表示、持っていなければリダイレクトをするという処理をページコンポーネントが表示される前などに挟むなど。