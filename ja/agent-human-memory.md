---
layout: page
title: Agent Human Memory — 安全なagent memory研究
description: provenance、consent、review、authority、retention、forgettingを明示したlocal-firstなagent memory実験基盤。
lang: ja
permalink: /ja/agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Experimental research</span>
  <h1>Memoryをブラックボックスにせず、agentの継続性を研究する。</h1>
  <p>Agent Human Memoryは、明示的なpreferences、goals、episodes、relationship context、persona signalsなどを扱いながら、provenance、authority、review、retention、consent、forgettingの境界を見える状態に保つ実験的なOSSです。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-human-memory">GitHubで見る</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-human-memory/issues/8">Research pilotに参加</a>
  </div>
</section>

## 研究したいこと

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Continuity</strong><span>前のsessionで明示的に保存した情報を、必要な場面で安全に再利用できるか。</span></div>
  <div class="sw-metric-card"><strong>Authority</strong><span>単なるcontextをstanding instructionへ勝手に昇格させないか。</span></div>
  <div class="sw-metric-card"><strong>Forgetting</strong><span>保持だけでなく、review・retention・forgettingをユーザーが理解して操作できるか。</span></div>
</div>

## 向いている人

- agent framework / memory infrastructure開発者
- local-first personal agentを研究している開発者
- provenanceやauthority boundaryを評価したいresearcher
- memory consolidationやrecurrence処理を安全側から検証したい人

## Pilotの境界

これはconsumer向けmemory betaではありません。最初の研究pilotでは**syntheticまたは低機密データのみ**を使います。

- medical / financial / intimate informationを使わない
- authentication dataやsecretを保存しない
- real private relationship historyを公開Issueへ載せない
- authority・privacy・provenanceの高リスク失敗を、recall不足より重大な失敗として扱う

<div class="sw-callout"><strong>Safety first:</strong> より多く思い出すことより、間違った権限・用途・provenanceで記憶を使わないことを優先します。</div>

## 7日research pilot

5〜10件のsynthetic/low-sensitivity memoryを複数sessionで使い、continuity、review、forgetting、recurrence/consolidation proposal、provenance、authority boundaryを確認します。

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Invite-only research</span>
  <h2>広く集める前に、安全性を壊しにいく。</h2>
  <p>最初は5人程度のbuilder/researcher cohortを想定しています。高リスクなprivacy/authority failureが残る間は一般betaへ広げません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-human-memory/issues/8">Research pilot募集</a>
    <a class="sw-button secondary" href="/ja/pilot/">全pilotを見る</a>
  </div>
</div>
