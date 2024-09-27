import style from './Layout.module.scss';
import { Outlet } from 'react-router-dom'
import Bottom from './components/Bottom/Bottom';

function Layout() {


  console.log('Layout')
  console.log('-------------')

  return (
    <div className={style.layout}>
      <div className={style.content}>
        <Outlet />
      </div>
      <div className={style.bottom}>
        <Bottom />
      </div>
    </div>
  );
}

export default Layout;