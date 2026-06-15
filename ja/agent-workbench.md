---
layout: page
title: Agent Workbench
lang: ja
---

# Agent Workbench

Agent Workbench は、Codex / Claude Code / Gemini CLI など複数のAI coding agentを、ローカルrepoで安全に使い分けるための作業台です。

## 使いどころ

- TODOやroadmapからAIに渡せる作業を見つけたい
- 複数agentが同じファイルを触る事故を減らしたい
- 作業後のreportやPR briefを毎回残したい

## 日本語での依頼例

```text
このrepoの未完了TODOをscoutして、Codex向けに小さいタスクへ分けて。
TASK-001をclaimして、実装後にreportとPR briefを残して。
```

## Preview

- [ローカルdashboardサンプル](https://harks-inc.github.io/agent-workbench/examples/agent-workbench-dashboard.html)
- [日本語のサンプル説明](https://harks-inc.github.io/agent-workbench/examples/ja.html)

![Agent Workbench dashboard preview](https://harks-inc.github.io/agent-workbench/examples/view-preview.png)

サンプルはfixtureのタスク名、丸めた件数、汎用pathだけを使います。実際の `.agent-work/` 生成物を公開する場合は、内部path、secret、個人名、private issue内容、ホスト名、private repo識別子が含まれていないことを確認します。

## リンク

- English summary: [../agent-workbench.md](../agent-workbench.md)
- 英語ガイド: `https://soworks-jp.github.io/agent-workbench.html`
- このページ: `https://soworks-jp.github.io/ja/agent-workbench.html`
