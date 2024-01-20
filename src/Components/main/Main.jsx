import { Button } from "../../Ul/button/Button";
import { Cards } from "../../Ul/cards/Cards";
import { useState } from "react";
import "./Main.css";

let data = [
	{
		img: "https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg",
		name: "Аватар",
		nameG: "Фантастика",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg",
		name: "Мстители",
		nameG: "Фантастика",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/ru/a/a7/Guardians_of_the_Galaxy_film.jpg",
		name: "Стражи Галактика",
		nameG: "Фантастика",
	},
	{
		img: "https://static.kinoafisha.info/k/series_posters/480/upload/series/posters/6/0/4/1406/367589541595442922.jpg",
		name: "Черная Любовь",
		nameG: "Любовь",
	},
	{
		img: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50292633-2184074.jpg",
		name: "Первая Любовь",
		nameG: "Любовь",
	},
	{
		img: "https://www.kinonews.ru/insimgs/2023/poster/poster113683_1.jpg",
		name: "LOVE AGAIN",
		nameG: "Любовь",
	},
	{
		img: "https://irecommend.ru/sites/default/files/product-images/10297/WnQRA75bJJCBDA75yumVg.jpg",
		name: "Маша и Медведь",
		nameG: "мультики",
	},
	{
		img: "https://thumbs.dfs.ivi.ru/storage23/contents/d/1/13b5c0cbf0bb637b222d4b45a51531.jpg/162x248/?q=85",
		name: "мультики",
		nameG: "мультики",
	},
	{
		img: "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg",
		name: "Босс-молокосос",
		nameG: "мультики",
	},
	{
		img: "https://doramy.club/wp-content/uploads/2023/11/moj-demon.jpg",
		name: "Мой демон дорама",
		nameG: "дорамы",
	},
	{
		img: "https://doramy.club/wp-content/uploads/2023/08/bespoleznaya-lozh.jpg",
		name: "Мой демон дорама",
		nameG: "дорамы",
	},
	{
		img: "https://doramy.club/wp-content/uploads/2021/09/navsegda.jpg",
		name: "Мой демон дорама",
		nameG: "дорамы",
	},
];

export const Main = () => {
	const [todo, setTodo] = useState(data);
	const [genre, setGenre] = useState("");
	function getResult(genre) {
		const updatedTodo = todo.filter((item) => item.nameG === genre);
		setTodo(updatedTodo);
		console.log(updatedTodo);
	}

	const changeGenre = (e) => {
		setGenre(e.target.innerText);
		getResult(e.target.innerText);
	};

	return (
		<div className="container">
			<div className="paddContent">
				<form
					className="ulers">
				</form>
				<div className="contentButtons">
					<Button text="Фантастика" style="buttonG" onClick={changeGenre} />
					<Button text="Любовь" style="buttonG" onClick={changeGenre}/>
					<Button text="мультики" style="buttonG" onClick={changeGenre}/>
					<Button text="дорамы" style="buttonG" onClick={changeGenre}/>
				</div>
				<div className="cards">
					<Cards start={genre} data={todo} />
				</div>
			</div>
		</div>
	);
};
