import React ,{useState , useContext} from 'react'
import {Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        NavbarText
        } from 'reactstrap'
        
import {Link} from 'react-router-dom'
import { UserInfoContext } from '../Context/Context'

const Header = () => {
    
    const context = useContext(UserInfoContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return(
        <Navbar style={{
            backgroundColor: "#5CDB95",
            width: '100%',         
        }}  light expand='md'>
            <NavbarBrand className='text'>
                <Link to='/' className='text-white'>
                   <h4 style={{color:'#05386B'}}>ANIMAL'S</h4>
                   <h4 style={{color:'#05386B' ,textAlign:'center'}}>INFO</h4>
                </Link>
            </NavbarBrand>
            <NavbarText style={{color:'#05386B'}}>{
                context.user?.email ? context.user.email : ""}</NavbarText>
             <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    {
                        context.user? (<NavItem>
                            <NavLink tag={Link} to='/signin' onClick={() => {context.setUser(null)}} className='text-white'>
                            <h6 style={{color:'#05386B',marginLeft:'35px'}}>Logout</h6>
                            </NavLink>
                        </NavItem>) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to='/signup' className='text-white'>
                                    <h6 style={{color:'#05386B',marginLeft:'35px'}}>SignUp</h6>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to='/signin' className='text-white'>
                                    <h6 style={{color:'#05386B',marginLeft:'35px'}}>LogIn</h6>
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header