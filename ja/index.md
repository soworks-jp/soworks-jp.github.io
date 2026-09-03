---
layout: home
title: AIエージェント開発を支えるローカルファーストOSS
description: SO Worksは、AI coding agentのplanning、routing、context、execution、review、memory、diagnostics、operationsを支える13 OSSを公開予定です。
---

<section class="sw-hero sw-hero-product">
  <span class="sw-eyebrow">SO Works Agent Series · 13 OSSを公開予定</span>
  <h1>AIエージェントを、実際の開発チームのように運用する。</h1>
  <p>Codex、Claude Code、Cursor、Gemini CLIなどを実repoで使う人向けに、planning、routing、handoff、context最適化、review、memory、diagnostics、operationsまでを小さなOSSとして分けて提供する予定です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="oss/">13 OSSのrelease roadmapを見る</a>
    <a class="sw-button secondary" href="agent-workbench/">Agent Workbenchを見る</a>
    <a class="sw-button secondary" href="compare/">使い分けを見る</a>
  </div>
  <div class="sw-proof-row">
    <span><strong>13 OSSを公開予定</strong><small>repo公開前から全体roadmapを可視化</small></span>
    <span><strong>ローカルファースト</strong><small>core workflow dataを自分の管理下に置く設計</small></span>
    <span><strong>Composable</strong><small>1 packageだけでもstack全体でも使える</small></span>
    <span><strong>Releaseを正直に表示</strong><small>本当に公開可能になったものからlinkを出す</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">このstackが必要な理由</span>
      <h2>agentが速くなるほど、周辺の運用がボトルネックになる。</h2>
      <p>context選定、task分割、routing、ownership、review、memory、security、machine health、人間approvalまでを整理しないと、agentの出力速度だけ上がっても開発全体は速くなりません。</p>
    </div>
  </div>
  <div class="sw-problem-grid">
    <article class="sw-problem-card"><span class="sw-number">01</span><h3>Contextを毎回読み直す</h3><p>taskごとのcontext、handoff、memoryが整理されていないと、sessionごとにrepoを読み直すコストが増えます。</p></article>
    <article class="sw-problem-card"><span class="sw-number">02</span><h3>複数agentが衝突する</h3><p>planning、routing、ownership、review evidenceがないと、同じtaskを重複して解いたり変更を上書きしやすくなります。</p></article>
    <article class="sw-problem-card"><span class="sw-number">03</span><h3>運用側が遅くなる</h3><p>security、machine health、reporting、人間approval channelまで含めて整備しないと、agent利用が日常化した時に周辺作業が詰まります。</p></article>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">4つのanchor project</span>
      <h2>まず主要surfaceからAgent Stackの考え方を理解する。</h2>
      <p>以下はproduct directionを先に見せるpreviewです。repoやpackageはpublic OSS releaseの準備が整った時点で公開linkを追加します。</p>
    </div>
    <a href="oss/">全OSS roadmap →</a>
  </div>

  <div class="sw-grid sw-product-grid">
    <article class="sw-card sw-product-card featured">
      <div class="sw-card-top"><span class="sw-icon">AW</span><span class="sw-badge">Planned OSS release</span></div>
      <h3>Agent Workbench</h3>
      <p class="sw-card-lead">複数coding agentのtask、routing、ownership、handoff、review、memoryをrepo中心で運用。</p>
      <ul class="sw-mini-list"><li>task memory / routing / claim lease</li><li>prompt / report / review / Local Control</li><li>繰り返しmulti-agent workのoperating layer</li></ul>
      <div class="sw-card-actions"><a class="sw-button" href="agent-workbench/">詳しく見る</a><a href="oss/#agent-workbench">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon green">TO</span><span class="sw-badge green">Planned OSS release</span></div>
      <h3>Agent Token Optimizer</h3>
      <p class="sw-card-lead">AIが読むrepo contextの無駄、巨大ファイル、instruction肥大、indexing riskをローカル診断。</p>
      <ul class="sw-mini-list"><li>context-heavy / generated fileの検出</li><li>agent instructions・exclusion・editor hygieneの改善候補</li><li>before/afterでcontext状態を比較</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-token-optimizer/">詳しく見る</a><a href="oss/#agent-token-optimizer">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon orange">AP</span><span class="sw-badge orange">Planned OSS release</span></div>
      <h3>Agent Persona</h3>
      <p class="sw-card-lead">user、adopter、security、operator、buyerなどの視点をAI reviewへ明示的に追加。</p>
      <ul class="sw-mini-list"><li>portable persona pack</li><li>README / PRD / onboarding / handoff review</li><li>review noiseよりincremental actionable findingを重視</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-persona/">詳しく見る</a><a href="oss/#agent-persona">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon cyan">HM</span><span class="sw-badge cyan">Planned OSS release</span></div>
      <h3>Agent Human Memory</h3>
      <p class="sw-card-lead">明示的・review可能・forget可能なhuman-like memoryを安全性優先で研究。</p>
      <ul class="sw-mini-list"><li>preference / goal / episode / working context</li><li>authority / provenance / consent / forgetting</li><li>safety-firstなmemory lifecycle</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-human-memory/">詳しく見る</a><a href="oss/#agent-human-memory">Release roadmap →</a></div>
    </article>
  </div>
</section>

<section class="sw-section sw-roadmap-preview">
  <div class="sw-section-head">
    <div><span class="sw-kicker">Full release roadmap</span><h2>公開予定の13 OSSをすべて可視化。</h2><p>underlying repoがprivateの間も、Agent Stack全体の役割とproduct directionはroadmapで確認できます。</p></div>
    <a href="oss/">全roadmapを開く →</a>
  </div>
  <div class="sw-roadmap-strip">
    {% for project in site.data.oss_catalog %}
    <a href="/ja/oss/#{{ project.id }}"><span>{{ project.layer }}</span><strong>{{ project.name }}</strong><small>{{ project.phase }}</small></a>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Planned OSS releases</span>
  <h2>repoより先に、全体アーキテクチャを公開する。</h2>
  <p>各projectはpublic packaging、docs、license、安全性のrelease gateが整った段階で、public repo/package linkを順次追加します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="oss/">全OSSを見る</a>
    <a class="sw-button secondary" href="../">English</a>
  </div>
</section>
