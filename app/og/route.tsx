import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Christian Crivelli';
  const subtitle =
    searchParams.get('subtitle') ??
    'Business Analytics & Data Science Portfolio';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 16,
            backgroundColor: 'white',
            color: 'black',
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          CC
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 32, marginTop: 20, color: '#a3a3a3' }}>
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
