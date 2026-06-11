type CopyableLink = {
  href: string;
  value: string;
};

export function isEmailHref(href: string) {
  return href.startsWith("mailto:");
}

export function getCopyValue(link: CopyableLink) {
  if (!isEmailHref(link.href)) {
    return link.value;
  }

  return decodeURIComponent(link.href.slice("mailto:".length));
}
