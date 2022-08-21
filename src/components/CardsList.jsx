import Card from './Card';

import './CardsList.css';

const CardsList = ({ data }) => {
  return (
    <div className="cardsWrapper">
      <div className="cardsList">
        {data.map(({ id, title, desciption }) => (
          <Card key={id} title={title} desciption={desciption} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
