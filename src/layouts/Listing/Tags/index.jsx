import PropTypes from 'prop-types'

import Tag from '../../../components/Tag'

function ListingTags(props) {
  const { tags } = props

  return (
    <div className="listing-details__tags">
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} content={tag} />
      ))}
    </div>
  )
}

ListingTags.propTypes = {
  tags: PropTypes.array
}

export default ListingTags
