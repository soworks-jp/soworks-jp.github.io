---
layout: page
title: 全OSS — SO Works Agent Series リリースロードマップ
description: SO Works Agent Seriesで公開予定の13 OSSと、各ツールの役割、pilot / preview / plannedの現在地を確認できます。
lang: ja
permalink: /ja/oss/
---

<section class="sw-product-hero sw-roadmap-hero">
  <span class="sw-kicker">SO Works OSSロードマップ</span>
  <h1>13のOSSを、1つのAgent Stackとして公開予定。</h1>
  <p>以下のプロジェクトはすべてpublic OSSとしてリリース予定です。すでにpilotやpreviewに入っているものと、公開package・docs・release gateを整備中のものを、同じ「リリース済み」に見せず現在地を明示します。release日を約束する表示ではありません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">pilot / release waitlistに参加</a>
    <a class="sw-button secondary" href="/ja/compare/">自分に合うツールを選ぶ</a>
  </div>
  <div class="sw-proof-row" aria-label="OSS release principles">
    <span><strong>13 OSSを公開予定</strong><small>privateで見えないプロジェクトもroadmapとして可視化</small></span>
    <span><strong>Local-first</strong><small>coreのagent workflow dataを自分の管理下に置く</small></span>
    <span><strong>Composable</strong><small>小さなpackage単体でも、stackとしても導入可能</small></span>
    <span><strong>架空のrelease日は出さない</strong><small>release gateの進捗に合わせてstageを更新</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Release stage</span>
      <h2>すべてリリース予定。ただし成熟度は正直に分けます。</h2>
      <p><strong>Pilot now</strong>は実利用のbounded experimentを募集中。<strong>Preview</strong>は実装が存在し、public packaging・docs・release gateを仕上げている段階。<strong>Planned</strong>はproduct contractがあり、public OSS releaseへ向けて準備中です。</p>
    </div>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Complete catalog</span>
      <h2>Product intentからrouting、execution、review、memory、operationsまで。</h2>
    </div>
  </div>
  <div class="sw-roadmap-grid">
    {% for project in site.data.oss_catalog %}
    <article class="sw-roadmap-card" id="{{ project.id }}">
      <div class="sw-card-top">
        <span class="sw-layer">{{ project.layer }}</span>
        <span class="sw-release-state{% if project.pilot %} active{% endif %}">{{ project.phase }}</span>
      </div>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary_ja }}</p>
      <div class="sw-release-line"><span class="sw-release-dot"></span>{{ project.status }}</div>
      <div class="sw-card-actions">
        {% if project.page_ja %}<a href="{{ project.page_ja }}">プロダクトページ →</a>{% endif %}
        {% if project.pilot %}<a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Pilot / waitlist →</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Public release waitlist</span>
  <h2>repoがpublicになる前から関心を伝えられます。</h2>
  <p>publicなwaitlist Issueで、どのprojectが自分の課題に合うか教えてください。active pilotでは1つのbounded experimentとsanitized evidenceを優先します。それ以外は「公開されたら知らせてほしい」だけでも構いません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public waitlistに参加</a>
    <a class="sw-button secondary" href="/ja/pilot/">現在のpilotを見る</a>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Companion surface</span>
      <h2>Agent Deskは別枠で管理します。</h2>
      <p>Agent DeskはAgent Workbenchのlocal desktop command centerですが、現在のrepoはProprietary licenseです。そのため<strong>13 OSSには含めません</strong>。将来ライセンス方針が変わる場合は、OSSとして先に見せずroadmap上で明示します。</p>
    </div>
  </div>
</section>
