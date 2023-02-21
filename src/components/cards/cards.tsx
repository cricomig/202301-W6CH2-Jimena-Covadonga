import { Card } from "../card/card";

export function Cards() {
  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        {chars.map((item) => (
          <Card></Card>
        ))}
      </ul>
    </div>
  );
}
