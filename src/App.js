import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
	const [filter, SetFilter] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`)
			.then(res => res.json());
		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
	
	const filteredAnime = animeList.filter( item => {
	    if (filter === '') return true;
	    return item.type === filter;
	});
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					filter={filter}
					SetFilter={SetFilter}
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={filteredAnime} />
			</div>
		</div>
	);
}

export default App;
