db.people.aggregate([
	{ $group: {
		_id: "$sex", srWysokosc: { $avg: { $convert: { 'input': "$height", 'to': "double"} } },srWaga: { $avg: { $convert: { 'input': "$weight", 'to': "double"} } }
	}},
	{ $out: "agr1" }
])

printjson(db.agr1.find().toArray())
