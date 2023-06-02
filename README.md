
# learning-typescript

本レポジトリのコードは基本的に[TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発](https://www.amazon.co.jp/TypeScript%E3%81%A8React-Next-js%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E5%AE%9F%E8%B7%B5Web%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-%E6%89%8B%E5%B3%B6-%E6%8B%93%E4%B9%9F/dp/4297129167/ref=sr_1_2_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=E4VX4JYIXYGN&keywords=typescript+next.js+react&qid=1659935979&sprefix=typescript+next.js+reac%2Caps%2C209&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR0cwUTA4SUZIRzkmZW5jcnlwdGVkSWQ9QTAxOTcyOTkzUDJMOEtMQ085MkpaJmVuY3J5cHRlZEFkSWQ9QTNOREM4VDhXQlhHME8md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl)の第2章を学習した際に書いたコードを保管しています。

ライブラリのバージョン、環境や学習のために、配布されたコードと異なる箇所が複数あります。
## 実行環境

本レポジトリのコードの実行環境は以下です。

- Windows 10
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) 4.2.0
- VSCode

## 動作確認

1. 本プロジェクトのディレクトリで、以下のコマンドを実行し、コンテナを起動します。

```
$ docker-compose up -d
```

2. コンテナ内で以下のコマンドを実行し、TypeScriptのコンパイラをインストールします。
```
$ npm install -g typescript
```

3. TypeScriptのファイルをコンパイルし、生成されたJavaScriptファイルを実行します。

```
$ tsc [ファイル名].ts
$ node [ファイル名].js
```


## 参考文献
- [TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発](https://www.amazon.co.jp/TypeScript%E3%81%A8React-Next-js%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E5%AE%9F%E8%B7%B5Web%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-%E6%89%8B%E5%B3%B6-%E6%8B%93%E4%B9%9F/dp/4297129167/ref=sr_1_2_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=E4VX4JYIXYGN&keywords=typescript+next.js+react&qid=1659935979&sprefix=typescript+next.js+reac%2Caps%2C209&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR0cwUTA4SUZIRzkmZW5jcnlwdGVkSWQ9QTAxOTcyOTkzUDJMOEtMQ085MkpaJmVuY3J5cHRlZEFkSWQ9QTNOREM4VDhXQlhHME8md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl)
