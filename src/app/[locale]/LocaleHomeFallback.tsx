/** Approximate homepage chrome so Instant Shell navigations avoid a blank flash. */
export function LocaleHomeFallback() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading"
      className="min-h-[70vh] bg-[linear-gradient(180deg,#CDE8F9_0%,#E7F3F8_40%,#F8F6F2_100%)]"
    >
      <div className="mx-auto w-[min(100%-32px,1200px)] pt-10 pb-24">
        <div className="mb-8 h-10 w-40 rounded-full bg-white/70" />
        <div className="mb-4 h-16 w-[min(100%,28rem)] rounded-2xl bg-white/80" />
        <div className="mb-10 h-24 w-[min(100%,36rem)] rounded-2xl bg-white/60" />
        <div className="aspect-[16/9] w-full max-w-4xl rounded-[22px] bg-white/50" />
      </div>
    </main>
  );
}
