import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.title} - Task tracker</h1>
//     </header>
//   )
// }

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log('Click')
  // }

  const location = useLocation()

  return (
    <header className='header'>
        <h1>
          {title} - Task tracker
        </h1>
        {location.pathname === '/' && (<Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd} 
        />)}
    </header>
  )
}

Header.defaultProps = {
  title: '# Hello from Header Default prop'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header