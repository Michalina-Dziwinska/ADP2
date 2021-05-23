db.people.aggregate([
	{ $group: { _id: null, occupations: { $addToSet: "$job" }}},
	{ $out: "agg3" }])

printjson(db.agg3.find().toArray())
