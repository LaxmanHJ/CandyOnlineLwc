import { LightningElement, wire,track } from 'lwc';

import searchCon1 from '@salesforce/apex/searchCon.retriveCons';
import searchCondesc from '@salesforce/apex/searchCon.retriveConsDesc';
import searchConasc from '@salesforce/apex/searchCon.retriveConsAsc';

import image from '@salesforce/resourceUrl/person';

export default class searchdemo2 extends LightningElement {
    strConName = '';
	@wire(searchCon1, {strConName: '$strConName'})
	con;
	@wire(searchCondesc, {strConName: '$strConName'})
	condesc;
	@wire(searchConasc, {strConName: '$strConName'})
	conasc;

	dispImage=image;
	isgridView = true;
	islistView = false;

	displayList(){
		this.isgridView = false;
		this.islistView = true;
		if(this.islistView){
			this.template.querySelector('[data-id="listView"]').classList.add('light-color');
			this.template.querySelector('[data-id="gridView"]').classList.remove('light-color');

		}
		console.log("button clicked")
	}

	displaygrid(){
		this.isgridView = true;
		this.islistView = false;
		if(this.isgridView) { 
			this.template.querySelector('[data-id="gridView"]').classList.add('light-color');
			this.template.querySelector('[data-id="listView"]').classList.remove('light-color');

		}
		console.log("another button clicked")

	}

	@track selectedOption;
    changeHandler(event) {
    const field = event.target.name;
    if (field === 'optionSelect') {
        this.selectedOption = event.target.value;
			console.log(this.selectedOption);

		} 
	if(this.selectedOption==="ZA"){
		this.con = this.condesc;
		}
	if(this.selectedOption==="AZ"){
			this.con = this.conasc;
			}
    }

	handleSearchTermChange(event) {
		
		window.clearTimeout(this.delayTimeout);
		const strConName = event.target.value;
		
		this.delayTimeout = setTimeout(() => {
			this.strConName = strConName;
		}, 300);
	}
	get hasResults() {
		return (this.con.data.length > 0);
	}

}