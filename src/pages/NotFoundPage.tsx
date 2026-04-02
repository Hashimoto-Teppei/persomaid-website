import { Link } from "react-router"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-pm-bg text-pm-text flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center space-y-8 max-w-md">
          {/* Icon */}
          <div
            className="w-24 h-24 bg-pm-primary rounded-[1.8rem] mx-auto flex items-center justify-center shadow-rpg-lg animate-float"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined icon-filled text-white text-5xl">
              search_off
            </span>
          </div>

          {/* Error code */}
          <div className="space-y-2">
            <p className="font-heading font-bold text-8xl gradient-text leading-none">
              404
            </p>
            <h1 className="font-heading font-bold text-2xl text-pm-text">
              ページが見つかりません
            </h1>
            <p className="text-pm-subtext leading-relaxed">
              お探しのページは存在しないか、移動した可能性があります。
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-pm-primary text-white px-8 py-4 rounded-full font-heading font-bold shadow-rpg-lg hover:opacity-90 transition-opacity"
          >
            <span
              className="material-symbols-outlined icon-filled text-xl"
              aria-hidden="true"
            >
              home
            </span>
            トップへ戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
