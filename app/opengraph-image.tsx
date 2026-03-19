import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MBK Global";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #F1EEF9 0%, #E8E3F7 100%)",
          color: "#1A1A1A",
          fontFamily: "Inter, Arial, sans-serif",
          gap: 22,
        }}
      >
        <svg width="260" height="180" viewBox="21 28 128 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.7138 101.2L21.8223 70.0229C34.5971 72.9317 40.6868 66.4409 42.1346 62.8318L53.8969 38.6248C60.9212 28.8743 69.083 34.5622 72.2859 38.6248L83.22 62.8318C91.3046 77.0511 100.173 68.7564 103.597 62.8318L114.531 40.1484C123.013 29.4499 130.877 35.6906 133.748 40.1484L148.293 71.5655C136.16 68.6033 132.081 72.8841 130.976 75.5438L118.176 101.2C110.489 115.102 101.388 106.992 97.7986 101.2L85.7061 75.5438C80.3488 69.0424 72.1191 72.0046 70.3115 75.5438L56.7836 101.2C48.3928 114.969 40.5742 106.937 37.7138 101.2Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="85.0578" y1="33.241" x2="85.0578" y2="108.876" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7E25E9"/>
              <stop offset="1" stopColor="#3C0480"/>
            </linearGradient>
          </defs>
        </svg>

        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -1, color: "#111111" }}>MBK</div>
          <div style={{ fontSize: 80, fontWeight: 300, letterSpacing: -1, color: "#111111" }}>GLOBAL</div>
        </div>

        <div style={{ fontSize: 34, color: "#3D1E85", fontWeight: 500 }}>
          Built to Empower Digital Transformation
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
