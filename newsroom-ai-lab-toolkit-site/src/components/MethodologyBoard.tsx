import React from 'react';

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Patrick+Hand&display=swap');
  .mb-page { padding: 2.5rem 1.25rem; }
  @media (min-width: 768px) { .mb-page { padding-left: 3rem; padding-right: 3rem; } }
  .mb-phase-pill {
    display: inline-block;
    font-family: 'Patrick Hand', cursive;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #0db4ba;
    border: 2px solid #0db4ba;
    border-radius: 999px;
    padding: 0.2rem 1rem;
    margin-top: 0.5rem;
    background: white;
  }
`;

const Cv: React.CSSProperties = { fontFamily: "'Caveat', cursive" };
const Ph: React.CSSProperties = { fontFamily: "'Patrick Hand', cursive" };
const g = { 100:'#f3f4f6', 200:'#e5e7eb', 300:'#d1d5db', 400:'#9ca3af', 500:'#6b7280', 600:'#4b5563', 700:'#374151', 800:'#1f2937' };

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
    "I want to automatically connect bills to historical reporting / stories",
    "I want to turn podcasts into newsletters/articles",
    "I need an impact-tracking system for fundraising and reporting that helps me tell compelling stories to funders",
  ],
};

function StickyNote({ text }: { text: string }) {
  return (
    <div style={{ background:'white', border:`1px solid ${g[200]}`, borderRadius:'0.75rem', padding:'0.625rem 0.75rem', boxShadow:'0 1px 2px rgba(0,0,0,0.05)' }}>
      <p style={{ ...Cv, fontSize:17, color:g[700], lineHeight:1.4, margin:0 }}>{text}</p>
    </div>
  );
}

function Divider({ phase }: { phase?: string }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'0.5rem 0' }}>
      <div style={{ width:1, height:20, background:g[200] }} />
      <svg width="10" height="7" viewBox="0 0 10 7" fill="#0db4ba"><path d="M5 7L0 0h10z" /></svg>
      {phase && <span className="mb-phase-pill">{phase}</span>}
    </div>
  );
}

function Block({ n, phase, title, note, children }: {
  n: string; phase?: string; title: string; note: string; children: React.ReactNode;
}) {
  return (
    <div style={{ borderRadius:'1.5rem', border:`2px dashed ${g[300]}`, background:'rgba(255,255,255,0.5)', padding:'1.25rem' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.25rem' }}>
        <span style={{ ...Cv, width:28, height:28, borderRadius:'50%', background:'#0db4ba', color:'white', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:14, fontWeight:700 }}>{n}</span>
        <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', flexWrap:'wrap' }}>
          {phase && <span style={{ ...Ph, fontSize:13, padding:'0.125rem 0.5rem', borderRadius:'0.25rem', textTransform:'uppercase', letterSpacing:'0.05em', background:g[100], color:g[500] }}>{phase}</span>}
          <h2 style={{ ...Cv, fontSize:23, fontWeight:700, color:g[800], margin:0 }}>{title}</h2>
        </div>
      </div>
      <p style={{ ...Ph, fontSize:16, color:g[500], lineHeight:1.625, borderLeft:`2px solid ${g[200]}`, paddingLeft:'0.75rem', margin:'0.5rem 0 0.25rem' }}>{note}</p>
      {children}
    </div>
  );
}

function PhaseGroup({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function MethodologyBoard() {
  return (
    <>
      <style>{CSS}</style>
      <div className="mb-page" style={{ minHeight:'100vh', background:'transparent', fontFamily:"'Patrick Hand', cursive" }}>
        <div style={{ maxWidth:'42rem', margin:'0 auto' }}>

          {/* 1. OBSERVE */}
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'0.75rem' }}>
            <span className="mb-phase-pill">Empathize</span>
          </div>
          <PhaseGroup>
          <Block n="1"
            title="Collect observations"
            note="Gather raw observations from the people you work with and for — their frustrations, workarounds, and hopes. No filtering yet. Tag each one so patterns are easier to spot later."
          >
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.75rem', marginTop:'0.75rem' }}>
              {[
                { emoji:'😤', label:'Pain points',               items: OBS.pain  },
                { emoji:'🐢', label:'Inefficiencies',            items: OBS.ineff },
                { emoji:'🧙', label:'Aspirational Capabilities', items: OBS.asp   },
              ].map(({ emoji, label, items }) => (
                <div key={label}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.375rem', marginBottom:'0.5rem' }}>
                    <span style={{ fontSize:16 }}>{emoji}</span>
                    <span style={{ ...Cv, fontSize:15, fontWeight:700, color:g[500], textTransform:'uppercase', letterSpacing:'0.05em' }}>{label}</span>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                    {items.map(t => <StickyNote key={t} text={t} />)}
                    <p style={{ ...Cv, fontSize:20, color:g[400], textAlign:'center', letterSpacing:'0.2em', userSelect:'none', margin:0 }}>· · ·</p>
                  </div>
                </div>
              ))}
            </div>
          </Block>
          </PhaseGroup>

          <Divider phase="Define" />

          {/* DEFINE group */}
          <PhaseGroup>

            <Block n="2"
              title="Write problem statements"
              note="Look for patterns across everything noticed, then frame each cluster as one sentence. Short enough to say in a meeting without explanation."
            >
              <div style={{ marginTop:'0.75rem', background:'white', border:`2px solid ${g[100]}`, borderRadius:'1rem', padding:'1rem' }}>
                <p style={{ ...Cv, fontSize:22, fontWeight:700, marginBottom:'1rem', margin:'0 0 1rem' }}>
                  <span style={{ borderRadius:4, padding:'2px 4px', background:'#fef08a' }}>[User]</span>
                  {' '}<span style={{ color:g[500], fontStyle:'italic' }}>needs</span>{' '}
                  <span style={{ borderRadius:4, padding:'2px 4px', background:'#bfdbfe' }}>[need]</span>
                  {' '}<span style={{ color:g[500], fontStyle:'italic' }}>so that</span>{' '}
                  <span style={{ borderRadius:4, padding:'2px 4px', background:'#bbf7d0' }}>[goal]</span>
                  <span style={{ color:g[700] }}>.</span>
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.375rem' }}>
                  {[
                    { token:'User', bg:'#fef08a', label:'Who is affected?',    hint:'Reporter, editor, another specific role, a specific desk or team, the whole newsroom?' },
                    { token:'Need', bg:'#bfdbfe', label:'What do they need?',  hint:'What do they need to accomplish, avoid, or understand?' },
                    { token:'Goal', bg:'#bbf7d0', label:'Why does it matter?', hint:"What's the bigger outcome or value?" },
                  ].map(({ token, bg, label, hint }) => (
                    <p key={token} style={{ ...Ph, fontSize:15, color:g[600], lineHeight:1.4, margin:0 }}>
                      <span style={{ ...Cv, fontSize:16, fontWeight:700, borderRadius:4, padding:'1px 4px', marginRight:4, background:bg }}>{token}</span>
                      <span style={{ color:g[500], fontStyle:'italic', marginRight:4 }}>{label}</span>
                      {hint}
                    </p>
                  ))}
                </div>
              </div>
              <div style={{ marginTop:'0.75rem', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {[[75,55],[80,45],[72,50]].map((w, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.5rem', borderRadius:'0.75rem', padding:'0.5rem 0.75rem', background:'rgba(255,255,255,0.6)' }}>
                    <div style={{ width:16, height:16, borderRadius:'50%', flexShrink:0, border:`2px solid ${g[200]}`, background:'white' }} />
                    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
                      <div style={{ height:10, borderRadius:9999, background:g[200], width:`${w[0]}%` }} />
                      <div style={{ height:8,  borderRadius:9999, background:g[100], width:`${w[1]}%` }} />
                    </div>
                  </div>
                ))}
                {[
                  { user:'Weekend editors',  need:'an efficient way to locate usable photos for breaking stories', goal:"breaking stories aren't delayed by missing photo content" },
                  { user:'Student reporters', need:'a way to more independently identify gaps in sourcing, missing perspectives, and opportunities for visuals', goal:'they can strengthen their reporting quality before getting a human review' },
                ].map((s, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.5rem', borderRadius:'0.75rem', padding:'0.625rem 0.75rem', background:g[100] }}>
                    <div style={{ width:16, height:16, borderRadius:'50%', flexShrink:0, border:`2px solid ${g[500]}`, background:g[500], marginTop:2 }} />
                    <p style={{ ...Ph, fontSize:15, color:g[700], lineHeight:1.6, margin:0, flex:1 }}>
                      <span style={{ borderRadius:4, padding:'1px 4px', background:'#fef08a' }}>{s.user}</span>
                      {' '}need{' '}
                      <span style={{ borderRadius:4, padding:'1px 4px', background:'#bfdbfe' }}>{s.need}</span>
                      {' '}so that{' '}
                      <span style={{ borderRadius:4, padding:'1px 4px', background:'#bbf7d0' }}>{s.goal}</span>.
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <Divider />

            <Block n="3"
              title="Expand a few statements into briefs"
              note="For the most promising statements, write a brief — context, who it affects, what success looks like, what's still unknown. Writing it tests whether the problem is real."
            >
              <div style={{ display:'flex', gap:'0.75rem', marginTop:'0.75rem' }}>
                {['Brief A','Brief B'].map((label, i) => (
                  <div key={label} style={{ flex:1, background:'white', border:`2px dashed ${g[200]}`, borderRadius:'1rem', padding:'0.75rem' }}>
                    <p style={{ ...Cv, fontSize:17, fontWeight:700, color:g[600], margin:'0 0 0.5rem' }}>{label}</p>
                    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                      {[70,55,65,45,60,40].map((w, j) => (
                        <div key={j} style={{ height:8, borderRadius:9999, background:g[100], width:`${w - i*5}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Block>

          </PhaseGroup>

          <Divider />

          {/* IDEATE · PROTOTYPE · TEST group */}
          <PhaseGroup>

            <Block n="4"
              title="Select a brief to tackle"
              note="Pick one brief to pursue. Splitting focus produces worse outcomes for everyone. The brief you don't choose now is a candidate for the next cycle."
            >
              <div style={{ display:'flex', gap:'0.75rem', marginTop:'0.75rem', alignItems:'flex-start' }}>
                <div style={{ flex:1, background:'white', border:`2px solid #0db4ba`, borderRadius:'1rem', padding:'0.75rem', boxShadow:'0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.5rem' }}>
                    <p style={{ ...Cv, fontSize:17, fontWeight:700, color:g[700], margin:0 }}>Brief A</p>
                    <span style={{ ...Ph, fontSize:14, background:g[100], color:g[600], border:`1px solid ${g[300]}`, padding:'1px 8px', borderRadius:9999 }}>✓ chosen</span>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                    {[70,55,65,45,60,40].map((w,j) => <div key={j} style={{ height:8, borderRadius:9999, background:g[200], width:`${w}%` }} />)}
                  </div>
                </div>
                <div style={{ flex:1, background:'rgba(255,255,255,0.4)', border:`2px dashed ${g[200]}`, borderRadius:'1rem', padding:'0.75rem', opacity:0.35 }}>
                  <p style={{ ...Cv, fontSize:17, fontWeight:700, color:g[400], margin:'0 0 0.5rem' }}>Brief B</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                    {[65,50,60,40,55,35].map((w,j) => <div key={j} style={{ height:8, borderRadius:9999, background:g[100], width:`${w}%` }} />)}
                  </div>
                  <p style={{ ...Ph, fontSize:14, color:g[400], fontStyle:'italic', margin:'0.5rem 0 0' }}>next cycle →</p>
                </div>
              </div>
            </Block>

            <Divider phase="Ideate · Prototype · Test" />

            <Block n="5"
              title="Break it into solvable parts"
              note="Decompose the chosen brief into concrete, independently tackable pieces. Each part should be small enough to learn from quickly."
            >
              <div style={{ marginTop:'0.75rem' }}>
                <div style={{ background:'white', border:`2px solid ${g[300]}`, borderRadius:'1rem', padding:'1rem 1rem 0.75rem', marginBottom:'0.75rem' }}>
                  <p style={{ ...Ph, fontSize:13, color:g[600], textTransform:'uppercase', letterSpacing:'0.05em', margin:'0 0 0.25rem' }}>chosen brief</p>
                  <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                    {[75,55,65].map((w,j) => <div key={j} style={{ height:8, borderRadius:9999, background:g[200], width:`${w}%` }} />)}
                  </div>
                </div>
                <div style={{ display:'flex', justifyContent:'center', marginBottom:'0.75rem' }}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <div style={{ width:1, height:16, background:g[200] }} />
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="#0db4ba"><path d="M5 7L0 0h10z" /></svg>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem' }}>
                  {['part 1','part 2','part 3','part 4','part 5'].map((p, i) => (
                    <div key={p} style={{ borderRadius:'1rem', border:`2px dashed ${g[200]}`, background:'rgba(255,255,255,0.6)', padding:'0.75rem', gridColumn: i === 4 ? 2 : undefined }}>
                      <p style={{ ...Cv, fontSize:16, fontWeight:700, color:g[500], margin:'0 0 0.375rem' }}>{p}</p>
                      <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                        <div style={{ height:6, borderRadius:9999, background:g[100], width:'80%' }} />
                        <div style={{ height:6, borderRadius:9999, background:g[100], width:'55%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Block>

            <Divider />

            <Block n="6"
              title="Pick a place to start"
              note="It doesn't have to be part 1. Start with the part that will teach you the most, unblock others, or carries the most uncertainty."
            >
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem', marginTop:'0.75rem' }}>
                {['part 1','part 2','part 3','part 4','part 5'].map((p, i) => (
                  <div key={p} style={{ borderRadius:'1rem', border:`2px dashed ${i === 1 ? g[500] : g[200]}`, background: i === 1 ? g[100] : 'rgba(255,255,255,0.6)', padding:'0.75rem', gridColumn: i === 4 ? 2 : undefined }}>
                    <p style={{ ...Cv, fontSize:16, fontWeight:700, color: i === 1 ? g[700] : g[400], margin:0 }}>{p}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Divider />

            <Block n="7"
              title="Work the selected part"
              note="Answer these questions before building anything. Then prototype, test, and learn until the output meets the required standar of good enough for this part of the solution."
            >
              <div style={{ marginTop:'0.75rem', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {[
                  { icon:'📥', label:'What inputs does this part need?',       hint:'Name the concrete inputs required — data, content, context, approvals. Be specific: vague inputs produce vague outputs.' },
                  { icon:'✅', label:'What does good enough output look like?', hint:'Define quality before building. Can a human reliably evaluate the result and catch errors? Be specific about what good enough looks like.' },
                  { icon:'⚙️', label:'What kind of solution fits?',             hint:'Could be AI, a rules-based tool, a process change, or keeping it fully human. Start with the problem, not the tool — and identify where humans must stay in control.' },
                ].map(({ icon, label, hint }, i, arr) => (
                  <div key={label}>
                    <div style={{ background:'white', border:`1px solid ${g[200]}`, borderRadius:'1rem', padding:'0.75rem 1rem' }}>
                      <p style={{ ...Ph, fontSize:16, color:g[700], margin:'0 0 0.25rem' }}>
                        <span style={{ marginRight:'0.5rem' }}>{icon}</span>{label}
                      </p>
                      <p style={{ ...Ph, fontSize:14, color:g[500], lineHeight:1.4, margin:0 }}>{hint}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ display:'flex', justifyContent:'center', margin:'0.25rem 0', color:g[300] }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </Block>

            <Divider />

            <Block n="8"
              title="Continue forward with the next part"
              note="Once a part is good enough, pick the next one to tackle. Parts you've solved stay solved — keep going until the brief is done."
            >
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem', marginTop:'0.75rem' }}>
                {[
                  { label:'part 1', solved:false, active:false },
                  { label:'part 2', solved:true,  active:false },
                  { label:'part 3', solved:false, active:true  },
                  { label:'part 4', solved:false, active:false },
                  { label:'part 5', solved:false, active:false },
                ].map((p, i) => (
                  <div key={p.label} style={{
                    borderRadius:'1rem',
                    border:`2px ${p.active ? 'dashed' : 'solid'} ${p.solved ? '#0db4ba' : p.active ? '#0db4ba' : g[200]}`,
                    background: p.solved ? 'rgba(13,180,186,0.08)' : p.active ? g[100] : 'rgba(255,255,255,0.6)',
                    padding:'0.75rem',
                    gridColumn: i === 4 ? 2 : undefined,
                  }}>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <p style={{ ...Cv, fontSize:16, fontWeight:700, color: p.solved ? '#0db4ba' : p.active ? g[700] : g[400], margin:0 }}>{p.label}</p>
                      {p.solved && <span style={{ fontSize:14 }}>✓</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Block>

          </PhaseGroup>

        </div>
      </div>
    </>
  );
}
