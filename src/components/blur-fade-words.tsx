import { BlurFade } from "@/components/ui/blur-fade";

interface BlurFadeWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delayStart?: number;
  staggerDelay?: number;
}

export function BlurFadeWords({
  text,
  className,
  wordClassName,
  delayStart = 0,
  staggerDelay = 0.06,
}: BlurFadeWordsProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <BlurFade
          key={`${word}-${index}`}
          inView
          delay={delayStart + index * staggerDelay}
          duration={0.5}
          className="inline-block"
        >
          <span className={wordClassName}>
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        </BlurFade>
      ))}
    </span>
  );
}
