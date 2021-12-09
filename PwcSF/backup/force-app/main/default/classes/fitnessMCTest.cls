@isTest
public class fitnessMCTest {
    
    @isTest
    public static void calculateBMITest1(){
        Decimal height = 1.2;
        Decimal weight = 0;
        
        Decimal result = fitnessMC.calculateBMI(height,weight);
        system.assertEquals(0, result);
    }

    @istest
    public static void calBMITest2(){
        Decimal height = 0;
        Decimal weight = 12;
        
        Decimal result = fitnessMC.calculateBMI(height, weight);
        system.assertEquals(0, result);
    }
    
    @istest
    public static void calBMITest3(){
        Decimal height = 1.70;
        Decimal weight = 69;
        
        Decimal result = fitnessMC.calculateBMI(height, weight);
        system.assertEquals(23.88, result);
    }

}