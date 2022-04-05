import java.util.Scanner;

public class Factorial {
	
	public static void factorial(int num) {
		if (num == 0) {
			System.out.println("Factorial of 0 is 1");
		}
		else if (num < 0) {
			System.out.println("Wrong Input");
		}
		else {
			int temp = num ;
			double  factorial = 1;
			while (temp>1) {
				factorial = factorial * temp;
				temp-- ;
			}
			System.out.println("Factorial of "+ num + " is "+ factorial);
		}
		
		
	}

	public static void main(String[] args) {
         System.out.println("Enter Number");
         Scanner input = new Scanner(System.in);
         int inputNum = input.nextInt();
         factorial(inputNum);
         
         
	}

}
