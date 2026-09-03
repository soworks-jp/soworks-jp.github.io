---
layout: page
title: SO Works Agent Seriesの使い分け
lang: ja
permalink: /ja/compare/
---

<section class="sw-product-hero">
  <span class="sw-kicker">ボトルネックから選ぶ</span>
  <h1>全部入れず、今困っている1つから。</h1>
  <p>SO WorksのOSSは小さく分けています。まずbefore/afterを測れる1つの実験から始め、同じ問題が繰り返すと分かったときだけ組み合わせます。</p>
  <div class="sw-actions"><a class="sw-button" href="../pilot/">pilotを見る</a><a class="sw-button secondary" href="../">日本語トップ</a></div>
</section>

| 主な悩み | 最初に使うOSS | 最短の検証 |
|---|---|---|
| 複数coding agentが同じ作業をしたり、task contextを毎回作り直す | **[Agent Workbench](/ja/agent-workbench/)** | 7日で実タスク3件 |
| agent/editorがrepoを読みすぎる、AGENTS.mdが肥大化する | **[Agent Token Optimizer](/ja/agent-token-optimizer/)** | baseline scan → 1〜3改善 → rescan |
| AI reviewにuser/adopter/operator視点が足りない | **[Agent Persona](/agent-persona/)** | 通常review vs persona review |
| human-likeなagent memoryを安全に研究したい | **[Agent Human Memory](/agent-human-memory/)** | synthetic/低機密dataで複数session評価 |
| 複数agent向けskillを再利用可能に管理したい | **[Agent Skill Shelf](/ja/agent-skill-shelf/)** | 1つのskill bundleを配布 |
| 1つの回答を複数視点でreview・統合したい | **[Fusion Skill](/ja/fusion-skill/)** | baseline回答とreview synthesisを比較 |

## 基本の順番

1. **入口として試しやすい:** Agent Token Optimizer — read-only auditから始められる。
2. **複数agent運用が既に痛い:** Agent Workbench — task memory、claim、handoff、reviewをまとめる。
3. **review品質が課題:** Agent Persona / Fusion Skill — 追加時間に対して新しいactionable findingが増えるかを見る。
4. **memory研究:** Agent Human Memory — consumer betaではなく、安全性を優先した招待制researchとして扱う。

<div class="sw-callout"><strong>ルール:</strong> 「便利そう」だけで追加しない。繰り返し発生している問題と、改善を判定するbefore/after指標を先に決める。</div>

- [日本語トップ](/ja/)
- [pilot一覧](/ja/pilot/)
- [English comparison](/compare/)
