import '../styles/globals.css'

export const metadata = {
  title: 'はち歯科くじ引きアプリ',
  description: 'はち歯科新規開業記念くじ引きアプリ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
} 