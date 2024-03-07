export default function Project(props) {

  return (
    <div className="container">
      <div className="card">
        <img
          className="card-img-top"
          src={props.img}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.title}</h5>
          <p className="card-text">Description: {props.link}</p>
          <p className="card-text">ID: {props.id}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.title}
          </a>
        </div>
      </div>
    </div>
  );
}