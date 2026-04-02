import appIcon from "../assets/Persomaid_AppIcon.png"
import screenshotMachikonInput from "../assets/Screenshot_街コンモード_入力.png"
import screenshotMachikon from "../assets/Screenshot_街コンモード＿トップ.png"
import { AppDownloadButtons } from "../components/AppDownloadButtons"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

const STAT_BARS = [
  { w: "75%", color: "#622FE5", label: "stat-primary" },
  { w: "90%", color: "#00BCD4", label: "stat-secondary" },
  { w: "55%", color: "#FF9500", label: "stat-tertiary" },
]

const MODES = [
  {
    emoji: "⚡",
    name: "スカウター",
    desc: "短時間でサクッとスキャン。第一印象や最低限のステータスを即座に記録します。",
    accent: "#FF9500",
    colSpan: "md:col-span-2",
  },
  {
    emoji: "🗡",
    name: "クエスト",
    desc: "会話をミッションに変える。相手の話した内容をタスクや達成目標としてアーカイブ。",
    accent: "#00C853",
    colSpan: "md:col-span-2",
  },
  {
    emoji: "🎮",
    name: "キャラメイク",
    desc: "全項目をじっくり入力。外見、スキル、性格、背景まで完璧なプロファイルを作成。",
    accent: "#7B4FFF",
    colSpan: "md:col-span-2",
  },
  {
    emoji: "🔍",
    name: "プロファイリング",
    desc: "事前情報を機密ファイルに整理。対面前にわかっているデータを集約し、戦略的な出会いを支援。",
    accent: "#F44336",
    colSpan: "md:col-span-3",
  },
  {
    emoji: "🏰",
    name: "ギルド",
    desc: "チームをまとめて編成。コミュニティや組織ごとにキャラクターをグループ分けして管理。",
    accent: "#00BCD4",
    colSpan: "md:col-span-3",
  },
]

const FEATURE_CHIPS = [
  { icon: "shield_lock", label: "100% オフライン" },
  { icon: "database_off", label: "会員登録不要" },
  { icon: "auto_awesome", label: "RPG風 UI/UX" },
]

const DEMO_BULLETS = [
  { icon: "forum", text: "会話アドバイザーでアイスブレイクをサポート" },
  { icon: "edit_note", text: "会話後すぐに名前・年齢・職業などを記録" },
  { icon: "lock", text: "記録はすべてデバイス内に保存" },
]

const PRIVACY_ITEMS = [
  {
    emoji: "📵",
    title: "サーバーレス",
    desc: "クラウドとは無縁。すべてローカル完結。バックアップも自分の好きな場所へ。",
  },
  {
    emoji: "🔒",
    title: "収集ゼロ",
    desc: "個人情報・分析・トラッキング、一切なし。私たちがあなたのデータを見ることは不可能です。",
  },
  {
    emoji: "🗑",
    title: "完全削除",
    desc: "アンインストールで、データは跡形もなく消える。迷わず、安心して試せます。",
  },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-pm-bg text-pm-text">
      <Navbar />

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center px-6 lg:px-20 py-16 lg:py-0 overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute top-0 right-0 w-150 h-150 bg-pm-primary/6 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-100 h-100 bg-[#00BCD4]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: text */}
          <div className="space-y-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-pm-primary-fixed text-pm-primary font-heading font-bold text-xs tracking-widest uppercase">
              PERSONA MANAGEMENT
            </span>

            <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight tracking-tighter text-pm-text">
              出会いを、
              <br />
              <span className="gradient-text">キャラクター</span>に。
            </h1>

            <p className="text-xl text-pm-subtext max-w-xl leading-relaxed">
              ゲームのキャラメイク感覚で、あなたの出会いを詳細に記録。
              すべてのデータはデバイス内に、完全プライベートで。
            </p>

            {/* CTA buttons */}
            <div className="pt-2">
              <AppDownloadButtons />
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              {FEATURE_CHIPS.map(({ icon, label }) => (
                <div
                  key={label}
                  className="bg-white border border-pm-border px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
                >
                  <span
                    className="material-symbols-outlined icon-filled text-pm-primary text-sm"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span className="text-sm font-medium text-pm-text">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center items-center">
            {/* Blob behind phone */}
            <div
              className="absolute w-[120%] h-[120%] bg-pm-primary/5 rounded-full blur-3xl -z-10"
              aria-hidden="true"
            />

            {/* Phone frame */}
            <div
              className="relative w-75 h-155 bg-white rounded-[3rem] p-3.5 shadow-rpg-lg border-8 border-white ring-1 ring-pm-border overflow-hidden"
              aria-hidden="true"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-white rounded-b-2xl z-20" />

              <div className="w-full h-full bg-pm-surface-low rounded-[2.3rem] overflow-hidden relative flex flex-col phone-inner">
                <div className="p-5 space-y-4 overflow-y-auto phone-inner">
                  {/* App header bar */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="w-10 h-10 rounded-full bg-pm-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-pm-primary text-lg">
                        person_add
                      </span>
                    </div>
                    <span className="font-heading font-bold text-xs text-pm-primary tracking-wider">
                      PERSOMAID
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-pm-surface-mid" />
                  </div>

                  {/* Persona card */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-pm-border">
                    <div className="w-full aspect-4/5 rounded-xl overflow-hidden relative mb-3 bg-linear-to-br from-pm-primary via-[#9B6FFF] to-[#00BCD4] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/40 text-6xl">
                        person
                      </span>
                      <div className="absolute bottom-2 left-2 bg-pm-primary px-3 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined icon-filled text-[10px]">
                          star
                        </span>
                        Lv.42 TECH-MAGE
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-base">
                      Alex River
                    </h3>
                    <p className="text-[10px] text-pm-subtext italic mb-3">
                      Creative Strategist | Web3
                    </p>
                    {/* Stat bars */}
                    <div className="space-y-1.5">
                      {STAT_BARS.map(({ w, color, label }) => (
                        <div
                          key={label}
                          className="w-full h-1.5 bg-pm-surface-mid rounded-full overflow-hidden"
                        >
                          <div
                            className="h-full rounded-full"
                            style={{ width: w, backgroundColor: color }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating action card */}
                  <div className="bg-pm-primary rounded-xl p-4 flex items-center gap-3 text-white translate-x-2 shadow-rpg-lg">
                    <span className="material-symbols-outlined icon-filled">
                      star
                    </span>
                    <div>
                      <div className="text-[9px] opacity-70 uppercase tracking-wider">
                        New Persona
                      </div>
                      <div className="text-xs font-bold">
                        キャラメイクモード
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge: ゲームコントローラー */}
            <div
              className="absolute top-8 -right-4 bg-white p-3 rounded-2xl shadow-rpg border border-pm-border animate-float-slow"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-pm-primary text-4xl">
                videogame_asset
              </span>
            </div>

            {/* Floating badge: 今日の出会い */}
            <div
              className="absolute bottom-16 -left-6 bg-white px-4 py-3 rounded-2xl shadow-rpg border border-pm-border animate-float"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined icon-filled text-[#FF9500] text-xl">
                  trophy
                </span>
                <div>
                  <div className="text-[9px] text-pm-subtext uppercase tracking-wide">
                    今日の出会い
                  </div>
                  <div className="text-xs font-bold text-pm-text">
                    +3 新キャラ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modes Section ───────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full bg-pm-primary"
                aria-hidden="true"
              />
              <span className="font-heading font-bold tracking-widest text-pm-primary uppercase text-sm">
                Features
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-pm-text">
              5つの作成モード
            </h2>
            <p className="text-pm-subtext mt-4 max-w-xl mx-auto">
              あなたのシチュエーションに合わせて選べる5つのコア。RPGのように楽しみながら出会いを記録。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {MODES.map((mode) => (
              <div
                key={mode.name}
                className={`mode-card ${mode.colSpan} shadow-rpg border-l-4 p-8`}
                style={{ borderLeftColor: mode.accent }}
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {mode.emoji}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-pm-text">
                  {mode.name}
                </h3>
                <p className="text-pm-subtext leading-relaxed text-sm">
                  {mode.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Demo Section ─────────────────── */}
      <section className="bg-white py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: テキスト */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-pm-secondary"
                aria-hidden="true"
              />
              <span className="font-heading font-bold tracking-widest text-pm-secondary uppercase text-sm">
                In Action
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-pm-text">
              街コン・合コンの
              <br />
              会話を、記録へ。
            </h2>
            <p className="text-pm-subtext text-lg leading-relaxed max-w-md">
              会話アドバイザーがその場のトークをサポート。
              終わったらそのまま相手の情報をフォームに入力して保存。
            </p>
            <ul className="space-y-3">
              {DEMO_BULLETS.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined icon-filled text-pm-secondary text-xl mt-0.5"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span className="text-pm-subtext text-sm leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 2台のphoneフレーム */}
          <div className="relative flex justify-center items-center gap-2 h-140">
            {/* 背景ブロブ */}
            <div
              className="absolute inset-0 bg-pm-secondary/15 rounded-full blur-3xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-pm-primary/8 rounded-full blur-2xl -z-10 scale-50"
              aria-hidden="true"
            />
            {/* Phone 1: 左に傾けて上にオフセット */}
            <div className="relative w-72 h-108 bg-white rounded-[2.5rem] p-3 border-8 border-white ring-1 ring-pm-border overflow-hidden -translate-y-10 -rotate-6 shadow-phone-teal">
              <img
                src={screenshotMachikon}
                alt="街コンモード 会話アドバイザー"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
            {/* Phone 2: 右に傾けて下にオフセット */}
            <div className="relative w-72 h-108 bg-white rounded-[2.5rem] p-3 border-8 border-white ring-1 ring-pm-border overflow-hidden translate-y-10 rotate-6 shadow-phone-purple">
              <img
                src={screenshotMachikonInput}
                alt="街コンモード 入力フォーム"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Privacy Section ──────────────────────── */}
      <section className="bg-pm-section-alt py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            {/* Shield icon */}
            <div
              className="w-20 h-20 bg-pm-primary rounded-[1.4rem] mx-auto flex items-center justify-center shadow-rpg-lg animate-float"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined icon-filled text-white text-4xl">
                shield
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-pm-text">
              あなたのデータは、
              <br className="md:hidden" />
              あなただけのもの。
            </h2>
            <p className="text-pm-subtext max-w-2xl mx-auto text-lg">
              プライバシーは機能ではなく、私たちの基礎です。
              外部サーバーとの通信は一切行われません。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRIVACY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white p-10 rounded-2xl shadow-rpg flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-pm-surface-low flex items-center justify-center">
                  <span className="text-3xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-pm-text">
                  {item.title}
                </h3>
                <p className="text-sm text-pm-subtext leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-pm-bg">
        <div className="max-w-4xl mx-auto bg-pm-primary rounded-[2.5rem] p-12 lg:p-16 text-white shadow-rpg-lg relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-8">
            <img
              src={appIcon}
              alt="Persomaid"
              className="w-20 h-20 rounded-2xl shadow-lg mx-auto"
            />
            <h2 className="font-heading font-bold text-4xl lg:text-5xl leading-tight">
              冒険の準備は、
              <br />
              できていますか？
            </h2>
            <p className="text-white/80 text-lg max-w-md mx-auto">
              今すぐ Persomaid
              をダウンロードして、新しい管理体験を始めましょう。
            </p>
            <div className="flex justify-center">
              <AppDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
