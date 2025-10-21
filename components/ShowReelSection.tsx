import { Play } from 'lucide-react';

export default function ShowReelSection() {
  return (
    <section
      id="showreel"
      className="md:min-h-screen h-auto flex items-center justify-center section-responsive !pt-0"
      style={{
        background: '#1B0A2E'
      }}
    >
      <div className="container-responsive w-full">
        <div
          className="text-center"
          style={{
            marginBottom: 'var(--space-9)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)'
          }}
        >
          <h2 className="text-responsive-lg" style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: '500' }}>2024 Showreel</h2>
          <p
            className="max-w-3xl mx-auto text-responsive-sm"
            style={{
              fontFamily: "'Red Hat Text', sans-serif",
              fontWeight: '400',
              lineHeight: '1.6',
              color: 'var(--bmv-text-secondary)'
            }}
          >
            Press play to see how we transform complex science into clear, compelling stories that drive results.
          </p>
        </div>

        <div
          className="aspect-video w-full rounded-2xl overflow-hidden mx-auto"
          style={{
            border: '1px solid rgba(183, 148, 246, 0.2)'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UvMDknsBp9E"
            title="2024 Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
}
