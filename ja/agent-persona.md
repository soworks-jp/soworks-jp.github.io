---
layout: page
title: Agent Persona — ペルソナ視点でAIレビューを強くする
description: user、adopter、security、operator、buyer、contributorの視点をAI reviewへ追加する公開予定OSSのproduct preview。
lang: ja
permalink: /ja/agent-persona/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Persona · Planned OSS release</span>
  <h1>その成果物を実際に使う人の視点でレビューする。</h1>
  <p>Agent Personaは、user、adopter、contributor、security、operator、buyerなどの明示的な視点をportableなreview packとして扱い、README、PRD、onboarding、release、UX、agent handoffへ再利用するOSSとして公開準備中です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/ja/oss/#agent-persona">Release roadmap</a>
    <a class="sw-button secondary" href="/ja/compare/">使い分けを見る</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>視点を明示</strong><span>genericなreview promptではなく、誰の立場で見るかをartifactとして持つ。</span></div>
  <div class="sw-metric-card"><strong>比較可能</strong><span>同じsynthetic review groupをreleaseやartifactをまたいで再利用する。</span></div>
  <div class="sw-metric-card"><strong>Signal重視</strong><span>comment数ではなく、本当に新しいactionable findingを価値として扱う。</span></div>
</div>

## Planned product surface

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>User / adopter lens</h3><p>初回利用者、導入者、buyer、operatorが何を誤解・拒否・不足と感じるかを見る。</p></div>
  <div class="sw-choice-card"><h3>Security / contributor lens</h3><p>maintenance、contribution、operations、securityの懸念をrepeatable reviewへ入れる。</p></div>
  <div class="sw-choice-card"><h3>Reusable review groups</h3><p>README、PRD、onboarding、UX、release、handoffへ同じ視点セットを適用する。</p></div>
  <div class="sw-choice-card"><h3>Composable review</h3><p>Agent Fusionなどtechnical reviewer laneとは別軸でpersona guidanceを組み合わせる。</p></div>
</div>

## Public release status

Agent Personaはpublic OSSとしてリリース予定です。repoはpublic packaging・examples・docs・license確認・release gateを仕上げる間はprivateで、実際に公開可能になった時点でrepo / install linkを追加します。

## Product boundary

Persona packはreviewの視点を明示するためのものです。実在ユーザーを再現したり、interviewや直接のuser researchを置き換えるものではありません。

- [全OSS release roadmap](/ja/oss/)
- [English page](/agent-persona/)
- [使い分けを見る](/ja/compare/)
