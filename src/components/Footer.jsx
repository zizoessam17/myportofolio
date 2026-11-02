import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer footer-center border-t border-base-300 bg-base-100 p-6 text-base-content/70">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite and DaisyUI.
      </p>
    </footer>
  );
}