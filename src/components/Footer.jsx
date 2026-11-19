function Footer() {
  return (
    <footer className="border-t border-borderColor bg-background">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted">
          © 2026 Ayoub Deblij. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted">
          <a href="https://github.com/Ayoub-Deblij" target="_blank" rel="noreferrer" className="hover:text-gold">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ayoub-deblij" target="_blank" rel="noreferrer" className="hover:text-gold">
            LinkedIn
          </a>
          <a href="mailto:ayoubdeblij090@gmail.com" className="hover:text-gold">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;