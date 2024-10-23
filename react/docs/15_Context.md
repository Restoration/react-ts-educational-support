## React Context

React の`Provider`と`Consumer`は、React の**Context API**を利用してコンポーネントツリー全体にデータを共有するための仕組みです。これにより、データを「prop drilling」（親から子、孫へと順次プロップスを渡すこと）なしに深い階層のコンポーネントに渡すことができます。

### Context の作成

まず、`createContext`を使って Context を作成します。`createContext`は 2 つのプロパティを持つオブジェクトを返し、その中に`Provider`と`Consumer`が含まれています。

```typescript
const MyContext = React.createContext(defaultValue);
```

### Provider

`Provider`は Context のデータの「提供者」です。`Provider`を使用して、データをコンポーネントツリーの下にあるすべてのコンポーネントに渡します。`Provider`は`value`プロパティを受け取り、その値が下位のコンポーネントでアクセスできるようになります。

```typescript
<MyContext.Provider value={someValue}>
  <SomeComponent />
</MyContext.Provider>
```

この`value`に設定した値（`someValue`）が、ツリーの深いコンポーネントに渡されます。

### Consumer

`Consumer`は、ツリー内の下位コンポーネントで Context にアクセスするために使用されます。`Consumer`は関数を子として持ち、その関数が Context の値を引数として受け取ります。

昨今では useContext の Hooks が使用されることがほとんどで利用する機会はあまりないですが。  
Provider と Consumer はセットで覚えておいてください。

```typescript
<MyContext.Consumer>{(value) => <div>{value}</div>}</MyContext.Consumer>
```

上記方法で、`Provider`から渡された`value`が下位のコンポーネントで利用できます。

### useContext

React のバージョン 16.8 以降では、`useContext`フックを使って`Consumer`を簡単に扱うことができます。これにより、Consumer を使わずに Context にアクセスすることが可能です。

```typescript
const value = React.useContext(MyContext);
```

### サンプルコード

```typescript
import React, { createContext, useContext, ReactNode } from "react";

type MyContextType = string | undefined;

const MyContext = createContext<MyContextType>(undefined);

// Providerの型定義
type MyProviderProps = {
  children: ReactNode;
};

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const contextValue: MyContextType = "Hello from context!";
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

const MyComponent: React.FC = () => {
  const value = useContext(MyContext);

  if (!value) {
    return <div>No context value provided</div>;
  }

  return <div>{value}</div>;
};

const App: React.FC = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
```

`MyProvider`がコンテキストを提供し、`MyComponent`がその値を`useContext`フックで取得して表示しています。

### まとめ

- **Provider** はコンポーネントツリーにデータを提供します。
- **Consumer** はそのデータを受け取って使用します。
- **useContext** フックを使うと、より簡単に Context を利用できます。

これにより、深いコンポーネント階層でも柔軟に状態やデータを共有でき、prop drilling の問題を解決できます。
