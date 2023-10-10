import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const rating5 = (
  <>
    <span className="text-warning">
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
    </span>
  </>
);
export const rating4 = (
  <>
    <span className="text-warning">
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
    </span>
    <FontAwesomeIcon icon={["fas", "star"]} />
  </>
);
export const rating3 = (
  <>
    <span className="text-warning">
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
    </span>
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
  </>
);
export const rating2 = (
  <>
    <span className="text-warning">
      <FontAwesomeIcon icon={["fas", "star"]} />
      <FontAwesomeIcon icon={["fas", "star"]} />
    </span>
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
  </>
);
export const rating1 = (
  <>
    <span className="text-warning">
      <FontAwesomeIcon icon={["fas", "star"]} />
    </span>
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
  </>
);
export const rating0 = (
  <>
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
    <FontAwesomeIcon icon={["fas", "star"]} />
  </>
);

export const ratings = [rating0, rating1, rating2, rating3, rating4, rating5];
