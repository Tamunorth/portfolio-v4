export function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 px-6 sm:px-8 border-t border-border/30">
      <div className="w-full max-w-[1152px] flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-xs text-text-muted tracking-tight">
          tamunorth
        </span>
        <p className="text-text-muted/50 text-[11px] tracking-wide">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
