import { LightningElement,api,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getShipmentStatus from '@salesforce/apex/getShipmentStatus.getShipmentStatus';

const FIELDS = ['Customer_Service__c.Tracking_Number__c'];

export default class DisplayShipmentStatusOfTheRecord extends LightningElement {
    @api recordId;
    @track shipmentStatus;
    @track error;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    shipment({ error, data }) {
        if (data) {
            const trackingNumber = data.fields.Tracking_Number__c.value;
            this.fetchShipmentStatus(trackingNumber);
        } else if (error) {
            this.error = 'Failed to load shipment record.';
        }
    }

    fetchShipmentStatus() {
        getShipmentStatus({ recordId: this.recordId })
            .then(result => {
                this.shipmentStatus = result;
                this.error = undefined;
            })
            .catch(error => {
                this.shipmentStatus = undefined;
                this.error = 'An unexpected error occurred. Please try again later.';
                console.error('Error fetching shipment status:', error); 
            });
    }
}

