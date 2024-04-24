### クイズ1: モジュールのインポート

次のうち、ES6でモジュールをインポートする正しい方法はどれでしょうか？  
A. `import { myFunction } from 'module'`  
B. `require('module')`  
C. `include { myFunction } from 'module'`  
D. `load { myFunction } from 'module'`   

### クイズ2: モジュールのエクスポート

次のうち、ES6で関数をエクスポートする正しい方法はどれでしょうか？  
A. `export function myFunction() {}`  
B. `module.export = myFunction`  
C. `export default myFunction()`  
D. `return export myFunction()`  

### クイズ3: 名前付きエクスポートとデフォルトエクスポート

ES6のモジュールシステムにおいて、名前付きエクスポートとデフォルトエクスポートの違いに関する説明として正しいものはどれでしょうか？  
A. 名前付きエクスポートは複数存在できるが、デフォルトエクスポートは一つのモジュールにつき一つだけである。  
B. デフォルトエクスポートは複数存在できるが、名前付きエクスポートは一つのモジュールにつき一つだけである。  
C. 名前付きエクスポートとデフォルトエクスポートはどちらもモジュールにつき一つだけ存在できる。  
D. 名前付きエクスポートとデフォルトエクスポートに違いはない。  


### コーディング問題: "非同期データの取得と表示"

#### 問題の説明

以下の要件に従って関数を作成してください。

#### タスク

1. **非同期関数の作成**: `fetchData`という名前の非同期関数を作成してください。この関数は`fetch`を使用して外部APIからデータを取得します。
2. **データの表示**: 取得したデータはJSON形式として処理し、その結果をコンソールに表示。

#### 仮のAPIエンドポイント

以下のURLを使用してデータを取得してください。

```
https://jsonplaceholder.typicode.com/posts/1
```

このエンドポイントは、`JSONPlaceholder`というテスト用のフリーAPIから投稿データを返します。

#### 要件
- 非同期処理を使って書いてください、async/awaitでもPromiseでも構いません
- エラーハンドリングを書いてください、エラーにはconsole.errorを利用し、エラー内容を確認できるようにしてください
- データ取得にはfetchを利用してください
- 関数の引数にはAPIのURLを受け取れるように書いてください


```javascript
const data = fetchData("https://jsonplaceholder.typicode.com/posts/1"); // 関数を呼び出して動作を確認
console.log(data);
```