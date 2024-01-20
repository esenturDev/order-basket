import { Button } from "../../Ul/button/Button";
import './Header.css';

export const Header = () => {
	return (
		<div className='headerContainer'>
			<div className="paddcontainer">
        <div className="content">
          <ul className="ul1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvCLIoU9MQszx-ZHDJbrSGXp10yZL6a5UDNmGNpxv1oOIL54ungDu4BYpLhTqdI6Iwy4&usqp=CAU" alt="photo" />
            <h1>КИНОПОИСК</h1>
          </ul>
          <ul className="ul2">
            <p>Главное</p>
            <p>Магазин</p>
            <p>Моё</p>
            <Button text='Купить кино' style='buttonHeader'/>
            <Button text='Войти!' style='buttonHeader2'/>
          </ul>
        </div>
      </div>
		</div>
	);
};