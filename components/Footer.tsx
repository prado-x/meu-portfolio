export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800/50 bg-navy-950 py-12 px-6 lg:px-12 w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-sm text-navy-500">
          © {year} Vinicius Prado. All rights reserved.
        </p>

        {/* Social Links & Resume */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/vinicius-prado-259388100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prado-x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            GitHub
          </a>
          <div className="w-px h-4 bg-navy-800 hidden sm:block" />
          <a
            href="/resume-vinicius-prado.pdf"
            download
            className="text-sm font-medium text-navy-100 bg-navy-900 hover:bg-navy-800 border border-navy-800 hover:border-navy-700 px-4 py-2 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            Download Resume
          </a>
        </div>
        
      </div>
    </footer>
  );
}
