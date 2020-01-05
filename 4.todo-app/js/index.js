let app = new Vue({
	el: "#app", 
	
	data: { 
		items: [], 
		textInput: "", 
		globalId: 1, 
		mode: "new", 
		image: "./images/todo.png", 
		alt: "todo-image", 
		disabledButton: {
			'opacity': 0.6, 
			'cursor': 'not-allowed', 
			'color': '#ababab'
		}
	}, 

	methods: {
		addItem: function() {
			if(this.textInput !== "") {

				let item = { value: this.textInput, Id: this.globalId};   
				this.items =[item, ...this.items]; 

				this.globalId++;  
				this.textInput = ""; 
				this.mode = "new"; 
			}
		}, 

		deleteItem: function(Id){
			let filteredItems = this.items.filter(item => item.Id !== Id); 

			this.items  = [...filteredItems]; 
		}, 

		editItem: function(Id) {
			let item = this.items.find(item => item.Id === Id); 
			this.textInput = item.value; 
			this.mode = 'edit'; 

			this.deleteItem(Id); 
		},

		undoEdit: function() {
			this.mode = 'new'; 
			this.addItem(this.textInput); 
		},

		deleteAllItems: function() {
			this.items =[]; 
			this.textInput= "";  
			this.mode = "new"; 
		}

	}
	
}); 