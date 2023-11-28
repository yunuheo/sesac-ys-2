import PropTypes from 'prop-types';

function Food({ name, food }) {
  return (
    <>
      <div className="Section__section">
        <div>
          {name}님은 <span style={{ color: 'red' }}>{food}</span>을 좋아합니다
        </div>
      </div>
    </>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.string.isRequired,
};

Food.defaultProps = {
  name: 'undefined',
  food: 'food',
};

export default Food;
