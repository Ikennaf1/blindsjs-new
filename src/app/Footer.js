const Footer = () => {
  return (
    <footer className="footer mt-16 pb-12 border-t">
      <div className="flex items-center justify-center">
        <div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Blinds
          </div>
          <div className="text-center mt-5 text-sm">
            <a href="/docs/v0/installation" className="m-5">Get started</a>
            <a href="https://github.com/Ikennaf1/blinds/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer" className="m-5">Changelog</a>
            <a href="https://github.com/Ikennaf1/blinds/blob/main/LICENSE" target="_blank" rel="noreferrer" className="m-5">License</a>
            {/* <a href="#" className="m-5" href="#">Templates</a>
            <a href="#" className="m-5" href="#">Components</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
