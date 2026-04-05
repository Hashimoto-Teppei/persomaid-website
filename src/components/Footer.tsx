import { Link } from "react-router"
import appIcon from "../assets/Persomaid_AppIcon.png"

export function Footer() {
  return (
    <footer className="bg-white w-full py-8 border-t border-pm-border">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-4">
        {/* Brand */}
        <div className="text-lg font-black gradient-text font-heading tracking-tight flex items-center gap-2">
          <img
            src={appIcon}
            alt=""
            aria-hidden="true"
            className="w-6 h-6 rounded-md"
          />
          Persomaid
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            to="/terms"
            className="text-pm-subtext hover:text-pm-primary transition-colors duration-200 text-sm font-body hover:underline"
          >
            利用規約
          </Link>
          <Link
            to="/privacy"
            className="text-pm-subtext hover:text-pm-primary transition-colors duration-200 text-sm font-body hover:underline"
          >
            プライバシーポリシー
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-pm-subtext text-sm font-body">
          © 2026 株式会社TNT情報サービス
        </div>
      </div>
    </footer>
  )
}
