import { readFileSync, readdirSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

// CONTENT_DIR is where all the content for the site is located
export const CONTENT_DIR = path.join(process.cwd(), 'posts')

export async function getFiles(type) {
  return readdirSync(path.join(CONTENT_DIR, type));
}

export function getFileBySlug(type, slug) {
  const source = slug
    ? readFileSync(path.join(CONTENT_DIR, type, `${slug}.mdx`), 'utf8')
    : readFileSync(path.join(CONTENT_DIR, `${type}.mdx`), 'utf8');

  const { content, data } = matter(source);

  return {
    post: content,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...data
    }
  };
}

export async function getSortedFilesData(type) {
  const file_names = await getFiles(type)
  const all_blog_data = file_names.map( file_names => {
    const id = file_names.replace(/\.mdx$/,'')

    const { frontmatter } = getFileBySlug(type, id)

    return {
        data: frontmatter
    }
  })

  // Sort blog posts by date
  return all_blog_data.sort(({date: a}, {date: b}) => {
      if (a > b) {
          return 1
      } else if (a < b) {
          return -1
      } else {
          return 0
      }
  }

  )
}