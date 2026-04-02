import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

const SECTIONS = [
  {
    num: "01",
    icon: "gavel",
    title: "適用範囲",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本利用規約（以下「本規約」）は、tntinfo（以下「当方」）が提供するスマートフォンアプリ「Persomaid」
        （以下「本アプリ」）のご利用に関して適用されます。本アプリをダウンロード・インストール・利用した時点で、
        本規約に同意したものとみなします。
      </p>
    ),
  },
  {
    num: "02",
    icon: "checklist",
    title: "ご利用条件",
    content: (
      <div className="space-y-3">
        <p className="text-pm-subtext leading-relaxed">
          本アプリをご利用いただくにあたり、以下の条件を確認してください。
        </p>
        <ul className="space-y-3">
          {[
            "本アプリは個人利用を目的として提供されています",
            "本アプリはAndroidおよびiOSを対象とした完全オフラインアプリです",
            "本アプリの利用にアカウント登録は必要ありません",
            "本アプリに記録するコンテンツの内容に関するすべての責任はお客様にあります",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-pm-subtext">
              <span
                className="material-symbols-outlined text-pm-primary text-sm mt-0.5 shrink-0"
                aria-hidden="true"
              >
                arrow_forward_ios
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: "03",
    icon: "block",
    title: "禁止事項",
    content: (
      <ul className="space-y-3">
        {[
          "本アプリのリバースエンジニアリング・逆コンパイル・改ざん",
          "本アプリを使用した違法行為または第三者の権利を侵害する行為",
          "本アプリを使用した他者のプライバシーを不当に侵害する行為",
          "本アプリの著作権・知的財産権を侵害する行為",
          "その他、当方が不適切と判断する行為",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-pm-subtext">
            <span
              className="material-symbols-outlined text-[#F44336] text-sm mt-0.5 shrink-0"
              aria-hidden="true"
            >
              do_not_disturb_on
            </span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04",
    icon: "info",
    title: "免責事項",
    content: (
      <div className="space-y-4">
        <p className="text-pm-subtext leading-relaxed">
          本アプリは現状のまま（as-is）提供されます。当方は以下について責任を負いません。
        </p>
        <ul className="space-y-3">
          {[
            "本アプリの使用または使用不能により生じた損害",
            "デバイスの故障・紛失・初期化等によるデータの損失",
            "本アプリの一時的な不具合・バグ・エラーによる影響",
            "OSのアップデート等による互換性の問題",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-pm-subtext">
              <span
                className="material-symbols-outlined text-pm-outline text-sm mt-0.5 shrink-0"
                aria-hidden="true"
              >
                info
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 rounded-xl bg-pm-surface-low border border-pm-border">
          <p className="text-pm-subtext text-sm leading-relaxed">
            本アプリはすべてのデータをデバイス内にのみ保存します。
            重要なデータは定期的にバックアップされることをお勧めします。
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    icon: "copyright",
    title: "知的財産権",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本アプリおよびアプリに含まれるすべてのコンテンツ（テキスト・デザイン・グラフィック・コード等）の
        著作権・商標権・その他の知的財産権は、当方または正当な権利者に帰属します。
        本規約に明示的に許可されている場合を除き、これらのコンテンツを無断で複製・転載・改変することを禁止します。
      </p>
    ),
  },
  {
    num: "06",
    icon: "update",
    title: "規約の変更",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        当方は、必要に応じて本規約を予告なく変更する場合があります。
        変更後の規約はアプリのアップデートまたは当ウェブサイトへの掲載をもって効力を生じるものとします。
        変更後も本アプリを継続してご利用いただいた場合、変更後の規約に同意いただいたものとみなします。
      </p>
    ),
  },
  {
    num: "07",
    icon: "balance",
    title: "準拠法・管轄裁判所",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本規約は日本法に準拠して解釈されます。
        本規約に関連する紛争については、当方の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
      </p>
    ),
  },
  {
    num: "08",
    icon: "alternate_email",
    title: "お問い合わせ",
    content: (
      <div className="space-y-3">
        <p className="text-pm-subtext leading-relaxed">
          本規約に関するご質問やご不明な点がございましたら、下記の連絡先までお問い合わせください。
        </p>
        <a
          href="mailto:tntinfo.app@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pm-surface-low border border-pm-border text-pm-primary font-body font-bold hover:bg-pm-primary-fixed transition-colors"
        >
          <span
            className="material-symbols-outlined text-sm"
            aria-hidden="true"
          >
            mail
          </span>
          tntinfo.app@gmail.com
          <span
            className="material-symbols-outlined text-sm"
            aria-hidden="true"
          >
            open_in_new
          </span>
        </a>
      </div>
    ),
  },
]

export function TermsPage() {
  return (
    <div className="min-h-screen bg-pm-bg text-pm-text">
      <Navbar />

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-16 pb-12 px-6 md:px-10 relative overflow-hidden bg-pm-section-alt">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-pm-primary/6 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-[1rem] bg-pm-primary shadow-rpg-lg mb-2"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined icon-filled text-white text-3xl">
              gavel
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-pm-text tracking-tight">
            利用規約
          </h1>
          <div className="flex items-center justify-center gap-2 text-pm-primary font-heading text-sm tracking-[0.2em]">
            <span className="w-8 h-px bg-pm-primary/40" aria-hidden="true" />
            最終更新: 2026年4月2日
            <span className="w-8 h-px bg-pm-primary/40" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ── Content ────────────────────────────── */}
      <div className="pb-24 px-6 md:px-10 pt-10">
        <div className="max-w-3xl mx-auto space-y-5">
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl border border-pm-border shadow-rpg overflow-hidden border-l-4 border-l-pm-primary hover:translate-x-1 transition-transform duration-300"
            >
              <div className="p-8">
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-pm-primary font-heading text-lg font-bold opacity-40 shrink-0 mt-0.5">
                    {section.num}
                  </span>
                  <h2 className="text-xl font-heading font-bold text-pm-text flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-pm-primary text-xl"
                      aria-hidden="true"
                    >
                      {section.icon}
                    </span>
                    {section.title}
                  </h2>
                </div>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
