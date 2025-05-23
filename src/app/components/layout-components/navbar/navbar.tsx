import { LuAlignJustify, LuLanguages, LuSearch } from 'react-icons/lu';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100 shadow-sm text-[#4C4D4C] px-4 md:px-13'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <LuAlignJustify />
          </div>
          <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <a>Produtos</a>
            </li>
            <li>
              <a>Sobre Nós</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
            <li>
              <a>Catálogos</a>
            </li>
            <li>
              <a>
                <LuSearch />
              </a>
            </li>
            <li>
              <a className='btn text-base-100 bg-[#E57200] rounded-xl  md:hidden'>Fale conosco</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-3xl tracking-widest'>LOGO</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 flex justify-center items-center'>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Sobre Nós</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a>Catálogos</a>
          </li>

          <li>
            <a>
              <LuSearch className='text-xl' />
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn text-base-100 bg-[#E57200] rounded-xl hidden md:relative'>Fale conosco</a>
        <ul className='menu menu-horizontal mr-10  bg-ghost rounded-box'>
          <li>
            <details>
              <summary className='flex items-center gap-2'>
                <LuLanguages className='text-xl' />
              </summary>
              <ul>
                <li>
                  <button type='button'>Português</button>
                </li>
                <li>
                  <button type='button'>English</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
