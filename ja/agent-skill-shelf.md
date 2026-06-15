---
layout: page
title: Agent Skill Shelf
lang: ja
---

# Agent Skill Shelf

Agent Skill Shelf は、Codex / Claude Code / Gemini CLI / GitHub Copilot / Continue / Antigravity などへ配るskillを、ひとつのsource bundleから管理するローカルCLIです。

## 使いどころ

- 同じpromptをagentごとにコピーして更新漏れが起きている
- skillを公開前に静的スキャンしたい
- project-localな出力をdry-runしてから同期したい

## 日本語での依頼例

```text
このskillをsource bundle化して、CodexとClaude Code向けにdry-runして。
公開前にsecretや危険なshell例が入っていないかscanして。
```

## Preview

- [skill board サンプル](https://harks-inc.github.io/agent-skill-shelf/examples/agent-skill-board.html)
- [日本語のサンプル説明](https://harks-inc.github.io/agent-skill-shelf/examples/ja.html)

![Agent Skill Board preview](https://harks-inc.github.io/agent-skill-shelf/examples/view-preview.png)

サンプルはfixtureのskill名、汎用path、丸めたstatusだけを使います。実際のskill reportを公開する場合は、finding、内部path、secret関連の具体値、private skill名、host名が含まれていないことを確認します。

## リンク

- English summary: [../agent-skill-shelf.md](../agent-skill-shelf.md)
- Product folder: `01_biz/projects/oss/products/agent-skill-shelf/`
- Planned English page: `https://soworks-jp.github.io/agent-skill-shelf.html`
- Planned Japanese page: `https://soworks-jp.github.io/ja/agent-skill-shelf.html`
- ローカルビュー: `01_biz/projects/oss/products/agent-skill-shelf-ja/docs/local-view.md`
