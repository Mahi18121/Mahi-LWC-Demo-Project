public with sharing class getShipmentStatus {
    @AuraEnabled(cacheable=true)
    public static String getShipmentStatus(Id recordId) {
        try {
            Customer_Service__c record = [SELECT Name,Tracking_Number__c,Shipment_Address__c,Order_Status__c FROM Customer_Service__c WHERE Id = :recordId];
                    
            if (record == null) {
                throw new AuraHandledException('Shipment record cannot be found.');
            }
                    
            String trackingNumber = String.valueOf(record.Tracking_Number__c);
            if(String.isEmpty(trackingNumber)) {
                throw new AuraHandledException('Tracking number cannot be found or is empty.');
            }
        
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint('https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=' + trackingNumber);
            request.setMethod('GET');
                    
            HttpResponse response = http.send(request);
                    
            if (response.getStatusCode() == 200) {
                return response.getBody();
            } else {
                throw new AuraHandledException('Error: ' + response.getStatus());
            }
        } catch (Exception e) {
            System.debug('Error in getShipmentStatus: ' + e.getMessage());
            throw new AuraHandledException('An unexpected error occurred. Please try again later.');
        }
    }
}