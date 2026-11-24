import { ImageResponse } from 'next/og';

export const alt = 'AKL Studio — Web Apps, Storefronts & Custom Systems';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '84px 92px',
          backgroundColor: '#000000',
          position: 'relative',
        }}
      >
        {/* Top Row: Brand Monogram left, Live status dot right (Exact portfolio layout) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Brand Wordmark with pink period */}
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span
              style={{
                fontFamily: 'sans-serif',
                fontSize: 36,
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              AKL Studio
            </span>
            <span
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: '#FF2E9A',
                marginLeft: 2,
              }}
            >
              .
            </span>
          </div>

          {/* Status Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 17,
              color: '#A0A0AB',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#FF2E9A',
                boxShadow: '0 0 16px #FF2E9A',
              }}
            />
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Available now</span>
            <span style={{ opacity: 0.4 }}>—</span>
            <span>24–48h Turnaround</span>
          </div>
        </div>

        {/* Center Section: Massive Display Typography with Pink Underline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            maxWidth: 1060,
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.06,
              letterSpacing: '-0.04em',
              fontFamily: 'sans-serif',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
            }}
          >
            <span style={{ marginRight: 20 }}>Websites &amp; dashboards</span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span
                style={{
                  borderBottom: '6px solid #FF2E9A',
                  paddingBottom: 4,
                  marginRight: 20,
                  color: '#FFFFFF',
                }}
              >
                built clean
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: 24,
              color: '#A0A0AB',
              margin: 0,
              lineHeight: 1.45,
              fontFamily: 'sans-serif',
              maxWidth: 920,
            }}
          >
            Custom websites, Google Sheet order dashboards, and marketing graphics. Fixed upfront rates starting at PHP 500.
          </p>
        </div>

        {/* Bottom Footer Row: Monospace stats on left, Domain on right (Exact portfolio divider) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontFamily: 'monospace',
            fontSize: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>PHP 500 <span style={{ color: '#71717A', fontWeight: 400 }}>base</span></span>
            <span style={{ color: '#3F3F46' }}>·</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>24–48h <span style={{ color: '#71717A', fontWeight: 400 }}>turnaround</span></span>
            <span style={{ color: '#3F3F46' }}>·</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>0 <span style={{ color: '#71717A', fontWeight: 400 }}>monthly lock-in</span></span>
          </div>

          <span
            style={{
              color: '#FF2E9A',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            studio.aklmn.me
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
