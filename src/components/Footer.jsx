function Footer() {


  return (
    <footer>
      <div className="row">
        <div className="col-6" id="copyrightDiv">
          <h2>Want to see more? Feel free to checkout my socials!</h2>
        </div>
        <div className="col-6" id="logoDiv">

          <a href="https://github.com/RB2277">
            <img src="../../public/gitHubLogo.png" alt="small GitHub logo" className="footerLogo"/>
          </a>
          <a href="https://www.linkedin.com/in/riley-burns-4357b72b1/">
            <img src="../../public/linkedInLogo.png" alt="small Linkedin logo" className="footerLogo" />
          </a>
          <a href="https://github.com/RB2277">
            <img src="../../public/leetCodeLogo.png" alt="small LeetCode logo" className="footerLogo"/>
          </a>
        </div>
      </div>
  </footer>
  )
}

export default Footer
