import { Play } from 'lucide-react';

export default function ShowReelSection() {
  return (
    <section
      id="showreel"
      className="px-6 min-h-screen flex items-center justify-center"
      style={{
        background: 'var(--bmv-bg-orange-dark)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div
          className="text-center"
          style={{
            marginBottom: 'var(--space-9)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)'
          }}
        >
          <h2>2024 Showreel</h2>
          <p
            className="max-w-3xl mx-auto"
            style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--bmv-text-secondary)'
            }}
          >
            Press play to see how we transform complex science into clear, compelling stories that drive results.
          </p>
        </div>

        <div
          className="aspect-video w-[1000px] rounded-2xl overflow-hidden mx-auto"
          style={{
            border: '1px solid rgba(183, 148, 246, 0.2)',
            width: '100%'
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
