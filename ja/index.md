---
layout: home
title: AIエージェント開発を支えるローカルファーストOSS
description: AI coding agentのタスク運用、repo context最適化、personaレビュー、安全なmemory研究をローカルファーストで支えるSO Works Agent Series。
---

<section class="sw-hero sw-hero-product">
  <span class="sw-eyebrow">SO Works Agent Series · ローカルファーストOSS</span>
  <h1>AIエージェントを、実際の開発チームのように運用する。</h1>
  <p>Codex、Claude Code、Cursor、Gemini CLIなどを実repoで使う人向けに、タスクの引き継ぎ、context削減、レビュー品質、memoryの安全性までを小さなOSSとして分けて提供します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="agent-workbench/">Agent Workbenchを見る</a>
    <a class="sw-button secondary" href="agent-token-optimizer/">repoを5分で診断する</a>
    <a class="sw-button secondary" href="pilot/">pilotに参加する</a>
    <a class="sw-button secondary" href="../">English</a>
  </div>
  <div class="sw-proof-row">
    <span><strong>ローカルファースト</strong><small>core workflowはSaaS登録なしで使える</small></span>
    <span><strong>MIT OSS</strong><small>中身を確認し、fork・統合できる</small></span>
    <span><strong>Agent agnostic</strong><small>複数のcoding agentを前提にする</small></span>
    <span><strong>実験で評価</strong><small>pilotはsignup数ではなくbefore/afterで見る</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Agent Series</span>
      <h2>今困っている1つのボトルネックから使う。</h2>
      <p>全部を導入する必要はありません。まず1つの問題を小さな実験で解決し、必要になったら組み合わせます。</p>
    </div>
    <a href="compare/">使い分けを見る</a>
  </div>

  <div class="sw-grid sw-product-grid">
    <article class="sw-card sw-product-card featured">
      <div class="sw-card-top"><span class="sw-icon">AW</span><span class="sw-badge">中心プロダクト</span></div>
      <h3>Agent Workbench</h3>
      <p class="sw-card-lead">複数coding agentのタスク、担当、handoff、review、完了memoryをrepo内で管理。</p>
      <ul class="sw-mini-list"><li>task memory / routing / claim lease</li><li>prompt / report / review / Local Control</li><li>7日間・実タスク3件のdesign partner pilot</li></ul>
      <div class="sw-card-actions"><a class="sw-button" href="agent-workbench/">詳しく見る</a><a href="https://github.com/soworks-jp/agent-workbench/issues/106">pilot参加 →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon green">TO</span><span class="sw-badge green">最短で試せる</span></div>
      <h3>Agent Token Optimizer</h3>
      <p class="sw-card-lead">AIが読むrepo contextの無駄、巨大ファイル、instruction肥大、indexing riskをローカル診断。</p>
      <ul class="sw-mini-list"><li>read-only scanから開始</li><li>安全な1〜3改善をbefore/after比較</li><li>source codeの外部送信なし</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-token-optimizer/">repo診断を見る</a><a href="https://github.com/soworks-jp/agent-token-optimizer/issues/6">audit pilot →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon orange">AP</span><span class="sw-badge orange">30分challenge</span></div>
      <h3>Agent Persona</h3>
      <p class="sw-card-lead">user、adopter、security、operator、buyerなどの視点をAI reviewへ明示的に追加。</p>
      <ul class="sw-mini-list"><li>通常reviewとのbefore/after</li><li>新しいactionable findingだけ測る</li><li>README / PRD / onboarding / handoff向け</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="../agent-persona/">英語ページ</a><a href="https://github.com/soworks-jp/agent-persona/issues/5">challenge参加 →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon cyan">HM</span><span class="sw-badge cyan">Research</span></div>
      <h3>Agent Human Memory</h3>
      <p class="sw-card-lead">明示的・review可能・forget可能なhuman-like memoryを安全性優先で研究。</p>
      <ul class="sw-mini-list"><li>preference / goal / episode / relationship context</li><li>authority / provenance / consent / forgetting</li><li>synthetic・低機密data限定の招待制pilot</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="../agent-human-memory/">英語ページ</a><a href="https://github.com/soworks-jp/agent-human-memory/issues/8">research pilot →</a></div>
    </article>
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Pilot募集中</span>
  <h2>「使って感想ください」ではなく、1つの具体的な実験を。</h2>
  <p>Workbenchは7日で実タスク3件、Token Optimizerはrepoのbefore/after audit、Personaは30分review challenge、Human Memoryは招待制research pilotです。</p>
  <div class="sw-actions">
    <a class="sw-button" href="pilot/">pilotを選ぶ</a>
    <a class="sw-button secondary" href="compare/">OSSを比較する</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp">GitHubを見る</a>
  </div>
</section>
