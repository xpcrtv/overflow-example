import { Card as UIKitCard } from 'antd';

import Tooltip from './Tooltip';

const Card = ({ title, description }) => {
  return (
    <UIKitCard title={<Tooltip title={title}>{title}</Tooltip>}>
      {description}
    </UIKitCard>
  );
};

export default Card;
