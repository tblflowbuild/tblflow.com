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
    /**
     * Ties a post to its counterpart in the other locale. Slugs are translated
     * (`pourquoi-un-vrai-postgres` / `why-real-postgres`), so without this the
     * language switcher and the hreflang alternates point at a URL that does not
     * exist. Same key on both files, one file per locale.
     */
    translationKey: z.string().optional(),
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

/**
 * Docs collection, same locale-in-the-path rule as the blog.
 *
 * `section` groups pages on the index and `order` sorts within a group — both in
 * frontmatter rather than a separate manifest file, so adding a page is one file
 * and never a two-place edit that can drift.
 */
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().min(50).max(300),
    /**
     * Ties a page to its counterpart in the other locale. Slugs are translated
     * (`pourquoi-un-vrai-postgres` / `why-real-postgres`), so without this the
     * language switcher and the hreflang alternates point at a URL that does not
     * exist. Same key on both files, one file per locale.
     */
    translationKey: z.string().optional(),
    section: z.string(),
    order: z.number().default(100),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, docs };
