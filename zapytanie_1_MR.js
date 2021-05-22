var mapFcn1 = function() {
	emit(this.sex, { count: 1, 
	height: parseFloat(this.height), 
	weight: parseFloat(this.weight) });
}
var reduceFcn1 = function(sex, values) {
	var count = 0;
	var wysokosc = 0;
	var waga = 0;
	for (i = 0; i < values.length; i++){
		count += values[i].count;
		wysokosc += values[i].height;
		waga += values[i].weight;
	}
	value = { srWysokosc: 0, srWaga: 0 };
	value.srWysokosc = (wysokosc / count);
	value.srWaga = (waga / count);
	return value;
}
db.people.mapReduce(
	mapFcn1,
	reduceFcn1,
	{ 
		out: "map_1",
	}
)
printjson(db.map_1.find().toArray())
