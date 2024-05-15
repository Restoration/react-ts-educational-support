### コーディング問題: 既存のコードに型を付与する問題

次のJavaScriptコードをTypeScriptに書き換え、適切な型を追加してください。


```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

function calculateArea(radius) {
    return Math.PI * radius * radius;
}


const user = {
    firstName: "Taro",
    lastName: "Yamada"
};

const getFullName = (user) => {
    return user.firstName + " " + user.lastName;
}

console.log(greet("Tom"));
console.log(calculateArea(10));
console.log(getFullName(user));
```



### コーディング問題: 既存のコードにUnion Typeを適用する

次のJavaScriptコードがあります。このコードをTypeScriptに変換し、適切な場所にunion typeを導入してタイプセーフにしてください。

#### 既存のJavaScriptコード:
```javascript
function processEvent(event) {
    if (event.type === "click") {
        console.log("Clicked at", event.x, event.y);
    } else if (event.type === "scroll") {
        console.log("Scrolled to", event.position);
    } else if (event.type === "keypress") {
        console.log("Key pressed", event.key);
    }
}

processEvent({ type: "click", x: 100, y: 200 });
processEvent({ type: "scroll", position: 300 });
processEvent({ type: "keypress", key: "Enter" });
```

#### 指示:
1. `EventType` という名前で、`click`、`scroll`、`keypress` という3つのイベントタイプのうちの一つを持つことができる union type を定義します。
2. `Event` という名前で、イベントタイプに応じて異なるプロパティを持つオブジェクト型を定義します。各イベントタイプには以下のプロパティを持たせてください：
   - `click`: `x` と `y` の座標
   - `scroll`: `position` スクロール位置
   - `keypress`: `key` 押されたキー
3. `processEvent` 関数の引数に `Event` 型を適用し、関数内の処理を型安全にする。




### コーディング問題: TypeScriptの関数を実装する

以下の関数の型注釈を完成させ、TypeScriptの関数を実装してください。

1. **関数 `sumArray`**: 数値の配列を受け取り、その配列の全要素の合計を返す関数です。配列と戻り値に適切な型を付けてください。
2. **関数 `findLongestWord`**: 文字列の配列を受け取り、配列内で最も長い文字列を返す関数です。配列と戻り値の型を指定してください。もし配列が空の場合は `null` を返すようにしてください。
3. **関数 `createGreeting`**: 名前と年齢を受け取り、適切な挨拶文を生成して返す関数です。名前は文字列型、年齢は数値型です。戻り値は文字列型で、年齢が18歳以上なら「Hello, [名前]!」、未成年なら「Hi, [名前]!」というメッセージを返してください。

```typescript
function sumArray() {}

function findLongestWord() {}

function createGreeting() {}
```
