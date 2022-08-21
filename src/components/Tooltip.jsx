import './Tooltip.css';

const Tooltip = ({ title, children }) => {
  return (
    <div className="tooltip">
      <span className="tooltipMessage">{title}</span>
      <span className="tooltipChild">{children}</span>
    </div>
  );
};

export default Tooltip;
