## useMemo

`useMemo`は、計算コストが高い処理をメモ化（キャッシュ）するために使用するReactのフックです。依存関係が変更されない限り、メモ化された結果を再利用します。

### 高コストの計算例

たとえば、ある数列の合計値を計算する処理があるとします。この処理が非常にコストが高い場合、`useMemo`を使用してパフォーマンスを向上させることができます。

#### 例：素数の合計を計算する

```jsx
import React, { useState, useMemo } from 'react';

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const calculatePrimeSum = (limit) => {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

const PrimeSumComponent = ({ limit }) => {
  const primeSum = useMemo(() => calculatePrimeSum(limit), [limit]);

  return (
    <div>
      <h2>Sum of primes up to {limit}: {primeSum}</h2>
    </div>
  );
};

const App = () => {
  const [limit, setLimit] = useState(100);

  return (
    <div>
      <PrimeSumComponent limit={limit} />
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
    </div>
  );
};

export default App;
```

### 説明

- **isPrime関数**: 素数かどうかを判定します。
- **calculatePrimeSum関数**: 指定された上限までの素数の合計を計算します。この計算は高コストな処理です。
- **PrimeSumComponentコンポーネント**: `useMemo`を使用して`calculatePrimeSum`関数の結果をメモ化します。`limit`が変更された場合にのみ再計算が行われます。

### `useMemo`のメリット

1. **パフォーマンスの向上**: 高コストな計算を頻繁に行わないようにすることで、パフォーマンスが向上します。
2. **再レンダリングの最小化**: メモ化された結果を再利用することで、不要な再レンダリングを防ぎます。



### `useMemo`の使用例

1. **フィルタリングされたリストの計算**:
   ```jsx
   const filteredList = useMemo(() => {
     return items.filter(item => item.active);
   }, [items]);
   ```

2. **ソートされたリストの計算**:
   ```jsx
   const sortedList = useMemo(() => {
     return [...items].sort((a, b) => a.value - b.value);
   }, [items]);
   ```

#### 注意点とトレードオフ

1. **過剰な使用のリスク**: `useMemo`を無闇に使用すると、コードが複雑になり、メモリの無駄遣いになる可能性があります。実際にパフォーマンス問題が発生している場合にのみ使用することが推奨されます。
2. **依存関係の管理**: `useMemo`の依存関係配列は正確に管理する必要があります。依存関係が変更された場合にのみ再計算されるように設定します。依存関係が不足していると、意図しない動作を引き起こす可能性があります。

`useMemo`は、計算コストが高い処理をメモ化することでReactアプリケーションのパフォーマンスを向上させるための強力なツールです。
こちらもuseCallbackと同様で使用は慎重に行うべきであり、実際にパフォーマンス問題が確認された場合にのみ適用することが推奨されます。
