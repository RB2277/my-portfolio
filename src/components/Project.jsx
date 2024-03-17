export default function Project(props) {
  return (
    <div className="col-md-12 d-flex align-items-center" id="projectDiv">
      <img className="card-img-top" src={props.img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title mb-3">{props.title}</h5>
        <a href={props.github} className="btn btn-outline-dark btn-light" style={{ marginLeft: '10px' }}>
          Github 
        </a>
        <a href={props.deployed} className="btn btn-outline-dark btn-light" style={{ marginLeft: '10px' }}>
          Deployed 
        </a>
      </div>
    </div>
  );
}
