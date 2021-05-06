export default function PageLayout({ children }) {
  return (
    <div className="container">
      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <a
          href="https://politicsandwar.com/nation/id=286006"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Blast
        </a>
      </footer>
    </div>
  )
}
