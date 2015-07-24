(function(iComplyClient) {
	
	iComplyClient.afterApplicationLoaded = function() {
		var msg = new Message('notify', undefined, {});
		if ('parentIFrame' in window) {
			parentIFrame.sendMessage(msg);			
		}
	};
	
	// private
	
	function Message(eventType, targetAppId, msgBody) {
		this.type = eventType;
		this.targetAppId = targetAppId;
		this.body = msgBody;
	}
	
})(window.iComplyClient = window.iComplyClient || {});