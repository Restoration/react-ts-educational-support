## useRef

useRefはReactのフックの一つで、関数コンポーネント内でDOM要素や変数の参照を保持するために使用されます。
useRefは、状態や再レンダリングに依存しない値を保持したい場合に便利です。
また直接DOMに対して操作を行いたい場合などで有用です。

### 1. 基本的な使い方

TypeScriptで`useRef`を使用してDOM要素にアクセスする場合、`useRef`の型を指定する必要があります。

```tsx
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // inputRef.currentにDOM要素が格納されている
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
```

### 2. 状態の保持

TypeScriptで状態を保持するために`useRef`を使用する場合の例です。
useRefは、レンダリング間で変更しても再レンダリングを引き起こさない値を保持するためにも使用されます。
例えば、コンポーネントのライフサイクル全体でカウントを追跡したい場合などです。

```tsx
import React, { useRef, useState } from 'react';

const Timer: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current++;
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Timer;
```

### 3. 他の応用例

#### 3.1 前回の値の保持

useRefを使って前回の状態を保持することもできます。これにより、状態の変更を追跡するのに役立ちます。

```tsx
import React, { useState, useEffect, useRef } from 'react';

const PreviousValue: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Now: {count}</p>
      <p>Before: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValue;
```

#### 3.2 フォームの状態管理

複数の入力フィールドを持つフォームの状態を管理するためにもuseRefを使用できます。

```tsx
import React, { useRef } from 'react';

const Form: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", nameRef.current?.value);
    console.log("Email:", emailRef.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

### 1. 配列を使ったuseRefの設定

まず、複数の要素の参照を管理するために、useRefで配列を定義します。配列を初期化し、各要素の参照を格納します。

```tsx
import React, { useRef } from 'react';

const MultipleRefs: React.FC = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.focus();
    }
  };

  return (
    <div>
      <input ref={(el) => (inputRefs.current[0] = el)} type="text" placeholder="First input" />
      <input ref={(el) => (inputRefs.current[1] = el)} type="text" placeholder="Second input" />
      <input ref={(el) => (inputRefs.current[2] = el)} type="text" placeholder="Third input" />
      <button onClick={() => focusInput(0)}>Focus First Input</button>
      <button onClick={() => focusInput(1)}>Focus Second Input</button>
      <button onClick={() => focusInput(2)}>Focus Third Input</button>
    </div>
  );
};

export default MultipleRefs;
```

### 2. 動的に要素を追加する場合

もし要素が動的に追加される場合、map関数を使ってリストをレンダリングし、その中でuseRefを使って参照を管理します。

```tsx
import React, { useRef, useState } from 'react';

const DynamicMultipleRefs: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>(['']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.focus();
    }
  };

  return (
    <div>
      {inputs.map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button onClick={addInput}>Add Input</button>
      {inputs.map((_, index) => (
        <button key={index} onClick={() => focusInput(index)}>
          Focus Input {index + 1}
        </button>
      ))}
    </div>
  );
};

export default DynamicMultipleRefs;
```

### 3. useImperativeHandleを使用する場合

useImperativeHandleを使ってカスタムの参照を作成し、コンポーネント外部から内部の要素にアクセスできるようにすることもできます。

```tsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

interface CustomInputProps {
  placeholder?: string;
}

interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return <input ref={inputRef} type="text" {...props} />;
});

const ImperativeHandleExample: React.FC = () => {
  const inputRefs = useRef<(CustomInputHandle | null)[]>([]);

  return (
    <div>
      {Array.from({ length: 3 }, (_, index) => (
        <CustomInput key={index} ref={(el) => (inputRefs.current[index] = el)} placeholder={`Input ${index + 1}`} />
      ))}
      <button onClick={() => inputRefs.current[0]?.focus()}>Focus First Input</button>
      <button onClick={() => inputRefs.current[1]?.clear()}>Clear Second Input</button>
    </div>
  );
};

export default ImperativeHandleExample;
```