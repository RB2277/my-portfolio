export default function Project(props) {
  return (
    <div className="col-4" id="projectDiv">
      <img className="card-img-top" src={props.img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href={props.github} className="btn btn-outline-dark">
          Github 
        </a>
        <a href={props.deployed} className="btn btn-outline-dark">
          Deployed 
        </a>
      </div>
    </div>
  );
}
