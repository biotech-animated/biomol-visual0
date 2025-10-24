export default function SlabExamples() {
  return (
    <section className="py-24 bg-[#1B0A2E]" id="examples">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2
          className="text-white text-center mb-4"
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontSize: '36px',
            fontWeight: 500
          }}
        >
          SLAB in Action
        </h2>

        <p
          className="text-[#E2E8F0] text-center mb-16 max-w-[900px] mx-auto"
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: '18px',
            lineHeight: '1.7'
          }}
        >
          Every looping asset on this website is a SLAB asset. This is the quality you get. Three more examples below—no overlays, just the visual detail.
        </p>

        <div className="space-y-20">
          <div>
            <div
              className="w-full border-2 border-[#9B59D0]/20 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/pp02at0pw8?autoplay=1&muted=1&videoFoam=true&playsinline=1&controls=0&endVideoBehavior=loop"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  maxHeight: '800px',
                  border: 'none'
                }}
              />
            </div>
            <p
              className="text-white text-center mt-4"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '26px',
                fontWeight: 500
              }}
            >
              Receptor-Mediated Endocytosis and Endosomal Escape
            </p>
          </div>

          <div>
            <div
              className="w-full border-2 border-[#9B59D0]/20 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/cugrtrftef?autoplay=1&muted=1&videoFoam=true&playsinline=1&controls=0&endVideoBehavior=loop"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  maxHeight: '800px',
                  border: 'none'
                }}
              />
            </div>
            <p
              className="text-white text-center mt-4"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '26px',
                fontWeight: 500
              }}
            >
              CAR-T Activation, Tumor Cell Death, and Macrophage-Mediated Debris Clearance
            </p>
          </div>

          <div>
            <div
              className="w-full border-2 border-[#9B59D0]/20 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/2c148zxyat?autoplay=1&muted=1&videoFoam=true&playsinline=1&controls=0&endVideoBehavior=loop"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full"
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  maxHeight: '800px',
                  border: 'none'
                }}
              />
            </div>
            <p
              className="text-white text-center mt-4"
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: '26px',
                fontWeight: 500
              }}
            >
              Bacterial Sepsis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
