
var salesOffices = {} // 售楼处（发布者）

salesOffices.clientList = [] // 缓存列表，存放订阅者的回调函数

salesOffices.listen = function (key,fn) { // 增加订阅者
	if(!salesOffices.clientList[key]) { // 如果没有订阅过此类消息给该类消息创建一个缓存队列
		this.clientList[key] = []
	}
	this.clientList[key].push(fn)	// 订阅者的消息增加到缓存列表
}
salesOffices.trigger = function () {
	var key = Array.prototype.shift.call(arguments);
	fns = this.clientList[key];
	if(!fns || fns.length === 0) {
		return false;
	}
	for (var i = 0, fn; fn = fns[i++];) {
		fn.apply(this, arguments)
	}
}
salesOffices.listen('square88', function(price) {
	console.log('价格= ' + price);
})
salesOffices.listen('square110', function (price) {
	console.log('价格= ' + price);
})
salesOffices.trigger('square88', 200000)
salesOffices.trigger('square110', 300000)

var event = {
	clientList: {},
	listen: function(key, fn) {
		if(!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	remove: function (key, fn) {
		var fns = this.clientList[key]
		if(!fns) {
			return false;
		}
		if(!fn) { // 如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
			fns && (fns.length === 0)
		} else {
			for(var l = fns.length -1; l >=0; l--) {
				var _fn = fns[l];
				if(_fn === fn) {
					fns.splice(l,1); // 删除订阅者的回调消息
				}
			}
		}
	},
	trigger: function() {
		var key = Array.prototype.shift(arguments),
				fns = this.clientList[key];
				if(!fns || fns.length === 0) {
					return false;
				}
				for(var i = 0, fn; fn = fns[i++];) {
					fn.apply(this, arguments)
				}
	}
}
var installEvent = function(obj) {
	for (const i in event) {
		obj[i] = event[i]
	}
}

var salesOffices = {};
installEvent(salesOffices);

salesOffices.listen('square88', function (price) {
	console.log('价格= ' + price);
})
salesOffices.listen('square110', function (price) {
	console.log('价格= ' + price);
})
salesOffices.trigger('square88', 200000)
salesOffices.trigger('square110', 300000)




let promise = new Promise(function (resolve, reject) {
	if(falsbooe) {
		resolve(value)
	} else {
		reject(error)
	}
})


