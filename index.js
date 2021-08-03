webix.ui({
	margin: 10,
	height: 830,
	width: 420,
	rows: [
		{
			view: "pager",
			id: "pagerA",
			size: 10,
			group: 5,
		},
		{
			view: "datatable",
			scrollY: false,
			columns: [
				{ id: "rank", header: "#", width: 50, sort: "int", css: "rank" },
				{ id: "title", header: "Film title", width: 200, sort: "string" },
				{ id: "year", header: "Released", width: 80, sort: "int" },
				{ id: "votes", header: "Votes", width: 100, sort: "int" },
			],
			pager: "pagerA",
			select: true,
			yCount: 10,
			autowidth: true,
			data: big_film_set,
		},
		{},
		{
			view: "pager",
			id: "pagerB",
			size: 10,
			group: 5,
		},
		{
			view: "list",
			template: "#rank#. #title#, #year#",
			select: true,
			scroll: false,
			yCount: 10,
			pager: "pagerB",
			data: big_film_set,
		},
	],
});
