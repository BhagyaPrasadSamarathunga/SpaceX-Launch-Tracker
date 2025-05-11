import { Roboto } from "next/font/google";
import styles from "./Home.module.css";

import { useEffect, useState } from "react";

import LaunchCard from "./components/LaunchCard/LaunchCard";
import Pagination from "@/components/pagination/Pagination";
import {GET_SPACE_DATA} from "@/src/utils/constants";
import useFetch from '@/src/hooks/useFetch';
import Loader from "@/components/loader/Loader";
import ErrorBanner from "@/components/errorBanner/ErrorBanner";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });
const itemsPerPage = 8;

function HomePage() {
	const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, fetchData, isLoading, error] = useFetch();

  const maxPages = Math.ceil(apiData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = apiData.slice(startIndex, startIndex + itemsPerPage);

	useEffect(() => {
		if(data) {
			setApiData(data.docs);
		}
	},[data]);

	useEffect(() => {
		const queryOptions = {
			select: "id name date_utc success upcoming details failures links",
			sort: "date_utc",
			limit: 150,
		};

		const postData = {
			query: {},
			options: queryOptions,
		}
		fetchData(GET_SPACE_DATA, 'post', postData);
	}, []);

	return (
    <main className={`${styles.main} ${roboto.className}`}>
		<section role="card-container" className={styles.main__section}>
					{currentItems && currentItems.map(launch => {
						console.log("launch --> ", launch);
						return (
							<LaunchCard key={launch.id} launch={launch}/>
						);
					})}
					{isLoading && <Loader />}
		</section>

		<div className={styles.pagination_container}>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				pages={maxPages}
				hasNextPage={currentPage < maxPages}
			/>
		</div>
		{error && <div className={styles.error_banner}><ErrorBanner message={error} /></div>}
  	</main>
	);
}

export default HomePage;