export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-black/70">
        <div className="mt-6 text-xs">© {new Date().getFullYear()} 慧清能源. 保留所有权利。</div>
      </div>
    </footer>
  );
}


