---
title: "TblFlow CLI"
translationKey: "cli"
description: "TblFlow CLI（@tblflow/cli）のインストールと使い方を説明します。デバイスコードまたはサービストークンでの接続、コマンド、CSVインポート、エクスポート、ローカルMCPサーバーを扱います。"
section: "ガイド"
order: 8
---

TblFlow CLIを使うと、ターミナルからベースを操作できます。レコードの読み取りと書き込み、CSVのインポートとエクスポート、公開されている自動化とエージェントの実行、そしてローカルのMCPクライアント（Claude Code、Cursorなど）をお客様のデータに接続することができます。npmで `@tblflow/cli` という名前で公開されており、ライセンスはMITです。

Node.js 20以上が必要で、サードパーティの依存関係はありません。

## インストールする

```bash
npm install -g @tblflow/cli
tblflow --help
```

インストールせずに使う場合：`npx @tblflow/cli --help`。

## 接続する

### お使いのパソコンで

```bash
tblflow login     # コードが表示されるので、ブラウザーで承認します
tblflow whoami
tblflow logout    # ローカルのセッションを削除し、サーバー側でトークンを失効させます
```

承認する前に、ターミナルに表示されたコードとブラウザーに表示されたコードが同じであることを確認してください。トークンはシステムのキーチェーン（macOS、Linux Secret Service）に保存されます。利用できない場合は `~/.config/tblflow/credentials.json` に保存されます。このファイルはお客様だけが読み取れるようになっており、CLIはその旨を警告します。

### 継続的インテグレーションで

TblFlowで**サービストークン**を作成します：スペースの設定 → セキュリティと監査 → サービスアカウント。CIのシークレットに保管し、環境変数として渡します。

```bash
export TBLFLOW_TOKEN=...      # CIが注入します。リポジトリには決して書き込まないでください
tblflow bases
```

`TBLFLOW_TOKEN` は保存済みのセッションより優先され、ディスクには一切書き込まれません。専用のマシンにトークンを一度だけ保存したい場合は、標準入力から読み込みます。

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <トークン>` も使えますが、その場合トークンがシェルの履歴とプロセス一覧に残るため、CLIがその旨を注意します。トークンは保存される前にサーバーで検証され、出力やエラーメッセージには一切表示されません。この方法で保存したトークンは `tblflow logout` で削除されますが、失効はしません。失効はスペースの設定から行います。

### サーバーを選ぶ

デフォルトでは、CLIは `https://app.tblflow.com` と通信します。別のサーバーを使う場合は、`--host https://…` または環境変数 `TBLFLOW_URL` を使用します。`localhost` を除き、HTTPSが必須です。

## コマンド

| コマンド | 内容 |
|---|---|
| `bases` | アクセスできるスペースとベース |
| `tables <baseId>` | ベースのテーブル |
| `records list <tableId>` | `--take N`（最大100）、`--skip N`、`--fields a,b`、`--where "フィールド=v"`、`--sort "フィールド:desc"` |
| `records get <tableId> <recordId>` | レコードを読み取ります |
| `records create <tableId>` | `--data '<json>'` または `--file f.json`（最大50） |
| `records update <tableId> [<recordId>]` | 1件または複数のレコードを更新します |
| `records delete <tableId> <recordId>…` | プレビューを表示し、`--confirm` を付けると削除します（ごみ箱へ移動） |
| `import <tableId> <ファイル.csv>` | CSVの行を追加します。`--dry-run` |
| `import --new-table <baseId> <ファイル.csv>` | CSVからテーブルを作成します。`--name`、`--dry-run` |
| `export <tableId>` | CSVを標準出力に出力します。または `--out ファイル.csv`。`--view <viewId>` |
| `run automation <baseId> <workflowId>` | 所有者が公開した自動化を実行します |
| `run agent <baseId> <agentId> <タスク…>` | 所有者が公開したエージェントを実行します |
| `api <METHOD> <パス>` | 直接呼び出し。`/api/` のパスのみ。`DELETE` には `--confirm` が必要です |
| `mcp serve` | ローカルMCPサーバー（stdio） |

`--json` はすべてのコマンドで使えます。終了コードは、成功が0、エラーが1、使い方の誤りまたは確認が必要な場合が2です。

### CSVからテーブルを作成する

```bash
tblflow import --new-table <baseId> clients.csv --name "Clients" --dry-run
tblflow import --new-table <baseId> clients.csv --name "Clients"
```

`--dry-run` は、何も書き込まずに、作成される内容を表示します。

## ローカルのMCPクライアントを接続する

`tblflow mcp serve` は、標準入出力でローカルのMCPサーバーを起動します。お使いのMCPクライアントの設定に次のように宣言します。

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

何もインストールせずにClaude（Web、デスクトップ、モバイル）を接続するには、代わりにリモートMCPサーバーを使ってください。[MCPサーバー](/ja/docs/mcp-server)のガイドをご覧ください。

## 利用規約と個人データ

TblFlowアカウントでのCLIの利用には、[利用規約](https://app.tblflow.com/legal/terms)と[プライバシーポリシー](https://app.tblflow.com/legal/privacy)が適用されます。CLIはテレメトリーを一切収集せず、お客様が設定したTblFlowサーバーとのみ通信します。
