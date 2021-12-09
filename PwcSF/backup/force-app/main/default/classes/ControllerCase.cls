public with sharing class ControllerCase {
        @AuraEnabled(cacheable=true)
        public static List<Case> getAccountList() {
            return [SELECT CaseNumber, Status, Subject FROM Case Limit 3];
        }
    }