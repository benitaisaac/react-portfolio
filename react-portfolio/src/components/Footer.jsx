export function Footer(){
    return (
        <footer>
          <div>
            <h3>Connect with me:</h3>
            <ul className="flex-row">
              <li  className='m1'><a href="https://github.com/benitaisaac" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li  className='m1'><a href="https://linkedin.com/in/benita-isaac-a121291a" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li  className='m1'><a href="mailto:benita.isaac@gmail.com">Email</a></li>
            </ul>
          </div>
          {/* <div>
            <p>&copy; {new Date().getFullYear()}Benta Isaac</p>
          </div> */}
        </footer>
      );
}

export default Footer;