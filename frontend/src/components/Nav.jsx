import { Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {Button} from 'flowbite-react'
import {FaMoon} from 'react-icons/fa'

export default function Nav() {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span>PSE</span>
        Labs
      </Link>
      <form>
        <TextInput 
          type='text'
          placeholder='Search projects...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch />
      </Button>
      <div className=''>
        <Button>
          <FaMoon />
        </Button>
      </div>
    </Navbar>
  )
}
