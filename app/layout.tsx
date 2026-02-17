// Root layout - minimal passthrough
// The actual html/body/lang/dir is handled by app/[locale]/layout.tsx
// which also sets RTL for Arabic and font variables

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
