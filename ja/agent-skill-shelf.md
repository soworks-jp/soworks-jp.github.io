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

サンプルは架空のskill名、汎用的なファイル名、丸めた状態だけを使います。自分のレポートを共有する前に、非公開のファイルパス、secretの詳細、private skill名、ホスト名を取り除いてください。

## リンク

- English summary: [../agent-skill-shelf.md](../agent-skill-shelf.md)
- 英語ページ: `https://soworks-jp.github.io/agent-skill-shelf.html`
- 日本語ガイド: `https://soworks-jp.github.io/ja/agent-skill-shelf.html`
