import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function md(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="font-family:var(--font-display)">$1</strong>');
}

function MD({ children, style }: { children: string; style?: React.CSSProperties }) {
  return <span dangerouslySetInnerHTML={{ __html: md(children) }} style={style} />;
}

function PartnerLogo({ partner }: { partner: { name: string; logo: string; href?: string; invert?: boolean; containerWidth?: number; maxHeight?: string } }) {
  const src = useBaseUrl(partner.logo);
  const width = partner.containerWidth ?? 140;
  const maxHeight = partner.maxHeight ?? '2.25rem';
  const img = <img src={src} alt={partner.name} style={{ maxWidth: '100%', maxHeight, width: 'auto', height: 'auto', objectFit: 'contain', opacity: 0.9, filter: partner.invert ? 'brightness(0) invert(1)' : undefined }} />;
  return (
    <div style={{ width: `${width}px`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 2rem' }}>
      {partner.href
        ? <a href={partner.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', opacity: 1, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.7'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>{img}</a>
        : img}
    </div>
  );
}

export default function NewsroomLandingPage() {
  const { items } = usePluginData('load-markdown-data', 'landing-page') as { items: Record<string, any>[] };

  if (!items?.length) return null;

  const s = (key: string) => items.find(i => i.section === key) ?? {};

  const hero = s('hero');
  const credibility = s('credibility');
  const approach = s('approach');
  const why = s('whyItWorks');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');

        :root {
          --hh-paper: oklch(0.99 0.005 90);
          --hh-ink: oklch(0.18 0.01 180);
          --hh-primary-text: oklch(0.30 0.01 180);
          --hh-secondary-text: oklch(0.48 0.01 180);
          --hh-border: oklch(0.92 0.008 90);
          --hh-surface-subtle: oklch(0.96 0.006 90);
          --hh-accent: oklch(0.50 0.24 158);
          --font-display: 'Chakra Petch', sans-serif;
          --font-editorial: 'Fraunces', serif;
          --font-ui: 'Geist', sans-serif;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .partner-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee { animation: none; }
        }

        .landing-container { font-family: var(--font-ui); }
        .landing-container * { box-sizing: border-box; }
        .section-dark a { color: color-mix(in oklch, var(--hh-accent) 80%, var(--hh-paper)); }
        .section-dark a:hover { color: var(--hh-paper); }
      `}</style>

      <div className="landing-container" style={{ minHeight: '100vh', backgroundColor: 'var(--hh-paper)' }}>

        {/* Hero */}
        <section style={{ backgroundColor: 'var(--hh-ink)', color: 'var(--hh-paper)', padding: '5rem 1.5rem 3rem' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2', fontFamily: 'var(--font-display)' }}>
              <MD>{hero.headline}</MD>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.75', maxWidth: '48rem', fontFamily: 'var(--font-editorial)', color: 'color-mix(in oklch, var(--hh-paper) 90%, transparent)' }}>
              <MD>{hero.subheading}</MD>
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--hh-surface-subtle)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{approach.heading}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem', fontFamily: 'var(--font-editorial)', fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--hh-primary-text)' }}>
              {approach.paragraphs?.map((p: string, i: number) => (
                <p key={i}><MD>{p}</MD></p>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', paddingTop: '1.5rem' }}>
              {approach.cards?.map((card: any, i: number) => (
                <div key={card.title}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: '300', lineHeight: 1, marginBottom: '1.25rem', color: 'var(--hh-ink)' }}>
                    {i + 1}<span style={{ color: 'var(--hh-accent)' }}>/</span>
                  </p>
                  <h3 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--hh-secondary-text)', margin: 0 }}><MD>{card.body}</MD></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility + Partners */}
        <section style={{ backgroundColor: 'var(--hh-paper)', color: 'var(--hh-ink)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3.5rem 1.5rem 1rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{credibility.heading}
            </h2>
            <strong style={{ fontFamily: 'var(--font-display)', color: 'var(--hh-ink)', display: 'block', fontSize: '1.125rem', marginBottom: '0.75rem' }}><MD>{credibility.bold}</MD></strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-editorial)', fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--hh-primary-text)' }}>
              {credibility.paragraphs?.map((p: string, i: number) => (
                <p key={i} style={{ margin: 0 }}><MD>{p}</MD></p>
              ))}
            </div>
          </div>
          {credibility.partners?.length > 0 && (
            <div style={{ backgroundColor: 'var(--hh-ink)', paddingTop: '1.25rem' }}>
              <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'color-mix(in oklch, var(--hh-paper) 75%, transparent)', margin: 0 }}>
                  Partner newsrooms
                </p>
              </div>
              <div style={{ padding: '0.5rem 0 1rem', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(to right, transparent 1.5rem, black 3.5rem, black calc(100% - 3.5rem), transparent calc(100% - 1.5rem))', maskImage: 'linear-gradient(to right, transparent 1.5rem, black 3.5rem, black calc(100% - 3.5rem), transparent calc(100% - 1.5rem))' }}>
                <div className="partner-marquee">
                  {[...credibility.partners, ...credibility.partners].map((partner: any, i: number) => (
                    <PartnerLogo key={i} partner={partner} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Why It Works */}
        <section style={{ padding: '4rem 1.5rem', backgroundColor: 'color-mix(in oklch, var(--hh-accent) 8%, var(--hh-paper))' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{why.heading}
            </h2>
            {why.intro && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontFamily: 'var(--font-editorial)', fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--hh-primary-text)' }}>
                {why.intro.map((p: string, i: number) => (
                  <p key={i}><MD>{p}</MD></p>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {why.items?.map((item: any, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={24} style={{ color: 'var(--hh-accent)', flexShrink: 0, marginTop: '0.25rem' }} />
                  <p style={{ fontSize: '1.125rem', fontFamily: 'var(--font-editorial)', color: 'var(--hh-primary-text)' }}>
                    <strong style={{ fontFamily: 'var(--font-display)' }}><MD>{item.title}</MD></strong>{' '}<MD>{item.description}</MD>
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <Link
                to="/docs/how-this-works"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', backgroundColor: 'var(--hh-accent)', color: 'var(--hh-paper)', fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1.25rem', padding: '1rem 2.25rem', borderRadius: '0.375rem', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                / Get Started <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
