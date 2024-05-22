import styles from "./page.module.css"

export const metadata = {
  title: "### PremierPluss ###",
  description: "--------------------------------",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.bodyMain}>{children}</body>
    </html>
  )
}