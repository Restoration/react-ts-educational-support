### クイズ1: モジュールのインポート

**正解: A. `import { myFunction } from 'module'`**  
この文法は、指定されたモジュールから特定の機能（ここでは`myFunction`）を名前付きインポートする正しい方法です。`require`はCommonJSの文法で、ES6の標準ではありません。

### クイズ2: モジュールのエクスポート

**正解: A. `export function myFunction() {}`**  
この文法は、関数を名前付きエクスポートとしてエクスポートする正しい方法です。`module.export`はCommonJSの文法で、`export default`は関数宣言ではなく、関数リファレンスをデフォルトエクスポートする際に使います。

### クイズ3: 名前付きエクスポートとデフォルトエクスポート

**正解: A. 名前付きエクスポートは複数存在できるが、デフォルトエクスポートは一つのモジュールにつき一つだけである。**  
一つのモジュールから複数の名前付きエクスポートを行うことができますが、デフォルトエクスポートはモジュールごとに一つだけです。


### コーディング問題: "非同期データの取得と表示"

### 解答例

#### fetchData関数の実装

```javascript
const fetchData = async (url) => {
  try {
    const response = await fetch(
      url,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const data = fetchData("https://jsonplaceholder.typicode.com/posts/1"); // 関数を呼び出して動作を確認
console.log(data);
// const data = fetchData("https://jsonplaceholder.typicode.com/posts/2"); // 関数を呼び出して動作を確認
// console.log(data);
```
