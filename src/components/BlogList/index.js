// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogListDetails} = props

  return (
    <ul className="list-container">
      {blogListDetails.map(each => (
        <BlogItem blogItemDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
