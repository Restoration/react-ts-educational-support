### コードベースのクイズ: addEventListener

#### クイズ1: 正しい使い方

次のコードスニペットの中で、`addEventListener` を正しく使用しているものを選んでください。

```javascript
// Option A
document.addEventListener("click", "handleClick");

// Option B
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Option C
const button = document.querySelector("button");
button.addEventListener(handleClick, "click");

// Option D
document.addEventListener(click, handleClick(true));
```

#### クイズ2: 第三引数のデフォルト

`addEventListener` の第三引数について、そのデフォルト値は何ですか？

```javascript
const button = document.querySelector('button');
button.addEventListener('click', handleClick, ???);
```

**選択肢**:
A. true  
B. false  
C. undefined  
D. null

#### クイズ3: イベントリスナーの実行順序

同じ要素に対して同じイベントタイプで複数のリスナーを追加した場合、それらはどのように実行されますか？

```javascript
const button = document.querySelector("button");
button.addEventListener("click", firstFunction);
button.addEventListener("click", secondFunction);
```

**選択肢**:
A. 同時に並列で実行される  
B. 追加された順に一つずつ実行される  
C. 最後に追加されたリスナーのみが実行される  
D. 最初に追加されたリスナーのみが実行される

#### クイズ4: イベントリスナーの削除

イベントリスナーを削除する際に注意すべきポイントはどれですか？

```javascript
const button = document.querySelector('button');
button.addEventListener('click', handleClick);
button.removeEventListener('click', ???);
```

**選択肢**:
A. イベント名のみを指定する  
B. `removeEventListener` は自動的に全てのリスナーを削除する  
C. `addEventListener` で指定したものと同じ関数参照を `removeEventListener` に渡す必要がある  
D. `removeEventListener` の第三引数には常に `true` を指定する

### コーディング問題: "ボタンクリックでカウンターを管理する"

#### 問題の説明

あなたは、ボタンをクリックすることでカウンターの値を増やし、特定の値に達したら自動的にイベントリスナーを削除する機能を実装するタスクを担当しています。具体的な要件は以下の通りです：

1. ボタンがクリックされるたびにカウンターの値を1増やす。
2. カウンターの値が10に達した時点で、それ以上カウントしないようにイベントリスナーを削除する。

#### タスク

- ボタンに `click` イベントリスナーを追加します。
- イベントが発生するたびにカウンターを増やし、カウンターの現在値を表示します。
- カウンターが10に達したら、イベントリスナーを削除します。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Counter Example</title>
  </head>
  <body>
    <button id="myButton">Click me!</button>
    <p id="counterDisplay">Counter: 0</p>

    <script>
    </script>
  </body>
</html>
```