### コーディング問題: 既存のコードに型を付与する問題

```typescript
// greet関数にstring型をパラメータと戻り値に指定
function greet(name: string): string {
    return "Hello, " + name + "!";
}

// calculateArea関数にnumber型をパラメータと戻り値に指定
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

// user型を定義
type User = {
    firstName: string;
    lastName: string;
}

// userオブジェクトにUser型を付与
const user: User = {
    firstName: "Taro",
    lastName: "Yamada"
};

// getFullName関数にUser型をパラメータに指定
const getFullName = (user: User): string => {
    return user.firstName + " " + user.lastName;
}

console.log(greet("Tom"));
console.log(calculateArea(10));
console.log(getFullName(user));
```

### コーディング問題: 既存のコードにUnion Typeを適用する

```typescript
// イベントタイプに対応する Union Type を定義
type EventType = 'click' | 'scroll' | 'keypress';

// イベントオブジェクトに対応する型を定義
type Event = 
    | { type: 'click', x: number, y: number }
    | { type: 'scroll', position: number }
    | { type: 'keypress', key: string };

// イベント処理関数の定義
function processEvent(event: Event) {
    if (event.type === 'click') {
        console.log("Clicked at", event.x, event.y);
    } else if (event.type === 'scroll') {
        console.log("Scrolled to", event.position);
    } else if (event.type === 'keypress') {
        console.log("Key pressed", event.key);
    }
}

// テストケースの実行
processEvent({ type: 'click', x: 100, y: 200 });
processEvent({ type: 'scroll', position: 300 });
processEvent({ type: 'keypress', key: 'Enter' });
```

#### 解説:
- `EventType` は `'click'`, `'scroll'`, `'keypress'` のいずれかを取ることができる単純なunion typeです。
- `Event` 型は、`type` フィールドに基づいて異なるプロパティを持つオブジェクトの型を持つ複合union typeです。これにより、イベントの種類に応じて関連するデータのみを持つことができます。
- `processEvent` 関数では、引数に `Event` 型を指定することで、関数内部でのイベントオブジェクトの扱いが型安全になります。


### コーディング問題: TypeScriptの関数を実装する
```typescript
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function findLongestWord(words: string[] | null): string | null {
    if(!words){
        return null;
    }
    if (words.length === 0) {
        return null;
    }
    return words.reduce((longest, current) => longest.length > current.length ? longest : current);
}


function createGreeting(name: string, age: number): string {
    return age >= 18 ? `Hello, ${name}!` : `Hi, ${name}!`;
}
```
