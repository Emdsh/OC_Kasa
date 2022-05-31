import PropTypes from 'prop-types'

function Tag(props) {
  const { content } = props

  return <span className="tag">{content}</span>
}

Tag.propTypes = {
  content: PropTypes.string
}
export default Tag
