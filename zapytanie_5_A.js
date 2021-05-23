db.people.aggregate([
	{ $unwind: "$credit" },
	{ $match: { "nationality": "Poland", "sex": "Female" }},
	{ $group: { _id: "$credit.currency",
				totalCredits: { $sum: { $convert: { input: "$credit.balance", to: "double"} } },
				avgCredits: { $avg: { $convert: { input: "$credit.balance", to: "double"} } },}},
	{ $out: "agg5" }])

printjson(db.agg5.find().toArray())
