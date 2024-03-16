import styles from "../styles/Footer.module.css"

function Footer() {


  return (
    <footer>
      <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-md-8 col-sm-12 d-flex align-items-center">
          <h2>Want to see more? Feel free to checkout my socials!</h2>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-md-end justify-content-sm-center" id="logoDiv">

          <a href="https://github.com/RB2277">
            <img src="/github.png" alt="small GitHub logo" className={styles.logo}/>
          </a>
          <a href="https://www.linkedin.com/in/riley-burns-4357b72b1/">
            <img src="/linkedin.png" alt="small Linkedin logo" className={styles.logo} />
          </a>
        </div>
      </div>
      </div>
  </footer>
  )
}

export default Footer
