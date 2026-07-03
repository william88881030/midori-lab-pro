export default function Aurora() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* Top-left aurora ribbon sweep */}
      <div
        className="absolute -left-[18%] -top-[12%] h-[72%] w-[62%]"
        style={{
          background:
            "radial-gradient(ellipse 58% 54% at 44% 48%, rgba(16,185,129,0.55) 0%, rgba(5,150,105,0.28) 40%, transparent 72%)",
          filter: "blur(56px)",
          transform: "rotate(-14deg)",
        }}
      />

      {/* Left eclipse rim glow — matches reference dark void edge */}
      <div
        className="absolute -left-[28%] top-[8%] h-[72%] w-[58%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 78% 50%, rgba(16,185,129,0.42) 0%, rgba(16,185,129,0.18) 18%, transparent 42%)",
          filter: "blur(36px)",
        }}
      />

      {/* Mid horizontal aurora band */}
      <div
        className="absolute left-[5%] top-[38%] h-[18%] w-[90%]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.14) 28%, rgba(52,211,153,0.22) 50%, rgba(16,185,129,0.12) 72%, transparent 100%)",
          filter: "blur(28px)",
        }}
      />

      {/* Bottom-right bright ribbon */}
      <div
        className="absolute -bottom-[18%] -right-[8%] h-[52%] w-[58%]"
        style={{
          background:
            "radial-gradient(ellipse 68% 52% at 58% 62%, rgba(16,185,129,0.58) 0%, rgba(6,95,70,0.28) 48%, transparent 76%)",
          filter: "blur(62px)",
        }}
      />
      <div
        className="absolute bottom-[8%] right-[6%] h-[28%] w-[34%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(110,231,183,0.38) 0%, rgba(16,185,129,0.16) 55%, transparent 78%)",
          filter: "blur(40px)",
        }}
      />

      {/* Right glowing curve + node + trailing dots */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="curve-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="curve-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
            <stop offset="42%" stopColor="#34D399" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        <path
          d="M 1590 930 Q 1730 730, 1690 530 Q 1650 350, 1790 190"
          stroke="url(#curve-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#curve-glow)"
        />

        <circle
          cx="1690"
          cy="530"
          r="4.5"
          fill="#FFFFFF"
          filter="url(#node-glow)"
          opacity="0.95"
        />
        <circle
          cx="1690"
          cy="530"
          r="11"
          fill="none"
          stroke="#6EE7B7"
          strokeWidth="0.5"
          opacity="0.32"
        />

        {[
          { cx: 1720, cy: 430, r: 2.2, o: 0.62 },
          { cx: 1745, cy: 350, r: 1.8, o: 0.48 },
          { cx: 1765, cy: 280, r: 1.4, o: 0.34 },
          { cx: 1780, cy: 220, r: 1.1, o: 0.22 },
        ].map((dot) => (
          <circle
            key={`${dot.cx}-${dot.cy}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#FFFFFF"
            opacity={dot.o}
            filter="url(#curve-glow)"
          />
        ))}
      </svg>

      {/* Top-center faint glow */}
      <div
        className="absolute left-[20%] top-[4%] h-[12%] w-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(16,185,129,0.1) 0%, transparent 72%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}
