package prime;

import java.util.Scanner;

public class Prime {

	public static void main(String[] args) {
		int count = 0 ;
		Scanner inputScan = new Scanner(System.in);
		System.out.println("Enter Number");
		 int inputNum = inputScan.nextInt();
		 if (inputNum == 0 || inputNum == 1)		 {
			 System.out.println("Number is Neither Prime Nor Composite");
			  
			
		 }
		 else if (inputNum == 2) {
			 System.out.println("Number is Prime");
			 
		 }
		 else {
			 for (int var = 2;  var<=inputNum/2 ;var++) {
				 if (inputNum%var == 0) {
					 count+=1;
					 break;
				 }
			 }
			 System.out.println((count==0 ? "Number is Prime" : "Number is composite"));
		 }
		 
		 


	}

}
