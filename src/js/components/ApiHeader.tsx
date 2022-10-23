import '../../css/ApiHeader.css';
import {
  Link
} from 'react-router-dom';

function ApiHeader() {
  return (
    <header className="App-header">
        <div tabIndex={0} className={'nav-header'}>
            <ul>
              <li className='product'>
                  <span className='product-heading'> 
                      Applike Frontend Test
                  </span>
              </li>
              <li className='nav-item'>
                    <Link to="/" className='text-capitalize' role={'button'} aria-label={'overview'} tabIndex={0}>
                      Overview
                    </Link>
              </li>
              <li className='nav-item'>
                    <Link to="/campaign" className='text-capitalize' role={'button'} aria-label={'campaigns'} tabIndex={0}>
                      Campaigns
                    </Link>
              </li>
              <li className='nav-item'>
                    <Link to="/create" className='text-capitalize' role={'button'} aria-label={'create'} tabIndex={0}>
                      Create
                    </Link>
              </li>
            </ul>
        </div>
    </header>
  );
}

export default ApiHeader;
