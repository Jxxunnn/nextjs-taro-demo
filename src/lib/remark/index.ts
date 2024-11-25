import { remark } from 'remark';
import html from 'remark-html';

export default function transformMarkdownToHtml(markdown: string) {
  return remark().use(html).processSync(markdown).toString();
}
