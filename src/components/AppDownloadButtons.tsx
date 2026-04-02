import googlePlayBadge from "@/assets/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"

// TODO: Google Play Store URL が確定したら設定する
const PLAY_STORE_URL = ""

export function AppDownloadButtons() {
  const hasUrl = Boolean(PLAY_STORE_URL)

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a
        href={hasUrl ? PLAY_STORE_URL : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play で手に入れよう"
        aria-disabled={!hasUrl}
        tabIndex={hasUrl ? undefined : -1}
        className={hasUrl ? undefined : "pointer-events-none"}
      >
        <img src={googlePlayBadge} alt="Google Play で手に入れよう" className="h-14" />
      </a>
      {/* App Store バッジ: iOS リリース時に追加 */}
    </div>
  )
}
