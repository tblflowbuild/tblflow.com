---
title: "HTTPSで公開したローカルAIプロバイダー"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

ご自身のパソコンで動くモデル（Ollama、LM Studio、Unsloth）を、ホスト型のTblFlowスペースに接続できます。

- **サーバーをHTTPSで公開**し、その公開URLを貼り付けます：Unslothは `unsloth studio --secure`、OllamaとLM Studioはトンネルを使います。ホスト型のインスタンスでは、「localhost」はお客様のパソコンではなくTblFlowのサーバーを指します。フォームにもその旨が表示されます。
- **Bearerキー**：Ollamaへのリクエスト（トークン付きプロキシの背後）とUnslothへのリクエストには、キーを添えられます。
- **ネットワークガード**：サーバーの内部ネットワークを指すアドレスは拒否されます。
