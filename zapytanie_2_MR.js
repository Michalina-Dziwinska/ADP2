var mapFcn2 = function() {
	for (i = 0; i < this.credit.length; i++){
		emit(this.credit[i].currency, parseFloat(this.credit[i].balance));}};
var reduceFcn2 = function(curreny, balance) {
	totalBalanceLeft = 0;
	for (i = 0; i < balance.length; i++){
		totalBalanceLeft += balance[i];}
	return totalBalanceLeft;}
db.people.mapReduce(
	mapFcn2,
	reduceFcn2,
	{
		out: "map_2",
	}
)

printjson(db.map_2.find().toArray())
