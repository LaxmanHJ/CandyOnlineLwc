public class fitnessMC {
    
    public static Decimal calculateBMI(Decimal height,Decimal weight) {
        if(height <= 0 || weight <=0){
            return 0;
        }
        Decimal result = weight / (height*height);
        result = result.setScale(2);
        return result;
        
    }

}