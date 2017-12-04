import css from "../sheets/css/index.css";
class  PraiseButton {
	constructor() {
	}
	addThumb() {
		axios.get('/index/update')
				  .then(function (response) {
				    	console.log(response);
				  })
				  .catch(function (error) {
				   	 console.log(error);
				  })
		}
}

 export default PraiseButton