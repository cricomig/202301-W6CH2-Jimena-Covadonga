import "../../index.css";
export function Card() {
  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src="img/no-one.jpg"
          alt="Nombre y familia del personaje"
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">Nombre y familia</h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {chars.age}</li>
              <li>
                Estado:
                {chars.isAlive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {chars.reignYears && <li>Años de reinado: {chars.reignYears}</li>}
              {chars.weapon && <li>Arma: {chars.weapon}</li>}
              {chars.skill && <li>Destreza: {chars.skill}</li>}
              {chars.serving && <li>Peloteo: {chars.serving}</li>}
              {chars.counseling && <li>Asesora a: {chars.counseling}</li>}
              {chars.boss && <li>Sirve a: {chars.boss}</li>}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        {chars.category === "king" && <i className="emoji">👑</i>}
        {chars.category === "fighter" && <i className="emoji">🗡</i>}
        {chars.category === "counselor" && <i className="emoji">🎓</i>}
        {chars.category === "squire" && <i className="emoji">🛡</i>}
      </div>
    </li>
  );
}
