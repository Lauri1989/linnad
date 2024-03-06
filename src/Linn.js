function Linn(props) {
  return (
    <div className="linn">
      <h2>{props.name}</h2>
      <p>{props.riik}</p>
      <img src="./pildid/book.jpg" alt="Raamatu kaanepilt" />
    </div>
  );
}

export default Linn;