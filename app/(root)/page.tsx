import React from 'react'
import {SearchForm} from "@/components/SearchForm";
import {StartupCard} from "@/components/StartupCard";

const Home = async ({searchParams}: { searchParams: Promise<{ query?: string }> }) => {
	const query = (await searchParams).query
	const posts = [{
		_createdAt: new Date(),
		views: 55,
		author: {_id : 1, name: "Henry Taiwo"},
		_id: 1,
		description: 'This is a description',
		image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=r",
		category: "Robots",
		title: "We Robots"
	}]

	return (
		<>
			<section className={`pink_container`}>
				<h1 className={`heading`}>Pitch Your Startup, <br/> Connect with Entrepreneurs</h1>
				<p className={`sub-heading !max-w-3xl`}>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

				<SearchForm query={query} />
			</section>
			<section className={`section_container`}>
				<p className={`text-30-semibold`}>{query ? `Search result for ${query}` : "All Startups"}</p>
				<ul className={`mt-7 card_grid`}>
					{posts.length > 0 ? posts.map((post: StartupCardType) => (
						<StartupCard key={post?._id} post={post} />
					)) : (
						<p className={`no-result`}>No startups found</p>
					) }
				</ul>
			</section>
		</>
	)
}
export default Home
