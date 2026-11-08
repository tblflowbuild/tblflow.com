---
title: "公式MCPサーバー：TblFlowをClaudeに接続"
date: 2026-11-01
translationKey: "mcp-server"
type: "feature"
---

TblFlowが**公式MCPサーバー**を公開しました。スペースをClaudeに接続し、会話の中からデータを扱えます。リモートサーバー（`https://app.tblflow.com/mcp`、Streamable HTTP、OAuth 2.1）で、REST APIと同様に**無料プランから利用できます**。

- **13のツール**：スペースとベースの一覧表示、スキーマの説明、レコードの一覧表示・絞り込み・読み取り、ナレッジグラフの検索、レコードの作成と編集、削除（プレビューのあと明示的な確認、ごみ箱へ移動）、テーブルまたはフィールドの作成、自動化のトリガー、AIエージェントの実行。
- **主導権はお客様に**：接続時に、スペース、ベース、権限を選びます。デフォルトは読み取りのみで、書き込み、削除、スキーマ、トリガーはオプションです。リクエストのたびに、お客様のTblFlowでの権限が適用されます。
- **レート制限**：無料、Pro、Business、Enterpriseの順に、1分あたり60、120、300、600リクエスト。
- **公式MCPレジストリ**：サーバーは `com.tblflow/tblflow`（バージョン1.0.0）として公開されています。Claudeのコネクタディレクトリへの申請は今後行う予定です。

概要：[/ja/mcp](/ja/mcp)。接続ガイド：[ドキュメント](/ja/docs/mcp-server)。お知らせ：[TblFlowのMCPサーバー](/en/blog/tblflow-mcp-server-in-claude)。
