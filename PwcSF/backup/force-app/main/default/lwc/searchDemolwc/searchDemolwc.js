import { LightningElement,track  } from 'lwc';
import searchCon1 from '@salesforce/apex/searchCon.retriveCons';
import My_Resource from '@salesforce/resourceUrl/myResource';

const columns = [
    {
        label: 'Name',
        fieldName: 'Name',
       // type: 'url',
       // typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}
    }, {
        label: 'Email',
        fieldName: 'Email',
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
    }, {
        label: 'Title',
        fieldName: 'Title',
    }, 
];

export default class SearchDemolwc extends LightningElement {
    @track searchData;
    @track columns = columns;
    @track errorMsg = '';
    strSearchConName = '';
    personlogo ={
		pic: `${My_Resource}/images/download.jpeg`,
	};

    handleContactName(event) {
        this.strSearchConName = event.detail.value;
    }

    handleSearch() {
        if(!this.strSearchConName) {
            this.errorMsg = 'Please enter contact name to search.';
            this.searchData = undefined;
            return;
        }

        searchCon1({strConName : this.strSearchConName})
        .then(result => {
            console.log(result);
           /* result.forEach((record) => {
                record.Name = '/' + record.Id;
            });*/

            this.searchData = result;
            
        })
        .catch(error => {
            this.searchData = undefined;
            window.console.log('error =====> '+JSON.stringify(error));
            if(error) {
                    console.log(error)       
     }
        }) 
    }


}