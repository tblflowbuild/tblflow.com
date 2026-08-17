import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Imported from `zod` directly: Astro 7 deprecates the `z` it used to re-export
// from `astro:content`.
import { z } from 'zod';

/**
 * Blog collection, one directory per locale (`src/content/blog/fr`, `.../en`).
 *
 * The locale lives in the path rather than in frontmatter so a post physically
 * cannot claim a locale that disagrees with its URL. `getStaticPaths` derives both
 * from the same id, which removes a whole class of hreflang mismatch.
 *
 * This schema is also the contract a git-backed CMS would need to satisfy, if one
 * is added later — the frontmatter shape does not have to change for that.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(120),
    /** Used for <meta name="description"> and the card excerpt. */
    description: z.string().min(50).max(300),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('TblFlow'),
    /** Free-form topic tags, lowercase. Rendered and used for related posts. */
    tags: z.array(z.string()).default([]),
    /** Social/preview image, root-relative. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Keeps a post out of listings and feeds without deleting the file. */
    draft: z.boolean().default(false),
    /** Marks the post for the "featured" slot on the blog index. */
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
