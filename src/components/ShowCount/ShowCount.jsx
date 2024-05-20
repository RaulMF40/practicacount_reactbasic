import PropTypes from 'prop-types'
import './ShowCount.css'

const ShowCount = ({ count }) => {
  const countClass = count >= 0 ? 'positive' : 'negative'

  return (
    <div className='count-container'>
      <h2 className={countClass}>Count: {count}</h2>
    </div>
  )
}

ShowCount.propTypes = {
  count: PropTypes.number.isRequired
}

export default ShowCount
