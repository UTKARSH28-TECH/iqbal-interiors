import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoLightbox } from "@/components/video/VideoLightbox";
import { getVideos } from "@/lib/videos";

/**
 * Project Walkthroughs: supporting video proof beneath the gallery. The cover
 * video autoplays (muted, looping, the only autoplaying video on the page); the
 * rest are poster cards. All open in a shared fullscreen player. Server-rendered
 * — only the lightbox provider hydrates. Posters are used when present and fall
 * back to a dark tile otherwise (drop a matching image into video-thumbnails).
 */
export function ProjectWalkthroughs() {
  const videos = getVideos();
  if (videos.length === 0) return null;

  const featuredIndex = videos.findIndex((video) => video.featured);
  const featured = featuredIndex >= 0 ? videos[featuredIndex] : null;
  const gridVideos = videos
    .map((video, index) => ({ video, index }))
    .filter(({ index }) => index !== featuredIndex);

  return (
    <section className="bg-surface py-[70px] sm:py-[90px] lg:py-[120px]">
      <Container>
        <SectionHeading
          label="Walkthroughs"
          title="Project Walkthroughs"
          subtitle="Short video tours of our completed interiors."
        />

        <VideoLightbox videos={videos}>
          {featured && (
            <div className="group relative mx-auto mt-12 aspect-[4/5] w-full max-w-sm animate-fade-in overflow-hidden rounded-image bg-foreground shadow-[0_24px_48px_-24px_rgba(17,17,17,0.25)]">
              <video
                src={featured.src}
                poster={featured.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
              />
              <button
                type="button"
                data-video-index={featuredIndex}
                aria-label="Play featured walkthrough video"
                className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              >
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  <Play className="size-7 translate-x-0.5" aria-hidden />
                </span>
              </button>
            </div>
          )}

          {gridVideos.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {gridVideos.map(({ video, index }) => (
                <div
                  key={video.src}
                  className="group relative aspect-[4/5] w-40 overflow-hidden rounded-image bg-foreground shadow-[0_12px_28px_-16px_rgba(17,17,17,0.22)] sm:w-48"
                >
                  {video.poster && (
                    <Image
                      src={video.poster}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 160px, 192px"
                      className="object-cover"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
                  />
                  <button
                    type="button"
                    data-video-index={index}
                    aria-label={`Play ${video.title}`}
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      <Play className="size-5 translate-x-0.5" aria-hidden />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </VideoLightbox>
      </Container>
    </section>
  );
}
