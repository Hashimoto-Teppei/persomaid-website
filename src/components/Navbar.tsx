import { useState } from "react"
import { Link, useLocation } from "react-router"
import appIcon from "../assets/Persomaid_AppIcon.png"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const navLink = (label: string, to: string) => {
    const isActive = pathname === to
    return (
      <Link
        to={to}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setMenuOpen(false)}
        className={`font-heading font-bold text-sm transition-colors duration-300 ${
          isActive
            ? "text-pm-primary border-b-2 border-pm-primary"
            : "text-pm-subtext hover:text-pm-primary"
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <nav className="glass-nav sticky top-0 w-full z-50 border-b border-pm-border shadow-[0_2px_20px_rgba(123,79,255,0.08)]">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Persomaid トップへ"
        >
          <img src={appIcon} alt="" aria-hidden="true" className="w-8 h-8 rounded-lg" />
          <span className="text-2xl font-black gradient-text font-heading tracking-tight">
            Persomaid
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLink("利用規約", "/terms")}
          {navLink("プライバシーポリシー", "/privacy")}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-pm-primary p-1 rounded-md"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-pm-border bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {navLink("利用規約", "/terms")}
          {navLink("プライバシーポリシー", "/privacy")}
        </div>
      )}
    </nav>
  )
}
