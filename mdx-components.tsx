import { PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: any): any {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }: PropsWithChildren) => (
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 md:text-center sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }: PropsWithChildren) => (
      <h2 className="text-zinc-50">{children}</h2>
    ),
    // Add Image component support for MDX
    img: (props: any) => {
      const { src, alt, width, height, className } = props;
      return (
        <div className="relative w-full h-64 my-6 rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt || ''}
            fill
            className={`object-cover ${className || ''}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            priority={false}
          />
        </div>
      );
    },
    ...components,
  };
}
