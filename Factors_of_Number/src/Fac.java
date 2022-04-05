import java.util.Scanner;

public class Fac {

	public static void main(String[] args) {
		
System.out.println("Enter Number");

       Scanner input = new Scanner(System.in) ;
       int inputNum = input.nextInt();
       
       System.out.println("Factor of "+ inputNum + " are : \n"  );
       
       for (int var = 1; var <= (inputNum) ; var++) {
    	   if (inputNum%var == 0) {
    		   System.out.println(var + "\n");
    	   }
       }






	}

}
