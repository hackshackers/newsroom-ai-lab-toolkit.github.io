import React from 'react';

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Geist:wght@400;500;600&display=swap');
  .mb-page { padding: 2.5rem 1.25rem; }
  @media (min-width: 768px) { .mb-page { padding-left: 3rem; padding-right: 3rem; } }
  .mb-phase-header {
    display: inline-block;
    border: 2px solid oklch(0.50 0.24 158);
    border-radius: 0.75rem;
    padding: 1rem 2rem 1.125rem;
    background: color-mix(in oklch, oklch(0.50 0.24 158) 3%, oklch(0.99 0.005 90));
    text-align: center;
  }
  .mb-phase-header-main {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: oklch(0.50 0.24 158);
    margin: 0 0 0.375rem;
    line-height: 1.2;
  }
  .mb-phase-header-sub {
    font-family: 'Fraunces', serif;
    font-size: 15px;
    font-weight: 400;
    color: oklch(0.30 0.01 180);
    margin: 0;
    line-height: 1.4;
  }
`;

const Cp: React.CSSProperties = { fontFamily: "'Chakra Petch', sans-serif" };
const Fr: React.CSSProperties = { fontFamily: "'Fraunces', serif" };
const Gs: React.CSSProperties = { fontFamily: "'Geist', sans-serif" };
const c = {
  paper: 'oklch(0.99 0.005 90)',
  ink: 'oklch(0.18 0.01 180)',
  text: 'oklch(0.30 0.01 180)',
  textSec: 'oklch(0.48 0.01 180)',
  border: 'oklch(0.92 0.008 90)',
  surface: 'oklch(0.96 0.006 90)',
  accent: 'oklch(0.50 0.24 158)',
  accentSubtle: 'color-mix(in oklch, oklch(0.50 0.24 158) 10%, oklch(0.99 0.005 90))',
};

const OBS = {
  pain: [
    "Not everyone knows where Instagram documentation/logins live",
    "Old captions get recycled in WordPress photos",
    "Can't search many municipal agendas/minutes because software is terrible",
    "Work that takes months disappears from organizational awareness",
  ],
  ineff: [
    "So hard to create timelines from FOIA dumps of thousands of emails",
    "I have to manually convert municipal data from PDFs/websites into spreadsheets",
    "It's total chaos when coordinating long-form stories",
  ],
  asp: [
    "I want to be able to surface trends across state legislation",
    "I want to automatically connect House bills to historical reporting / stories",
    "I want to turn podcasts into newsletters/articles",
    "I need an impact-tracking system for fundraising and reporting that helps me tell compelling stories to funders",
  ],
};

function StickyNote({ text }: { text: string }) {
  return (
    <div style={{ background:c.paper, border:`1px solid ${c.border}`, borderRadius:'0.5rem', padding:'0.625rem 0.75rem', boxShadow:'0 1px 2px rgba(0,0,0,0.03)' }}>
      <p style={{ ...Fr, fontSize:15, color:c.text, lineHeight:1.5, margin:0 }}>{text}</p>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'2rem 0 2.5rem' }}>
      <div style={{ width:2, height:32, background:c.border }} />
      <svg width="14" height="10" viewBox="0 0 10 7" fill={c.accent}><path d="M5 7L0 0h10z" /></svg>
      {label && <p style={{ ...Fr, fontSize:13, color:c.textSec, fontStyle:'italic', margin:'0.375rem 0 0' }}>{label}</p>}
    </div>
  );
}

function Block({ n, title, note, children }: {
  n: string; title: string; note: string; children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom:'3rem' }}>
      <div style={{ marginBottom:'1.25rem' }}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem' }}>
          <span style={{ ...Cp, fontSize:36, fontWeight:300, color:c.accent, flexShrink:0, lineHeight:1, marginTop:'-0.125rem' }}>{n}/</span>
          <div style={{ flex:1 }}>
            <h2 style={{ ...Cp, fontSize:22, fontWeight:600, color:c.ink, margin:'0 0 0.5rem', lineHeight:1.2 }}>{title}</h2>
            <p style={{ ...Fr, fontSize:16, color:c.textSec, lineHeight:1.6, margin:0 }}>{note}</p>
          </div>
        </div>
      </div>
      <div style={{ borderRadius:'0.75rem', border:`1px solid ${c.border}`, background:c.paper, padding:'1.75rem' }}>
        {children}
      </div>
    </div>
  );
}

export default function MethodologyBoard() {
  return (
    <>
      <style>{CSS}</style>
      <div className="mb-page" style={{ minHeight:'100vh', background:'transparent', fontFamily:"'Geist', sans-serif" }}>
        <div style={{ maxWidth:'52rem', margin:'0 auto' }}>

          <div style={{ marginBottom:'4rem' }}>
            <h1 style={{ ...Cp, fontSize:'clamp(30px, 5.5vw, 44px)', fontWeight:600, lineHeight:1.25, color:c.ink, margin:0 }}>
              <span style={{ color:c.accent }}>/</span> How we report on problems and build solutions
            </h1>
            <p style={{ ...Fr, fontSize:19, color:c.textSec, lineHeight:1.65, margin:'1rem 0 0', maxWidth:'45rem' }}>
              Like good reporting, the Design Thinking process resists premature certainty. We gather evidence from real people, refine our focus, test what we think we know, and iterate as new information emerges.
            </p>
          </div>

          {/* EMPATHIZE */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <div className="mb-phase-header">
              <p className="mb-phase-header-main">Empathize</p>
              <p className="mb-phase-header-sub">Report before you know the story</p>
            </div>
          </div>
          <Block n="1"
            title="Talk to people"
            note="Like backgrounding a story: notice pain points, talk to people, map sources, gather clues and hunches. No filtering yet — you're building a sense of what's happening before you know the central question."
          >
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.875rem' }}>
              {[
                { emoji:'😤', label:'Pain points',               items: OBS.pain  },
                { emoji:'🐢', label:'Inefficiencies & Bottlenecks',            items: OBS.ineff },
                { emoji:'🧙', label:'Aspirational Capabilities', items: OBS.asp   },
              ].map(({ emoji, label, items }) => (
                <div key={label}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.375rem', marginBottom:'0.625rem' }}>
                    <span style={{ fontSize:16 }}>{emoji}</span>
                    <span style={{ ...Gs, fontSize:12, fontWeight:600, color:c.textSec, textTransform:'uppercase', letterSpacing:'0.06em' }}>{label}</span>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                    {items.map(t => <StickyNote key={t} text={t} />)}
                    <p style={{ ...Gs, fontSize:16, color:c.border, textAlign:'center', letterSpacing:'0.3em', userSelect:'none', margin:0 }}>· · ·</p>
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Divider label="" />

          {/* DEFINE */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <div className="mb-phase-header">
              <p className="mb-phase-header-main">Define</p>
              <p className="mb-phase-header-sub">Identify the story</p>
            </div>
          </div>

          <Block n="2"
            title="Refine your understanding"
            note="Like finding your nut graf: who is affected, what's at stake, why it matters. Look for patterns in your observations and frame each cluster as a focused statement you could pitch in a meeting."
          >
            <div style={{ background:c.surface, border:`1px solid ${c.border}`, borderRadius:'0.75rem', padding:'1.25rem' }}>
              <p style={{ ...Cp, fontSize:20, fontWeight:500, marginBottom:'1rem', margin:'0 0 1rem', lineHeight:1.5 }}>
                <span style={{ borderRadius:4, padding:'2px 6px', background:'#fef08a', color:c.ink }}>[User]</span>
                {' '}<span style={{ color:c.textSec, fontStyle:'italic', fontWeight:400 }}>needs</span>{' '}
                <span style={{ borderRadius:4, padding:'2px 6px', background:'#bfdbfe', color:c.ink }}>[need]</span>
                {' '}<span style={{ color:c.textSec, fontStyle:'italic', fontWeight:400 }}>so that</span>{' '}
                <span style={{ borderRadius:4, padding:'2px 6px', background:'#bbf7d0', color:c.ink }}>[goal]</span>
                <span style={{ color:c.ink }}>.</span>
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {[
                  { token:'User', bg:'#fef08a', label:'Who is affected?',    hint:'Reporter, editor, another specific role, a specific desk or team, the whole newsroom?' },
                  { token:'Need', bg:'#bfdbfe', label:'What do they need?',  hint:'What do they need to accomplish, avoid, or understand?' },
                  { token:'Goal', bg:'#bbf7d0', label:'Why does it matter?', hint:"What's the bigger outcome or value?" },
                ].map(({ token, bg, label, hint }) => (
                  <p key={token} style={{ ...Fr, fontSize:14, color:c.text, lineHeight:1.5, margin:0 }}>
                    <span style={{ ...Gs, fontSize:13, fontWeight:600, borderRadius:4, padding:'2px 6px', marginRight:6, background:bg, color:c.ink }}>{token}</span>
                    <span style={{ color:c.textSec, fontStyle:'italic', marginRight:4 }}>{label}</span>
                    {hint}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ marginTop:'1rem', display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {[[75,55],[80,45],[72,50]].map((w, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.625rem', borderRadius:'0.5rem', padding:'0.625rem 0.875rem', background:c.surface, border:`1px solid ${c.border}` }}>
                  <div style={{ width:14, height:14, borderRadius:'50%', flexShrink:0, border:`2px solid ${c.border}`, background:c.paper }} />
                  <div style={{ flex:1, display:'flex', flexDirection:'column', gap:5 }}>
                    <div style={{ height:8, borderRadius:9999, background:c.border, width:`${w[0]}%` }} />
                    <div style={{ height:7, borderRadius:9999, background:c.border, width:`${w[1]}%`, opacity:0.6 }} />
                  </div>
                </div>
              ))}
              {[
                { user:'Weekend editors',  need:'an efficient way to locate usable photos for breaking stories', goal:"breaking stories aren't delayed by missing photo content" },
                { user:'Student reporters', need:'a way to more independently identify gaps in sourcing, missing perspectives, and opportunities for visuals', goal:'they can strengthen their reporting quality before getting a human review' },
              ].map((s, i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.625rem', borderRadius:'0.5rem', padding:'0.75rem 0.875rem', background:c.surface, border:`1px solid ${c.accent}` }}>
                  <div style={{ width:14, height:14, borderRadius:'50%', flexShrink:0, border:`2px solid ${c.accent}`, background:c.accent, marginTop:3 }} />
                  <p style={{ ...Fr, fontSize:14, color:c.text, lineHeight:1.6, margin:0, flex:1 }}>
                    <span style={{ borderRadius:4, padding:'2px 6px', background:'#fef08a', color:c.ink }}>{s.user}</span>
                    {' '}need{' '}
                    <span style={{ borderRadius:4, padding:'2px 6px', background:'#bfdbfe', color:c.ink }}>{s.need}</span>
                    {' '}so that{' '}
                    <span style={{ borderRadius:4, padding:'2px 6px', background:'#bbf7d0', color:c.ink }}>{s.goal}</span>.
                  </p>
                </div>
              ))}
            </div>
          </Block>

          <Divider label="" />

          <Block n="3"
            title="Write the pitch"
            note="Like writing a story pitch or memo: add context, who's affected, what success looks like, what still needs reporting. Writing it out tests whether the problem is real and the scope is clear."
          >
            <div style={{ display:'flex', gap:'1rem' }}>
              {['Brief A','Brief B'].map((label, i) => (
                <div key={label} style={{ flex:1, background:c.paper, border:`1px solid ${c.border}`, borderRadius:'0.75rem', padding:'1rem' }}>
                  <p style={{ ...Gs, fontSize:14, fontWeight:600, color:c.text, margin:'0 0 0.75rem' }}>{label}</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                    {[70,55,65,45,60,40].map((w, j) => (
                      <div key={j} style={{ height:7, borderRadius:9999, background:c.surface, width:`${w - i*5}%` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Divider label="" />

          <Block n="4"
            title="Choose which story to pursue first"
            note="Pick one brief and commit. Splitting focus produces worse outcomes for everyone. The brief you don't choose now is a candidate for the next cycle."
          >
            <div style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
              <div style={{ flex:1, background:c.accentSubtle, border:`2px solid ${c.accent}`, borderRadius:'0.75rem', padding:'1rem' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.75rem' }}>
                  <p style={{ ...Gs, fontSize:14, fontWeight:600, color:c.ink, margin:0 }}>Brief A</p>
                  <span style={{ ...Gs, fontSize:12, background:c.accent, color:c.paper, padding:'3px 10px', borderRadius:9999, fontWeight:500 }}>✓</span>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {[70,55,65,45,60,40].map((w,j) => <div key={j} style={{ height:7, borderRadius:9999, background:c.border, width:`${w}%` }} />)}
                </div>
              </div>
              <div style={{ flex:1, background:c.paper, border:`1px solid ${c.border}`, borderRadius:'0.75rem', padding:'1rem', opacity:0.5 }}>
                <p style={{ ...Gs, fontSize:14, fontWeight:600, color:c.textSec, margin:'0 0 0.75rem' }}>Brief B</p>
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {[65,50,60,40,55,35].map((w,j) => <div key={j} style={{ height:7, borderRadius:9999, background:c.surface, width:`${w}%` }} />)}
                </div>
              </div>
            </div>
          </Block>

          <Divider label="" />

          {/* IDEATE · PROTOTYPE · TEST */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <div className="mb-phase-header">
              <p className="mb-phase-header-main">Ideate · Prototype · Test</p>
              <p className="mb-phase-header-sub">Explore, draft, verify</p>
            </div>
          </div>

          <Block n="5"
            title="Outline the story parts / angles"
            note="Like outlining a story: break the work into concrete, independently tackable pieces. Each part should be small enough to report, build, and verify quickly."
          >
            <div>
              <div style={{ background:c.surface, border:`1px solid ${c.border}`, borderRadius:'0.75rem', padding:'1rem', marginBottom:'1rem' }}>
                <p style={{ ...Gs, fontSize:11, color:c.textSec, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:500, margin:'0 0 0.5rem' }}>chosen brief</p>
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {[75,55,65].map((w,j) => <div key={j} style={{ height:7, borderRadius:9999, background:c.border, width:`${w}%` }} />)}
                </div>
              </div>
              <div style={{ display:'flex', justifyContent:'center', marginBottom:'1rem' }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <div style={{ width:2, height:20, background:c.border }} />
                  <svg width="12" height="8" viewBox="0 0 10 7" fill={c.accent}><path d="M5 7L0 0h10z" /></svg>
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.625rem' }}>
                {['part 1','part 2','part 3','part 4','part 5'].map((p, i) => (
                  <div key={p} style={{ borderRadius:'0.5rem', border:`1px solid ${c.border}`, background:c.paper, padding:'0.75rem', gridColumn: i === 4 ? 2 : undefined }}>
                    <p style={{ ...Gs, fontSize:13, fontWeight:500, color:c.text, margin:'0 0 0.5rem' }}>{p}</p>
                    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                      <div style={{ height:6, borderRadius:9999, background:c.surface, width:'80%' }} />
                      <div style={{ height:6, borderRadius:9999, background:c.surface, width:'55%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Block>

          <Divider label="" />

          <Block n="6"
            title="Decide which angle to report on first"
            note="It doesn't have to be part 1. Start with the part that will teach you the most, unblock other work, or carries the most uncertainty."
          >
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.625rem' }}>
              {['part 1','part 2','part 3','part 4','part 5'].map((p, i) => (
                <div key={p} style={{
                  borderRadius:'0.5rem',
                  border:`2px solid ${i === 1 ? c.accent : c.border}`,
                  background: i === 1 ? c.accentSubtle : c.paper,
                  padding:'0.75rem',
                  gridColumn: i === 4 ? 2 : undefined
                }}>
                  <p style={{ ...Gs, fontSize:13, fontWeight:i === 1 ? 600 : 500, color: i === 1 ? c.ink : c.textSec, margin:0 }}>{p}</p>
                </div>
              ))}
            </div>
          </Block>

          <Divider label="" />

          
          <Block n="7"
            title="Define requirements for this part's solution"
            note="Before drafting, automating, or prototyping anything, pause to define the work clearly enough that a human can judge whether the result is useful, accurate, and safe to use. This step turns a promising idea into something testable."
          >
            <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {[
                { icon:'📥', label:'What inputs does this part need?',       hint:'Name the concrete inputs required — data, sources, context, approvals. Be specific: vague inputs produce vague outputs.' },
                { icon:'✅', label:'What does good enough output look like?', hint:'Define quality before building. Can a human reliably evaluate the result and catch errors? What does "good enough" look like?' },
                { icon:'⚙️', label:'What kind of solution fits?',             hint:'Could be AI, a rules-based tool, a process change, or keeping it fully human. Start with the problem, not the tool — and identify where humans must stay in the loop.' },
              ].map(({ icon, label, hint }, i, arr) => (
                <div key={label}>
                  <div style={{ background:c.surface, border:`1px solid ${c.border}`, borderRadius:'0.75rem', padding:'1rem' }}>
                    <p style={{ ...Gs, fontSize:15, color:c.ink, fontWeight:500, margin:'0 0 0.375rem' }}>
                      <span style={{ marginRight:'0.5rem' }}>{icon}</span>{label}
                    </p>
                    <p style={{ ...Fr, fontSize:14, color:c.textSec, lineHeight:1.6, margin:0 }}>{hint}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ display:'flex', justifyContent:'center', margin:'0.25rem 0', color:c.border, fontSize:18 }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </Block>

          {/* ── 9. EXPERIMENT, BUILD AND VERIFY ── */}
          <Block n="9"
            title="Experiment, build and verify this part's solution"
            note="Explore potential approaches, validate your assumptions and get feedback from users as you go. Iterate until the solution meets the defined parameters for good enough. Don't wait for a perfect solution; aim for progress and learning."
          >
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>

              {/* ── Cycle diagram ── */}
              <div>
                <p style={{ ...Gs, fontSize:11, color:c.textSec, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600, margin:'0 0 0.75rem' }}>Zoom in: one iteration cycle</p>
                <div style={{ display:'flex', alignItems:'stretch', gap:0 }}>
                  {[
                    { icon:'💡', label:'Hypothesize',       sub:'What approach work for this part?' },
                    { icon:'🏗️', label:'Build',             sub:'Make something testable' },
                    { icon:'🗣️', label:'Test & Feedback',   sub:'Try it with real users' },
                    { icon:'📖', label:'Learn & Adjust',    sub:'What did we discover from trying this?' },
                  ].map((step, i, arr) => (
                    <React.Fragment key={step.label}>
                      <div style={{
                        flex:1,
                        background:c.surface,
                        border:`1.5px solid ${c.border}`,
                        borderRadius:'0.5rem',
                        padding:'0.75rem 0.5rem',
                        textAlign:'center',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        gap:'0.25rem',
                      }}>
                        <span style={{ fontSize:18 }}>{step.icon}</span>
                        <p style={{ ...Gs, fontSize:12, fontWeight:600, color:c.ink, margin:0, lineHeight:1.3 }}>{step.label}</p>
                        <p style={{ ...Fr, fontSize:12, color:c.textSec, margin:0, lineHeight:1.4 }}>{step.sub}</p>
                      </div>
                      {i < arr.length - 1
                        ? <div style={{ display:'flex', alignItems:'center', padding:'0 0.25rem', color:c.border, fontSize:16, flexShrink:0 }}>→</div>
                        : <div style={{ display:'flex', alignItems:'center', padding:'0 0.25rem', color:c.accent, fontSize:14, flexShrink:0, fontWeight:600 }}>↩</div>
                      }
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* ── Sprint progress ── */}
              <div>
                <p style={{ ...Gs, fontSize:11, color:c.textSec, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600, margin:'0 0 0.75rem' }}>Zoom out: iteration cycles add up to a solution</p>
                <div style={{ display:'flex', gap:'0.625rem', alignItems:'flex-end' }}>
                  {[
                    { sprint:'Cycle 1', pct:20, label:'rough draft',       status:'done' },
                    { sprint:'Cycle 2', pct:50, label:'tested + adjusted', status:'done' },
                    { sprint:'Cycle 3', pct:75, label:'getting closer',    status:'done' },
                    { sprint:'Cycle 4', pct:98, label:'good enough ✓',   status:'target' },
                  ].map((s) => (
                    <div key={s.sprint} style={{ flex:1, display:'flex', flexDirection:'column', gap:'0.375rem' }}>
                      <div style={{ height:72, background:c.surface, borderRadius:'0.5rem', border:`1.5px solid ${c.border}`, position:'relative', overflow:'hidden' }}>
                        <div style={{
                          position:'absolute', bottom:0, left:0, right:0,
                          height:`${s.pct}%`,
                          background:c.accent,
                          opacity: s.status === 'target' ? 0.12 : 0.15,
                        }} />
                        {s.status === 'target' && (
                          <div style={{ position:'absolute', top:'50%', left:0, right:0, transform:'translateY(-50%)', textAlign:'center' }}>
                            <p style={{ ...Gs, fontSize:11, fontWeight:700, color:c.textSec, margin:0 }}>goal</p>
                          </div>
                        )}
                        <div style={{ position:'absolute', bottom:'0.375rem', left:0, right:0, textAlign:'center' }}>
                          <span style={{ ...Gs, fontSize:11, fontWeight:600, color:c.textSec }}>{s.pct}%</span>
                        </div>
                      </div>
                      <p style={{ ...Gs, fontSize:11, fontWeight:600, color:c.textSec, margin:0 }}>{s.sprint}</p>
                      <p style={{ ...Fr, fontSize:11, color:c.textSec, margin:0, fontStyle:'italic', lineHeight:1.3 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </Block>

          <Block n="10"
            title="Select next part to tackle and repeat the cycle"
            note="Once a part of the larger solution is verified to meet user needs move on to tackle the next. Keep going until all parts of the brief are solved."
          >
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.625rem' }}>
              {[
                { label:'part 1', solved:false, active:false },
                { label:'part 2', solved:true,  active:false },
                { label:'part 3', solved:false, active:true  },
                { label:'part 4', solved:false, active:false },
                { label:'part 5', solved:false, active:false },
              ].map((p, i) => (
                <div key={p.label} style={{
                  borderRadius:'0.5rem',
                  border:`2px solid ${p.solved ? c.accent : p.active ? c.accent : c.border}`,
                  background: p.solved ? c.accentSubtle : p.active ? c.accentSubtle : c.paper,
                  padding:'0.75rem',
                  gridColumn: i === 4 ? 2 : undefined,
                }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <p style={{ ...Gs, fontSize:13, fontWeight: p.solved || p.active ? 600 : 500, color: p.solved ? c.accent : p.active ? c.ink : c.textSec, margin:0 }}>{p.label}</p>
                    {p.solved && <span style={{ fontSize:14, color:c.accent }}>✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </Block>

        </div>
      </div>
    </>
  );
}
