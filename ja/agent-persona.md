---
layout: page
title: Agent Persona — ペルソナ視点でAIレビューを強くする
description: ユーザー、導入者、セキュリティ、運用、購入者、コントリビューターの視点をAIレビューへ追加し、通常レビューとの差分価値を測るOSS。
lang: ja
permalink: /ja/agent-persona/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Persona · Pilot now · Public OSS release planned</span>
  <h1>その成果物を実際に使う人の視点でレビューする。</h1>
  <p>Agent Personaは、ユーザー、導入者、コントリビューター、セキュリティ、運用、購入者などの明示的な視点をportableなreview packとして扱い、README、PRD、オンボーディング、リリース、UX、agent handoffのレビューに再利用します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">30分pilot / release waitlist</a>
    <a class="sw-button secondary" href="/ja/oss/#agent-persona">Release status</a>
  </div>
</section>

## 何が変わるか

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Before / After</strong><span>通常のAIレビューを保存してから、同じ成果物にPersona reviewを実行する。</span></div>
  <div class="sw-metric-card"><strong>Incremental signal</strong><span>本当に新しく見つかったactionable findingだけを数える。</span></div>
  <div class="sw-metric-card"><strong>Review efficiency</strong><span>追加レビュー時間に対して、どれだけ有用な指摘が増えたかを見る。</span></div>
</div>

## 向いているケース

- OSS README / docsの導入者目線レビュー
- PRDや仕様のユーザー・運用・購入者目線レビュー
- onboardingやUXの複数視点レビュー
- agent handoffやrelease artifactの確認

## 30分で試す

1. ひとつの公開またはsanitizedな成果物を通常どおりAIレビューする。
2. 同じ成果物をAgent Personaの適切なreview groupでレビューする。
3. 通常レビューでは出なかったactionable findingだけを数える。
4. 重複・ノイズと追加レビュー時間も記録する。

<div class="sw-callout"><strong>Growth指標:</strong> 指摘総数ではなく、追加レビュー1分あたりのincremental actionable findingsを重視します。</div>

## Public release status

実装とreview challengeは存在していますが、product repoはpublic packaging・examples・docs・release gateを仕上げる間はprivateです。実際にpublic access可能になるまでrepo linkを先に公開しません。

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Pilot</span>
  <h2>同じ成果物を2回レビューして、追加価値を測る。</h2>
  <p>before/after challengeで、通常reviewから増えた本当に有用なsignalだけを確認します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public pilot / waitlist</a>
    <a class="sw-button secondary" href="/ja/oss/">全OSS roadmap</a>
  </div>
</div>