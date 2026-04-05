import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

const SECTIONS = [
  {
    num: "01",
    icon: "info",
    title: "概要",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        Persomaid（以下「本アプリ」）は、人の特徴を記録・管理するペルソナ管理アプリです。
        本アプリは完全にオフラインで動作し、お客様のプライバシーを最優先に設計されています。
        本プライバシーポリシーは、本アプリが個人情報をどのように取り扱うかについて説明するものです。
      </p>
    ),
  },
  {
    num: "02",
    icon: "data_usage",
    title: "データの収集について",
    content: (
      <div className="space-y-4">
        <p className="text-pm-subtext leading-relaxed">
          Persomaidは、個人データを一切収集・送信・共有しません。本アプリは完全にオフラインで動作します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: "block", label: "アカウント登録不要" },
            { icon: "visibility_off", label: "分析・トラッキングなし" },
            { icon: "wifi_off", label: "ネットワーク接続なし" },
            { icon: "share_off", label: "第三者へのデータ共有なし" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-pm-surface-low p-3 rounded-xl border border-pm-border"
            >
              <span
                className="material-symbols-outlined text-[#00BCD4] text-sm"
                aria-hidden="true"
              >
                {icon}
              </span>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-pm-subtext">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "03",
    icon: "database",
    title: "データの保存について",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本アプリ内で作成したすべてのデータ（ペルソナ・グループ・関連情報等）は、
        お客様のデバイス内のローカル{" "}
        <span className="font-mono font-bold text-pm-primary">SQLite</span>{" "}
        データベースにのみ保存されます。
        これらのデータが外部のサーバーやクラウドサービスにアップロードされることは一切ありません。
        データへのアクセスは、本アプリを通じてのみ可能です。
      </p>
    ),
  },
  {
    num: "04",
    icon: "delete_forever",
    title: "データの削除について",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        お客様はいつでも、本アプリ内の機能を使用してデータを削除することができます。
        本アプリをアンインストールすると、デバイス上に保存されているすべてのデータが完全に削除されます。
        クラウドにバックアップされたデータは存在しないため、復元を行うことはできません。
      </p>
    ),
  },
  {
    num: "05",
    icon: "update",
    title: "本ポリシーの変更について",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本プライバシーポリシーは、必要に応じて予告なく変更される場合があります。
        変更が行われた場合、上記の「最終更新日」に反映されます。
        重要な変更がある場合は、アプリのアップデートを通じてお知らせします。
        継続して本アプリをご利用いただくことで、変更後のポリシーに同意いただいたものとみなします。
      </p>
    ),
  },
  {
    num: "06",
    icon: "alternate_email",
    title: "お問い合わせ",
    content: (
      <p className="text-pm-subtext leading-relaxed">
        本プライバシーポリシーに関するご質問やご不明な点がございましたら、
        アプリストアのレビュー欄またはサポートページよりお問い合わせください。
      </p>
    ),
  },
]

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-pm-bg text-pm-text">
      <Navbar />

      {/* ── Header ─────────────────────────────── */}
      <div className="pt-16 pb-12 px-6 md:px-10 relative overflow-hidden bg-pm-section-alt">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-pm-primary/6 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-[1rem] bg-pm-primary shadow-rpg-lg mb-2"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined icon-filled text-white text-3xl">
              shield_lock
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-pm-text tracking-tight">
            プライバシーポリシー
          </h1>
          <div className="flex items-center justify-center gap-2 text-pm-primary font-heading text-sm tracking-[0.2em]">
            <span className="w-8 h-px bg-pm-primary/40" aria-hidden="true" />
            最終更新: 2026年3月21日
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
