const Icon = ({ id, className }) => (
  <svg className={className}>
    <use xlinkHref={`/svg/sprite.svg#${id}`} />
  </svg>
);

export default Icon;
