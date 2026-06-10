import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import { ArrowRight, BookOpen, MessageSquare, Lightbulb, Target, CheckCircle2, Recycle, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = { BookOpen, MessageSquare, Lightbulb, Target, Recycle };

function md(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="font-family:var(--font-display)">$1</strong>');
}

function MD({ children, style }: { children: string; style?: React.CSSProperties }) {
  return <span dangerouslySetInnerHTML={{ __html: md(children) }} style={style} />;
}

export default function NewsroomLandingPage() {
  const { items } = usePluginData('load-markdown-data', 'landing-page') as { items: Record<string, any>[] };

  if (!items?.length) return null;

  const s = (key: string) => items.find(i => i.section === key) ?? {};

  const hero = s('hero');
  const credibility = s('credibility');
  const approach = s('approach');
  const framework = s('framework');
  const why = s('whyItWorks');
  const cta = s('cta');

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

        .landing-container { font-family: var(--font-ui); }
        .landing-container * { box-sizing: border-box; }
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

        {/* Credibility Anchor */}
        <section style={{ padding: '3.5rem 1.5rem', backgroundColor: 'var(--hh-paper)', color: 'var(--hh-ink)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{credibility.heading}
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--hh-primary-text)', margin: 0 }}>
              <strong style={{ fontFamily: 'var(--font-display)', color: 'var(--hh-ink)', display: 'block', fontSize: '1.125rem', marginBottom: '0.75rem' }}><MD>{credibility.bold}</MD></strong>
              <MD>{credibility.body}</MD>
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--hh-surface-subtle)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{approach.heading}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem', fontFamily: 'var(--font-editorial)', fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--hh-primary-text)' }}>
              {approach.paragraphs?.map((p: string, i: number) => (
                <p key={i}><MD>{p}</MD></p>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {approach.cards?.map((card: any) => {
                const Icon = ICONS[card.icon];
                return (
                  <div key={card.title} style={{ padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--hh-paper)', border: '1px solid var(--hh-border)' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', backgroundColor: 'color-mix(in oklch, var(--hh-accent) 15%, var(--hh-paper))' }}>
                      {Icon && <Icon size={24} style={{ color: 'var(--hh-accent)' }} />}
                    </div>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', color: 'var(--hh-ink)' }}>{card.title}</h3>
                    <p style={{ fontFamily: 'var(--font-editorial)', color: 'var(--hh-secondary-text)' }}><MD>{card.body}</MD></p>
                  </div>
                );
              })}
            </div>
          </div>
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
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--hh-ink)', color: 'var(--hh-paper)' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
              <span style={{ color: 'var(--hh-accent)', fontWeight: '500' }}>/ </span>{cta.heading}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '48rem', margin: '0 auto' }}>
              {cta.cards?.map((card: any) => {
                const Icon = ICONS[card.icon];
                return (
                  <div key={card.title}
                    style={{ padding: '2rem', borderRadius: '0.5rem', textAlign: 'left', backgroundColor: 'color-mix(in oklch, var(--hh-paper) 10%, transparent)', border: '1px solid color-mix(in oklch, var(--hh-paper) 20%, transparent)', transition: 'border-color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--hh-accent)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'color-mix(in oklch, var(--hh-paper) 20%, transparent)'; }}>
                    <div style={{ width: '4rem', height: '4rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', backgroundColor: 'var(--hh-accent)' }}>
                      {Icon && <Icon size={32} style={{ color: 'var(--hh-paper)' }} />}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                    <p style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)', color: 'color-mix(in oklch, var(--hh-paper) 85%, transparent)' }}><MD>{card.body}</MD></p>
                    <Link to={card.href}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', fontFamily: 'var(--font-ui)', color: 'var(--hh-accent)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-paper)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hh-accent)'; }}>
                      {card.cta} <ArrowRight size={20} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
