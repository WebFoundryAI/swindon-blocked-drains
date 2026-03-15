interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: string;
  url?: string;
  target?: string;
  rel?: string;
  value?: any;
  fields?: any;
  [key: string]: any;
}

const FORMAT_BOLD = 1;
const FORMAT_ITALIC = 2;
const FORMAT_STRIKETHROUGH = 4;
const FORMAT_UNDERLINE = 8;
const FORMAT_CODE = 16;
const FORMAT_SUBSCRIPT = 32;
const FORMAT_SUPERSCRIPT = 64;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function serializeTextNode(node: LexicalNode): string {
  let text = escapeHtml(node.text || '');
  const format = node.format || 0;

  if (format & FORMAT_CODE) text = `<code>${text}</code>`;
  if (format & FORMAT_BOLD) text = `<strong>${text}</strong>`;
  if (format & FORMAT_ITALIC) text = `<em>${text}</em>`;
  if (format & FORMAT_STRIKETHROUGH) text = `<s>${text}</s>`;
  if (format & FORMAT_UNDERLINE) text = `<u>${text}</u>`;
  if (format & FORMAT_SUBSCRIPT) text = `<sub>${text}</sub>`;
  if (format & FORMAT_SUPERSCRIPT) text = `<sup>${text}</sup>`;

  return text;
}

function serializeChildren(children: LexicalNode[]): string {
  return children.map(serializeNode).join('');
}

function serializeNode(node: LexicalNode): string {
  switch (node.type) {
    case 'text':
      return serializeTextNode(node);

    case 'linebreak':
      return '<br>';

    case 'paragraph': {
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<p>${inner}</p>`;
    }

    case 'heading': {
      const tag = node.tag || 'h2';
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<${tag}>${inner}</${tag}>`;
    }

    case 'list': {
      const tag = node.listType === 'number' ? 'ol' : 'ul';
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<${tag}>${inner}</${tag}>`;
    }

    case 'listitem': {
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<li>${inner}</li>`;
    }

    case 'link':
    case 'autolink': {
      const href = node.fields?.url || node.url || '#';
      const target = node.fields?.newTab || node.target === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<a href="${escapeHtml(href)}"${target}>${inner}</a>`;
    }

    case 'quote': {
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<blockquote>${inner}</blockquote>`;
    }

    case 'code': {
      const inner = node.children ? serializeChildren(node.children) : '';
      return `<pre><code>${inner}</code></pre>`;
    }

    case 'horizontalrule':
      return '<hr>';

    case 'upload': {
      const url = node.value?.url || node.fields?.url || '';
      const alt = node.value?.alt || node.fields?.alt || '';
      const caption = node.value?.caption || node.fields?.caption || '';
      if (!url) return '';
      let html = `<figure><img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" loading="lazy">`;
      if (caption) html += `<figcaption>${escapeHtml(caption)}</figcaption>`;
      html += '</figure>';
      return html;
    }

    default:
      if (node.children) {
        return serializeChildren(node.children);
      }
      return '';
  }
}

export function serializeLexical(content: any): string {
  if (!content || !content.root || !content.root.children) {
    return '';
  }
  return serializeChildren(content.root.children);
}

export function lexicalToPlainText(content: any): string {
  if (!content || !content.root || !content.root.children) {
    return '';
  }

  function extractText(nodes: LexicalNode[]): string {
    return nodes
      .map((node) => {
        if (node.type === 'text') return node.text || '';
        if (node.type === 'linebreak') return '\n';
        if (node.type === 'paragraph') {
          const inner = node.children ? extractText(node.children) : '';
          return inner + '\n';
        }
        if (node.children) return extractText(node.children);
        return '';
      })
      .join('');
  }

  return extractText(content.root.children).trim();
}
