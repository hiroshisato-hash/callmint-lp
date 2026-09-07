/**
 * 3つの広告LPが共有する設定。
 *
 * ここに書いてよいのは **事実として確認できるものだけ**。
 *   - 料金の正本 …… callmint-repo `spec/pricing.md` と `tokushoho.html`
 *   - 機能の範囲 …… callmint-cms `lib/moyoPricing.ts` / `lib/moyoTabs.ts` / docs/
 *   - 稼働実績   …… callmint-repo `spec/seo.md`（公開してよい成果の数字は「無い」）
 *
 * 導入店舗数・離職改善率・削減時間などの数値は **作らない**。
 */

/** 公開ドメイン。正本は seo/keywords.json の "site"（build.mjs が読んで上書きする） */
export const DEFAULT_SITE = 'https://call.moyo.tokyo'

/** 既存LPと同じ送信先。callmint-cms `app/api/contact/route.ts`（CORS 許可済み） */
export const CONTACT_API = 'https://callmint-cms.vercel.app/api/contact'

/**
 * PostHog。既存LP（index.html）と同一プロジェクトを使う＝計測基盤を二重に入れない。
 */
export const POSTHOG = {
  key: 'phc_CZUuhM26c3BNkvvAx5Cg79Ci77Ux935w4ckfCdhrUXcR',
  host: 'https://us.i.posthog.com',
}

/**
 * Meta Pixel。**未設定（空文字）でも表示・ビルドが壊れない**こと。
 * 値を入れるとピクセルが読み込まれる。個人情報は絶対に送らない（client.mjs 参照）。
 */
export const META_PIXEL_ID = ''

/** 2026年9月のパイロット募集キャンペーン */
export const CAMPAIGN = {
  badge: '9月30日まで・先着10店舗',
  headline: 'MOYOを3ヶ月無料でお試し',
  deadlineText: '2026年9月30日まで',
  /** 箇条書き（キャンペーンセクションと料金セクションの両方で使う） */
  terms: [
    '2026年9月30日までにお申し込みいただいた店舗が対象です',
    'ご利用開始日から3ヶ月間、月額基本料が無料になります',
    '4ヶ月目から通常料金です（金額は下の「料金」に記載しています）',
    '初期費用は0円です',
    '最低契約期間はありません。いつでも解約できます',
    'パイロット店舗として、月1回程度の簡単なヒアリングにご協力をお願いする場合があります',
  ],
  /**
   * 課金開始条件と継続確認の方法。
   * 「黙っていると自動で有料になる」と読まれないよう、明示的に書く。
   */
  billing: {
    title: '料金が発生するタイミング',
    points: [
      'このフォームを送信した時点では、料金は一切発生しません。クレジットカードの登録も不要です。',
      '担当者からご連絡し、内容にご納得いただいたうえで利用を開始します。',
      '無料期間が終わる2週間前にメールでご案内します。',
      '継続のご意思を確認できた場合にのみ、4ヶ月目から有料契約に移行します。ご返信がないまま自動で課金されることはありません。',
      '継続されない場合は、費用は一切かかりません。',
    ],
  },
}

/**
 * 料金。正本は callmint-repo `spec/pricing.md`（= Stripe の price）と `tokushoho.html`。
 * すべて税抜・月額。
 */
export const PRICING = {
  packNote: '使う機能の数で基本料が決まります（税抜・月額）',
  packs: [
    { count: '機能 1つ', price: '5,000円' },
    { count: '機能 2つ', price: '9,000円' },
    { count: '機能 3つ', price: '13,000円' },
    { count: '機能 4つすべて', price: '15,000円' },
  ],
  featureNames: '電話（MOYO 電話）／集客／LINE会員／サーベイ',
  /** 電話を選んだときだけ発生する加算。tokushoho.html と一致させること */
  callTiers: [
    { label: '月50件まで', price: '加算なし' },
    { label: '月200件まで', price: '+10,000円' },
    { label: '月200件を超えた分', price: '1件あたり100円（従量）' },
  ],
  /**
   * 電話まわりの実費。**無料キャンペーンの対象外**。
   * 正本は tokushoho.html「商品代金以外の必要料金」。
   */
  callActualCosts: [
    {
      label: 'AI専用電話番号の維持費',
      price: '月額 739円',
      note: '為替レートにより変動する場合があります',
    },
    {
      label: '転送サービス料',
      price: '月額 約500円',
      note: '既存の番号から転送する場合。ご契約中の通信事業者へお支払いいただきます',
    },
    {
      label: '転送通話料',
      price: '通信事業者の料金',
      note: '既存の番号から転送する場合。ご契約中の通信事業者へお支払いいただきます',
    },
    {
      label: '月200件を超えた分の通話',
      price: '1件あたり 100円',
      note: '無料期間中も超過分は実費です',
    },
  ],
  taxNote: '表示価格はすべて税抜です。別途、消費税が加算されます。',
}

/** 申込みフォームの「希望機能」。値は cms `lib/moyoPricing.ts` の MOYO_FEATURES と揃える */
export const FORM_FEATURES = [
  { value: 'survey', label: 'スタッフサーベイ（MOYO サーベイ）' },
  { value: 'marketing', label: 'ブログ自動作成・クチコミ返信（MOYO 集客）' },
  { value: 'call', label: 'AI電話一次受付（MOYO 電話）' },
  { value: 'line', label: 'LINE会員証・クーポン（MOYO LINE）' },
]

export const SALON_COUNT_OPTIONS = ['1店舗', '2〜3店舗', '4〜9店舗', '10店舗以上']
export const STAFF_COUNT_OPTIONS = ['1〜3人', '4〜9人', '10〜29人', '30人以上']

/** 計測イベント名。client.mjs と __tests__ が参照する */
export const EVENTS = /** @type {const} */ ({
  view: 'lp_view',
  ctaClick: 'campaign_cta_click',
  formStart: 'form_start',
  formSubmit: 'form_submit',
  formSuccess: 'form_success',
  formError: 'form_error',
})

/** URL から拾って保持するパラメータ */
export const UTM_KEYS = /** @type {const} */ ([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
])

/** 全LP共通のフッターリンク（既存サイトの実在ページのみ） */
export const FOOTER_LINKS = [
  { href: '/privacy.html', label: 'プライバシーポリシー' },
  { href: '/terms.html', label: '利用規約' },
  { href: '/tokushoho.html', label: '特定商取引法に基づく表記' },
  { href: '/', label: 'MOYO トップ' },
  { href: 'https://8zero.co.jp', label: '運営会社', external: true },
]

export const COMPANY = '合同会社8ZERO'
