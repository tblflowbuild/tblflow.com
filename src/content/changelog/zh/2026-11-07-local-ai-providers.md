---
title: "通过 HTTPS 开放的本地 AI 服务商"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

您可以将运行在自己电脑上的模型（Ollama、LM Studio 或 Unsloth）连接到托管的 TblFlow 空间。

- **通过 HTTPS 开放服务器**并粘贴其公开 URL：Unsloth 使用 `unsloth studio --secure`，Ollama 或 LM Studio 则使用隧道。在托管实例上，“localhost”指的是 TblFlow 服务器，而不是您的电脑：表单中会提示这一点。
- **Bearer 密钥**：调用 Ollama（位于令牌代理之后）和 Unsloth 时可以附带密钥。
- **网络防护**：指向服务器内部网络的地址会被拒绝。
