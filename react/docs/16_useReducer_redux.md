# useReducer＆Redux

## useReducer

useStateを利用した例
```tsx
import React, { useState } from 'react';

function CounterApp() {
  // countという状態変数と、その更新関数setCountをuseStateで初期値0で定義
  const [count, setCount] = useState(0);

  // カウントをインクリメントする関数
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // カウントをデクリメントする関数
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>カウンター: {count}</h1>
      <button onClick={handleIncrement}>＋</button>
      <button onClick={handleDecrement}>－</button>
    </div>
  );
}

export default CounterApp;
```


useReducerを利用した例
```tsx
import React, { useReducer } from 'react';

// 初期状態の定義
const initialState = { count: 0 };

// reducer関数の定義: action.typeに応じて状態を更新
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`不明なaction: ${action.type}`);
  }
}

function CounterApp() {
  // useReducerで状態とdispatch関数を取得
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>カウンター: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>＋</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>－</button>
    </div>
  );
}

export default CounterApp;
```

reducerの概念
状態管理において「現在の状態」と「実行したいアクション」を受け取り、次の状態を返す純粋関数のことです。
純粋関数であるため、同じ入力に対して必ず同じ出力を返し、副作用を持たないという特徴があります。
同じ入力に対して必ず同じ出力を返し、外部の状態に影響を与えないことが求められます。これにより、予測可能な状態管理とデバッグの容易さが実現されます。

※副作用（side effect）とは、関数や処理が、その主な目的である値の返却以外に、外部の状態を変更したり、外部とやり取りを行ったりすることを指します。

第一引数に渡す関数で、stateの更新処理を一元管理することが可能
状態の更新ロジックが複雑になったり、複数のアクションで状態管理する場合は、useReducerの方が状態遷移を明確に定義でき、コードの可読性・保守性が向上します。

上記のuseReducerの概念は通称FLUXと呼ばれる概念です。


## Redux
FLUXの概念に沿って実装したReactのライブラリがいわゆるReduxです。
ミドルウェア、ロギング、非同期処理、副作用管理などもできます。
アプリ全体のグローバルな状態管理を目的としており、複数のコンポーネント間で状態を共有・連携させる場合に利用されます。

- [公式サイト](https://redux.js.org/)


Reduxの場合はStateというよりもStoreと呼ばれ、グローバルに値が管理できます。
そのためContextと同様にコンポーネントを跨いで状態管理ができます。
Propsのバケツリレーが起こることがないです。
```tsx
import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// --- Reducerの定義 ---
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// --- Reduxストアの作成 ---
const store = createStore(counterReducer);

// --- Reduxを利用したカウンターコンポーネント ---
function ReduxCounter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>＋</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>－</button>
    </div>
  );
}

// --- ProviderでReduxストアをアプリに供給 ---
function App() {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}

export default App;
```


## useReducerとContextを利用して擬似的なReduxを実装も可能

```tsx
import React, { createContext, useContext, useReducer } from 'react';

// --- 初期状態とreducerの定義 ---
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`不明なaction: ${action.type}`);
  }
}

// --- コンテキストの作成 ---
const StoreContext = createContext();

// --- Providerコンポーネント ---
// アプリ全体に状態とdispatch関数を提供する
function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// --- カスタムフック ---
// コンテキストから状態とdispatch関数を取得するためのフック
function useStore() {
  return useContext(StoreContext);
}

// --- グローバル状態を利用するコンポーネント ---
function Counter() {
  const { state, dispatch } = useStore();

  return (
    <div>
      <h1>カウント: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>＋</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>－</button>
    </div>
  );
}

// --- アプリ全体のコンポーネント ---
function App() {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
}

export default App;
```

Reduxと、Reactの組み込み機能（useReducer＋useContext）を組み合わせた「擬似的なRedux」との比較

### Redux

大規模アプリケーションや複雑な非同期処理、洗練されたデバッグツールが必要な場合に適しています。学習や初期設定のコストは高いものの、長期的に見ると保守性が向上します。

- **エコシステムの充実**  
  - Redux自体はミドルウェア（redux-thunk、redux-sagaなど）やRedux DevToolsなど、開発支援ツールが豊富で、大規模なアプリケーションに適しています。
- **グローバルな状態管理**  
  - アプリ全体の状態を一元管理し、複数コンポーネント間で状態を効率的に共有できます。
- **設計思想の明確さ**  
  - ストア、アクション、reducerという明確な構造があるため、コードの分割やテストがしやすいです。
- **学習コストと設定**  
  - Redux独自の概念やパターン、設定が必要なため、小規模なプロジェクトではオーバーヘッドになる場合があります。

### 擬似的なRedux（useReducer + useContext）

シンプルなグローバル状態管理が必要な小～中規模のプロジェクトに向いています。外部ライブラリの依存を減らし、簡潔に実装できる反面、パフォーマンスや機能拡張の面で制約があります。

- **シンプルさと軽量性**  
  - Reactに組み込まれている機能のみで実装するため、外部ライブラリを導入せずに済みます。特に小規模なプロジェクトや単純な状態管理には十分です。
- **柔軟性**  
  - 必要最低限の機能に絞って実装できるので、学習コストも低く、コードがシンプルになります。
- **パフォーマンスの課題**  
  - useContextは、値が更新されるとコンテキストを利用しているすべてのコンポーネントが再レンダリングされるため、大規模な状態管理には向かない場合があります。また、Redux DevToolsのような高度なデバッグ機能は標準では利用できません。
- **構造の自由度**  
  - Reduxほど明確な設計パターンが強制されないため、プロジェクトの規模や複雑性に応じて柔軟に設計可能です。ただし、規模が大きくなると設計が散漫になりがちなリスクもあります。




## 講義ないで取り扱ったサンプルコード
```tsx
import React, { useReducer } from 'react';

type State = {
    count: number,
    name: string,
}

// 初期状態の定義
const initialState: State = { 
    count: 0,
    name: '',
};

type Action = {
  type: 'INCREMENT' | 'DECREMENT' | 'CLEAR',
  num?: number;
}

// reducer関数の定義: action.typeに応じて状態を更新
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { 
        ...state,
        count: state.count + (action?.num ? action.num : 1),
    };
    case 'DECREMENT':
      return { 
        ...state,
        count: state.count - (action?.num ? action.num : 1),
        name: 'decrementされました'
    };
    case 'CLEAR':

        return { 
            ...state,
            count: 0,
            name: 'clearされました'
        };
    default:
      throw new Error(`不明なaction: ${action.type}`);
  }
}

function CounterApp() {
  // useReducerで状態とdispatch関数を取得
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>カウンター: {state.count}</h1>
      <h1>状態: {state.name}</h1>
      <button onClick={() => dispatch({ type: 'clear' })}>clear</button>
      <button onClick={() => dispatch({ type: 'increment' })}>＋</button>
      <button onClick={() => dispatch({ type: 'increment', num: 10 })}>＋10</button>
      <button onClick={() => dispatch({ type: 'decrement', num: 10  })}>－</button>
    </div>
  );
}

export default CounterApp;
```