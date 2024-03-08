export default function Project(props) {
  return (
    <div className="col-4" id="projectDiv">
      <img className="card-img-top" src={props.img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href="#" className="btn btn-outline-dark">
          Github {props.github}
        </a>
        <a href="#" className="btn btn-outline-dark">
          Deployed {props.deployed}
        </a>
      </div>
    </div>
  );
}
