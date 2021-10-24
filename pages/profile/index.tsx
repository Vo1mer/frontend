import Header from "components/Header";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import { dehydrate, QueryClient } from "react-query";
import getProfile from "../../lib/get-profile";

const Profile = () => {

	return (
		<div>
			<Header />

			<main className="container mx-auto px-4 md:px-0">
				<ProfileCard />
			</main>
		</div>
	)
}



export async function getServerSideProps() {

	const queryClient = new QueryClient();
	await queryClient.fetchQuery("getProfile", getProfile, {
		staleTime: Infinity,
	});

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		}
	}
}

export default Profile