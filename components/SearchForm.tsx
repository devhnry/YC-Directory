import React from 'react'
import Form from "next/form";
import {SearchFormReset} from "@/components/SearchFormReset";
import {Search} from "lucide-react";

interface Props{
	query?: string
}

export const SearchForm: React.FC<Props> = ({query}) => {
	return (
		<Form action={`/`} scroll={false} className={`search-form`}>
			<input name={`query`} defaultValue={``} className={`search-input`} placeholder={`Search startups`} />

			<div className={`flex gap-2`}>
				{query && <SearchFormReset/>}
				<button type={"submit"} className={`search-btn text-white`}>
					<Search className={`size-5`} />
				</button>
			</div>
		</Form>
	)
}
