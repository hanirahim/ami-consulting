/**
 * Fond fixe du site : public/ceil.jpg
 */
export function SkyBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{
        backgroundColor: "#020612",
        backgroundImage: "url('/ceil.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Voile très léger — le ciel reste bien visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,18,0.1) 0%, rgba(2,6,18,0.05) 40%, rgba(2,6,18,0.2) 100%)",
        }}
      />
    </div>
  );
}
