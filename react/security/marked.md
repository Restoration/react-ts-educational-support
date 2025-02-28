# markedで検証

## 公式
- https://www.npmjs.com/package/marked


### 概要
マークダウンパーサーでマークダウンをHTMLに変換するライブラリ。
ユーザーが入力したテキストをマークダウン形式で受け取り、HTMLに変換するなどに利用されるライブラリ。


**以下引用**

> Warning: 🚨 Marked does not sanitize the output HTML. Please use a sanitize library, like DOMPurify (recommended), sanitize-html or insane on the output HTML! 🚨

サニタイズすることを推奨しています

## 実際にデモサイトで動作検証
appディレクトリの動作確認をします
AdBlockerなどが入っていると動作しない可能性があるのでIncognito windowなどで動作確認する。
```
npm i
npm run dev
```
「Sanitized Preview は安全な HTML だけがレンダリングされるが、Raw Preview はどんな HTML もそのまま出力される」

---

### 実際に XSS 攻撃を試す
次のコードを Markdown のエディターに入力

```md
# XSS Test

Click the button below!

<button onclick="alert('XSS Attack!')">Click me</button>
```

**結果:**
- `Sanitized Preview (Safe)` ではボタンが無効化される（クリックできない）。
- `Raw Preview (Unsafe)` ではボタンがそのまま動作し、アラートが表示される。

**ポイント:**
- **「サニタイズされたプレビューは、悪意のあるスクリプトを削除するので安全」**
- **「Raw Preview はスクリプトをそのまま実行してしまうので危険」**

---

### より危険な XSS 実演
次のコードを Markdown に入力させます。

```md
# XSS Advanced Test

<script>alert('XSS Attack!');</script>
```

**結果:**
- `Sanitized Preview (Safe)` ではスクリプトタグが削除される。
- `Raw Preview (Unsafe)` ではスクリプトが実行され、アラートが出る（もしくは `<script>` タグがそのまま出力される、開発ツールで確認できる）。


**ポイント:**
- **「もしこの機能が公開された Web サイトで動いていた場合、攻撃者がスクリプトを埋め込み、サイト訪問者のブラウザで勝手にコードを実行させることができる」**
- **「最悪の場合、クッキーや認証情報を盗まれる可能性がある」**

---

### 防ぐ方法
- `DOMPurify` などを使って **ユーザーが入力した内容をサニタイズすることが重要** 。
- `dangerouslySetInnerHTML` を使う場合、**「本当に HTML をそのまま出力する必要があるのか？」** を慎重に検討すべき。

---

### まとめ

- `dangerouslySetInnerHTML` を使うと、ユーザーが入力した **悪意のあるスクリプト** も実行される可能性がある。
- `DOMPurify` のような **サニタイズライブラリを使用しないと XSS 攻撃のリスクがある**。
- Web アプリ開発では、**外部からの入力を直接 HTML としてレンダリングする場合、常に XSS を意識するべき**。
